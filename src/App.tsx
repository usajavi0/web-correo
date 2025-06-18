import React from 'react';
import HeroSection from './components/HeroSection';
import IntroTextSection from './components/IntroTextSection';
import DiscoverSection from './components/DiscoverSection';
import HostsSection from './components/HostsSection';
import FinalCTASection from './components/FinalCTASection';
import PageFooter from './components/PageFooter';

const App: React.FC = () => {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-0 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5"> {/* Adjusted padding for better responsiveness */}
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <HeroSection />
          <IntroTextSection />
          <DiscoverSection />
          <HostsSection />
          <FinalCTASection />
          <PageFooter />
        </div>
      </div>
    </div>
  );
};

export default App;