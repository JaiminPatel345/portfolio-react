import {TerminalContextProvider} from 'react-terminal';
import {ThemeProvider} from './lib/ThemeProvider';
import {Navbar} from './components';
import {About, Connect, Home, Work} from './pages';

function App() {
  return (
      <ThemeProvider>
        <TerminalContextProvider>
          <div
              className="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300 overflow-x-hidden">
            <Navbar/>
            <div className="max-w-7xl mx-auto">
              <section id="home" className="min-h-screen">
                <Home/>
              </section>
              <section id="work" className="min-h-screen">
                <Work/>
              </section>
              <section id="about" className="min-h-screen">
                <About/>
              </section>
              <section id="connect" className="min-h-screen">
                <Connect/>
              </section>
            </div>
          </div>
        </TerminalContextProvider>
      </ThemeProvider>
  );
}

export default App;
