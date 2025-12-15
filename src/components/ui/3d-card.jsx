/* eslint-disable react/prop-types */
"use client"
import { cn } from "../../lib/utils"
import {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
} from "react"

const MouseEnterContext = createContext(undefined)

// Detect if device supports touch (mobile/tablet)
const isTouchDevice = () => {
    if (typeof window === 'undefined') return false
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export const CardContainer = ({ children, className, containerClassName }) => {
    const containerRef = useRef(null)
    const [isMouseEntered, setIsMouseEntered] = useState(false)
    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        setIsTouch(isTouchDevice())
    }, [])

    const handleMouseMove = (e) => {
        // Disable 3D effect on touch devices to prevent blurry text
        if (isTouch || !containerRef.current) return
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / 25
        const y = (e.clientY - top - height / 2) / 25
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }

    const handleMouseEnter = (e) => {
        if (isTouch) return
        setIsMouseEntered(true)
        if (!containerRef.current) return
    }

    const handleMouseLeave = (e) => {
        if (!containerRef.current) return
        setIsMouseEntered(false)
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    }
    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "py-1 flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: isTouch ? "none" : "1000px",
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear w-full",
                        className
                    )}
                    style={{
                        transformStyle: isTouch ? "flat" : "preserve-3d",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    )
}

export const CardBody = ({ children, className }) => {
    return (
        <div
            className={cn(
                "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
                className
            )}
            style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            }}
        >
            {children}
        </div>
    )
}

export const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}) => {
    const ref = useRef(null)
    const [isMouseEntered] = useMouseEnter()
    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        setIsTouch(isTouchDevice())
    }, [])

    useEffect(() => {
        handleAnimations()
    }, [isMouseEntered, isTouch])

    const handleAnimations = () => {
        if (!ref.current) return
        // Disable translateZ on touch devices to prevent blurry text
        if (isMouseEntered && !isTouch) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
        }
    }

    return (
        <Tag
            ref={ref}
            className={cn(
                "w-fit transition duration-200 ease-linear",
                className
            )}
            style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            }}
            {...rest}
        >
            {children}
        </Tag>
    )
}

// Create a hook to use the context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext)
    if (context === undefined) {
        throw new Error(
            "useMouseEnter must be used within a MouseEnterProvider"
        )
    }
    return context
}

