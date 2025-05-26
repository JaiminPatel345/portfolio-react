/* eslint-disable react/prop-types */
import  { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Timeline = ({ experiences }) => {
    const ref = useRef(null)
    const containerRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect()
            setHeight(rect.height)
        }
    }, [ref])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div className="w-full font-sans px-3 md:px-10 relative" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white max-w-4xl">
                    Professional Experience
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-2xl">
                    A timeline of my professional journey and growth
                </p>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row md:justify-start pt-10 md:pt-40 md:gap-16 relative mb-16 md:mb-6"
                    >
                        {/* Left side - Date and Duration (Positioned differently on mobile) */}
                        <div className="md:sticky flex flex-col z-20 md:top-40 self-start md:w-48 mb-5 md:mb-0">
                            <div className="pl-16 md:pl-12">
                                <div className="text-base font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-4 py-1 rounded-full inline-block md:block">
                                    {experience.startDate} -{" "}
                                    {experience.endDate}
                                </div>
                                {experience.duration && (
                                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 ml-2">
                                        {experience.duration}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="relative pl-16 pr-4 md:pl-0 md:pr-4 w-full">
                            <div className="bg-white dark:bg-neutral-800 rounded-xl p-5 md:p-7 shadow-lg">
                                <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start md:items-center mb-5 md:mb-6">
                                    <a href={experience.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                        <div className="cursor-pointer">
                                            <img
                                                src={experience.logo}
                                                alt={`${experience.name} logo`}
                                                className="h-20 w-20 md:h-24 md:w-24 object-contain rounded-lg shadow-sm"
                                            />
                                        </div>
                                    </a>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-primary">
                                            {experience.role}
                                        </h3>
                                        <a href={experience.link} target="_blank" rel="noopener noreferrer">
                                            <span className="text-base md:text-lg text-blue-400 hover:text-blue-300 hover:underline">
                                                {experience.name}
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-4 md:space-y-5 mb-5 md:mb-6">
                                    <h4 className="font-semibold text-base md:text-lg text-neutral-900 dark:text-neutral-100">
                                        Description:
                                    </h4>
                                    <ul className="list-disc pl-4 space-y-2 md:space-y-3">
                                        {experience.description.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm md:text-base text-neutral-700 dark:text-neutral-300"
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                              {experience.learnings && (<div className="space-y-4 md:space-y-5">
                                <h4 className="font-semibold text-base md:text-lg text-neutral-900 dark:text-neutral-100">
                                  Key Learnings:
                                </h4>
                                <ul className="list-disc pl-4 space-y-2 md:space-y-3">
                                  {experience.learnings.map(
                                      (learning, idx) => (
                                          <li
                                              key={idx}
                                              className="text-sm md:text-base text-neutral-700 dark:text-neutral-300"
                                          >
                                            {learning}
                                          </li>
                                      ),
                                  )}
                                </ul>
                              </div>)}
                            </div>
                        </div>
                        
                    </div>
                ))}
                
                {/* Timeline vertical line */}
                <div
                    style={{
                        height: height + "px",
                        marginLeft: "-1.5px"
                    }}
                    className="absolute left-6 md:left-0 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Timeline
