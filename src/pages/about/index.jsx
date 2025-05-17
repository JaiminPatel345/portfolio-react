import Achievements from './achievements.jsx';
import Skills from './skills.jsx';
import Profiles from './profiles.jsx';
import {Intro} from './intro.jsx';

export const About = () => {
  return (
      <>
        <Intro />
        <Skills/>
        <Achievements/>
        <Profiles/>
      </>
  );
};