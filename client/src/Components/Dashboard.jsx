import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const initialPortfolios = [
  { id: 1, name: "My Web Developer Portfolio" },
  { id: 2, name: "UX Designer Showcase" },
  { id: 3, name: "Graphic Design Projects" },
];

export default function Dashboard() {
  const [portfolios, setPortfolios] = useState(initialPortfolios);
  const [newPortfolioName, setNewPortfolioName] = useState('');

  const handleCreatePortfolio = () => {
    if (newPortfolioName.trim()) {
      setPortfolios([...portfolios, { id: Date.now(), name: newPortfolioName }]);
      setNewPortfolioName('');
    }
  };

  const handleDeletePortfolio = (id) => {
    setPortfolios(portfolios.filter(portfolio => portfolio.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Portfolio Builder</h2>
        </div>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">About</a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Skills</a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Projects</a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">Preview</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Portfolios</h1>

        {/* Create New Portfolio */}
        <div className="mb-6 flex">
          <input
            type="text"
            placeholder="New Portfolio Name"
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newPortfolioName}
            onChange={(e) => setNewPortfolioName(e.target.value)}
          />
          <button
            onClick={handleCreatePortfolio}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <PlusIcon className="h-5 w-5 inline-block mr-1" />
            Create New
          </button>
        </div>

        {/* Portfolio List */}
        <div className="bg-white shadow-md rounded-md">
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
              <span className="text-lg text-gray-700">{portfolio.name}</span>
              <div>
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <PencilIcon className="h-5 w-5 inline-block" />
                </button>
                <button
                  onClick={() => handleDeletePortfolio(portfolio.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="h-5 w-5 inline-block" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

