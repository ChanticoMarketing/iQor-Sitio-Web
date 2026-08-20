'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  '¿Cómo funciona el esquema a éxito?',
  '¿Qué servicios de BPO y cobranza ofrecen?',
  '¿Tienen sedes en CDMX y Monterrey?',
  '¿Otorgan préstamos personales?',
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hola, soy el **Asistente Virtual de RMS iQor México**. ¿En qué puedo orientarte hoy sobre nuestras soluciones de recuperación de cartera, BPO o atracción de talento?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll al final cuando hay nuevos mensajes o texto entrante
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  // Manejo del envío de mensajes
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setHasInteracted(true);
    setInput('');

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    const initialBotMessage: Message = {
      id: botMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, initialBotMessage]);

    try {
      // Enviar historial sin el mensaje de bienvenida inicial local
      const apiPayload = updatedMessages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiPayload }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || 'Error al conectar con el servidor.');
      }

      if (!res.body) {
        throw new Error('No se recibió flujo de datos.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId ? { ...msg, content: fullContent } : msg
          )
        );
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Error inesperado';
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: `⚠️ **Aviso:** ${errorMsg}. Por favor intenta de nuevo o comunícate a nuestras sedes.`,
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          'Hola, soy el **Asistente Virtual de RMS iQor México**. ¿En qué puedo orientarte hoy sobre nuestras soluciones de recuperación de cartera, BPO o atracción de talento?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setHasInteracted(false);
  };

  // Renderizador simple de markdown (negrita, viñetas, saltos de línea)
  const formatMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      // Reemplazo básico de **texto** a <strong>texto</strong>
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const bulletText = formatted.replace(/^(\*|-)\s+/, '');
        return (
          <li
            key={i}
            className="ml-4 list-disc text-slate-200"
            dangerouslySetInnerHTML={{ __html: bulletText }}
          />
        );
      }

      if (!line.trim()) {
        return <div key={i} className="h-2" />;
      }

      return (
        <p
          key={i}
          className="mb-1 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

  return (
    <>
      {/* Botón Flotante / Launcher */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        {!isOpen && (
          <div className="relative mb-2 hidden md:block animate-bounce">
            <div className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-slate-200 shadow-xl border border-slate-700/60 backdrop-blur-md">
              💬 ¿Tienes dudas sobre iQor?
            </div>
          </div>
        )}

        <button
          id="iqor-chatbot-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente virtual de iQor'}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#ff4d2e] via-[#ff6b4a] to-[#ff8c69] text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,85,51,0.5)] focus:outline-none focus:ring-2 focus:ring-[#ff6b4a] focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {/* Indicador de estado en línea */}
          <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-950"></span>
          </span>

          {isOpen ? (
            <svg
              className="h-6 w-6 transition-transform duration-200 group-hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-7 w-7 transition-transform duration-200 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Ventana de Chat */}
      {isOpen && (
        <div
          id="iqor-chatbot-window"
          className="fixed bottom-24 right-4 z-[9999] flex h-[580px] max-h-[85vh] w-[92vw] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/95 text-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 animate-in fade-in zoom-in-95"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 px-4 py-3.5">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#ff4d2e] to-[#ff7a5c] shadow-md">
                <span className="font-bold text-white text-sm tracking-wider">iQ</span>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-white">Asistente iQor</h3>
                  <span className="rounded bg-[#ff4d2e]/20 px-1.5 py-0.2 text-[10px] font-semibold text-[#ff8c69] border border-[#ff4d2e]/30">
                    DEMO IA
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 font-medium">● En línea | RMS México</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleReset}
                title="Reiniciar conversación"
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimizar"
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#ff4d2e] to-[#ff6b4a] text-white rounded-br-none'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800/80 rounded-bl-none'
                  }`}
                >
                  {msg.content ? (
                    <div>{formatMarkdown(msg.content)}</div>
                  ) : (
                    <div className="flex items-center space-x-1.5 py-1 text-slate-400">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></div>
                      <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></div>
                    </div>
                  )}
                </div>
                <span className="mt-1 px-1 text-[10px] text-slate-500">{msg.timestamp}</span>
              </div>
            ))}

            {/* Quick Prompts (si aún no se ha interactuado mucho) */}
            {!hasInteracted && messages.length <= 2 && (
              <div className="pt-2">
                <p className="text-[11px] font-medium text-slate-400 mb-2">Preguntas frecuentes:</p>
                <div className="flex flex-col gap-1.5">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-left rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-300 hover:border-[#ff4d2e]/50 hover:bg-slate-800/80 hover:text-white transition-all duration-150"
                    >
                      🔹 {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="border-t border-slate-800/80 bg-slate-950 p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta sobre iQor..."
                disabled={isLoading}
                className="flex-1 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-[#ff4d2e] focus:outline-none focus:ring-1 focus:ring-[#ff4d2e] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#ff4d2e] to-[#ff6b4a] text-white transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <svg className="h-4 w-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-slate-500">
              <span>Demo RMS iQor México</span>
              <span>Esquema a éxito • B2B</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
