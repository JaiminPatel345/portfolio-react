import React, {useEffect, useState,} from "react";
import {Navbar, MyCursor} from "./components";
import PreLoader from "./components/loader";

// Each component should be lazily loaded separately
const Home = React.lazy(() => import("./pages/Home"));
const Projects = React.lazy(() => import("./pages/projects"));
const DSAProfiles = React.lazy(() => import("./pages/profiles.jsx"));
const Experience = React.lazy(() => import("./pages/experience"));
const SkillSet = React.lazy(() => import("./pages/skills"));
const Achievements = React.lazy(() => import("./pages/achievements"));
const Connect = React.lazy(() => import("./pages/connect"));


function App() {
    const [isMobile, setIsMobile] = useState(false);
                                                                                           
    const [showInitialLoader, setShowInitialLoader] = useState(true);

    useEffect(() => {
            const timer = setTimeout(() => {
                    setShowInitialLoader(false);
                },
                4000
            );

            return () => clearTimeout(timer);
        },
        []
    );

    useEffect(() => {
            document.documentElement.classList.add("dark");
            const handleResize = () => {
                setIsMobile(window.innerWidth < 745);
            };
            handleResize();
            window.addEventListener("resize",
                handleResize
            );

            // Cleanup on component unmount
            return () => {
                window.removeEventListener("resize",
                    handleResize
                );
            };
        },
        []
    );

    if (showInitialLoader) {
        return <PreLoader/>;
    }

    return (
        <>
            {!isMobile && (
                <MyCursor/>
            )}
            <div className="bg-[#202020] overflow-x-hidden">
                <div>
                    <Navbar/>
                </div>
                <Home/> <DSAProfiles/> <Experience/> <Projects/> <SkillSet/>
                <Achievements/> <Connect/>
            </div>
        </>
    );
}

export default App;
