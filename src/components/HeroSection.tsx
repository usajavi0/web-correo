import React from 'react';
import EmailForm from './EmailForm';

const HeroSection: React.FC = () => {
  const heroBackgroundImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz8syxVxVMMOPFDLljBTpem_syWAqvj21zILm_eHW_kP9lw7tqRl1gK2rE1DOOWwSqJpOOTylR2sYDhlfYX6avFe_0i7mZMX7rvZiAmA2gN-xDtRoMTyhdt_S6lZmFHnWdiQWWBBzfv83qm3k7VwpEf1Q_jRZzr9atOzcCCAuyFkQLCg6ws3P5QWu1vpVPio5wv-nWgbWkNoPfjjo0TIsOTP-u-wXfC6aeaHNRwYppDcg-KoEOVQhgb_iv-hSkj_PKB7KBlHQBTAtU';
  const textShadowStyle = {
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 3px #000'
    // A slightly softer version with blur: '0px 0px 5px #000, 0px 0px 3px #000'
  };

  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${heroBackgroundImage}")` }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              style={textShadowStyle}
            >
              7 Herramientas para Empezar a Sanar Hoy
            </h1>
            <h2 
              className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              style={textShadowStyle}
            >
              Siete llaves emocionales para volver a ti. Desde la herida, hacia la claridad.
            </h2>
          </div>
          <EmailForm formId="hero-form" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;