/* eslint-disable react/prop-types */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    IconBrandLeetcode,
    IconBrandCodepen,
    IconBrandCodesandbox,
    IconBrandHackerrank,
    IconX,
} from "@tabler/icons-react"

// LeetCode Detail Modal Component
const LeetCodeDetailModal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null

    const totalSolved = data.solved.easy + data.solved.medium + data.solved.hard
    const solvedPercentage = {
        easy: (data.solved.easy / data.total.easy) * 100,
        medium: (data.solved.medium / data.total.medium) * 100,
        hard: (data.solved.hard / data.total.hard) * 100,
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 w-[90%] max-w-4xl rounded-2xl p-8 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
                >
                    <IconX size={24} />
                </button>

                <div className="flex items-center space-x-6 mb-8">
                    <IconBrandLeetcode size={64} className="text-orange-500" />
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            LeetCode Profile
                        </h2>
                        <p className="text-gray-400">
                            Total Problems Solved: {totalSolved}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {["easy", "medium", "hard"].map((difficulty) => (
                        <div
                            key={difficulty}
                            className="bg-gray-900 rounded-xl p-6 text-center"
                        >
                            <div className="relative w-40 h-40 mx-auto mb-4">
                                <svg
                                    viewBox="0 0 36 36"
                                    className="w-full h-full"
                                >
                                    <motion.path
                                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#232323"
                                        strokeWidth="3"
                                    />
                                    <motion.path
                                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke={
                                            difficulty === "easy"
                                                ? "green"
                                                : difficulty === "medium"
                                                ? "orange"
                                                : "red"
                                        }
                                        strokeWidth="3"
                                        strokeDasharray={`${solvedPercentage[difficulty]}, 100`}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col justify-center items-center">
                                    <span className="text-2xl font-bold text-white">
                                        {data.solved[difficulty]}
                                    </span>
                                    <span className="text-gray-400 capitalize">
                                        {difficulty}
                                    </span>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-white">
                                    {data.solved[difficulty]} /{" "}
                                    {data.total[difficulty]} Solved
                                </p>
                                <p className="text-gray-400">
                                    {solvedPercentage[difficulty].toFixed(1)}%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Acceptance Rate
                        </h3>
                        <p className="text-2xl font-bold text-green-500">
                            {data.acceptanceRate}%
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Contest Rating
                        </h3>
                        <p className="text-2xl font-bold text-blue-500">
                            {data.contestRating}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 w-[90%] max-w-4xl rounded-2xl p-8 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:bg-gray-700 rounded-full p-2"
                >
                    <IconX size={24} />
                </button>

                <div className="flex items-center space-x-6 mb-8">
                    <IconBrandCodepen size={64} className="text-blue-500" />
                    <div>
                        <h2 className="text-3xl font-bold text-white">
                            CodeChef Profile
                        </h2>
                        <p className="text-gray-400">
                            Total Problems Solved: {data.solved}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-900 rounded-xl p-6 text-center">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Global Ranking
                        </h3>
                        <p className="text-3xl font-bold text-blue-500">
                            {data.globalRanking}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-6 text-center">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Rating
                        </h3>
                        <p className="text-3xl font-bold text-green-500">
                            {data.rating}
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Fully Solved
                        </h3>
                        <p className="text-2xl font-bold text-green-500">
                            {data.fullySolved}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Partially Solved
                        </h3>
                        <p className="text-2xl font-bold text-orange-500">
                            {data.partiallySolved}
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Attempted
                        </h3>
                        <p className="text-2xl font-bold text-blue-500">
                            {data.attempted}
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
            url: "https://leetcode.com/your-username",
            color: "text-orange-500",
            stats: {
                solved: 150,
                rating: 1800,
            },
            details: {
                solved: {
                    easy: 50,
                    medium: 70,
                    hard: 30,
                },
                total: {
                    easy: 200,
                    medium: 150,
                    hard: 100,
                },
                acceptanceRate: 68.5,
                contestRating: 1845,
            },
        },
        {
            name: "CodeChef",
            icon: IconBrandCodepen,
            url: "https://www.codechef.com/users/your-username",
            color: "text-blue-500",
            stats: {
                solved: 120,
                rating: 1700,
            },
            details: {
                solved: 120,
                globalRanking: 1245,
                rating: 1700,
                fullySolved: 80,
                partiallySolved: 40,
                attempted: 200,
            },
        },
        {
            name: "CodeForces",
            icon: IconBrandCodesandbox,
            url: "https://codeforces.com/profile/your-username",
            color: "text-green-500",
            stats: {
                solved: 200,
                rating: 1600,
            },
        },
        {
            name: "HackerRank",
            icon: IconBrandHackerrank,
            url: "https://www.hackerrank.com/your-username",
            color: "text-emerald-500",
            stats: {
                solved: 100,
                rating: 4,
            },
        },
    ]

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
            <div className="w-full max-w-6xl">
                <div className="bg-gray-900 p-6 rounded-lg shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        Competitive Programming Profiles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                                <div className="bg-gray-800 rounded-xl p-6 flex items-center space-x-6 hover:bg-gray-700 transition-colors">
                                    <div className="bg-gray-700 p-4 rounded-full">
                                        <profile.icon
                                            className={`${profile.color} stroke-current`}
                                            size={40}
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-semibold text-white mb-2">
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
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
