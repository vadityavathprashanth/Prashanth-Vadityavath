import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management application that uses AI to prioritize and categorize tasks automatically.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "TypeScript", "OpenAI", "Node.js"],
      github: "https://github.com/vadityavathprashanth/task-manager",
      demo: "https://ai-task-manager.demo.com"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with real-time inventory management and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com/vadityavathprashanth/ecommerce",
      demo: "https://ecommerce-platform.demo.com"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media managers with AI-driven insights.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
      tech: ["Vue.js", "Python", "TensorFlow", "MongoDB"],
      github: "https://github.com/vadityavathprashanth/social-analytics",
      demo: "https://social-analytics.demo.com"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 flex items-center"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}