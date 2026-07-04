import { lazy, Suspense, useRef } from 'react';
import { TerminalContextProvider } from 'react-terminal';
import { ThemeProvider } from './lib/ThemeProvider';
import { Navbar } from './components';
import { useInView } from 'framer-motion';

import Home from './pages/Home';
import { Work } from './pages/work';

const Connect = lazy(() => import('./pages/connect'));
const About = lazy(() => import('./pages/about').then(m => ({ default: m.About })));
const Resume = lazy(() => import('./pages/about/resume').then(m => ({ default: m.Resume })));

const LazySection = ({ children, id, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "500px 0px" });

  return (
    <section ref={ref} id={id} className={className}>
      {isInView ? children : null}
    </section>
  );
};

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
            
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-neutral-500">Loading section...</div>}>
              <LazySection id="about" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
                <About />
              </LazySection>
              <LazySection id="resume" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
                <Resume />
              </LazySection>
              <LazySection id="connect" className="min-h-screen [content-visibility:auto] [contain-intrinsic-size:1000px]">
                <Connect />
              </LazySection>
            </Suspense>
          </div>
        </div>
      </TerminalContextProvider>
    </ThemeProvider>
  );
}

export default App;

