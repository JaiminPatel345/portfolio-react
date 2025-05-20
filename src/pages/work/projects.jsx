import {IconBrandGithub, IconExternalLink} from '@tabler/icons-react';
import {MarkdownRenderer, markdownStyles} from '../../components/ui/Markdown.jsx';
import { useRef } from "react";

const Projects = () => {
  const projects = [
    {
      title: 'ABHINAVAM',
      image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1746389403/placeholder-image_rkf7ej.png',
      description: `Personalized social media platform tailored for artists and creative professionals.`,
      points: [
        'Built a **production-grade app** with a strong focus on **performance, efficiency, and security**.',
        'Implemented **secure authentication** with **access and refresh tokens**.',
        'Optimized data processing with **MongoDB aggregation pipelines**.',
        'Created **responsive UI** with smooth animations and intuitive navigation.',
      ],
      technology: [
        'TypeScript',
        'React Native Expo',
        'Redux',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redis',
        'JWT',
        'Cloudinary',
        'Git',
      ],
      time: 'March - April 2025',
      github: 'https://github.com/JaiminPatel345/Abhinavam',
    },
    {
      title: 'WANDERLUST',
      image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1746385580/Wanderlust_pp6xrp.png',
      description: 'Travel & Accommodation Booking Platform',
      points: [
        'Full-stack web application where users can explore and book unique accommodations.',
        'Features include a **beautiful UI**, search functionality, **pagination, MongoDB Aggregation**.',
        '**Interactive Rive animations** in Login & Sign up pages [Try](https://wanderlust.jaimin-detroja.tech/login).',
        'Implemented property owner dashboard with edit, delete and **Reset/Forgot Password link in Email** capabilities.',
      ],
      technology: [
        'JavaScript',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'Redis',
        'OAuth2',
        'Zustand',
        'Rive',
        'Cloudinary',
        'Git',
        'Azure',
      ],
      time: 'Aug - Dec 2023',
      github: 'https://github.com/JaiminPatel345/wanderlust',
      live: 'https://wanderlust.jaimin-detroja.tech/',
    },
    {
      title: 'BARTER TALK',
      image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1746385904/1cda5f27-d3df-4461-87ec-2053208c3270.png',
      description: 'Real-time Chat & Video Calling Application',
      points: [
        'Developed a comprehensive communication platform with **text and video** capabilities.',
        'Implemented **real-time** messaging with instant delivery confirmation.',
        'Created secure authentication flow with **OAuth2 - Login with Google**.',
        'Built **responsive UI** that adapts to various device sizes.',
      ],
      technology: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redis',
        'Socket.io',
        'Peer.js',
        'OAuth2',
        'Cloudinary',
        'Git',
        'Azure',

      ],
      time: 'Nov - Dec 2024',
      github: 'https://github.com/JaiminPatel345/BarterTalk',
      live: 'https://barter-talk.vercel.app/',
    },
    {
      title: 'LOCKSMITH',
      image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1746389693/fc3ac6d1-1c37-4e15-bb4f-b45013fa2ce4.png',
      description: 'Secure Password Manager for Android & iOS',
      points: [
        'Built a cross-platform mobile application for **securely storing** sensitive credentials.',
        'Implemented **biometric authentication** for enhanced security.',
        'Utilized native **encrypted storage** to protect user data.',
        'Created intuitive UI for easy password management and retrieval.',
      ],
      technology: [
        'React Native CLI',
        'Nativewind',
        'React Native Papers',
        'Native Encrypted Storage',
        'Native Biometrics',
        'Redux',
      ],
      time: 'Dec 2024 - Jan 2025',
      github: 'https://github.com/JaiminPatel345/locksmith',
      apk: 'https://drive.google.com/drive/folders/1jk1cnW5aRTltLMa6XyVhvZ7VD845Gyrx',
    },
    {
      title: 'HEALTH PIE',
      image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1746388335/497cb203-d7a7-42bc-a47e-94b21fc61aa6.png',
      description: 'Health Tracking & Doctor-Patient Connection Platform',
      points: [
        'Developed a comprehensive health management application for patients and doctors.',
        'Created **personalized health** recommendations based on user goals and activities.',
        'Implemented secure doctor-patient connection for **remote health monitoring**.',
        'Built dashboard for **tracking daily activities and health metrics**.',
      ],
      technology: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'EJS',
        'Bootstrap',
        'JWT',
        'REST APIs',
        'Cloudinary',
        'Git',
      ],
      time: 'Aug - Sep 2024',
      github: 'https://github.com/JaiminPatel345/Health-Pie',
      live: 'https://health-pie.onrender.com/',
    },
    {
      title: 'GDGC BVM',
      image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1746386650/40aa35df-1fb5-4a65-925b-41f1055480a8.png',
      description: 'Website for Google Developer Groups On Campus BVM',
      points: [
        'Designed and developed the **official website for GDGC BVM** as a Tech Gig member.',
        'Created **immersive 3D animations** using **Three.js** for engaging user experience.',
        'Built **responsive layout** that works flawlessly across all device sizes.',
      ],
      technology: [
        'Next.js',
        'Tailwind CSS',
        'Three.js',
        'Framer Motion',
        'Git',
      ],
      time: 'Nov 2024',
      github: 'https://github.com/GDG-On-Campus-BVM/GDG-On-Campus-BVM-Website',
      live: 'https://gdg-on-campus-bvm.vercel.app',
    },
  ];

  const containerRef = useRef(null);

  return (
    <div 
      className="min-h-screen text-[#f5f5f5] py-8 md:py-16 relative p-3 md:p-10"
      id="projects"
      ref={containerRef}
    >
      <style>{markdownStyles}</style>
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Personal Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Projects showcasing my skills and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Projects with staggered layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              {/* Project date tag */}
              <div className="absolute -top-4 right-4 md:right-8 bg-neutral-100 dark:bg-neutral-800/50 px-4 py-1 rounded-full z-10">
                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">
                  {project.time}
                </span>
              </div>
              
              {/* Project card with offset image and content */}
              <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden p-5 md:p-8 border border-neutral-200 dark:border-neutral-800">
                
                {/* Project title */}
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  {/* Project image */}
                  <div className="w-full lg:w-2/5 h-[250px] md:h-[280px] rounded-xl shadow-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  {/* Project content */}
                  <div className="w-full lg:w-3/5">
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 md:p-6 shadow-sm">
                      <p className="text-neutral-800 dark:text-neutral-200 mb-4">
                        {project.description}
                      </p>
                      
                      <ul className="space-y-2 mb-5">
                        {project.points.map((point, idx) => (
                          <li key={idx} className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 flex">
                            <span className="mr-2 text-primary">•</span>
                            <MarkdownRenderer>{point}</MarkdownRenderer>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Technologies */}
                      <div className="mb-5">
                        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technology.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 text-xs md:text-sm rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Links */}
                      <div className="flex flex-wrap gap-4 justify-center">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <button className="btn btn-outline btn-primary btn-sm md:btn-md gap-2 hover:scale-105">
                            <IconBrandGithub size={16} stroke={1.5}/>
                            Source
                          </button>
                        </a>

                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary btn-sm md:btn-md gap-2 hover:scale-105">
                              <IconExternalLink size={16} stroke={1.5}/>
                              Demo
                            </button>
                          </a>
                        )}

                        {project.apk && (
                          <a href={project.apk} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary btn-sm md:btn-md gap-2 hover:scale-105">
                              <IconExternalLink size={16} stroke={1.5}/>
                              APK
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;