/* eslint-disable react/prop-types */
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
} from "@tabler/icons-react"

const Projects = () => {
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
                ciCd: ["Github Action"],
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
                ciCd: ["Github Action"],
                others: ["REST APIs", "Socket.io"],
            },
            github: "https://github.com/JaiminPatel345/BarterTalk",
            live: null,
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
                deployment: [ "Vercel"],
                ciCd: ["Github Action"],
                others: null,
            },
            github: "https://github.com/Naren7874/GDGC",
            live: "https://gdgc-seven.vercel.app/",
        },
    ]

    const TechBadge = ({ text }) => (
        <span className="px-4 py-1 rounded-full bg-[#363535] text-[#f5f5f5] font-normal m-1.5 transition-all duration-300 hover:scale-105 hover:bg-[#3a3a3a] inline-flex items-center">
            {text}
        </span>
    )

    const TechSection = ({ title, items, icon: Icon }) => (
        <div className="mb-3">
            <div className="flex items-center gap-4 text-[#d1d5db] mb-1">
                <div className="p-2 rounded-lg bg-[#4e4d4d]">
                    <Icon size={16} stroke={1.5} />
                </div>
                <span className="font-semibold text-md">{title}</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-11">
                {items.map((item, index) => (
                    <TechBadge key={index} text={item} />
                ))}
            </div>
        </div>
    )

    return (
        <div className="min-h-screen  text-[#f5f5f5] py-16 px-2">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-20 animate-slide-in">
                    My Projects
                </h1>

                <div className="flex w-full h-full gap-12 flex-wrap ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card  bg-[#2e2e2e] shadow-xl transition-all duration-500  animate-slide-in hover:shadow-[0_0_20px_5px_rgba(200,200,255,0.5)]"
                            style={{
                                animationDelay: `${index * 200}ms`,
                            }}
                        >
                            <div className="card-body p-8 lg:p-12 w-[70vw]">
                                <div className="text-center mb-4">
                                    <h2 className="text-3xl font-bold text-primary mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg text-[#b5b5b5] max-w-2xl mx-auto">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="divider before:bg-[#444444] after:bg-[#444444]"></div>

                                <div className="space-y-4 my-4">
                                    {project.technology.frontEnd && (
                                        <TechSection
                                            title="Frontend Technologies"
                                            items={project.technology.frontEnd}
                                            icon={IconDeviceDesktop}
                                        />
                                    )}
                                    {project.technology.backEnd && (
                                        <TechSection
                                            title="Backend Stack"
                                            items={project.technology.backEnd}
                                            icon={IconServer}
                                        />
                                    )}
                                    {project.technology.database && (
                                        <TechSection
                                            title="Database Solutions"
                                            items={project.technology.database}
                                            icon={IconDatabase}
                                        />
                                    )}
                                    {project.technology.auth && (
                                        <TechSection
                                            title="Authentication"
                                            items={project.technology.auth}
                                            icon={IconLock}
                                        />
                                    )}
                                    {project.technology.deployment && (
                                        <TechSection
                                            title="Deployment"
                                            items={
                                                project.technology.deployment
                                            }
                                            icon={IconCloud}
                                        />
                                    )}
                                    {project.technology.ciCd && (
                                        <TechSection
                                            title="CI/CD"
                                            items={project.technology.ciCd}
                                            icon={IconBrandDocker}
                                        />
                                    )}
                                    {project.technology.others && (
                                        <TechSection
                                            title="Additional Technologies"
                                            items={project.technology.others}
                                            icon={IconCode}
                                        />
                                    )}
                                </div>

                                <div className="flex justify-center gap-6 mt-2 flex-wrap">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline btn-primary btn-md gap-3 hover:scale-105 transition-transform px-4"
                                    >
                                        <IconBrandGithub
                                            size={16}
                                            stroke={1.5}
                                        />
                                        View Source
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-md gap-3 hover:scale-105 transition-transform px-4"
                                        >
                                            <IconExternalLink
                                                size={16}
                                                stroke={1.5}
                                            />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
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
                .card:hover {
                    box-shadow: 0 0 20px 5px rgba(200, 200, 255, 0.5);
                }
            `}</style>
        </div>
    )
}

export default Projects
