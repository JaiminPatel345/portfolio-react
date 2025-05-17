import {createBrowserRouter, Outlet} from 'react-router';
import {About, Connect, Home, Work} from './pages';
import {useEffect} from 'react';
import {MyCursor, Navbar} from './components/index.js';

export const Layout = () => {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
      <>
        <MyCursor/>
        <div className="bg-[#202020] overflow-x-hidden">
          <div>
            <Navbar/>
          </div>
          <Outlet/>
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