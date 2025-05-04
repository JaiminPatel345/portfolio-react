import { FlipWords } from "../components/"

const Home = () => {
    const words = [
        "DSA Enthusiast",
        "Problem Solver",
        "Innovative Thinker",
        "Open-Source Contributor",
        "Continuous Learner",
    ]
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex items-center justify-center "
        id="home"
        >
            <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            {/* <Boxes /> */}

            {/* Main Content */}
            <div className=" flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full max-w-6xl h-full px-4 md:px-8">
                {/* Left Section: Text and Animation */}
                <div className="flex flex-col items-center md:items-start space-y-4 mb-6">
                    <h1
                        className={
                            "text-white text-3xl md:text-5xl text-center md:text-left z-50"
                        }
                    >
                        Jaimin Detroja
                    </h1>
                    <div className="text-blue-400 text-lg md:text-2xl text-center z-50 md:text-left">
                        <FlipWords words={words} />
                    </div>
                    
                </div>

                {/* Right Section: Image */}
                    <div className="mask z-50 ">
                        <img
                            src="https://res.cloudinary.com/dm4xqk12g/image/upload/v1746390124/2023-04-05_001_209_t64pgt.jpg"
                            alt="My  photo"
                            className="rounded-full h-40 w-40 md:w-80 md:h-80 "
                        />
                </div>
            </div>
        </div>
    )
}

export default Home
