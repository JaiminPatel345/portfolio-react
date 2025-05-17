import Achievements from './achievements.jsx';
import Skills from './skills.jsx';
import Profiles from './profiles.jsx';
import {Intro} from './intro.jsx';
import {Education} from './education.jsx';
import {useEffect} from 'react';

export const About = () => {
  
  useEffect(() => {
    scroll(0,0)
  },[])
  
  return (
      <>
        <Intro />
        <Education /> 
        <Skills/>
        <Achievements/>
        <Profiles/>
      </>
  );
};