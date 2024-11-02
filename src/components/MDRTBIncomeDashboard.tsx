"use client";

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MDRTBIncomeDashboard = () => {
  // Data for comparing confirmed cases across income groups in 2022
  const confirmedCases2022 = [
    { group: "High-income", cases: 2027, treated: 1776 },
    { group: "Upper-middle-income", cases: 65194, treated: 69658 },
    { group: "Lower-middle-income", cases: 104631, treated: 99647 },
    { group: "Low-income", cases: 7114, treated: 6828 }
  ];

  // Testing coverage trend data
  const testingCoverage = [
    { year: "2015", "High-income": 81, "Upper-middle-income": 52, "Lower-middle-income": 15, "Low-income": 9.4 },
    { year: "2016", "High-income": 86, "Upper-middle-income": 57, "Lower-middle-income": 34, "Low-income": 31 },
    { year: "2017", "High-income": 90, "Upper-middle-income": 56, "Lower-middle-income": 54, "Low-income": 12 },
    { year: "2018", "High-income": 87, "Upper-middle-income": 55, "Lower-middle-income": 46, "Low-income": 26 },
    { year: "2019", "High-income": 83, "Upper-middle-income": 56, "Lower-middle-income": 67, "Low-income": 26 },
    { year: "2020", "High-income": 84, "Upper-middle-income": 75, "Lower-middle-income": 76, "Low-income": 31 },
    { year: "2021", "High-income": 81, "Upper-middle-income": 78, "Lower-middle-income": 69, "Low-income": 43 },
    { year: "2022", "High-income": 88, "Upper-middle-income": 81, "Lower-middle-income": 74, "Low-income": 45 }
  ];

  return (
    <div className="w-full space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">MDR-TB Analysis by World Bank Income Groups</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Confirmed vs Treated Cases by Income Group (2022)</h3>
            <BarChart
              width={600}
              height={400}
              data={confirmedCases2022}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="group" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="cases" fill="#2563eb" name="Confirmed Cases" />
              <Bar dataKey="treated" fill="#16a34a" name="Treated Cases" />
            </BarChart>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Testing Coverage by Income Group (2015-2022)</h3>
            <LineChart
              width={600}
              height={400}
              data={testingCoverage}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="High-income" 
                stroke="#2563eb" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="Upper-middle-income" 
                stroke="#16a34a" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="Lower-middle-income" 
                stroke="#d97706" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="Low-income" 
                stroke="#dc2626" 
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Key Insights:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Lower-middle-income countries bear the highest burden with over 104,000 confirmed cases in 2022</li>
            <li>High-income countries consistently maintain the highest testing coverage rates (>80%)</li>
            <li>All income groups have shown improvement in testing coverage from 2015 to 2022</li>
            <li>Low-income countries still lag significantly in testing coverage, though showing steady improvement</li>
            <li>Treatment coverage is generally high across all income groups, with some groups treating more cases than confirmed (possibly due to backlog)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MDRTBIncomeDashboard;
