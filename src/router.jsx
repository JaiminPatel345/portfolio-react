import {createBrowserRouter, Outlet} from 'react-router';
import {About, Connect, Home, Work} from './pages';
import {MyCursor, Navbar} from './components/index.js';

export const Layout = () => {
  return (
    <>
      {/*<MyCursor/>*/}
      <div className="bg-white dark:bg-neutral-900 min-h-screen transition-colors duration-300 overflow-x-hidden">
        <div>
          <Navbar/>
        </div>
        <div className="max-w-7xl mx-auto">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {
        path: '/about',
        children: [
          {index: true, element: <About/>},
        ],
      },
      {
        path: '/work',
        children: [
          {index: true, element: <Work/>},
        ],
      },
      {
        path: '/connect',
        children: [
          {index: true, element: <Connect/>},
        ],
      },
    ],
  },
]);