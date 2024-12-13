// import React from 'react';
import { Trophy, Code2, Target, Brain, Medal, Crown } from 'lucide-react';

import AchievementCard from "../components/achivementCard.jsx";

const Achievements = () => {
    const achievements = [{
        title: "LeetCode Master",
        date: "2024",
        icon: Code2,
        iconColor: "#FFA116", // LeetCode orange
        link: "https://leetcode.com/yourusername",
        btnText: "See on LeetCode",
        description: ["Solved 500+ problems across all difficulty levels", "Achieved Knight badge for consistent problem solving", "Top 5% in weekly contests"]
    }, {
        title: "GeeksForGeeks Champion",
        date: "2023",
        icon: Brain,
        iconColor: "#2F8D46", // GFG green
        link: "https://geeksforgeeks.org/yourusername",
        btnText: "View GFG Profile",
        description: ["Institute Rank 1 in DSA Self-Paced course", "Published 3 well-received articles on DSA topics", "Solved 300+ DSA problems"]
    }, {
        title: "CodeChef Star",
        date: "2023",
        icon: Crown,
        iconColor: "#745D49", // CodeChef brown
        link: "https://codechef.com/users/yourusername",
        btnText: "Check CodeChef",
        description: ["5⭐ coder with 2000+ rating", "Global rank 50 in March Long Challenge", "Solved problems in all difficulty levels"]
    }, {
        title: "HackerRank Expert",
        date: "2023",
        icon: Trophy,
        iconColor: "#1BA94C", // HackerRank green
        link: "https://hackerrank.com/yourusername",
        btnText: "View HackerRank",
        description: ["5⭐ in Problem Solving", "Gold Badge in Python & Java", "Completed all DSA interview preparation questions"]
    }, {
        title: "National Coding Competition",
        date: "2024",
        icon: Medal,
        iconColor: "#FFD700", // Gold
        link: "https://example.com/competition",
        btnText: "View Certificate",
        description: ["Secured 3rd position among 5000+ participants", "Solved complex algorithmic challenges", "Recognized for optimal solution approaches"]
    }, {
        title: "Inter-College Hackathon",
        date: "2023",
        icon: Target,
        iconColor: "#FF4B91", // Pink
        link: "https://example.com/hackathon",
        btnText: "See Project",
        description: ["Won first place for innovative solution", "Implemented advanced DSA concepts", "Led team of 4 developers"]
    }];

    return (
        <section
            className = "w-full font-sans px-3 md:px-10"
            id = "achievements"
        >
            <div className = "max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className = "text-xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    Professional Experience </h2>
                <p className = "text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    A timeline of my professional journey and growth </p>
            </div>
            <div className = "max-w-7xl mx-auto pb-20">
                <h2 className = "text-3xl font-bold text-white mb-8">Achievements</h2>
                <div className = "flex flex-wrap gap-6">
                    {achievements.map( ( achievement, index ) => (
                        <AchievementCard key = {index} {...achievement} />
                    ) )}
                </div>
            </div>
        </section>
    );
};

export default Achievements;