"use client";

import React from 'react';
import Link from 'next/link';
import MDRTBDashboard from '../../../components/MDRTBDashboard';

export default function MDRTBPage() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Global MDR-TB Analysis Dashboard</h1>
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← Back to Portfolio
          </Link>
        </div>
        {isClient ? (
          <MDRTBDashboard />
        ) : (
          <div className="h-[800px] w-full bg-gray-100 animate-pulse rounded-lg"></div>
        )}
      </div>
    </div>
  );
}
