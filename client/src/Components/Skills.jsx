import React from 'react';
import EditButton from './EditButton';

export default function Skills({ data, onEdit }) {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <EditButton onClick={onEdit} />
      </div>
      <div className="bg-opacity-50 bg-white p-6 rounded-lg shadow-lg">
        <ul className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

