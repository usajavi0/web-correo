import React from 'react';

export interface DiscoverItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// The 'Tool' interface is no longer used directly by the main page structure.
// If it's part of the downloadable guide, it can remain for other potential uses,
// but for the landing page structure, it's not directly needed.
// For now, removing it to reflect the current UI needs.
// export interface Tool {
//   id: number;
//   icon?: React.ReactNode;
//   title: string;
//   subtitle: string;
//   description: string;
//   exercise: {
//     intro: string;
//     steps: string[];
//   };
//   keyPhrase: string;
// }
