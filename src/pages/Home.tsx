import { Github, Linkedin, Mail, Code2, User, ChevronDown, RepeatIcon as ReactIcon, FileCode2, Code, Terminal, Database, BarChart4, TableProperties, Table, Server, Baseline as Pipeline, Warehouse, Network, Brain, Bot, Cpu, Boxes, GraduationCap, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const skillCategories = [
    {
      title: "Development",
      skills: [
        { name: "React", icon: <ReactIcon className="w-6 h-6 mb-2" /> },
        { name: "JavaScript", icon: <FileCode2 className="w-6 h-6 mb-2" /> },
        { name: "TypeScript", icon: <Code className="w-6 h-6 mb-2" /> },
        { name: "C/C++", icon: <Terminal className="w-6 h-6 mb-2" /> },
        { name: "HTML/CSS", icon: <Code2 className="w-6 h-6 mb-2" /> },
        { name: "Node.js", icon: <Server className="w-6 h-6 mb-2" /> }
      ]
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Python", icon: <Code className="w-6 h-6 mb-2" /> },
        { name: "Tableau", icon: <BarChart4 className="w-6 h-6 mb-2" /> },
        { name: "PowerBI", icon: <TableProperties className="w-6 h-6 mb-2" /> },
        { name: "PostgreSQL", icon: <Database className="w-6 h-6 mb-2" /> },
        { name: "Excel", icon: <Table className="w-6 h-6 mb-2" /> },
        { name: "Data Visualization", icon: <BarChart4 className="w-6 h-6 mb-2" /> }
      ]
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Apache Spark", icon: <Network className="w-6 h-6 mb-2" /> },
        { name: "Airflow", icon: <Pipeline className="w-6 h-6 mb-2" /> },
        { name: "ETL Pipeline", icon: <Pipeline className="w-6 h-6 mb-2" /> },
        { name: "Data Warehousing", icon: <Warehouse className="w-6 h-6 mb-2" /> },
        { name: "Big Data", icon: <Database className="w-6 h-6 mb-2" /> },
        { name: "Cloud Computing", icon: <Server className="w-6 h-6 mb-2" /> }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "Agentic AI", icon: <Bot className="w-6 h-6 mb-2" /> },
        { name: "Generative AI", icon: <Brain className="w-6 h-6 mb-2" /> },
        { name: "MLOps", icon: <Cpu className="w-6 h-6 mb-2" /> },
        { name: "TensorFlow", icon: <Brain className="w-6 h-6 mb-2" /> },
        { name: "PyTorch", icon: <Boxes className="w-6 h-6 mb-2" /> },
        { name: "LangChain", icon: <Bot className="w-6 h-6 mb-2" /> }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Prashanth Vadityavath</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            Full Stack Developer | Data Scientist | AI Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/vadityavathprashanth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prashanth-vadityavath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:prashanthvadityavath@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-600" />
          </div>
        </div>
      </section>

      {/* About Section with Education and Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <User size={24} className="text-indigo-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <div className="prose prose-lg mx-auto mb-12">
            <p className="text-gray-600 text-center">
              I'm a passionate developer with expertise in building modern web applications,
              data analytics, and artificial intelligence solutions. With a strong foundation in
              both technical and analytical skills, I create elegant solutions to complex problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setShowEducation(!showEducation)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-t-lg"
              >
                <div className="flex items-center">
                  <GraduationCap className="text-indigo-600 mr-2" size={24} />
                  <span className="text-xl font-semibold text-gray-900">Education</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${showEducation ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              {showEducation && (
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">MS in Data Analytics and Visualization</h3>
                        <div>
 <img 
                          src="https://www.google.com/imgres?q=yeshiva%20university%20logo&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fc2%2FYeshiva_University.svg%2F1200px-Yeshiva_University.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYeshiva_University&docid=m8LjTcQGNrmLMM&tbnid=JzZNW_9oXEPIRM&vet=12ahUKEwi96bnCtZCMAxX-FlkFHYRqBlsQM3oECB0QAA..i&w=1200&h=1127&hcb=2&ved=2ahUKEwi96bnCtZCMAxX-FlkFHYRqBlsQM3oECB0QAA" 
                          alt="YU Logo" 
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                    
                      </div>
                        </div>
                      <p className="text-gray-600">Yeshiva University, NYC</p>
                      <p className="text-gray-500">Aug 2024 - May 2026</p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">Course Work:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                          <li>Analytical Programming</li>
                          <li>Data Driven Organization</li>
                          <li>Structured Database Management</li>
                          <li>Computational Mathematics and Statistics Using R</li>
                          <li>Story telling And Visualization Using BI Tools</li>
                          <li>Information Architecture</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Masters in Computer Applications</h3>
                        <img 
                          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FChaitanya_Bharathi_Institute_of_Technology&psig=AOvVaw2QYKYtTct14mKXqGd2JjMv&ust=1742276760884000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiQ9-y0kIwDFQAAAAAdAAAAABAE" 
                          alt="CBIT Logo" 
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                      </div>
                      <p className="text-gray-600">CBIT, Hyderabad</p>
                      <p className="text-gray-500">Aug 2023 - 2024</p>
                      <p className="text-gray-600">CGPA: 8.59/10</p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">Accomplishments:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                          <li>Led technical event "Sound Engineer"</li>
                          <li>Paper presentations on Real Time Kinematic and GeoSpatial Applications</li>
                          <li>Developed IoT-Driven Irrigation Systems project</li>
                          <li>Best project award at department level</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science in Computer Applications</h3>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                      </div>
                      <p className="text-gray-600">Osmania University, Hyderabad</p>
                      <p className="text-gray-500">July 2018 - July 2021</p>
                      <p className="text-gray-600">CGPA: 9.16/10</p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">Course Work:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 ml-4">
                          <li>IoT Technologies</li>
                          <li>Object Oriented Programming</li>
                          <li>Integrated Circuits Designing</li>
                          <li>Database Management System</li>
                          <li>Project Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => setShowExperience(!showExperience)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-t-lg"
              >
                <div className="flex items-center">
                  <Briefcase className="text-indigo-600 mr-2" size={24} />
                  <span className="text-xl font-semibold text-gray-900">Experience</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${showExperience ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              {showExperience && (
                <div className="p-6 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Founder</h3>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                      </div>
                      <p className="text-gray-600">Flowstack</p>
                      <p className="text-gray-500">December 2024 - Present</p>
                      <p className="text-gray-600">NYC, New York</p>
                      <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>Early-stage startup partnered with Microsoft Startup Founders Hub</li>
                        <li>Building cloud storage aggregation platform</li>
                        <li>Tech Stack: React, TypeScript, Supabase, APIs</li>
                        <li>Implementing LLM and AI Agents for user support</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Data Analyst and Executive</h3>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                      </div>
                      <p className="text-gray-600">TATA Advanced Systems Limited</p>
                      <p className="text-gray-500">July 2023 - July 2024</p>
                      <p className="text-gray-600">Hyderabad, India</p>
                      <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>Analyzed material price variations across 9 plants</li>
                        <li>Developed "Aero-bridge" Source-to-Pay Portal</li>
                        <li>Implemented ETL processes in SAP S/4 HANA</li>
                        <li>Automated user profile management reducing manual tasks by 30%</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Ignite Training & Intern</h3>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                      </div>
                      <p className="text-gray-600">LTIMindtree</p>
                      <p className="text-gray-500">February 2023 - May 2023</p>
                      <p className="text-gray-600">Hyderabad, India</p>
                      <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>Completed training in C#, HTML, CSS, and JavaScript</li>
                        <li>Gained proficiency in .NET Framework</li>
                        <li>Participated in structured learning modules</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Software Intern</h3>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                      </div>
                      <p className="text-gray-600">Integrated Learning Systems (ILS)</p>
                      <p className="text-gray-500">October 2022 - December 2022</p>
                      <p className="text-gray-600">Hyderabad, India</p>
                      <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>Developed use case scenarios for project implementation</li>
                        <li>Created reactive web pages using React and Material UI</li>
                        <li>Collaborated on front-end component integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Code2 size={24} className="text-indigo-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      {skill.icon}
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}