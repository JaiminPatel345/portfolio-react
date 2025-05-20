import {FlipWords} from '../components/';
import {ReactTerminal} from 'react-terminal';
import {commands, themes, welcomeMessage} from '../utils/commands.jsx';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from '@tabler/icons-react';

const Home = () => {
  const words = [
    'DSA Enthusiast',
    'Problem Solver',
    'Innovative Thinker',
    'Open-Source Contributor',
    'Continuous Learner',
  ];
  return (
      <div
          className="h-screen relative w-full overflow-hidden bg-slate-900 flex items-center justify-center flex-col gap-10"
          id="home"
      >
        <div
            className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none flex flex-row"/>

        {/* Main Content */}
        <div
            className=" flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between w-full max-w-6xl  px-4 md:px-8">
          {/* Left Section: Text and Animation */}
          <div
              className="flex flex-col items-center md:items-start space-y-4 mb-6">
            <h1
                className={
                  'text-white text-3xl md:text-5xl text-center md:text-left z-30'
                }
            >
              Jaimin Detroja
            </h1>
            <div
                className="text-blue-400 text-lg md:text-2xl text-center z-30 md:text-left">
              <FlipWords words={words}/>
            </div>

            <div className={'flex gap-5 text-gray-300 z-30 ml-2'}>
              <a target={'_blank'}
                 href={`mailto:officialjaimin345@gmail.com`}><IconMail
                  stroke={2}/></a>
              <a target={'_blank'}
                 href={`https://github.com/jaiminpatel345`}><IconBrandGithub
                  stroke={2}/></a>
              <a target={'_blank'}
                 href={`https://www.linkedin.com/in/jaimindetroja345`}><IconBrandLinkedin
                  stroke={2}/></a>
              <a target={'_blank'}
                 href={`https://drive.google.com/drive/folders/1nZtEwQeZXatneEilDkSel_jTYtBRgjhv`}><IconFileCv
                  stroke={2}/></a>
            </div>

          </div>

          {/* Right Section: Image */}
          {/*<div className="mask z-40 ">*/}
          {/*  <img*/}
          {/*      src="https://res.cloudinary.com/dm4xqk12g/image/upload/v1746390124/2023-04-05_001_209_t64pgt.jpg"*/}
          {/*      alt="My  photo"*/}
          {/*      className="rounded-full h-40 w-40 md:w-72 md:h-72 "*/}
          {/*  />*/}
          {/*</div>*/}

          {/*Terminal*/}
        </div>
        <div className="z-40 w-[70vw]  h-[50vh]">
          <ReactTerminal
              themes={themes}
              theme="my-custom-theme"
              commands={commands}
              prompt="Jaimin ~ $"
              welcomeMessage={welcomeMessage}
          />
        </div>


      </div>
  );
};

export default Home;
