export const Intro = () => {
  return (
      <div className="w-full font-sans px-3 md:px-10" id="skills">
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            About Me
          </h2>
          <p className="text-neutral-300 text-md mb-12">
            A short Intro of my self  
          </p>
          <div className="space-y-4 pl-10">
            <ul className="list-disc text-gray-200 text-xl">
              <li>
                Backend-first Full Stack <strong>JavaScript Developer</strong>
              </li>
              <li>
                <strong>Machine Learning</strong> Enthusiast
              </li>
              <li>
                Open Source Contributor (beginner)
              </li>
              <li>
                Strong in <strong>DSA</strong> with <strong>Java</strong>
              </li>
              <li>
                2026 Passout of <strong>Computer Science Student</strong> from BVM, Anand, Gujarat
              </li>
              <li>
                Wanna Chess Match ? <i><u><a href={'https://www.chess.com/member/jaimindetroja'} target={'_blank'}>Chess.com</a></u></i>
              </li>
            </ul>

          </div>
        </div>
      </div>
  );
};