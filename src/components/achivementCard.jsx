const AchievementCard = ({ title, date, icon: Icon, iconColor, link, btnText, description }) => {
    return (
        <div className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-4">
            <div className="relative overflow-hidden rounded-xl bg-gray-800 p-6 shadow-lg
                    transition-all duration-300 hover:scale-105 hover:shadow-2xl
                    hover:bg-gray-700/50 active:scale-95">
                {/* Icon Section */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gray-700/50">
                        <Icon size={40} color={iconColor} strokeWidth={1.5} />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <span className="text-sm text-gray-400">{date}</span>
                    </div>

                    <div className="space-y-2">
                        {/* eslint-disable-next-line react/prop-types */}
                        {description.map((desc, index) => (
                            <p key={index} className="text-gray-300 text-sm">
                                {desc}
                            </p>
                        ))}
                    </div>

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg
                       transition-all duration-300 hover:bg-blue-700
                       active:scale-95 focus:outline-none focus:ring-2
                       focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
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