import React from 'react';
import EmailForm from './EmailForm';

const FinalCTASection: React.FC = () => {
  return (
    <section className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center items-center">
          <h2
            className="text-[#0e151b] tracking-tight text-[28px] @[480px]:text-[32px] font-bold leading-tight @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Comienza Tu Viaje de Sanación Hoy
          </h2>
          <p className="text-[#0e151b] text-base font-normal leading-normal max-w-[720px]">
            Obtén tu guía gratuita y da el primer paso hacia un tú más saludable y feliz.
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <EmailForm 
            formId="final-cta-form" 
            inputBgClass="bg-[#e7eef3]" 
            buttonText="OBTENER GUÍA GRATIS"
            showIcon={false} // Mockup for this CTA form variant does not show icon in input
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;