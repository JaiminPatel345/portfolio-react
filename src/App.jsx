import {RouterProvider} from 'react-router';
import {TerminalContextProvider} from 'react-terminal';
import {router} from './router';
import { ThemeProvider } from './lib/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <TerminalContextProvider>
        <RouterProvider router={router} />
      </TerminalContextProvider>
    </ThemeProvider>
  )
}

export default App;
