"use client";

import React from 'react';
import ChartWrapper from './ChartWrapper';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MDRTBDashboard = () => {
  const top10Countries2022 = [
    {country: "China", cases: 12394},
    {country: "Russian Federation", cases: 19045},
    {country: "India", cases: 64411},
    {country: "Philippines", cases: 9844},
    {country: "Indonesia", cases: 12505},
    {country: "Ukraine", cases: 3909},
    {country: "Kazakhstan", cases: 3567},
    {country: "Pakistan", cases: 4514},
    {country: "Uzbekistan", cases: 2117},
    {country: "Viet Nam", cases: 4050}
  ].sort((a, b) => b.cases - a.cases);

  const globalTrend = [
    { year: "2015", confirmed: 132000, treated: 125000 },
    { year: "2016", confirmed: 153000, treated: 130000 },
    { year: "2017", confirmed: 160000, treated: 139000 },
    { year: "2018", confirmed: 187000, treated: 156000 },
    { year: "2019", confirmed: 208000, treated: 177000 },
    { year: "2020", confirmed: 157000, treated: 150000 },
    { year: "2021", confirmed: 175000, treated: 160000 },
    { year: "2022", confirmed: 180000, treated: 165000 }
  ];

  return (
    <div className="w-full space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">MDR-TB Global Dashboard - 2022 Analysis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Top 10 Countries by Confirmed Cases (2022)</h3>
            <ChartWrapper>
              <BarChart
                width={600}
                height={400}
                data={top10Countries2022}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="country" type="category" />
                <Tooltip />
                <Bar dataKey="cases" fill="#2563eb" />
              </BarChart>
            </ChartWrapper>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Global MDR-TB Trend (2015-2022)</h3>
            <ChartWrapper>
              <LineChart
                width={600}
                height={400}
                data={globalTrend}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="confirmed" stroke="#2563eb" name="Confirmed Cases" />
                <Line type="monotone" dataKey="treated" stroke="#16a34a" name="Treated Cases" />
              </LineChart>
            </ChartWrapper>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Key Findings:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>India reported the highest number of confirmed MDR-TB cases in 2022 with over 64,000 cases</li>
            <li>The global trend shows an overall increase in both confirmed and treated cases from 2015 to 2019</li>
            <li>There was a notable dip in cases during 2020 (likely due to COVID-19 impact)</li>
            <li>Treatment coverage has been consistently improving, with the gap between confirmed and treated cases narrowing</li>
            <li>The top 10 countries account for approximately 70% of global MDR-TB burden</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MDRTBDashboard;
