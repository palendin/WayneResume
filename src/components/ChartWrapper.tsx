"use client";

import React from 'react';

const ChartWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-[400px] w-full bg-gray-100 animate-pulse"></div>;
  }

  return <>{children}</>;
};

export default ChartWrapper;
