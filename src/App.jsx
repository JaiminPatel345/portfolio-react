import { useEffect } from "react"
import { Navbar } from "./components"
import { Home, Projects } from "./pages"
import AnimatedCursor from "react-animated-cursor"

function App() {
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <>
            <div>
                <AnimatedCursor color="102, 255, 255" />
            </div>
            <div>
                <Navbar />
            </div>
            <Home />
            <Projects />
        </>
    )
}

export default App
