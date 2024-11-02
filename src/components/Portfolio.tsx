"use client";
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Wayne Wu</h1>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/weiyin-wu-0ab38b32" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:weiyinwu90@gmail.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className="mt-2 text-xl text-gray-600">Data Scientist | Bioprocess Engineering Specialist</p>
          <p className="text-gray-500">Fremont, CA</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600">
              Data scientist with extensive experience in bioprocess engineering and fermentation. 
              Specialized in developing automated data solutions and implementing machine learning applications 
              in biotechnology settings. Strong background in process optimization and data-driven decision making,
              combining technical expertise in both data science and bioengineering.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Data Science & Programming</h3>
                <ul className="list-disc pl-4 text-gray-600">
                  <li>Python (Plotly, Dash, SQL)</li>
                  <li>Machine Learning (Scikit-learn, TensorFlow)</li>
                  <li>Google JavaScript</li>
                  <li>Lookerstudio</li>
                  <li>Automation (Autohotkey)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bioprocess Engineering</h3>
                <ul className="list-disc pl-4 text-gray-600">
                  <li>Fermentation</li>
                  <li>Cell Culture</li>
                  <li>Downstream Recovery</li>
                  <li>Tech Transfer</li>
                  <li>Scale Up</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                <ul className="list-disc pl-4 text-gray-600">
                  <li>LabVIEW</li>
                  <li>API Integration</li>
                  <li>SQL Databases</li>
                  <li>Docker</li>
                  <li>Render</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Associate Data Scientist - Vitrolabs Inc</h3>
                <p className="text-gray-500">June 2023 - October 2024</p>
                <ul className="list-disc pl-4 text-gray-600 mt-2">
                  <li>Designed and implemented company-wide SQL database with Lookerstudio integration</li>
                  <li>Created and deployed Plotly Dash visualization applications</li>
                  <li>Automated data processing workflows, reducing turnover time by 90%</li>
                  <li>Implemented API integrations for automated data export</li>
                  <li>Led project management efforts improving tissue quality</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Senior Associate Scientist - Amyris</h3>
                <p className="text-gray-500">April 2021 - June 2023</p>
                <ul className="list-disc pl-4 text-gray-600 mt-2">
                  <li>Automated fermentation calculations using Python/SQL</li>
                  <li>Led ISPR fermentation project achieving 300% productivity improvement</li>
                  <li>Developed and scaled up lab fermentation processes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="space-y-8">
              <div>
 <h3 className="text-xl font-semibold mb-4">Medical Data Analysis Dashboards</h3>
        <div className="space-y-4">
          <a 
            href="/dashboards/mdr-tb" 
            className="block p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h4 className="text-lg font-semibold text-blue-600">Global MDR-TB Analysis Dashboard</h4>
            <p className="text-gray-600 mt-2">
              Interactive visualization of Multi-Drug Resistant Tuberculosis (MDR-TB) trends across different countries.
            </p>
          </a>
          
          <a 
            href="/dashboards/mdr-tb-income" 
            className="block p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <h4 className="text-lg font-semibold text-blue-600">MDR-TB Income Group Analysis</h4>
            <p className="text-gray-600 mt-2">
              Analysis of MDR-TB patterns across different World Bank income groups, highlighting global healthcare disparities.
            </p>
          </a>
        </div>
                {/* MDR-TB dashboard components would go here */}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Projects</h3>
                <ul className="list-disc pl-4 text-gray-600 space-y-2">
                  <li>Plotly Dash application for data visualization, deployed via Docker and Render</li>
                  <li>Automated gaming scripts using Autohotkey and TensorFlow YOLO for image recognition</li>
                  <li>Machine learning web application using Streamlit and Scikit-learn</li>
                  <li>Process automation using LabVIEW for biotech applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Master of Science in Chemical Engineering</h3>
                <p className="text-gray-600">University of California, Davis</p>
                <p className="text-gray-500">GPA: 3.8 | Graduated September 2018</p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="mb-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Awards & Certifications</h2>
            <ul className="list-disc pl-4 text-gray-600">
              <li>40th Symposium On BioFuel/Chemical Best Poster Award</li>
              <li>SAChE - Chemical Reactivity Hazards</li>
              <li>Six Sigma Yellow Belt</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="flex flex-col space-y-2">
              <a href="mailto:weiyinwu90@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
                <Mail className="h-5 w-5 mr-2" />
                weiyinwu90@gmail.com
              </a>
              <a href="tel:+15103868085" className="flex items-center text-gray-600 hover:text-gray-900">
                <Phone className="h-5 w-5 mr-2" />
                (510)-386-8085
              </a>
              <a href="https://www.linkedin.com/in/weiyin-wu-0ab38b32" className="flex items-center text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
