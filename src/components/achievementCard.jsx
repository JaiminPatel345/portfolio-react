import React from 'react';
import { Code, Trophy, Star, Brain, Award } from 'lucide-react';

const AchievementCard = ({
                             title,
                             date,
                             icon,
                             iconColor,
                             link,
                             btnText,
                             description
                         }) => {
    const IconComponent = {
        Code: Code,
        Trophy: Trophy,
        Star: Star,
        Brain: Brain,
        Award: Award
    }[icon];

    return (
        <div className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-4 ">
            <div
                className="relative overflow-hidden rounded-xl bg-neutral-900 p-6 md:p-10 shadow-lg min-h-[320px]  md:min-h-[350px]
                    transition-all duration-300 hover:scale-105 hover:shadow-2xl
                    hover:bg-neutral-800 active:scale-95"
            >
                {/* Icon Section */}
                <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gray-700/50`}>
                        {IconComponent && (
                            <IconComponent
                                size={24}
                                color={iconColor}
                            />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-primary">{title}</h3>
                        {date && <span className="text-sm text-gray-400">{date}</span>}
                    </div>

                    <ul className="space-y-2">
                        {description.map((desc, index) => (
                            <li
                                key={index}
                                className="text-gray-300 text-sm list-disc"
                            >
                                {desc}
                            </li>
                        ))}
                    </ul>

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 btn btn-outline btn-primary btn-md gap-3 hover:scale-105 transition-transform px-6"
                            
                        >
                            {btnText || 'View Details'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;