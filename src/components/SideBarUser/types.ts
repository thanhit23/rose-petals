import React from 'react';

export type BarItem = {
  path: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  quantity?: number;
};
