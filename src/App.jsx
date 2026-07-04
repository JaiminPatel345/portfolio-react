import { TerminalContextProvider } from 'react-terminal';
import { ThemeProvider } from './lib/ThemeProvider';
import { Navbar } from './components';

import Home from './pages/Home';
import { Work } from './pages/work';
import Connect from './pages/connect';
import { About } from './pages/about';
import { Resume } from './pages/about/resume';

function App() {
  return (
    <ThemeProvider>
      <TerminalContextProvider>
        {/* <MyCursor /> */}
        <div className="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300 overflow-x-hidden">
          <Navbar />
          <div className="max-w-7xl mx-auto">
            <section id="home" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
              <Home />
            </section>
            <section id="work" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
              <Work />
            </section>
            <section id="about" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
              <About />
            </section>
            <section id="resume" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
              <Resume />
            </section>
            <section id="connect" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
              <Connect />
            </section>
          </div>
        </div>
      </TerminalContextProvider>
    </ThemeProvider>
  );
}

export default App;

