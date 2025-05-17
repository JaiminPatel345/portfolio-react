import {FloatingDock} from "./floating-dock"
import {
    IconHome,
    IconUser,
    IconDeviceLaptop,
    IconLink,
    IconFileDescription,
} from "@tabler/icons-react"

export function Navbar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/",
        },
        {
            title: "About Me",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/about",
        },
        {
            title: "Work",
            icon: (
                <IconDeviceLaptop className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/work",
        },
        {
            title: "Connect",
            icon: (
                <IconLink className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/connect",
        },
        {
            title: "Resume",
            icon: (
                <IconFileDescription className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            target: "_blank",
            href: "https://drive.google.com/drive/folders/1nZtEwQeZXatneEilDkSel_jTYtBRgjhv?usp=sharing",
        },
    ]

    return (
        <div className="fixed top-5 right-12 z-50">
            <div className="flex items-center justify-center">
                <FloatingDock
                    desktopClassName="scale-110"
                    mobileClassName="right-0"
                    items={links}
                />
            </div>
        </div>
    )
}
