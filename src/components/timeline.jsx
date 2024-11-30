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
        offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div className="w-full font-sans px-3 md:px-10" ref={containerRef}>
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    Professional Experience
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    A timeline of my professional journey and growth
                </p>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        {/* Left side - Date and Duration */}
                        <div className="sticky flex flex-col z-40 top-40 self-start w-48">
                            <div className="h-3 absolute left-3 w-3 rounded-full bg-blue-500" />
                            <div className="pl-10">
                                <div className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                                    {experience.startDate} -{" "}
                                    {experience.endDate}
                                </div>
                                {experience.duration && (
                                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {experience.duration}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="relative pl-4 pr-4 w-full">
                            <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                                    <a
                                        href={experience.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={experience.logo}
                                            alt={`${experience.name} logo`}
                                            className="h-24 w-24 object-contain"
                                        />
                                    </a>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary">
                                            {experience.role}
                                        </h3>
                                        <a
                                            href={experience.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-white"
                                        >
                                            {experience.name}
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <h4 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                                        Description:
                                    </h4>
                                    <ul className="list-disc pl-4 space-y-2">
                                        {experience.description.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-neutral-700 dark:text-neutral-300"
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
                                        Key Learnings:
                                    </h4>
                                    <ul className="list-disc pl-4 space-y-2">
                                        {experience.learnings.map(
                                            (learning, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-neutral-700 dark:text-neutral-300"
                                                >
                                                    {learning}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Timeline
