import React from 'react';

const PageFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pb-6 pt-1 px-4 text-center">
      <p className="text-[#4e7997] text-sm font-normal leading-normal">
        Respetamos tu privacidad. Tu información se mantendrá confidencial.
      </p>
      <p className="text-[#4e7997] text-xs font-normal leading-normal mt-2">
        &copy; {currentYear} El Arte de Reprogramarte. Todos los derechos reservados.
      </p>
       <p className="text-xs mt-2 text-amber-600 opacity-70">
            Esta es una página de demostración.
       </p>
    </footer>
  );
};

export default PageFooter;