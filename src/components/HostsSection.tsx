import React from 'react';

// PASO 1: Importamos la imagen como si fuera un módulo de código.
// La ruta es relativa desde este archivo hasta la imagen.
import logoUrl from '../assets/Logo-reprogramarte.jpg'; 

const HostsSection: React.FC = () => {
  return (
    <section className="py-5">
      <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Conoce a Javi y Jesús
      </h2>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:items-center">
          <div className="flex flex-col @[520px]:flex-row gap-4 items-center @[520px]:items-start">
            
            {/* PASO 2: Usamos la variable 'logoUrl' que hemos importado en el 'src'. */}
            <img
              src={logoUrl} 
              alt="Logo de El Arte de Reprogramarte"
              className="h-32 w-32 flex-shrink-0 rounded-full object-cover"
            />
            
            <div className="flex flex-col justify-center text-center @[520px]:text-left">
              <p className="text-[#0e151b] text-xl @[520px]:text-[22px] font-bold leading-tight tracking-[-0.015em]">Javi y Jesús</p>
              <p className="text-[#4e7997] text-base font-normal leading-normal mt-1">
                Presentadores del podcast 'El Arte de Reprogramarte', dedicados a guiarte en tu viaje hacia el bienestar emocional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;