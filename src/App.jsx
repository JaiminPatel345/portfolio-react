import { useEffect } from "react"
import { Navbar } from "./components"
import { Home } from "./pages"

function App() {
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <>
            <div>
                <Navbar />
            </div>
            <Home />
        </>
    )
}

export default App
