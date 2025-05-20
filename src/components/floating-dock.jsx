/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from 'react-router';

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName}/>
            <FloatingDockMobile items={items} className={mobileClassName}/>
        </>
    );
};

const FloatingDockMobile = ({ items, className }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    
    return (
        <div className={cn("relative block md:hidden", className)}>
            {open && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setOpen(false)} />
            )}
            {open && (
                <div className="absolute top-0 right-0 mt-12 flex flex-col gap-2 bg-white/80 dark:bg-neutral-800/90 p-3 rounded-lg shadow-lg z-50 backdrop-blur-2xl">
                    {items.map((item) => {
                        const isActive = location.pathname === item.href || 
                                        (item.href === "/" && location.pathname === "/");
                        const activeColor = "text-blue-600 dark:text-blue-400";
                        
                        return (
                            <Link
                                to={item.href}
                                key={item.title}
                                target={item.target ? "_blank" : "_self"}
                                className={cn(
                                    "flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-md transition-colors",
                                    isActive && "bg-gray-100 dark:bg-neutral-700 font-medium"
                                )}
                                onClick={() => setOpen(false)}
                            >
                                <div className={cn("h-5 w-5", isActive && activeColor)}>{item.icon}</div>
                                <span className={cn(
                                    "text-sm font-medium text-gray-800 dark:text-gray-200",
                                    isActive && activeColor
                                )}>
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            )}
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-md bg-white/80 dark:bg-neutral-800/90 backdrop-blur-md flex items-center justify-center border border-gray-300 dark:border-neutral-700 shadow-sm z-50"
            >
                {open ? (
                    <IconX className="h-5 w-5 text-neutral-600 dark:text-neutral-400"/>
                ) : (
                    <IconMenu2 className="h-5 w-5 text-neutral-600 dark:text-neutral-400"/>
                )}
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({ items, className }) => {
    const location = useLocation();
    const activeColor = "text-blue-600 dark:text-blue-400";
    
    return (
        <div className={cn("mx-auto hidden md:flex h-12 items-center border border-gray-300 dark:border-neutral-700 rounded-md bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md px-4 shadow-sm", className)}>
            {items.map((item) => {
                const isActive = location.pathname === item.href || 
                                (item.href === "/" && location.pathname === "/");
                
                return (
                    <Link
                        to={item.href}
                        key={item.title}
                        target={item.target ? "_blank" : "_self"}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 h-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors border-b-2 border-transparent",
                            isActive && "border-b-2 border-blue-500 bg-gray-50 dark:bg-neutral-700"
                        )}
                    >
                        <div className={cn("h-5 w-5", isActive && activeColor)}>{item.icon}</div>
                        <span className={cn(
                            "text-sm font-medium text-gray-800 dark:text-gray-200",
                            isActive && activeColor
                        )}>
                            {item.title}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};
