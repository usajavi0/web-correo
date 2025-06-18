import React from 'react';
import { DiscoverItem } from '../types';

interface DiscoverCardProps {
  item: DiscoverItem;
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({ item }) => {
  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dde7] bg-slate-50 p-4 flex-col">
      <div className="text-[#0e151b]" data-icon={item.id} data-size="24px" data-weight="regular">
        {item.icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#0e151b] text-base font-bold leading-tight">{item.title}</h3>
        <p className="text-[#4e7997] text-sm font-normal leading-normal">{item.description}</p>
      </div>
    </div>
  );
};

export default DiscoverCard;