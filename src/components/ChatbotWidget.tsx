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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

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
      const rawError = err instanceof Error ? err.message : 'Error inesperado';
      const cleanError = rawError.replace(/[.\s]+$/, '');
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: `⚠️ **Aviso:** ${cleanError}. Por favor intenta de nuevo o comunícate a nuestras sedes.`,
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

  const formatMarkdown = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const bulletText = formatted.replace(/^(\*|-)\s+/, '');
        return (
          <li
            key={i}
            style={{ marginLeft: '16px', listStyleType: 'disc', color: '#f8f7f5' }}
            dangerouslySetInnerHTML={{ __html: bulletText }}
          />
        );
      }

      if (!line.trim()) {
        return <div key={i} style={{ height: '6px' }} />;
      }

      return (
        <p
          key={i}
          style={{ marginBottom: '4px', lineHeight: '1.5' }}
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

  return (
    <>
      {/* Contenedor del Botón Flotante */}
      <div className="iqor-chat-container">
        {!isOpen && (
          <div className="iqor-chat-tooltip">
            💬 ¿Tienes dudas sobre iQor?
          </div>
        )}

        <button
          id="iqor-chatbot-trigger"
          className="iqor-chat-trigger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente virtual de iQor'}
        >
          <span className="iqor-chat-badge" />

          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Ventana de Chat */}
      {isOpen && (
        <div id="iqor-chatbot-window" className="iqor-chat-window">
          {/* Header */}
          <div className="iqor-chat-header">
            <div className="iqor-chat-header-info">
              <div className="iqor-chat-avatar">iQ</div>
              <div>
                <div className="iqor-chat-title">
                  <span>Asistente iQor</span>
                  <span className="iqor-chat-pill">Demo IA</span>
                </div>
                <div className="iqor-chat-status">● En línea | RMS México</div>
              </div>
            </div>

            <div className="iqor-chat-header-actions">
              <button
                onClick={handleReset}
                title="Reiniciar conversación"
                className="iqor-chat-btn-icon"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimizar"
                className="iqor-chat-btn-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cuerpo de Mensajes */}
          <div className="iqor-chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`iqor-chat-msg-row ${msg.role}`}>
                <div className={`iqor-chat-bubble ${msg.role}`}>
                  {msg.content ? (
                    <div>{formatMarkdown(msg.content)}</div>
                  ) : (
                    <div className="iqor-chat-dots">
                      <div className="iqor-chat-dot" />
                      <div className="iqor-chat-dot" />
                      <div className="iqor-chat-dot" />
                    </div>
                  )}
                </div>
                <span className="iqor-chat-time">{msg.timestamp}</span>
              </div>
            ))}

            {/* Quick Prompts iniciales */}
            {!hasInteracted && messages.length <= 2 && (
              <div className="iqor-chat-quick-section">
                <p className="iqor-chat-quick-title">Preguntas frecuentes:</p>
                <div className="iqor-chat-quick-grid">
                  {QUICK_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="iqor-chat-quick-btn"
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
          <div className="iqor-chat-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="iqor-chat-form"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta sobre iQor..."
                disabled={isLoading}
                className="iqor-chat-input"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="iqor-chat-send"
                aria-label="Enviar mensaje"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
            <div className="iqor-chat-footer-note">
              <span>Demo RMS iQor México</span>
              <span>Esquema a éxito • B2B</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
