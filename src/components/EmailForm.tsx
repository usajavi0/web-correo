import React, { useState } from 'react';
import { EmailIcon } from '../constants';

interface EmailFormProps {
  formId: string;
  inputBgClass?: string;
  buttonText?: string;
  showIcon?: boolean;
}

const EmailForm: React.FC<EmailFormProps> = ({
  formId,
  inputBgClass = "bg-slate-50",
  buttonText = "QUIERO MIS 7 HERRAMIENTAS",
  showIcon = true
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!name.trim()) {
      setError("Por favor, introduce tu nombre.");
      return;
    }
    if (!email.trim()) {
      setError("Por favor, introduce tu correo electrónico.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      return;
    }

    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === "error@example.com") { // Test error case
        setError("Hubo un problema al enviar. Inténtalo de nuevo más tarde.");
        setStatus('error');
    } else {
        setSuccessMessage(`¡Gracias, ${name}! Revisa tu correo para descargar la guía.`);
        setStatus('success');
        setName(''); 
        setEmail(''); 
    }
  };

  if (status === 'success' && successMessage) {
    return (
      <div className="text-center p-4 bg-green-100 text-green-700 rounded-xl max-w-[480px] mx-auto" role="alert">
        <p className="font-semibold">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[480px] mx-auto" noValidate>
      <div className="mb-4">
        <label htmlFor={`name-${formId}`} className="sr-only">Tu nombre</label>
        <input
          type="text"
          id={`name-${formId}`}
          placeholder="Tu nombre"
          className={`form-input w-full min-w-0 flex-1 resize-none overflow-hidden text-[#0e151b] focus:outline-0 focus:ring-0 border border-[#d0dde7] h-14 @[480px]:h-16 placeholder:text-[#4e7997] px-[15px] rounded-xl text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal ${inputBgClass}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === 'submitting'}
          aria-describedby={error && !email.trim() ? `error-${formId}` : undefined}
        />
      </div>

      <label htmlFor={`email-${formId}`} className="sr-only">Tu correo electrónico</label>
      <div className={`flex w-full flex-1 items-stretch rounded-xl h-14 @[480px]:h-16 ${inputBgClass} border border-[#d0dde7]`}>
        {showIcon && (
          <div className="text-[#4e7997] flex items-center justify-center pl-[15px] rounded-l-xl border-r-0 form-icon">
            <EmailIcon />
          </div>
        )}
        <input
          type="email"
          id={`email-${formId}`}
          placeholder="Tu correo electrónico"
          className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#0e151b] focus:outline-0 focus:ring-0 border-none h-full placeholder:text-[#4e7997] px-[15px] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal ${inputBgClass} ${showIcon ? 'rounded-l-none pl-2' : 'rounded-l-xl'} rounded-r-none border-r-0 pr-2`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'submitting'}
          aria-describedby={error ? `error-${formId}` : undefined}
        />
        <div className={`flex items-center justify-center rounded-r-xl border-l-0 pr-[7px] ${inputBgClass}`}>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg sm:rounded-xl h-10 px-3 sm:px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1990e5] text-slate-50 text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-blue-600 transition-colors disabled:opacity-70"
          >
            <span className="truncate">{status === 'submitting' ? 'Enviando...' : buttonText}</span>
          </button>
        </div>
      </div>
      {error && (
        <p id={`error-${formId}`} className="text-red-600 text-sm mt-2 text-center">{error}</p>
      )}
    </form>
  );
};

export default EmailForm;