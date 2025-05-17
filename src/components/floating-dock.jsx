/* eslint-disable react/prop-types */
import { cn }                       from "../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence, motion, useMotionValue, useSpring, useTransform,
}                                   from "framer-motion";
import { useRef, useState }         from "react";
import {Link} from 'react-router';

export const FloatingDock = ( {items, desktopClassName, mobileClassName} ) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName}/>
            <FloatingDockMobile items={items} className={mobileClassName}/>
        </>
    );
};

const FloatingDockMobile = ( {items, className} ) => {
    const [open, setOpen] = useState( false );
    return (
        <div className={cn( "relative block md:hidden", className )}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute top-0 right-0 mt-12 flex flex-col gap-2"
                    >
                        {items.map( ( item, idx ) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, y: 10}}
                                animate={{
                                    opacity: 1, y: 0,
                                }}
                                exit={{
                                    opacity: 0, y: 10, transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{
                                    delay: (
                                        items.length - 1 - idx
                                    ) * 0.05,
                                }}
                            >
                                <Link
                                    to={item.href}
                                    key={item.title}
                                    target={item.target ? "_blank" : "_self"}

                                    className="h-12 w-12 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                                >
                                    <div className="h-5 w-5">{item.icon}</div>
                                </Link>
                            </motion.div>
                        ) )}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen( !open )}
                className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center border border-gray-500"
            >
                <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-neutral-400"/>
            </button>
        </div>
    );
};

const FloatingDockDesktop = ( {items, className} ) => {
    let mouseX = useMotionValue( Infinity );
    return (
        <motion.div
            onMouseMove={( e ) => mouseX.set( e.pageX )}
            onMouseLeave={() => mouseX.set( Infinity )}
            className={cn( "mx-auto hidden md:flex h-20 gap-5 items-center border border-[#ffffff] rounded-2xl bg-gray-50 dark:bg-neutral-900 px-5 py-3", className )}
        >
            {items.map( ( item ) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ) )}
        </motion.div>
    );
};

function IconContainer( {mouseX, title, icon, href, target = "_self"} ) {
    let ref = useRef( null );

    let distance = useTransform( mouseX, ( val ) => {
        let bounds = ref.current?.getBoundingClientRect() ?? {x: 0, width: 0};

        return val - bounds.x - bounds.width / 2;
    } );

    let widthTransform = useTransform( distance, [-150, 0, 150], [50, 90, 50] );
    let heightTransform = useTransform( distance, [-150, 0, 150], [50, 90, 50] );

    let widthTransformIcon = useTransform( distance, [-150, 0, 150], [25, 45, 25] );
    let heightTransformIcon = useTransform( distance, [-150, 0, 150], [25, 45, 25] );

    let width = useSpring( widthTransform, {
        mass: 0.1, stiffness: 150, damping: 12,
    } );
    let height = useSpring( heightTransform, {
        mass: 0.1, stiffness: 150, damping: 12,
    } );

    let widthIcon = useSpring( widthTransformIcon, {
        mass: 0.1, stiffness: 150, damping: 12,
    } );
    let heightIcon = useSpring( heightTransformIcon, {
        mass: 0.1, stiffness: 150, damping: 12,
    } );

    const [hovered, setHovered] = useState( false );

    return (
        <Link
            to={href}
            target={target}
        >
            <motion.div
                ref={ref}

                style={{width, height}}
                onMouseEnter={() => setHovered( true )}
                onMouseLeave={() => setHovered( false )}
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{opacity: 0, y: -10, x: "-50%"}}
                            animate={{opacity: 1, y: 0, x: "-50%"}}
                            exit={{opacity: 0, y: -2, x: "-50%"}}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 bottom-[-30px] w-fit text-xs"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{width: widthIcon, height: heightIcon}}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}
