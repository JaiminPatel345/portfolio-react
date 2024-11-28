import AnimatedCursor from "react-animated-cursor"

const MyCursor = () => {
    return (
        <div>
            <div className="hidden md:block">
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
                    color={"102,255,255"}
                    innerScale={0.6}
                    innerSize={8}
                    outerAlpha={0.4}
                    outerScale={6}
                    outerSize={8}
                    showSystemCursor={false}
                    trailingSpeed={8}
                />
            </div>
        </div>
    )
}

export default MyCursor