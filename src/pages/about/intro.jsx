export const Intro = () => {
  return (
      <div className="w-full font-sans px-3 md:px-10" id="skills">
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            About Me
          </h2>
          <p className="text-neutral-300 text-sm mb-12">
            A short Intro of my self  
          </p>
          <div className="space-y-4 pl-10">
            <ul className="list-disc">
              <li>
                Backend-first Full Stack JavaScript Developer
              </li>
              <li>
                Machine Learning Enthusiast
              </li>
              <li>
                Open Source Contributor
              </li>
              <li>
                Strong in DSA with Java
              </li>
            </ul>

          </div>
        </div>
      </div>
  );
};