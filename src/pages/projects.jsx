/* eslint-disable react/prop-types */
import {IconBrandGithub, IconExternalLink} from '@tabler/icons-react';

const Projects = () => {

  const projects = [
    {
      title: 'Abhinavam',
      description: `Social Media App for Artists.This app is built with production-level standards, ensuring high security and exceptional performance. It utilizes MongoDB aggregation for efficient data processing, implements access and refresh tokens for secure authentication, and supports pagination for seamless content browsing.`,
      technology: {
        frontEnd: ['React Native', 'Expo', 'Nativewind'],
        backEnd: ['Node Js', 'Express Js', 'Redis'],
        database: ['Mongo Db'],
        auth: ['JWT', 'Oauth'],
        session: ['Redis'],
        packageManager: ['Yarn'],
        ciCd: ['EAS Workflows'],
      },
      time: 'Feb 2025 - Current',
      github: 'https://github.com/JaiminPatel345/Abhinavam',

    },
    {
      title: 'Barter Talk',
      description: 'Real time chat app and video calling app',
      technology: {
        frontEnd: ['React', 'Tailwind', 'Daisy UI'],
        backEnd: ['Node Js', 'Express Js'],
        database: ['Mongo Db'],
        auth: ['JWT', 'Crypto'],
        session: ['Redis'],
        packageManager: ['Yarn'],
        deployment: ['Azure', 'Vercel'],
        ciCd: null,
        others: ['REST APIs', 'Socket.io'],
      },
      time: 'Nov 2024 - Dec 2024',
      github: 'https://github.com/JaiminPatel345/BarterTalk',
      live: 'https://barter-talk.vercel.app/',
    },
    {
      title: 'LockSmith',
      description: 'Password Manager App for android and ios ',
      technology: {
        frontEnd: ['React Native CLI', 'React Native Papers', 'Nativewind'],
        database: ['Native Encrypted storage'],
        auth: ['Native Biometrics'],
        packageManager: ['Yarn'],
        others: ['Redux'],

      },
      time: 'Dec 2024 - Jan 2025',
      github: 'https://github.com/JaiminPatel345/locksmith',
      apk: 'https://drive.google.com/drive/folders/1jk1cnW5aRTltLMa6XyVhvZ7VD845Gyrx',

    },
    {
      title: 'Wanderlust',
      description: 'A listing website where users can book and add their property.owner can edit and delete their property . other users can give review and rating to the property as well as chat with owner ',
      technology: {
        frontEnd: ['React', 'Tailwind'],
        backEnd: ['Node Js', 'Express Js'],
        database: ['Mongo Db'],
        auth: ['Firebase'],
        session: ['Redis'],
        packageManager: ['Yarn'],
        deployment: ['Azure', 'Vercel'],
        ciCd: null,
        others: ['REST APIs', 'Socket.io'],

      },
      time: 'Aug 2024 - Nov 2024',
      github: 'https://github.com/JaiminPatel345/wanderlust',
      live: 'https://wanderlust-ten.vercel.app/',
    }, {
      title: 'Health Pie',
      description: 'Health website where users can track their daily activities and get recommendations based on their health goals and doctor can connect with patients and track their health progress',
      technology: {
        frontEnd: ['EJS', 'Bootstrap', 'CSS'],
        backEnd: ['Node Js', 'Express Js'],
        database: ['Mongo Db'],
        auth: ['JWT'],
        session: null,
        packageManager: ['npm'],
        deployment: ['OnRender'],
        ciCd: null,
        others: ['REST APIs'],
      },
      time: 'Aug 2024 - Sep 2024',
      github: 'https://github.com/JaiminPatel345/Health-Pie',
      live: 'https://health-pie.onrender.com/',
    }, {
      title: 'GDGC BVM',
      description: 'As  a Tech gig of Google Developer Groups On Campus BVM , make this awesome GDGC website ',
      technology: {
        frontEnd: ['Next', 'Tailwind', 'Three.js', 'Framer Motion'],
        backEnd: null,
        database: null,
        auth: null,
        session: null,
        packageManager: ['Yarn'],
        deployment: ['Vercel'],
        ciCd: null,
        others: null,

      },
      time: 'Nov 2024',
      github: 'https://github.com/Naren7874/GDGC',
      live: 'https://gdgc-seven.vercel.app/',
    },
  ];

  return (
      <div className="min-h-screen text-[#f5f5f5] py-16 relative p-3 md:p-10"
           id="projects"
      >
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
                  <div className="p-6 md:p-8 relative">
                    <div
                        className="absolute right-4 top-4 text-sm text-gray-400 font-medium">
                      {project.time}
                    </div>

                    <div className="mb-5 pt-4">
                      <h2 className="text-2xl font-bold text-primary mb-3">{project.title}</h2>
                      <p className="text-base text-[#b5b5b5]">{project.description}</p>
                    </div>

                    <div
                        className="divider before:bg-[#444444] after:bg-[#444444] my-4"></div>

                    {/* Tech stack summary */}
                    <div className="mb-5">
                      {project.technology.frontEnd && (
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-gray-300 mb-1">Frontend:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technology.frontEnd.map((tech, idx) => (
                                  <span key={idx}
                                        className="px-3 py-1 text-sm rounded-full bg-[#363535] text-[#f5f5f5]">{tech}</span>
                              ))}
                            </div>
                          </div>
                      )}

                      {project.technology.backEnd && (
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-gray-300 mb-1">Backend:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technology.backEnd.map((tech, idx) => (
                                  <span key={idx}
                                        className="px-3 py-1 text-sm rounded-full bg-[#363535] text-[#f5f5f5]">{tech}</span>
                              ))}
                            </div>
                          </div>
                      )}

                      {project.technology.database && (
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-gray-300 mb-1">Database:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technology.database.map((tech, idx) => (
                                  <span key={idx}
                                        className="px-3 py-1 text-sm rounded-full bg-[#363535] text-[#f5f5f5]">{tech}</span>
                              ))}
                            </div>
                          </div>
                      )}

                      {project.technology.others && (
                          <div>
                            <p className="text-sm font-semibold text-gray-300 mb-1">Other
                              Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technology.others.map((tech, idx) => (
                                  <span key={idx}
                                        className="px-3 py-1 text-sm rounded-full bg-[#363535] text-[#f5f5f5]">{tech}</span>
                              ))}
                            </div>
                          </div>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 mt-5 justify-center">
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-primary gap-2 hover:scale-105"
                      >
                        <IconBrandGithub size={18} stroke={1.5}/>
                        View Source
                      </a>
                      {project.live && (
                          <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary gap-2 hover:scale-105"
                          >
                            <IconExternalLink size={18} stroke={1.5}/>
                            Live Demo
                          </a>
                      )}
                      {project.apk && (
                          <a
                              href={project.apk}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary gap-2 hover:scale-105"
                          >
                            <IconExternalLink size={18} stroke={1.5}/>
                            APK Link
                          </a>
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
