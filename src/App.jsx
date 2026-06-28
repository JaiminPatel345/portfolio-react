import { lazy, Suspense } from 'react';
import { TerminalContextProvider } from 'react-terminal';
import { ThemeProvider } from './lib/ThemeProvider';
import { Navbar } from './components';

const Home = lazy(() => import('./pages/Home'));
const Connect = lazy(() => import('./pages/connect'));
const About = lazy(() => import('./pages/about').then(m => ({ default: m.About })));
const Work = lazy(() => import('./pages/work').then(m => ({ default: m.Work })));
const Resume = lazy(() => import('./pages/about/resume').then(m => ({ default: m.Resume })));

function App() {
  return (
    <ThemeProvider>
      <TerminalContextProvider>
        {/* <MyCursor /> */}
        <div
          className="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300 overflow-x-hidden">
          <Navbar />
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
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
            </Suspense>
          </div>
        </div>
      </TerminalContextProvider>
    </ThemeProvider>
  );
}

export default App;

