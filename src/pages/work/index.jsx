import Experience from './experience.jsx';
import Projects from './projects.jsx';
import {useEffect} from 'react';

export const Work = () => {

  useEffect(() => {
    scroll(0, 0);
  }, []);

  return (
      <>
        <Experience/>
        <Projects/>
      </>
  );
};