import  { useState, useRef } from 'react';
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { ChevronDown, ChevronUp } from 'lucide-react';
import getSkillIcon from '../utils/getSkillIcon';

const skills = {
    advanced: [
        { name: "React" },
        { name: "Tailwind" },
        { name: "JavaScript" },
        { name: "CSS" },
        { name: "HTML" },
        { name: "DaisyUI" },
        { name: "Material UI" },
        { name: "Spring" },
        { name: "Spring Boot" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "RESTful APIs" },
        { name: "Git" },
        { name: "Docker" },
        { name: "Java" },
        { name: "DSA" },
        { name: "Problem Solving" }
    ],
    intermediate: [
        { name: "Firebase" },
        { name: "MySQL" },
        { name: "Socket.io" },
        { name: "Azure" },
        { name: "Linux" },
        { name: "C++" },
        { name: "Python" }
    ],
    familiar: [
        { name: "GCP" },
        { name: "Kubernetes" },
        { name: "ONDC" },
        { name: "C" },
        { name: "OpenCV" }
    ]
};

const SkillCard = ({ name }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-neutral-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1]  min-h-32 w-64 rounded-xl p-6 border flex  justify-center items-center">
                <CardItem
                    translateZ="100"
                    className="w-full flex justify-center items-center "
                >
                   <div className={`  `}>
                       {getSkillIcon(name)}
                   </div>
                </CardItem>
                <CardItem
                    translateZ="50"
                    className=" w-full text-2xl font-bold text-center text-neutral-600 dark:text-white"
                >
                    {name}
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

const SkillCategory = ({ title, skills }) => {
    const [showAll, setShowAll] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const buttonRef = useRef(null);

    const displayedSkills = showAll ? skills : skills.slice(0, 4);

    const handleShowMore = () => {
        setShowAll(!showAll);
        if (showAll && buttonRef.current) {
            setTimeout(() => {
                buttonRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 0);
        }
    };

    return (
        <div className="mb-3 bg-neutral-900 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                    {isCollapsed ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
                </button>
            </div>

            {!isCollapsed && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {displayedSkills.map((skill, index) => (
                            <SkillCard
                                key={`${title}-${index}`}
                                name={skill.name}
                            />
                        ))}
                    </div>

                    {skills.length > 3 && (
                        <div className="flex justify-center mt-7 mb-3" ref={buttonRef}>
                            <button
                                onClick={handleShowMore}
                                className="bg-primary hover:bg-primary/70 text-white px-6 py-2 rounded-full transition-colors"
                            >
                                {showAll ? 'Show Less' : `Show ${skills.length - 3} More`}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

const SkillSet = () => {
    return (
        <div className="w-full font-sans px-3 md:px-10" id="skills">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white">
                    Skill Set
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    Technologies I work with, categorized by proficiency level
                </p>
                <div className="mt-24">
                    <SkillCategory title="Advanced" skills={skills.advanced} />
                    <SkillCategory title="Intermediate" skills={skills.intermediate} />
                    <SkillCategory title="Familiar" skills={skills.familiar} />
                </div>
            </div>
        </div>
    );
};

export default SkillSet;