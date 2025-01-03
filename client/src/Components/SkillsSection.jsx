import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { required } from '../utils/validation';

function SkillsSection() {
  const { control, register, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Skills</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="flex space-x-2">
          <div className="flex-1">
            <input
              {...register(`skills.${index}.name`, { required: required })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.skills?.[index]?.name ? 'border-red-500' : ''}`}
              placeholder="e.g., JavaScript"
            />
            {errors.skills?.[index]?.name && <p className="text-sm text-red-500">{errors.skills[index].name.message}</p>}
          </div>
          <div className="flex-1">
            <input
              {...register(`skills.${index}.proficiency`, { required: required })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.skills?.[index]?.proficiency ? 'border-red-500' : ''}`}
              placeholder="e.g., Advanced"
            />
            {errors.skills?.[index]?.proficiency && <p className="text-sm text-red-500">{errors.skills[index].proficiency.message}</p>}
          </div>
          <button
            type="button"
            onClick={() => remove(index)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: '', proficiency: '' })}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Skill
      </button>
    </div>
  );
}

export default SkillsSection;

