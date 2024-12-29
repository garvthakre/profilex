import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { required, validateUrl } from '../utils/validation';

function ProjectsSection() {
  const { control, register, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects"
  });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 p-4 border rounded">
          <div className="space-y-2">
            <label htmlFor={`projects.${index}.title`} className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              id={`projects.${index}.title`}
              {...register(`projects.${index}.title`, { required: required })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.projects?.[index]?.title ? 'border-red-500' : ''}`}
              placeholder="My Awesome Project"
            />
            {errors.projects?.[index]?.title && <p className="text-sm text-red-500">{errors.projects[index].title.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor={`projects.${index}.description`} className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id={`projects.${index}.description`}
              {...register(`projects.${index}.description`, { required: required })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.projects?.[index]?.description ? 'border-red-500' : ''}`}
              rows="3"
              placeholder="A brief description of your project"
            ></textarea>
            {errors.projects?.[index]?.description && <p className="text-sm text-red-500">{errors.projects[index].description.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor={`projects.${index}.techStack`} className="block text-sm font-medium text-gray-700">Tech Stack</label>
            <input
              id={`projects.${index}.techStack`}
              {...register(`projects.${index}.techStack`, { required: required })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.projects?.[index]?.techStack ? 'border-red-500' : ''}`}
              placeholder="e.g., React, Node.js, MongoDB"
            />
            {errors.projects?.[index]?.techStack && <p className="text-sm text-red-500">{errors.projects[index].techStack.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor={`projects.${index}.url`} className="block text-sm font-medium text-gray-700">Project URL</label>
            <input
              id={`projects.${index}.url`}
              {...register(`projects.${index}.url`, { validate: validateUrl })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.projects?.[index]?.url ? 'border-red-500' : ''}`}
              placeholder="https://myproject.com"
            />
            {errors.projects?.[index]?.url && <p className="text-sm text-red-500">{errors.projects[index].url.message}</p>}
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Project
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ title: '', description: '', techStack: '', url: '' })}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Project
      </button>
    </div>
  );
}

export default ProjectsSection;

