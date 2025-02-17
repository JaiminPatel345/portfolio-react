/* eslint-disable react/prop-types */
import {useState} from 'react';
import {
  IconBrandDocker,
  IconBrandGithub,
  IconChevronLeft,
  IconChevronRight,
  IconCloud,
  IconCode,
  IconDatabase,
  IconDeviceDesktop,
  IconExternalLink,
  IconLock,
  IconServer,
} from '@tabler/icons-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Abhinavam',
      description: 'Social Media app for Artist ',
      technology: {
        frontEnd: ['React Native', 'Expo', 'Nativewind'],
        backEnd: ['Node Js', 'Express Js', 'Redis'],
        database: ['Mongo Db'],
        auth: ['JWT', 'Oauth'],
        session: ['Redis'],
        packageManager: ['Yarn'],
      },
      time: 'Feb 2025 - Current',
      github: 'https://github.com/JaiminPatel345/Abhinavam',

    },
    {
      title: 'Barter Talk',
      description: 'Real time chat app',
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

  const nextProject = () => {
    setCurrentIndex((
        currentIndex + 1
    ) % projects.length);
  };

  const prevProject = () => {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }

  };

  const TechBadge = ({text}) => (
      <span
          className="px-4 py-1 rounded-full bg-[#363535] text-[#f5f5f5] font-normal m-1.5 transition-all duration-300 hover:scale-105 hover:bg-[#3a3a3a] inline-flex items-center">
            {text}
        </span>
  );

  const TechSection = ({title, items, icon: Icon}) => (
      <div className="mb-3">
        <div className="flex items-center gap-4 text-[#d1d5db] mb-1">
          <div className="p-2 rounded-lg bg-[#4e4d4d]">
            <Icon size={20} stroke={1.5}/>
          </div>
          <span className="font-semibold text-md">{title}</span>
        </div>
        <div className="flex flex-wrap gap-2 pl-11">
          {items?.map((item, index) => (
              <TechBadge key={index} text={item}/>
          ))}
        </div>
      </div>
  );

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

        {/* Project Navigation Indicators */}
        <div className="flex justify-center gap-2 m-4">
          {projects.map((_, index) => (
              <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index ===
                  currentIndex ? 'w-8 bg-primary' : 'w-2 bg-[#4e4d4d]'}`}
              />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Navigation Buttons */}
          <button
              onClick={prevProject}
              className={`absolute left-1 md:left-4 top-24  translate-y-1/2 z-10 bg-[#2e2e2e] p-2  md:p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#3a3a3a] ${currentIndex ===
              0 ? 'opacity-50 cursor-not-allowed' : ' md:hover:scale-110'}`}
          >
            <IconChevronLeft size={24}/>
          </button>

          <button
              onClick={nextProject}
              className={`absolute right-1 md:right-4 top-24 translate-y-1/2 z-10 bg-[#2e2e2e] p-2  md:p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#3a3a3a] ${currentIndex ===
              projects.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'md:hover:scale-110'}`}
              // disabled={}
          >
            <IconChevronRight size={24}/>
          </button>

          {/* Single Project Card */}
          <div className="flex justify-center px-8 md:px-16 relative">

            <div
                className="w-full max-w-3xl bg-[#2e2e2e] rounded-xl shadow-xl transition-all duration-500">
              <div className="p-8 lg:p-12 relative">
                <div className={'absolute right-3 top-3'}>
                  <p>{projects[currentIndex].time}</p>
                </div>
                <div className="text-center mb-4">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {projects[currentIndex].title}
                  </h2>
                  <p className="text-lg text-[#b5b5b5] max-w-2xl mx-auto">
                    {projects[currentIndex].description}
                  </p>
                </div>


                {/* Links */}
                <div
                    className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                  <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-primary btn-md gap-3 hover:scale-105 transition-transform px-6"
                  >
                    <IconBrandGithub size={20} stroke={1.5}/>
                    View Source
                  </a>
                  {projects[currentIndex].live && (
                      <a
                          href={projects[currentIndex].live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-md gap-3 hover:scale-105 transition-transform px-6"
                      >
                        <IconExternalLink
                            size={20}
                            stroke={1.5}
                        />
                        Live Demo
                      </a>
                  )}
                  {projects[currentIndex].apk && (
                      <a
                          href={projects[currentIndex].apk}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-md gap-3 hover:scale-105 transition-transform px-6"
                      >
                        <IconExternalLink
                            size={20}
                            stroke={1.5}
                        />
                        APK link
                      </a>
                  )}
                </div>

                <div
                    className="divider before:bg-[#444444] after:bg-[#444444]"></div>

                <div className="space-y-4 my-4">
                  {projects[currentIndex].technology.frontEnd && (
                      <TechSection
                          title="Frontend Technologies"
                          items={projects[currentIndex].technology.frontEnd}
                          icon={IconDeviceDesktop}
                      />
                  )}
                  {projects[currentIndex].technology.backEnd && (
                      <TechSection
                          title="Backend Stack"
                          items={projects[currentIndex].technology.backEnd}
                          icon={IconServer}
                      />
                  )}
                  {projects[currentIndex].technology.database && (
                      <TechSection
                          title="Database Solutions"
                          items={projects[currentIndex].technology.database}
                          icon={IconDatabase}
                      />
                  )}
                  {projects[currentIndex].technology.auth && (
                      <TechSection
                          title="Authentication"
                          items={projects[currentIndex].technology.auth}
                          icon={IconLock}
                      />
                  )}
                  {projects[currentIndex].technology.deployment && (
                      <TechSection
                          title="Deployment"
                          items={projects[currentIndex].technology.deployment}
                          icon={IconCloud}
                      />
                  )}
                  {projects[currentIndex].technology.ciCd && (
                      <TechSection
                          title="CI/CD"
                          items={projects[currentIndex].technology.ciCd}
                          icon={IconBrandDocker}
                      />
                  )}
                  {projects[currentIndex].technology.others && (
                      <TechSection
                          title="Additional Technologies"
                          items={projects[currentIndex].technology.others}
                          icon={IconCode}
                      />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slide-in {
                    animation: slideIn 1s ease-out forwards;
                }
            `}</style>
      </div>
  );
};

export default Projects;
