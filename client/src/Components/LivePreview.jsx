import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ThemeSelector from './ThemeSelector';

const initialData = {
  about: {
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate about creating web applications that make a difference."
  },
  skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
  projects: [
    { title: "Project 1", description: "A brief description of project 1" },
    { title: "Project 2", description: "A brief description of project 2" },
  ]
};

const themes = {
  light: "bg-white text-gray-800",
  dark: "bg-gray-800 text-white",
  colorful: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"
};

export default function LivePreview() {
  const [data, setData] = useState(initialData);
  const [theme, setTheme] = useState('light');

  const handleEdit = (section) => {
    // This function would open an edit modal or navigate to an edit page
    console.log(`Editing ${section}`);
  };

  return (
    <div className={`min-h-screen p-8 ${themes[theme]}`}>
      <ThemeSelector setTheme={setTheme} />
      <div className="max-w-4xl mx-auto">
        <About data={data.about} onEdit={() => handleEdit('about')} />
        <Skills data={data.skills} onEdit={() => handleEdit('skills')} />
        <Projects data={data.projects} onEdit={() => handleEdit('projects')} />
      </div>
    </div>
  );
}

