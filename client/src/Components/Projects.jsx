import React from 'react';
import EditButton from './EditButton';

export default function Projects({ data, onEdit }) {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <EditButton onClick={onEdit} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {data.map((project, index) => (
          <div key={index} className="bg-opacity-50 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

