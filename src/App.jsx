import {RouterProvider} from 'react-router';
import {TerminalContextProvider} from 'react-terminal';
import {router} from './router';

function App() {
  return (
      <TerminalContextProvider>
        <RouterProvider router={router} />
      </TerminalContextProvider>
  )
}


export default App;
