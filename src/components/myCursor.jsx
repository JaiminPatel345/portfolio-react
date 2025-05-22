import AnimatedCursor from "react-animated-cursor"
import { useState, useEffect } from "react"
import { useTheme } from '../lib/ThemeProvider'

const MyCursor = () => {
    const { theme } = useTheme()
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    useEffect(() => {
        // Function to handle resize events
        const handleResize = () => {
            const newIsDesktop = window.innerWidth >= 768
            setIsDesktop(newIsDesktop)
        }

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Different colors for light and dark modes
    const cursorColor = theme === 'dark' ? "102,255,255" : "37,99,235" // dark: teal, light: blue-600
    const cursorKey = `cursor-${isDesktop ? 'desktop' : 'mobile'}-${Date.now()}`

    return (
        <div>
            {isDesktop && (
                <div key={cursorKey}>
                    <AnimatedCursor
                        clickables={[
                            {
                                target: ".small",
                                innerScale: 3,
                                outerScale: 1,
                            },
                            {
                                target: ".big",
                                innerScale: 9,
                                outerScale: 7,
                            },
                            {
                                target: ".blue",
                                color: "blue",
                                innerStyle: {
                                    backgroundColor: "blue",
                                },
                                outerStyle: {
                                    backgroundColor: "rgb(0,0,255,0.4)",
                                },
                            },
                            {
                                target: "#blueDonut",
                                innerSize: 8,
                                outerSize: 35,
                                innerScale: 1,
                                outerScale: 2,
                                outerAlpha: 0,
                                showSystemCursor: true,
                                hasBlendMode: true,
                                outerStyle: {
                                    border: "3px solid blue",
                                },
                                innerStyle: {
                                    backgroundColor: "blue",
                                },
                            },
                            "a",
                            'input[type="text"]',
                            'input[type="email"]',
                            'input[type="number"]',
                            'input[type="submit"]',
                            'input[type="image"]',
                            "label[for]",
                            "select",
                            "textarea",
                            "button",
                            ".link",
                        ]}
                        color={cursorColor}
                        innerScale={0.6}
                        innerSize={8}
                        outerAlpha={0.4}
                        outerScale={6}
                        outerSize={8}
                        showSystemCursor={false}
                        trailingSpeed={8}
                    />
                </div>
            )}
        </div>
    )
}

export default MyCursor