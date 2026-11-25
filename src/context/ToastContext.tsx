import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export type ToastType = 'info' | 'success' | 'warn';

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info', duration: number = 3200) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Global Toast HUD Notification Container */}
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm w-full px-4 sm:px-0"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-2xl glass-card border border-precious-gold/30 shadow-2xl backdrop-blur-2xl text-xs font-mono transition-all animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-precious-gold shrink-0" />}
              {toast.type === 'warn' && <AlertTriangle className="w-4 h-4 text-precious-gold shrink-0" />}
              {toast.type === 'info' && <Info className="w-4 h-4 text-opal shrink-0" />}
              <span className="t-text-primary leading-snug truncate">{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg hover:bg-white/10 t-text-muted hover:t-text-primary transition-colors shrink-0"
              aria-label="Dismiss toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
