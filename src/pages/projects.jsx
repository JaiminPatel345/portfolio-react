/* eslint-disable react/prop-types */
import { useState } from "react"
import {
    IconBrandGithub,
    IconExternalLink,
    IconDatabase,
    IconLock,
    IconServer,
    IconCode,
    IconDeviceDesktop,
    IconBrandDocker,
    IconCloud,
    IconChevronLeft,
    IconChevronRight,
} from "@tabler/icons-react"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const projects = [
        {
            title: "Wanderlust",
            description:
                "A listing website where users can book and add their property.owner can edit and delete their property . other users can give review and rating to the property as well as chat with owner ",
            technology: {
                frontEnd: ["React", "Tailwind"],
                backEnd: ["Node Js", "Express Js"],
                database: ["Mongo Db"],
                auth: ["Firebase"],
                session: ["Redis"],
                packageManager: ["Yarn"],
                deployment: ["Azure", "Vercel"],
                ciCd: null,
                others: ["REST APIs", "Socket.io"],
            },
            github: "https://github.com/JaiminPatel345/wanderlust",
            live: "https://wanderlust-ten.vercel.app/",
        },
        {
            title: "Barter Talk",
            description: "Real time chat app",
            technology: {
                frontEnd: ["React", "Tailwind", "Daisy UI"],
                backEnd: ["Node Js", "Express Js"],
                database: ["Mongo Db"],
                auth: ["JWT", "Crypto"],
                session: ["Redis"],
                packageManager: ["Yarn"],
                deployment: ["Azure", "Vercel"],
                ciCd: null,
                others: ["REST APIs", "Socket.io"],
            },
            github: "https://github.com/JaiminPatel345/BarterTalk",
            live: "https://barter-talk.vercel.app/",
        },
        {
            title: "Health Pie",
            description:
                "Health website where users can track their daily activities and get recommendations based on their health goals and doctor can connect with patients and track their health progress",
            technology: {
                frontEnd: ["EJS", "Bootstrap", "CSS"],
                backEnd: ["Node Js", "Express Js"],
                database: ["Mongo Db"],
                auth: ["JWT"],
                session: null,
                packageManager: ["npm"],
                deployment: ["OnRender"],
                ciCd: null,
                others: ["REST APIs"],
            },
            github: "https://github.com/JaiminPatel345/Health-Pie",
            live: "https://health-pie.onrender.com/",
        },
        {
            title: "GDGC BVM",
            description:
                "As  a Tech gig of Google Developer Groups On Campus BVM , make this awesome GDGC website ",
            technology: {
                frontEnd: ["Next", "Tailwind", "Three.js", "Framer Motion"],
                backEnd: null,
                database: null,
                auth: null,
                session: null,
                packageManager: ["Yarn"],
                deployment: ["Vercel"],
                ciCd: null,
                others: null,
            },
            github: "https://github.com/Naren7874/GDGC",
            live: "https://gdgc-seven.vercel.app/",
        },
    ]

    const nextProject = () => {
        setCurrentIndex((currentIndex + 1) % projects.length)
    }

    const prevProject = () => {
        if(currentIndex == 0){
        setCurrentIndex( projects.length - 1)
        }else
        setCurrentIndex(currentIndex - 1)

    }

    const TechBadge = ({ text }) => (
        <span className="px-4 py-1 rounded-full bg-[#363535] text-[#f5f5f5] font-normal m-1.5 transition-all duration-300 hover:scale-105 hover:bg-[#3a3a3a] inline-flex items-center">
            {text}
        </span>
    )

    const TechSection = ({ title, items, icon: Icon }) => (
        <div className="mb-3">
            <div className="flex items-center gap-4 text-[#d1d5db] mb-1">
                <div className="p-2 rounded-lg bg-[#4e4d4d]">
                    <Icon size={20} stroke={1.5} />
                </div>
                <span className="font-semibold text-md">{title}</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-11">
                {items?.map((item, index) => (
                    <TechBadge key={index} text={item} />
                ))}
            </div>
        </div>
    )

    return (
        <div className="min-h-screen text-[#f5f5f5] py-16 relative">
            <h1 className="text-5xl font-bold text-center mb-20 animate-slide-in">
                My Projects
            </h1>

            {/* Project Navigation Indicators */}
            <div className="flex justify-center gap-2 m-4">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "w-8 bg-primary"
                                : "w-2 bg-[#4e4d4d]"
                        }`}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Navigation Buttons */}
                <button
                    onClick={prevProject}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#2e2e2e] p:3  md:p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#3a3a3a] ${
                        currentIndex === 0
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:scale-110"
                    }`}
                >
                    <IconChevronLeft size={24} />
                </button>

                <button
                    onClick={nextProject}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#2e2e2e] p:3  md:p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#3a3a3a] ${
                        currentIndex === projects.length - 1
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:scale-110"
                    }`}
                    // disabled={}
                >
                    <IconChevronRight size={24} />
                </button>

                {/* Single Project Card */}
                <div className="flex justify-center px-8 md:px-16">
                    <div className="w-full max-w-3xl bg-[#2e2e2e] rounded-xl shadow-xl transition-all duration-500">
                        <div className="p-8 lg:p-12">
                            <div className="text-center mb-4">
                                <h2 className="text-3xl font-bold text-primary mb-4">
                                    {projects[currentIndex].title}
                                </h2>
                                <p className="text-lg text-[#b5b5b5] max-w-2xl mx-auto">
                                    {projects[currentIndex].description}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
                                <a
                                    href={projects[currentIndex].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary btn-md gap-3 hover:scale-105 transition-transform px-6"
                                >
                                    <IconBrandGithub size={20} stroke={1.5} />
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
                            </div>

                            <div className="divider before:bg-[#444444] after:bg-[#444444]"></div>

                            <div className="space-y-4 my-4">
                                {projects[currentIndex].technology.frontEnd && (
                                    <TechSection
                                        title="Frontend Technologies"
                                        items={
                                            projects[currentIndex].technology
                                                .frontEnd
                                        }
                                        icon={IconDeviceDesktop}
                                    />
                                )}
                                {projects[currentIndex].technology.backEnd && (
                                    <TechSection
                                        title="Backend Stack"
                                        items={
                                            projects[currentIndex].technology
                                                .backEnd
                                        }
                                        icon={IconServer}
                                    />
                                )}
                                {projects[currentIndex].technology.database && (
                                    <TechSection
                                        title="Database Solutions"
                                        items={
                                            projects[currentIndex].technology
                                                .database
                                        }
                                        icon={IconDatabase}
                                    />
                                )}
                                {projects[currentIndex].technology.auth && (
                                    <TechSection
                                        title="Authentication"
                                        items={
                                            projects[currentIndex].technology
                                                .auth
                                        }
                                        icon={IconLock}
                                    />
                                )}
                                {projects[currentIndex].technology
                                    .deployment && (
                                    <TechSection
                                        title="Deployment"
                                        items={
                                            projects[currentIndex].technology
                                                .deployment
                                        }
                                        icon={IconCloud}
                                    />
                                )}
                                {projects[currentIndex].technology.ciCd && (
                                    <TechSection
                                        title="CI/CD"
                                        items={
                                            projects[currentIndex].technology
                                                .ciCd
                                        }
                                        icon={IconBrandDocker}
                                    />
                                )}
                                {projects[currentIndex].technology.others && (
                                    <TechSection
                                        title="Additional Technologies"
                                        items={
                                            projects[currentIndex].technology
                                                .others
                                        }
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
    )
}

export default Projects
