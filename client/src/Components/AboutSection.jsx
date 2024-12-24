import React from 'react';
import { useFormContext } from 'react-hook-form';
import { required } from '../utils/validation';

function AboutSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">About You</h2>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: required })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.name ? 'border-red-500' : ''}`}
          placeholder="John Doe"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession</label>
        <input
          id="profession"
          type="text"
          {...register('profession', { required: required })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.profession ? 'border-red-500' : ''}`}
          placeholder="Full Stack Developer"
        />
        {errors.profession && <p className="text-sm text-red-500">{errors.profession.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          id="bio"
          {...register('bio', { required: required })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.bio ? 'border-red-500' : ''}`}
          rows="4"
          placeholder="A brief description about yourself"
        ></textarea>
        {errors.bio && <p className="text-sm text-red-500">{errors.bio.message}</p>}
      </div>
    </div>
  );
}

export default AboutSection;
