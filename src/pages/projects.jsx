import {IconBrandGithub, IconExternalLink} from '@tabler/icons-react';
import {MarkdownRenderer, markdownStyles} from '../components/ui/Markdown.jsx';
import {LinkPreview} from '../components/ui/LinkPreview.jsx';


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
      github: 'https://github.com/Naren7874/GDGC',
      live: 'https://gdgc-bvm.vercel.app/',
    },
  ];

  return (
      <div className="min-h-screen text-[#f5f5f5] py-16 relative p-3 md:p-10"
           id="projects">
        <style>{markdownStyles}</style>
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            My Projects
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            Projects showcasing my skills and creativity.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div key={index}
                     className="bg-[#2e2e2e] rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <div className="w-full h-48 overflow-hidden rounded-t-xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 relative">
                    <div
                        className="absolute right-4 top-4 text-sm text-gray-400 font-medium">
                      {project.time}
                    </div>

                    <div className="mb-5 pt-4">
                      <h2 className="text-2xl font-bold text-primary mb-3">{project.title}</h2>
                      <p className="text-base text-[#b5b5b5] font-medium">{project.description}</p>

                      <ul className="mt-3 space-y-2">
                        {project.points.map((point, idx) => (
                            <li key={idx}
                                className="text-sm text-[#b5b5b5] flex">
                              <span className="mr-2">•</span>
                              <MarkdownRenderer>
                                {point}
                              </MarkdownRenderer>
                            </li>
                        ))}
                      </ul>
                    </div>

                    <div
                        className="divider before:bg-[#444444] after:bg-[#444444] my-4"></div>

                    {/* Technologies */}
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-gray-300 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technology.map((tech, idx) => (
                            <span key={idx}
                                  className="px-3 py-1 text-sm rounded-full bg-[#363535] text-[#f5f5f5]">
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>

                    {/* Links with LinkPreview */}
                    <div className="flex flex-wrap gap-3 mt-5 justify-center">
                      <LinkPreview url={project.github}>
                        <button
                            className="btn btn-outline btn-primary gap-2 hover:scale-105">
                          <IconBrandGithub size={18} stroke={1.5}/>
                          View Source
                        </button>
                      </LinkPreview>

                      {project.live && (
                          <LinkPreview url={project.live}>
                            <button
                                className="btn btn-primary gap-2 hover:scale-105">
                              <IconExternalLink size={18} stroke={1.5}/>
                              Live Demo
                            </button>
                          </LinkPreview>
                      )}

                      {project.apk && (
                          <LinkPreview url={project.apk}>
                            <button
                                className="btn btn-primary gap-2 hover:scale-105">
                              <IconExternalLink size={18} stroke={1.5}/>
                              APK Link
                            </button>
                          </LinkPreview>
                      )}
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