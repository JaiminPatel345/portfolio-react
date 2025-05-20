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
                <IconHome className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
            ),
            href: "/",
        },
        {
            title: "About",
            icon: (
                <IconUser className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
            ),
            href: "/about",
        },
        {
            title: "Work",
            icon: (
                <IconDeviceLaptop className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
            ),
            href: "/work",
        },
        {
            title: "Connect",
            icon: (
                <IconLink className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
            ),
            href: "/connect",
        },
        {
            title: "Resume",
            icon: (
                <IconFileDescription className="h-full w-full text-neutral-600 dark:text-neutral-300"/>
            ),
            target: "_blank",
            href: "https://drive.google.com/drive/folders/1nZtEwQeZXatneEilDkSel_jTYtBRgjhv?usp=sharing",
        },
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 py-2">
            <div className="flex items-center justify-end">
                <FloatingDock
                    desktopClassName="bg-white dark:bg-neutral-800 shadow-md"
                    mobileClassName="right-4"
                    items={links}
                />
            </div>
        </div>
    )
}
