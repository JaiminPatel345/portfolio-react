/* eslint-disable no-unused-vars */
import { FloatingDock } from "./floating-dock"
import {
    IconHome,
    IconUser,
    IconBriefcase,
    IconDeviceLaptop,
    IconTool,
    IconAward,
    IconMessageCircle,
    IconLink,
} from "@tabler/icons-react"

export function Navbar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#home",
        },
        {
            title: "About ME",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Experience",
            icon: (
                <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#experience",
        },
        {
            title: "Projects",
            icon: (
                <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Skill Set",
            icon: (
                <IconTool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#skills",
        },
        {
            title: "Achievements",
            icon: (
                <IconAward className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#achievements",
        },
        {
            title: "Connect",
            icon: (
                <IconLink className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#connect",
        },
        {
            title: "Feedback",
            icon: (
                <IconMessageCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#feedback",
        },
    ]

    return (
        <div className="fixed bottom-8 flex items-center justify-center w-screen z-50">
            <div className="flex items-center justify-center">
                <FloatingDock
                    // only for demo, remove for production
                    mobileClassName="left-7  w-screen"
                    items={links}
                />
            </div>
        </div>
    )
}
