import {markdownStyles} from '../../components/ui/Markdown.jsx';
import {useRef, useState} from 'react';
import {motion} from 'framer-motion';
import ProjectModal from '../../components/ui/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            title: 'Quizzer',
            image: 'assets/quizzer.png',
            description: `Ai powered quiz microservice application that generates quizzes based on user-defined topics and difficulty levels.`,
            points: [
                `Developed a backend only Typescript Node.js microservice to generate quizzes using Groq and Gemini AI.`,
                `Implemented production-grade practices and architecture, including MongoDB aggregation, rate limiting,
and pagination.`,
                ` Adaptive Learning Experience with real time difficulty adjustment based on user performance.`,
                `Leaderboards & Analytics to track user performance and foster competition.`,
            ],
            technology: [
                'TypeScript',
                'Node.js',
                'Express.js',
                'MongoDB',
                'JWT',
                'Docker',
                'Azure',
            ],
            time: 'Sept 2025',
            github: 'https://github.com/JaiminPatel345/quizzer',
        },
        {
            title: 'FACE ANONYMIZER',
            image: 'https://res.cloudinary.com/dm4xqk12g/image/upload/v1753207130/face_anonymiser_otbhjq.png',
            description: `Real-time Face Blurring`,
            points: [
                'Captures input from the webcam and outputs a video stream with blurred faces in real time',
            ],
            technology: [
                'Python',
                'OpenCV',
                'MediaPipe',
                'Git',
            ],
            time: 'May 2025',
            github: 'https://github.com/JaiminPatel345/face-anonymizer',
        },
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
                'Node.js',
                'MongoDB',
                'Redux',
                'Express.js',
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
                'MongoDB',
                'OAuth2',
                'Express.js',
                'Tailwind CSS',
                'Redis',
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
                'Node.js',
                'MongoDB',
                'Socket.io',
                'Express.js',
                'Redis',
                'Tailwind CSS',
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
            image: 'assets/locksmith.png',
            description: 'Secure Password Manager for Android & iOS',
            points: [
                'Built a cross-platform mobile application for **securely storing** sensitive credentials.',
                'Implemented **biometric authentication** for enhanced security.',
                'Utilized native **encrypted storage** to protect user data.',
                'Created intuitive UI for easy password management and retrieval.',
            ],
            technology: [
                'React Native CLI',
                'Redux',
                'Nativewind',
                'React Native Papers',
                'Native Encrypted Storage',
                'Native Biometrics',
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
            // live: 'https://health-pie.onrender.com/',
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
            className="min-h-screen bg-white dark:bg-neutral-900 py-8 md:py-16 relative p-3 md:p-10 transition-colors duration-300"
            id="projects"
            ref={containerRef}
        >
            <style>{markdownStyles}</style>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white max-w-4xl">
                    My Personal Projects
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl">
                    A showcase of my technical expertise through various
                    personal
                    projects.
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 relative">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true, margin: '-100px'}}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div
                                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </div>

                                {/* Project Info */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div
                                        className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span
                                            className="text-sm text-neutral-500 dark:text-neutral-400">
                      {project.time.split(' - ')[0]}
                    </span>
                                    </div>

                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-2 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies Preview */}
                                    <div
                                        className="flex flex-wrap gap-1.5 mb-4">
                                        {project.technology.slice(0, 3).
                                            map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                                                >
                        {tech}
                      </span>
                                            ))}
                                        {project.technology.length > 3 && (
                                            <span
                                                className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300">
                        +{project.technology.length - 3}
                      </span>
                                        )}
                                    </div>

                                    {/* Read More Indicator */}
                                    <div
                                        className="mt-auto text-blue-500 dark:text-blue-400 text-sm font-medium flex items-center gap-1 transition-all">
                                        <span>Read more</span>
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M9 5l6 7-6 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;