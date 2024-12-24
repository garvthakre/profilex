import React from 'react';
import EditButton from './EditButton';

export default function About({ data, onEdit }) {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <EditButton onClick={onEdit} />
      </div>
      <div className="bg-opacity-50 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
        <h2 className="text-xl mb-4">{data.title}</h2>
        <p>{data.bio}</p>
      </div>
    </section>
  );
}

