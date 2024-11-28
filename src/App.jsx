import { useEffect, useState } from "react"
import { Navbar , MyCursor } from "./components"
import {
    Home,
    // AboutMe,
    Experience,
    Projects,
    Skills,
    Achievements,
    Connect,
    Feedback,
} from "./pages"



function App() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        document.documentElement.classList.add("dark")
        const handleResize = () => {
            setIsMobile(window.innerWidth < 745)
        }
        handleResize()
        window.addEventListener("resize", handleResize)

        // Cleanup on component unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            {!isMobile && (
                <MyCursor />
            )}
            <div className="bg-[#202020]">
                <div>
                    <Navbar />
                </div>
                <Home />
                {/* <AboutMe /> */}
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Connect />
                <Feedback />
            </div>
        </>
    )
}

export default App
