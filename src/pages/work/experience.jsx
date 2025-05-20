// import React from "react"
import { Timeline } from "../../components/index.js"

function Experience() {
    const experiences = [
        {
            role: "Tech Expert",
            name: "GDGC BVM",
            logo: "/assets/gdg.png",
            link: "https://gdg.community.dev/",
            description: [
                "Google Developer Groups on Campus at Birla Vishwakarma Mahavidyalaya",
                "Organized tech talks, workshops, and meetups",
                "Served as a facilitator in the Google Generative AI Code Jam",
            ],
            learnings: [
                "Enhanced public speaking and leadership skills",
                "Built a strong network of tech enthusiasts and professionals",
                "Collaborated with other GDG chapters across India",
            ],
            startDate: "Sep '24",
            endDate: "Present",
            duration: null,
        },
        {
            role: "SDE Intern",
            name: "PassDN",
            logo: "/assets/passdn.jpg",
            link: "https://passdn.com/",
            description: [
                "PassDN is a platform that provide   services like rides , foods , grocery and tickets base on ONDC",
                "Contributed to the backend using Node.js, Express.js, MongoDB, and Postman",
                "Developed a RESTful API for third-party validation and note management",
            ],
            learnings: [
                "Gained a solid understanding of the Beckn protocol and ONDC (Open Network for Digital Commerce)",
                "Worked on ONDC APIs and created controllers for the driver-side app",
                "Learned the importance of API documentation and rigorous testing",
                "Collaborated with the team to troubleshoot technical issues and enhance the platform",
                "Familiarized with professional platforms such as Slack and Jira",
            ],
            startDate: "Jun",
            endDate: "July '24",
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
