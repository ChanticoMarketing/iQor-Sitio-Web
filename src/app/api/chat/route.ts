import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { IQOR_SYSTEM_PROMPT } from '@/lib/chatbot-prompt';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'La clave de OpenAI (OPENAI_API_KEY) no está configurada en el servidor.' },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'El historial de mensajes es requerido y debe ser un arreglo.' },
        { status: 400 }
      );
    }

    // Filtrar y estructurar solo mensajes válidos
    const formattedMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: IQOR_SYSTEM_PROMPT },
      ...messages
        .filter((m: { role?: string; content?: string }) => m && m.content && (m.role === 'user' || m.role === 'assistant'))
        .map((m: { role: 'user' | 'assistant'; content: string }) => ({
          role: m.role,
          content: m.content.trim(),
        })),
    ];

    const openai = new OpenAI({ apiKey });

    const responseStream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: formattedMessages,
      temperature: 0.4,
      max_tokens: 600,
      stream: true,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Error en /api/chat:', err);
    return NextResponse.json(
      { error: err.message || 'Ocurrió un error inesperado al procesar la solicitud con el asistente.' },
      { status: 500 }
    );
  }
}
