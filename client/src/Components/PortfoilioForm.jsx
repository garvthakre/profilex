import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormSections } from '../hooks/useFormSections';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

function PortfolioForm() {
  const methods = useForm();
  const { currentSection, nextSection, prevSection } = useFormSections();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8">
          {currentSection === 'about' && <AboutSection />}
          {currentSection === 'skills' && <SkillsSection />}
          {currentSection === 'projects' && <ProjectsSection />}
        </div>

        <div className="flex justify-between">
          {currentSection !== 'about' && (
            <button
              type="button"
              onClick={prevSection}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Previous
            </button>
          )}
          {currentSection !== 'projects' ? (
            <button
              type="button"
              onClick={nextSection}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export default PortfolioForm;

