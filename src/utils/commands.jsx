export const commands = {
  help: (
    <div style={{ whiteSpace: "pre", fontFamily: "monospace" }}>
{`
  ┌──────────────────────────────────────────────┐
  │              AVAILABLE COMMANDS              │
  ├──────────────────────────────────────────────┤
  │  whoami        - Who am I                    │
  │  about         - Short intro                 │
  │  experience    - My professional experience  │
  │  projects      - Showcasing what I've built  │
  │  education     - My academic background      │
  │  skills        - Technical expertise         │
  │  achievements  - My notable accomplishments  │
  │  socials       - Connect with me             │
  │  activities    - Community involvement       │
  │  contributions - Open source work            │
  │  dsa           - DSA profile                 │
  │  clear         - Clear terminal              │
  └──────────────────────────────────────────────┘
`}</div>
  ),

  whoami: <span className="light-mode-whoami dark-mode-whoami">
    <pre>
      {`
     ,--.        ,--.          ,--.         
     |  | ,--,--.\`--',--,--,--.\`--',--,--,  
,--. |  |' ,-.  |,--.|        |,--.|      \\ 
|  '-'  /\\ '-'  ||  ||  |  |  ||  ||  ||  | 
 \`-----'  \`--\`--'\`--'\`--\`--\`--'\`--'\`--''--' 
                                                
`}
    </pre>

    <pre>
      {`
                                                     
,------.           ,--.                 ,--.         
|  .-.  \\  ,---. ,-'  '-.,--.--. ,---.  \`--' ,--,--. 
|  |  \\  :| .-. :'-.  .-'|  .--'| .-. | ,--.' ,-.  | 
|  '--'  /\\   --.  |  |  |  |   ' '-' ' |  |\\ '-'  | 
\`-------'  \`----'  \`--'  \`--'    \`---'.-'  / \`--\`--' 
                                      '---'          
`}
    </pre>
    <br />
 Human | Software Developer
  </span>,

  about: (
    <span>
      <p>• I&#39;m a <strong style={{ color: 'var(--highlight-color)' }}>Full Stack JavaScript Developer</strong>.</p>
      <p>• Machine Learning Enthusiast </p>
      <p>• Knight in LeetCode </p>
      <p>• 2026 graduate of <strong>B.Tech Computer Science</strong>.</p>
      <p>• When I&#39;m not coding, you can find me on <a href={'https://www.chess.com/member/jaimindetroja'} target={'_blank'} className="text-blue-600 dark:text-blue-400 hover:underline">Chess.com</a>.</p>
      <br />
      <p> Type <strong style={{ color: 'var(--highlight-color)' }}>skills</strong> to see my technical toolkit or <strong
        style={{ color: 'var(--highlight-color)' }}>projects</strong> to view my work!</p>

    </span>
  ),

  experience: (
    <span>
      <p><strong style={{ color: 'var(--highlight-color)' }}><a
        href={`https://zupple.technology`}
        target={'_blank'}>Zupple Labs</a></strong> | <em>SDE-1</em> | Jul 2026 – Present</p>
      <p>• Same work higher payout :)</p>
      <br />
      <p><strong style={{ color: 'var(--highlight-color)' }}><a
        href={`https://zupple.technology`}
        target={'_blank'}>Zupple Labs</a></strong> | <em>SDE Intern</em> | Feb 2026 – Jun 2026</p>
      <p>• Zupple is a new-age software company with deep expertise in digital credentials & enterprise-grade blockchain solutions.</p>
      <p>• Architected and implemented systems capable of operating at a scale of millions, significantly reducing manual workloads for clients.</p>
      <p>• Developed and integrated advanced blockchain technologies into enterprise applications.</p>
      <p>• Actively participated in internal team discussions and client-facing meetings to align technical solutions with business requirements.</p>
      <br />
      <p><strong style={{ color: 'var(--highlight-color)' }}><a
        href={`https://gdg.community.dev/gdg-on-campus-birla-vishvakarma-mahavidyalaya-engineering-college-anand-india`}
        target={'_blank'}>Google Developer Groups on Campus BVM</a></strong> | <em>Tech Expert</em> | Sep 2024 – Present</p>
      <p>• Developed and deployed the official GDG BVM website using React.js and Three.js</p>
      <p>• Hosted 5+ tech sessions and workshops on Git & GitHub, Figma, Azure, and AI in 30 Days Code Jam</p>
      <p>• Led technical initiatives to bring together students interested in Google technologies</p>
      <br />
      <p><strong style={{ color: 'var(--highlight-color)' }}><a
        href={`https://passdn.com/`}
        target={'_blank'}>PASSDN</a> (Startup)</strong> | <em>SDE Intern</em> | Jun – Jul 2024</p>
      <p>• Developed backend features using Node.js, Express.js, and MongoDB</p>
      <p>• Designed payload structures and API routes for the ONDC Mobility module</p>
      <p>• Collaborated with the team via Slack; worked on tasks assigned through Jira</p>
      <br />
    </span>
  ),

  projects: (
    <span>
      <p><strong style={{ color: 'var(--highlight-color)' }}>AURA ORBIT</strong> | Android Live Wallpaper & Launcher | <em>Jun 2026</em></p>
      <p>• Fully interactive 3D sphere that orbits apps with 120 FPS hardware refresh rates</p>
      <p>• Built on libGDX utilizing a golden angle Fibonacci distribution for 3D app placement</p>
      <p>• Tech: Java, libGDX</p>
      <p>• <a href="https://github.com/JaiminPatel345/AuraOrbit" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://f-droid.org/en/packages/dev.jaimin.auraorbit/" target="_blank" rel="noopener noreferrer">APK</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>TEMPLATE GOBLIN</strong> | PDF Template Engine | <em>Apr 2026</em></p>
      <p>• Open-source PDF template engine generating PDFs at scale with zero disk I/O</p>
      <p>• Includes a visual drag-and-drop builder for non-technical users to design templates</p>
      <p>• Tech: TypeScript, npm</p>
      <p>• <a href="https://github.com/JaiminPatel345/template-goblin" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://jaiminpatel345.github.io/template-goblin/" target="_blank" rel="noopener noreferrer">Live</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>GLANCEBAR</strong> | Desktop Widget for Ubuntu | <em>Mar 2026</em></p>
      <p>• Glassmorphism desktop widget featuring clock, weather, music player, and system toggles</p>
      <p>• Built avoiding heavy web frameworks like Electron for a fast and clean architecture</p>
      <p>• Tech: Python, GTK3, Cairo</p>
      <p>• <a href="https://github.com/JaiminPatel345/glancebar" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <br />

      <p>Type <strong
        style={{ color: 'var(--highlight-color)' }}>projects_all</strong> to see all projects</p>
      <br />
      <p>Type <strong style={{ color: 'var(--highlight-color)' }}>skills</strong> to see my technical expertise!</p>
    </span>
  ),

  projects_all: (
    <span>
      <p><strong style={{ color: 'var(--highlight-color)' }}>AURA ORBIT</strong> | Android Live Wallpaper & Launcher | <em>Jun 2026</em></p>
      <p>• Fully interactive 3D sphere that orbits apps on the home screen using libGDX and Fibonacci distribution</p>
      <p>• Tech Stack: Java</p>
      <p>• <a href="https://github.com/JaiminPatel345/AuraOrbit" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://f-droid.org/en/packages/dev.jaimin.auraorbit/" target="_blank" rel="noopener noreferrer">APK</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>TEMPLATE GOBLIN</strong> | PDF Template Engine | <em>Apr 2026</em></p>
      <p>• Open-source PDF template engine with a visual builder generating PDFs at scale</p>
      <p>• Tech Stack: TypeScript</p>
      <p>• <a href="https://github.com/JaiminPatel345/template-goblin" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://jaiminpatel345.github.io/template-goblin/" target="_blank" rel="noopener noreferrer">Live</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>GLANCEBAR</strong> | Desktop Widget for Ubuntu | <em>Mar 2026</em></p>
      <p>• Glassmorphism desktop widget for Ubuntu with clock, weather, music player, and system toggles</p>
      <p>• Tech Stack: Python, GTK3, Cairo</p>
      <p>• <a href="https://github.com/JaiminPatel345/glancebar" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>MICROMERIT PORTAL</strong> | Micro Credential Aggregator Platform | <em>Nov – Dec 2025</em></p>
      <p>• Full-stack microservices with 6 modules: Node.js backend, Python AI, blockchain, and dual React frontends</p>
      <p>• Tech Stack: TypeScript, Node.js, Python, FastAPI, React, PostgreSQL, Prisma, Redis, BullMQ, Groq AI, Ethers.js, IPFS</p>
      <p>• <a href="https://github.com/JaiminPatel345/MicroMerit-Portal" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>QUIZZER</strong> | AI-Powered Quiz Microservice | <em>Sep 2025</em></p>
      <p>• Backend-only TypeScript Node.js microservice generating quizzes using Groq and Gemini AI</p>
      <p>• Tech Stack: TypeScript, Node.js, Express.js, MongoDB, JWT, Docker, Azure</p>
      <p>• <a href="https://github.com/JaiminPatel345/quizzer" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>FACE ANONYMIZER</strong> | Real-time Face Blurring | <em>May 2025</em></p>
      <p>• Captures webcam input and outputs video stream with blurred faces in real time</p>
      <p>• Tech Stack: Python, OpenCV, MediaPipe</p>
      <p>• <a href="https://github.com/JaiminPatel345/face-anonymizer" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>ABHINAVAM</strong> | Social Media Mobile App | <em>Mar – Apr 2025</em></p>
      <p>• Personalized social platform crafted for artists and creative professionals</p>
      <p>• Built a production-grade mobile app with high performance, efficiency, and security</p>
      <p>• Tech Stack: TypeScript, React Native (Expo), Node.js, Express.js, MongoDB, Redux, Redis, Cloudinary</p>
      <p>• <a href="https://github.com/JaiminPatel345/abhinavam" target="_blank"
        rel="noopener noreferrer">GitHub</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>WANDERLUST</strong> | Travel & Accommodation Booking Platform | <em>Aug – Dec 2023</em></p>
      <p>• Full-stack web app to search and book unique stays with an elegant UI</p>
      <p>• Features include search, pagination, user dashboard, and Rive animations for authentication</p>
      <p>• Tech Stack: MERN (JavaScript), Tailwind CSS, Redis, OAuth2, Zustand, Rive, Cloudinary, Azure</p>
      <p>• <a href="https://github.com/JaiminPatel345/wanderlust" target="_blank"
        rel="noopener noreferrer">GitHub</a> |
        <a href="https://wanderlust.jaimin-detroja.tech" target="_blank"
          rel="noopener noreferrer"> Live</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>BARTER TALK</strong> | Real-time Messaging & Video Calling App | <em>Nov – Dec 2024</em></p>
      <p>• Developed a full-stack communication platform supporting real-time chat and peer-to-peer video calls</p>
      <p>• Includes OAuth2 login, delivery/read receipts, and responsive chat UI</p>
      <p>• Tech Stack: MERN, Tailwind CSS, Socket.io, Peer.js, Redis, Cloudinary</p>
      <p>• <a href="https://github.com/JaiminPatel345/BarterTalk" target="_blank"
        rel="noopener noreferrer">GitHub</a> |
        <a href="https://barter-talk.vercel.app" target="_blank"
          rel="noopener noreferrer"> Live</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>LOCKSMITH</strong> | Password & Document Manager App | <em>Dec 2024 – Jan 2025</em></p>
      <p>• Secure cross-platform app to manage passwords and sensitive documents</p>
      <p>• Features biometric authentication and encrypted local storage</p>
      <p>• Tech Stack: React Native CLI, Redux, NativeWind, Encrypted Storage, Biometric Auth</p>
      <p>• <a href="https://github.com/JaiminPatel345/LockSmith" target="_blank"
        rel="noopener noreferrer">GitHub</a> |
        <a href="https://drive.google.com/drive/folders/1jk1cnW5aRTltLMa6XyVhvZ7VD845Gyrx"
          target="_blank" rel="noopener noreferrer"> APK Download</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>HEALTH PIE</strong> | Health Tracking & Doctor-Patient Platform | <em>Aug – Sep 2024</em></p>
      <p>• Role: Backend Developer</p>
      <p>• Built a health management app to connect patients with doctors remotely</p>
      <p>• Features personalized recommendations, activity tracking, and real-time monitoring</p>
      <p>• Tech Stack: Node.js, Express, MongoDB, EJS, Bootstrap, JWT, REST APIs, Cloudinary</p>
      <p>• <a href="https://github.com/Bhargavimachhi/Health-Pie" target="_blank"
        rel="noopener noreferrer">GitHub</a> |
        <a href="https://health-pie.onrender.com/" target="_blank"
          rel="noopener noreferrer"> Live</a></p>
      <br />

      <p><strong style={{ color: 'var(--highlight-color)' }}>GDGC BVM</strong> | Official Website for GDGC Club at BVM | <em>Nov 2024</em></p>
      <p>• Designed the official club website featuring immersive 3D visuals using Three.js</p>
      <p>• Ensured responsive design and modern UI with smooth animations</p>
      <p>• Tech Stack: Next.js, Tailwind CSS, Three.js, Framer Motion</p>
      <p>• <a
        href="https://github.com/GDG-On-Campus-BVM/GDG-On-Campus-BVM-Website"
        target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://gdg-on-campus-bvm.vercel.app" target="_blank"
          rel="noopener noreferrer"> Live</a></p>
      <br />

      <p>Type <strong style={{ color: 'var(--highlight-color)' }}>skills</strong> to view my technical expertise!</p>
    </span>
  ),

  education: (
    <span>
      <div>
        <p><strong style={{ color: 'var(--highlight-color)' }}>Birla Vishvakarma Mahavidyalaya</strong>, Anand, Gujarat</p>
        <p>B.Tech, Computer Science | 2022 – 2026</p>
        <p>SPI: 7.20</p>
        <br />
      </div>
      <div>
        <p><strong style={{ color: 'var(--highlight-color)' }}>Baroda High School Danteshwar</strong>, Vadodara, Gujarat</p>
        <p>Science, Gujarat Board | 2020 – 2022</p>
        <p>• HSC: 88%</p>
        <p>• GUJCATE: 88/120</p>
        <p>• JEE Advanced 2022: AIR 28k</p>
        <br />
      </div>
      <div>
        <p><strong
          style={{ color: 'var(--highlight-color)' }}>Nutan Vidyalaya</strong>, Vadodara, Gujarat</p>
        <p>Gujarat Board | till 2020 </p>
        <p>• SSC: 86.83%</p>
        <br />
      </div>
      <br />
      <p>Type <strong
        style={{ color: 'var(--highlight-color)' }}>activities</strong> to see my campus involvement!</p>
    </span>
  ),

  achievements: (
    <span>
      <p>🏆 <strong style={{ color: 'var(--highlight-color)' }}>ODOO X Parul Hackathon</strong> - 2nd runner up of 36-hour hackathon, built a customer-centric cafe app</p>
      <p>🏆 <strong style={{ color: 'var(--highlight-color)' }}>SIH 2025 Finalist</strong> - Top 5 team across India, built Micro Credential aggregator platform</p>
      <p>🏆 <strong style={{ color: 'var(--highlight-color)' }}>Odoo x Mindbend Hackathon '25</strong> (at SVNIT) - Qualified as finalist</p>

      <p>🏅 <strong style={{ color: 'var(--highlight-color)' }}>LeetCode Weekly Contest 415</strong> - Ranked 1644 out of 33,921 participants</p>
      <p>🥇 <strong style={{ color: 'var(--highlight-color)' }}>1st Rank</strong> in Byte Quest - College coding competition</p>
      <p>🏅 <strong style={{ color: 'var(--highlight-color)' }}>GeeksForGeeks</strong> - 19th rank in Contest 135, 53rd rank in Contest 129</p>
      <p>🏅 <strong style={{ color: 'var(--highlight-color)' }}>3rd Place</strong> in Code Ramzat - DSA competition on CodeChef</p>
      <br />
      <p>Type <strong style={{ color: 'var(--highlight-color)' }}>dsa</strong> to see my competitive programming stats!</p>
    </span>
  ),

  socials: (
    <span>
      <p><strong>Email:</strong> <a
        href="mailto:officialjaimin345@gmail.com">officialjaimin345@gmail.com</a></p>

      <p><strong>LinkedIn:</strong> <a
        href="https://www.linkedin.com/in/jaimindetroja345"
        target="_blank"
        rel="noopener noreferrer">linkedin.com/in/jaimindetroja345</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/JaiminPatel345"
        target="_blank"
        rel="noopener noreferrer">github.com/JaiminPatel345</a></p>
      <p><strong>Portfolio:</strong> <a
        href="https://portfolio.jaimin-detroja.tech"
        target="_blank"
        rel="noopener noreferrer">jaimin-detroja.tech</a> {`// what you're viewing :)`}  </p>
    </span>
  ),

  activities: (
    <span>
      <p><a target={'_blank'}
        href={`https://gdg.community.dev/gdg-on-campus-birla-vishvakarma-mahavidyalaya-engineering-college-anand-india`
        }><strong style={{ color: 'var(--highlight-color)' }}>Google Developer Groups On Campus BVM</strong></a></p>
      <p><em>Tech Expert</em> | Sep 2024 – Present</p>
      <br />
      <p>• Developed and deployed the official <a target={'_blank'}
        href={`https://gdg-on-campus-bvm.vercel.app`}>GDG BVM website</a> using Next.js, Three.js, and Tailwind CSS</p>
      <p>• Hosted 5+ tech sessions and workshops on tools including:</p>
      <p>  - Git & GitHub</p>
      <p>  - Figma</p>
      <p>  - Azure</p>
      <p>  - AI in 30 Days Code Jam</p>
    </span>
  ),

  contributions: (
    <span>
      <p><a target={'_blank'}
        href={`https://github.com/freeCodeCamp/freeCodeCamp`}><strong
          style={{ color: 'var(--highlight-color)' }}>freeCodeCamp</strong></a> - Contributed with 1 PR merged to main branch</p>
      <p><a target={'_blank'}
        href={`https://github.com/cboard-org/cboard`}><strong
          style={{ color: 'var(--highlight-color)' }}>Cboard</strong></a> - Contributed with 1 PR successfully merged to main branch</p>
      <br />
      <p>I believe in giving back to the community that has taught me so much!</p>
    </span>
  ),

  dsa: (
    <span>
      <p>Knight in <a target={'_blank'}
        href={`https://leetcode.com/u/soldier_of_god`}><strong
          style={{ color: 'var(--highlight-color)' }}>LeetCode</strong></a></p>

      <p>3-star rated coder in <a href={`https://www.codechef.com/users/jaimin_patel_3`}
        target={'_blank'}><strong
          style={{ color: 'var(--highlight-color)' }}>CodeChef</strong></a></p>
      <br />
      <p>I regularly practice algorithmic problem-solving to strengthen my analytical thinking.</p>
    </span>
  ),

  skills: (
    <span>
      <pre style={{ color: 'var(--highlight-color)' }}>
        {`
──────────────── MY SKILLS & TECH STACK ───────────
           
  ⚡ BACKEND         ⚡ FRONTEND        ⚡ DATABASE
  ---------------   ---------------   -------------
  ✅ Node.js        ✅ React.js       ✅ MongoDB
  ✅ Express.js     ✅ React Native   ✅ PostgreSQL
  ✅ Redis          ✅ Redux           
  ✅ Socket.io      ✅ Tailwind CSS   

  ⚡ DEVOPS          ⚡ LANGUAGES       ⚡ ML
  ---------------   ---------------   -------------
  ✅ Docker         ✅ TypeScript     ✅ Numpy
  ✅ Azure          ✅ JavaScript     ✅ Pandas
  ✅ Git            ✅ Python         ✅ OpenCV
                    ✅ Java
                    ✅ SQL
      
───────────────────────────────────────────────────
`}
      </pre>
    </span>
  ),

  skill: null,
};

commands.skill = commands.skills;
commands.contact = commands.socials;

export const welcomeMessage = (
  <span>
    {`Type 'help' for all available commands.`} <br />
  </span>
);

export const themes = {
  'light': {
    themeBGColor: '#ffffff',
    themeToolbarColor: '#f5f5f5',
    themeColor: '#333333',
    themePromptColor: '#3b82f6', // blue-500
  },
  'my-custom-theme': {
    themeBGColor: '#1f2937', // dark:neutral-800
    themeToolbarColor: '#111827', // dark:neutral-900
    themeColor: '#f9fafb', // dark:neutral-50
    themePromptColor: '#60a5fa', // dark:blue-400
  },
};