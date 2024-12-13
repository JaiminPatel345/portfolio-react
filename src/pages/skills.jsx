/* eslint-disable react/prop-types */
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import {
    IconDeviceDesktop,
    IconServer2,
    IconDatabase,
    IconTools,
    IconCloud,
    IconBrain,
}                                            from "@tabler/icons-react";

const mySills = [
    {
    title: "Frontend", icon: IconDeviceDesktop, skills: [{
        name: "React", photo: "/assets/react.jpg", progress: 80,
    }, {
        name: "HTML", photo: "/assets/html.jpg", progress: 95,
    }, {
        name: "CSS", photo: "/assets/css.jpg", progress: 80,
    }, {
        name: "JavaScript", photo: "/assets/javascript.jpg", progress: 90,
    }, {
        name: "Tailwind", photo: "/assets/tailwind.jpg", progress: 90,
    },],
}, {
    title: "Backend", icon: IconServer2, skills: [{
        name: "Java", photo: "/assets/java.jpg", progress: 95,
    }, {
        name: "Python", photo: "/assets/python.jpg", progress: 60,
    }, {
        name: "Node.js", photo: "/assets/nodejs.jpg", progress: 90,
    }, {
        name: "Express.js", photo: "/assets/expressjs.jpg", progress: 90,
    }, {
        name: "Spring Boot", photo: "/assets/spring.jpg", progress: 70,
    }, {
        name: "C++", photo: "/assets/cpp.jpg", progress: 65,
    }, {
        name: "C", photo: "/assets/c.jpg", progress: 60,
    },],
}, {
    title: "Database", icon: IconDatabase, skills: [{
        name: "MongoDB", photo: "/assets/mongodb.jpg", progress: 80,
    }, {
        name: "PostgreSQL", photo: "/assets/pgadmin.jpg", progress: 70,
    }, {
        name: "MySQL", photo: "/assets/mysql.jpg", progress: 70,
    }, {
        name: "Firebase", photo: "/assets/firebase.jpg", progress: 50,
    },],
}, {
    title: "Tools & DevOps", icon: IconTools, skills: [{
        name: "Git", photo: "/assets/git.jpg", progress: 90,
    }, {
        name: "Docker", photo: "/assets/docker.jpg", progress: 85,
    }, {
        name: "Kubernetes", photo: "/assets/Kubernetes.jpg", progress: 50,
    }, {
        name: "Linux", photo: "/assets/linux.jpg", progress: 70,
    }, {
        name: "Bash", photo: "/assets/bash.jpg", progress: 65,
    },],
}, {
    title: "Cloud & Services", icon: IconCloud, skills: [{
        name: "Azure", photo: "/assets/azure.jpg", progress: 40,
    }, {
        name: "GCP", photo: "/assets/gcp.jpg", progress: 30,
    }, {
        name: "Socket.io", photo: "/assets/socketio.jpg", progress: 70,
    }, {
        name: "ONDC", photo: "/assets/ondc.jpg", progress: 50,
    },],
}, {
    title: "Core Skills", icon: IconBrain, skills: [{
        name: "DSA", photo: "/assets/dsa.jpg", progress: 90,
    }, {
        name: "Problem Solving", photo: "/assets/ps.jpg", progress: 90,
    }, {
        name: "RESTful APIs", photo: "/assets/api.jpg", progress: 90,
    }, {
        name: "Networks & Security",
        photo: "/assets/security.jpg",
        progress: 75,
    }, {
        name: "Deep Learning", photo: "/assets/dl.jpg", progress: 60,
    },],
},];

const ThreeDCard = ( {name, photo, progress, Icon} ) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-neutral-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-64 h-80 rounded-xl p-6 border">
                {/* Category Badge */}
                <CardItem
                    translateZ="20"
                    className="absolute top-3 right-3 bg-black/[0.8] dark:bg-white/[0.8] px-3 py-1 rounded-full"
                >
                    <Icon className="w-4 h-4 text-white dark:text-black"/>
                </CardItem>

                {/* Skill Image */}
                <CardItem
                    translateZ="100"
                    className="w-full flex justify-center items-center h-32 mb-4 "
                >
                    <img
                        src={photo}
                        className="w-full h-24 object-contain"
                        alt={name}
                    />
                </CardItem>

                {/* Skill Name */}
                <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-center text-neutral-600 dark:text-white mb-6"
                >
                    {name}
                </CardItem>

                {/* Progress Circle */}
                <CardItem translateZ="80" className="w-full flex ">
                    <div className="relative w-full  flex gap-5 items-center">
                        <progress
                            className="progress progress-info "
                            value={progress}
                            max="100"
                        ></progress>
                        <p>{progress}</p>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

const SkillCategory = ( {category} ) => {
    return (
        <div className="mb-12 bg-neutral-900 p-4">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 ">
                <category.icon
                    className="w-8 h-8 text-emerald-500"
                    strokeWidth={1.5}
                />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
                    {category.title}
                </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map( ( skill, index ) => (
                    <ThreeDCard
                        key={`${category.title}-${index}`}
                        name={skill.name}
                        photo={skill.photo}
                        progress={skill.progress}
                        category={category.title}
                        Icon={category.icon}
                    />
                ) )}
            </div>
        </div>
    );
};

const SkillSet = () => {
    return (
        <div className="w-full font-sans px-3 md:px-10" id="skills">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    Skill Set
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    Tools and technologies I excel at.
                </p>
                <div className="mt-24 ">
                    {mySills.map( ( category, index ) => (
                        <SkillCategory key={index} category={category}/>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default SkillSet;
