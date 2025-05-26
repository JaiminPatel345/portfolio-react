import {IconBrandGithub, IconExternalLink} from '@tabler/icons-react';
import {MarkdownRenderer, markdownStyles} from '../../components/ui/Markdown.jsx';
import { useRef } from "react";
import { motion } from "framer-motion";

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

  // Helper function to get the primary link for a project
  const getProjectPrimaryLink = (project) => {
    return project.live || project.github || project.apk || null;
  };

  return (
    <div 
      className="min-h-screen bg-white dark:bg-neutral-900 py-8 md:py-16 relative p-3 md:p-10 transition-colors duration-300"
      id="projects"
      ref={containerRef}
    >
      <style>{markdownStyles}</style>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white max-w-4xl">
          My Personal Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl">
          A showcase of my technical expertise and creative problem-solving abilities through various personal projects.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Projects with staggered layout */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const primaryLink = getProjectPrimaryLink(project);
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Project date tag */}
                <div className="absolute -top-4 right-4 md:right-8 bg-neutral-100 dark:bg-neutral-800/50 px-4 py-1 rounded-full z-10 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">
                    {project.time}
                  </span>
                </div>
                
                {/* Project card with offset image and content */}
                <div 
                  className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden p-5 md:p-8 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => primaryLink && window.open(primaryLink, '_blank')}
                >
                  
                  {/* Project title */}
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* Project image */}
                    <div className="w-full lg:w-2/5 h-[250px] md:h-[280px] rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Project details */}
                    <div className="w-full lg:w-3/5 flex flex-col justify-between">
                      <div>
                        <p className="text-base text-neutral-700 dark:text-neutral-300 mb-3">
                          {project.description}
                        </p>
                        
                        <div className="mt-4">
                          <h4 className="text-sm uppercase font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">Key Features</h4>
                          <ul className="space-y-3">
                            {project.points.map((point, i) => (
                              <li key={i} className="text-neutral-800 dark:text-neutral-200 flex items-start">
                                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                                <div className="flex-grow">
                                  <MarkdownRenderer markdown={point} />
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-sm uppercase font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.technology.map((tech, i) => (
                            <span 
                              key={i} 
                              className="inline-flex text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-3 mt-2">
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all text-base font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <IconBrandGithub className="w-5 h-5" />
                              <span>GitHub</span>
                            </a>
                          )}
                          
                          {project.live && (
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all text-base font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <IconExternalLink className="w-5 h-5" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          
                          {project.apk && (
                            <a 
                              href={project.apk} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-400 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all text-base font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <IconExternalLink className="w-5 h-5" />
                              <span>APK</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;