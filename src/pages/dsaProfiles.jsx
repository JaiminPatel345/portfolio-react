/* eslint-disable react/prop-types */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    IconBrandLeetcode,
    IconBrandCodepen,
    // IconBrandCodesandbox,
    // IconBrandHackerrank,
    IconExternalLink,
    IconX,
    IconStar,
} from "@tabler/icons-react"

// LeetCode Detail Modal Component
const LeetCodeDetailModal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null

    const totalSolved = data.solved.easy + data.solved.medium + data.solved.hard

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 w-full max-w-4xl rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90vh] relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
                >
                    <IconX size={24} />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-6 sm:mb-8">
                    <IconBrandLeetcode
                        size={48}
                        className="text-orange-500 mb-4 sm:mb-0"
                    />
                    <div className="text-center sm:text-left">
                        <div className="flex flex-col gap-2 ">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                LeetCode Profile
                            </h2>
                            <a
                                href={data.url}
                                className="flex gap-3  hover:underline items-center text-xl"
                                target="_blank"
                            >
                                Show more on LeetCode
                                <IconExternalLink stroke={2} />
                            </a>
                        </div>
                        <p className="text-gray-400">
                            Total Problems Solved: {totalSolved}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {["easy", "medium", "hard"].map((difficulty) => (
                        <div
                            key={difficulty}
                            className="bg-gray-900 rounded-xl p-4 sm:p-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
                                    <svg
                                        viewBox="0 0 36 36"
                                        className="w-full h-full"
                                    >
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="16"
                                            fill="none"
                                            stroke="#232323"
                                            strokeWidth="3"
                                        />
                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="16"
                                            fill="none"
                                            stroke={
                                                difficulty === "easy"
                                                    ? "#22c55e"
                                                    : difficulty === "medium"
                                                    ? "#f97316"
                                                    : "#ef4444"
                                            }
                                            strokeWidth="3"
                                            strokeDasharray={`${
                                                (data.solved[difficulty] /
                                                    data.total[difficulty]) *
                                                100
                                            }, 100`}
                                            transform="rotate(-90 18 18)"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                                        <span className="text-xl sm:text-2xl font-bold text-white">
                                            {data.solved[difficulty]}
                                        </span>
                                        <span className="text-sm text-gray-400 capitalize">
                                            {difficulty}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-white text-sm sm:text-base">
                                    {data.solved[difficulty]} /{" "}
                                    {data.total[difficulty]}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {(
                                        (data.solved[difficulty] /
                                            data.total[difficulty]) *
                                        100
                                    ).toFixed(1)}
                                    %
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                            Acceptance Rate
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-green-500">
                            {data.acceptanceRate}%
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                            Contest Rating
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-blue-500">
                            {data.contestRating}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                            Top
                        </h3>
                        <p className="text-xl sm:text-2xl font-bold text-orange-500">
                            {data.top}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
// CodeChef Detail Modal Component
const CodeChefDetailModal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 w-full max-w-4xl rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-y-auto max-h-[90vh]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
                >
                    <IconX size={24} />
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-6 sm:mb-8">
                    <IconBrandCodepen
                        size={48}
                        className="text-blue-500 mb-4 sm:mb-0"
                    />
                    <div className="flex flex-col gap-2 ">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                CodeChef Profile
                            </h2>
                            <a
                                href={data.url}
                                className="flex gap-3  hover:underline items-center text-xl"
                                target="_blank"
                            >
                                Show more on CodeChef
                                <IconExternalLink stroke={2} />
                            </a>
                        <p className="text-gray-400">
                            Total Problems Solved: {data.solved}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5 , 6 ,7].map((star) => (
                            <IconStar
                                key={star}
                                size={32}
                                className={
                                    star <= data.stars
                                        ? "text-yellow-400"
                                        : "text-gray-600"
                                }
                                fill={
                                    star <= data.stars ? "currentColor" : "none"
                                }
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Total Contests
                        </h3>
                        <p className="text-2xl font-bold text-blue-500">
                            {data.totalContests}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Global Ranking
                        </h3>
                        <p className="text-2xl font-bold text-green-500">
                            {data.globalRanking}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4 text-center">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Rating
                        </h3>
                        <p className="text-2xl font-bold text-purple-500">
                            {data.rating}
                        </p>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Division
                        </h3>
                        <p className="text-2xl font-bold text-orange-500">
                            Division {data.division}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Country Rank
                        </h3>
                        <p className="text-2xl font-bold text-teal-500">
                            {data.countryRank}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

// Main DSA Profiles Component
const DSAProfiles = () => {
    const [selectedProfile, setSelectedProfile] = useState(null)

    const profiles = [
        {
            name: "LeetCode",
            icon: IconBrandLeetcode,
            color: "text-orange-500",
            stats: {
                solved: 209,
                rating: 1776,
            },
            details: {
                url: "https://leetcode.com/u/soldier_of_god",
                solved: {
                    easy: 75,
                    medium: 131,
                    hard: 3,
                },
                total: {
                    easy: 839,
                    medium: 1760,
                    hard: 770,
                },
                acceptanceRate: 68.14,
                contestRating: 1776,
                top: 8.56,
            },
        },
        {
            name: "CodeChef",
            icon: IconBrandCodepen,
            color: "text-blue-500",
            stats: {
                solved: 120, // Total problems solved (shown in main card)
                rating: 1634, // Rating (shown in main card)
            },
            details: {
                // Basic profile info
                url: "https://www.codechef.com/users/jaimin_patel_3",
                stars: 3, // Star rating (out of 5)
                totalContests: 27, // Number of contests participated

                // Rankings
                globalRanking: 15736, // Global rank
                countryRank: 13608, // Rank in country

                // Performance metrics
                rating: 1634, // Current rating
                division: 2, // Current division
            },
        },
    ]

    return (
        <div className="min-h-screen px-3 md:px-10  w-screen">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    Profiles
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    Competitive Programming
                </p>
            </div>
            <div className="w-full flex justify-center items-center px-7 md:px-15 ">
                <div className="bg-neutral-900 p-12 md:p-24 rounded-lg shadow-2xl flex items-center justify-center relative">
                    <p className="absolute top-5 left-5">click to show more</p>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                        {profiles.map((profile, index) => (
                            <motion.div
                                key={profile.name}
                                onClick={() => setSelectedProfile(profile)}
                                className="cursor-pointer"
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.5,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="relative bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row gap-5 w-full items-center space-x-6 hover:bg-gray-800 transition-colors group">
                                    <div className="bg-gray-700 p-4 rounded-full">
                                        <profile.icon
                                            className={`${profile.color} stroke-current`}
                                            size={40}
                                        />
                                    </div>
                                    <div className="flex-grow cursor-pointer">
                                        <h3 className="text-xl font-semibold text-white mb-2 items-self-start">
                                            {profile.name}
                                        </h3>
                                        <div className="text-gray-400">
                                            <p>
                                                Solved: {profile.stats.solved}{" "}
                                                problems
                                            </p>
                                            <p>
                                                Rating: {profile.stats.rating}
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProfile && selectedProfile.name === "LeetCode" && (
                    <LeetCodeDetailModal
                        isOpen={!!selectedProfile}
                        onClose={() => setSelectedProfile(null)}
                        data={selectedProfile.details}
                    />
                )}
                {selectedProfile && selectedProfile.name === "CodeChef" && (
                    <CodeChefDetailModal
                        isOpen={!!selectedProfile}
                        onClose={() => setSelectedProfile(null)}
                        data={selectedProfile.details}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default DSAProfiles
