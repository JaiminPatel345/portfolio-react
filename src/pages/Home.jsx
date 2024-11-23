import { FlipWords } from "../components/"
import { cn } from "../lib/utils"
// import { TypeAnimation } from "react-type-animation"

const Home = () => {
    const words = [
        "DSA Enthusiast",
        "Problem Solver",
        "Innovative Thinker",
        "Open-Source Contributor",
        "Continuous Learner",
    ]
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex items-center justify-center ">
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            {/* <Boxes /> */}

            {/* Main Content */}
            <div className=" flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full max-w-6xl px-4 md:px-8">
                {/* Left Section: Text and Animation */}
                <div className="flex flex-col items-center md:items-start space-y-4 mb-6">
                    <h1
                        className={cn(
                            "text-white text-3xl md:text-5xl text-center md:text-left z-50"
                        )}
                    >
                        Jaimin Detroja
                    </h1>
                    <div className="text-blue-400 text-lg md:text-2xl text-center z-50 md:text-left">
                        {/* <TypeAnimation
                            sequence={[
                                "DSA Enthusiast",
                                1000,
                                "Problem Solver",
                                1000,
                                "Innovative Thinker",
                                1000,
                                "Open-Source Contributor",
                                1000,
                                "Continuous Learner",
                                1000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        /> */}
                        <FlipWords words={words} />
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="avatar">
                    <div className="flex-shrink-0 z-50 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full">
                        <img
                            src="/assets/myPhoto-home.png"
                            alt="My  photo"
                            className=" object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
