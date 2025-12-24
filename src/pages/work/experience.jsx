// import React from "react"
import { Timeline } from "../../components/index.js"

function Experience() {
    const experiences = [
        {
            role: "Tech Expert",
            name: "Google Developer Groups on Campus BVM",
            logo: "/assets/gdg.png",
            link: "https://gdg.community.dev/gdg-on-campus-birla-vishvakarma-mahavidyalaya-engineering-college-anand-india",
            description: [
                "Google Developer Groups on Campus (GDGC) is a student community\n" +
                "that aims to bring together students interested in Google technologies and provide them with\n" +
                "opportunities to learn, collaborate, and grow their skills.",
                "Built and deployed the official GDG BVM website using React.js",
                "Hosted 5+ tech sessions and workshops on tools and platforms including Git & GitHub, Figma, Azure, and AI\n" +
                "in 30 Days Code Jam.",
            ],
            startDate: "Sep 2024",
            endDate: "Sep 2025",
            duration: "1 year",
        },
        {
            role: "SDE Intern",
            name: "PassDN",
            logo: "/assets/passdn.jpg",
            link: "https://passdn.com",
            description: [
                "PassDN is a platform that provide   services like rides , foods , grocery and tickets base on ONDC",
                "Developed backend features using Node.js, Express.js, and MongoDB",
                "Designed payload structures and API routes for the ONDC Mobility module.",
                "Collaborated with the team via Slack; worked on tasks assigned through Jira",
            ],
            startDate: "Jun 2024",
            endDate: "Jul 2024",
            duration: "2 months",
        },
    ]

    return (
        <div className="w-full" id="experience">
            <Timeline experiences={experiences} />
        </div>
    )
}

export default Experience
