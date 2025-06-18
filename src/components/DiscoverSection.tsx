import React from 'react';
import { DISCOVER_ITEMS_DATA } from '../constants';
import DiscoverCard from './DiscoverCard';

const DiscoverSection: React.FC = () => {
  return (
    <section className="py-5">
      <h2 className="text-[#0e151b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        ¿Qué Descubrirás?
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4 @[480px]:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {DISCOVER_ITEMS_DATA.map(item => (
          <DiscoverCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;