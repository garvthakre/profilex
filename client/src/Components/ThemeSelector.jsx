import React from 'react';

export default function ThemeSelector({ setTheme }) {
  return (
    <div className="mb-8">
      <label htmlFor="theme" className="block mb-2 font-semibold">Choose a theme:</label>
      <select
        id="theme"
        onChange={(e) => setTheme(e.target.value)}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
    </div>
  );
}

