import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {TerminalContextProvider} from 'react-terminal';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <TerminalContextProvider>
        <App/>
      </TerminalContextProvider>
    </StrictMode>,
);
