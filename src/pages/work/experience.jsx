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
                "Organized 10+ tech talks, workshops, and meetups",
                "Served as a facilitator in the Google Generative AI Code Jam",
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
                "Contributed to the backend using Node.js, Express.js, MongoDB, Redis and Postman",
                "Developed a RESTful API for third-party validation and note management",
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
