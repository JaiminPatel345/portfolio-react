export const commands = {
  help: (
      <span>
      <strong>whoami</strong> - Who am I <br/>
      <strong>about</strong> - Short intro <br/>
      <strong>experience</strong> - My professional experience <br/>
      <strong>projects</strong> - Showcasing what I&#39;ve built <br/>
      <strong>education</strong> - My academic background <br/>
      <strong>skills</strong> - Technical expertise <br/>
      <strong>achievements</strong> - My notable accomplishments <br/>
      <strong>socials</strong> - Connect with me  <br/>
      <strong>activities</strong> - Community involvement <br/>
      <strong>contributions</strong> - Open source work <br/>
      <strong>dsa</strong> - Data Structures & Algorithms profile <br/>
    </span>
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
    <br/>
    
  </span>,

  about: (
      <span>
      <p>• I&#39;m a <strong style={{color: 'var(--highlight-color)'}}>Full Stack JavaScript Developer</strong>.</p>
      <p>• Machine Learning Enthusiast </p>
      <p>• Knight in LeetCode </p>
      <p>• {`'26`} grad of <strong>B.Tech Computer Science</strong>.</p>
      <p>• When I&#39;m not coding, you can find me on <a href={'https://www.chess.com/member/jaimindetroja'} target={'_blank'} className="text-blue-600 dark:text-blue-400 hover:underline">Chess.com</a>.</p>
        <br/>
      <p> Type <strong style={{color: 'var(--highlight-color)'}}>skills</strong> to see my technical toolkit or <strong
          style={{color: 'var(--highlight-color)'}}>projects</strong> to view my work!</p>
        
    </span>
  ),

  experience: (
      <span>
      <p><strong style={{color: 'var(--highlight-color)'}}><a
          href={`https://passdn.com/`}
          target={'_blank'}>PASSDN</a> (Startup)</strong> | <em>SDE Intern</em> | Jun – July 2024</p>
      <p>• Developed backend features using Node.js, Express.js, and MongoDB</p>
      <p>• Designed payload structures and API routes for the ONDC Mobility module</p>
      <p>• Collaborated with the team via Slack; worked on tasks assigned through Jira</p>
      <br/>
    </span>
  ),

  projects: (
      <span>
      <p><strong style={{color: 'var(--highlight-color)'}}>ABHINAVAM</strong> | Social Media Mobile App | <em>March – April 2025</em></p>
      <p>• Personalized platform for artistes and creative professionals</p>
      <p>• Production-grade app with focus on performance, efficiency, and security</p>
      <p>• Built with TypeScript, React Native (Expo), Node.js, Express.js, MongoDB, Redux, Redis, Cloudinary</p>
      <p>• <a href="https://github.com/JaiminPatel345/abhinavam"
              target="_blank"
              rel="noopener noreferrer">GitHub</a></p>
      <br/>
      
      <p><strong style={{color: 'var(--highlight-color)'}}>WANDERLUST</strong> | Travel & Accommodation Booking Platform | <em>Aug – Dec 2023</em></p>
      <p>• Full-stack application to explore and book unique accommodations</p>
      <p>• Features beautiful UI, search functionality, pagination, MongoDB aggregation</p>
      <p>• Interactive Rive animations for Login & Sign-up pages</p>
      <p>• Tech: MERN (JS), Tailwind CSS, Redis, OAuth2, Zustand, Rive, Cloudinary, Azure</p>
      <p>• <a href="https://github.com/JaiminPatel345/wanderlust"
              target="_blank"
              rel="noopener noreferrer">GitHub</a> | 
        <a
            href="https://wanderlust.jaimin-detroja.tech" target="_blank"
            rel="noopener noreferrer"> Live</a></p>
      
      <br/>
      <p>Type <strong
          style={{color: 'var(--highlight-color)'}}>projects_all</strong> to see all projects</p>
      <br/>
      <p>Type <strong style={{color: 'var(--highlight-color)'}}>skills</strong> to see my technical expertise!</p>
    </span>
  ),

  projects_all: (
      <span>
    <p><strong style={{color: 'var(--highlight-color)'}}>ABHINAVAM</strong> | Social Media Mobile App | <em>March – April 2025</em></p>
    <p>• Personalized social platform crafted for artists and creative professionals</p>
    <p>• Built a production-grade mobile app with high performance, efficiency, and security</p>
    <p>• Tech Stack: TypeScript, React Native (Expo), Node.js, Express.js, MongoDB, Redux, Redis, Cloudinary</p>
    <p>• <a href="https://github.com/JaiminPatel345/abhinavam" target="_blank"
            rel="noopener noreferrer">GitHub</a></p>
    <br/>

    <p><strong style={{color: 'var(--highlight-color)'}}>WANDERLUST</strong> | Travel & Accommodation Booking Platform | <em>Aug – Dec 2023</em></p>
    <p>• Full-stack web app to search and book unique stays with an elegant UI</p>
    <p>• Features include search, pagination, user dashboard, and Rive animations for authentication</p>
    <p>• Tech Stack: MERN (JavaScript), Tailwind CSS, Redis, OAuth2, Zustand, Rive, Cloudinary, Azure</p>
    <p>• <a href="https://github.com/JaiminPatel345/wanderlust" target="_blank"
            rel="noopener noreferrer">GitHub</a> | 
        <a href="https://wanderlust.jaimin-detroja.tech" target="_blank"
           rel="noopener noreferrer"> Live</a></p>
    <br/>

    <p><strong style={{color: 'var(--highlight-color)'}}>BARTER TALK</strong> | Real-time Messaging & Video Calling App | <em>Nov – Dec 2024</em></p>
    <p>• Developed a full-stack communication platform supporting real-time chat and peer-to-peer video calls</p>
    <p>• Includes OAuth2 login, delivery/read receipts, and responsive chat UI</p>
    <p>• Tech Stack: MERN, Tailwind CSS, Socket.io, Peer.js, Redis, Cloudinary</p>
    <p>• <a href="https://github.com/JaiminPatel345/BarterTalk" target="_blank"
            rel="noopener noreferrer">GitHub</a> | 
        <a href="https://barter-talk.vercel.app" target="_blank"
           rel="noopener noreferrer"> Live</a></p>
    <br/>

    <p><strong style={{color: 'var(--highlight-color)'}}>LOCKSMITH</strong> | Password & Document Manager App | <em>Dec 2024 – Jan 2025</em></p>
    <p>• Secure cross-platform app to manage passwords and sensitive documents</p>
    <p>• Features biometric authentication and encrypted local storage</p>
    <p>• Tech Stack: React Native CLI, Redux, NativeWind, Encrypted Storage, Biometric Auth</p>
    <p>• <a href="https://github.com/JaiminPatel345/LockSmith" target="_blank"
            rel="noopener noreferrer">GitHub</a> | 
        <a href="https://drive.google.com/drive/folders/1jk1cnW5aRTltLMa6XyVhvZ7VD845Gyrx"
           target="_blank" rel="noopener noreferrer"> APK Download</a></p>
    <br/>

    <p><strong style={{color: 'var(--highlight-color)'}}>HEALTH PIE</strong> | Health Tracking & Doctor-Patient Platform | <em>Aug – Sep 2024</em></p>
    <p>• Role: Backend Developer</p>
    <p>• Built a health management app to connect patients with doctors remotely</p>
    <p>• Features personalized recommendations, activity tracking, and real-time monitoring</p>
    <p>• Tech Stack: Node.js, Express, MongoDB, EJS, Bootstrap, JWT, REST APIs, Cloudinary</p>
    <p>• <a href="https://github.com/Bhargavimachhi/Health-Pie" target="_blank"
            rel="noopener noreferrer">GitHub</a> | 
        <a href="https://health-pie.onrender.com/" target="_blank"
           rel="noopener noreferrer"> Live</a></p>
    <br/>

    <p><strong style={{color: 'var(--highlight-color)'}}>GDGC BVM</strong> | Official Website for GDGC Club at BVM | <em>Nov 2024</em></p>
    <p>• Designed the official club website featuring immersive 3D visuals using Three.js</p>
    <p>• Ensured responsive design and modern UI with smooth animations</p>
    <p>• Tech Stack: Next.js, Tailwind CSS, Three.js, Framer Motion</p>
    <p>• <a
        href="https://github.com/GDG-On-Campus-BVM/GDG-On-Campus-BVM-Website"
        target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://gdg-on-campus-bvm.vercel.app" target="_blank"
           rel="noopener noreferrer"> Live</a></p>
    <br/>

    <p>Type <strong style={{color: 'var(--highlight-color)'}}>skills</strong> to view my technical expertise!</p>
  </span>
  ),

  education: (
      <span>
      <div>
        <p><strong style={{color: 'var(--highlight-color)'}}>Birla Vishvakarma Mahavidyalaya</strong>, Anand, Gujarat</p>
        <p>B.Tech, Computer Science | 2022 – 2026</p>
        <p>SPI: 7.20</p>
        <br/>
      </div>
      <div>
        <p><strong style={{color: 'var(--highlight-color)'}}>Baroda High School Danteshwar</strong>, Vadodara, Gujarat</p>
        <p>Science, Gujarat Board | 2020 – 2022</p>
        <p>• HSC: 88%</p>
        <p>• GUJCATE: 88/120</p>
        <p>• JEE Advanced 2022: AIR 28k</p>
        <br/>
      </div>
      <div>
        <p><strong
            style={{color: 'var(--highlight-color)'}}>Nutan Vidyalaya</strong>, Vadodara, Gujarat</p>
        <p>Gujarat Board | till 2020 </p>
        <p>• SSC: 86.83%</p>
        <br/>
      </div>
      <br/>
      <p>Type <strong
          style={{color: 'var(--highlight-color)'}}>activities</strong> to see my campus involvement!</p>
    </span>
  ),

  achievements: (
      <span>
      <p>🏆 <strong style={{color: 'var(--highlight-color)'}}>Odoo x Mindbend Hackathon &#39;25</strong> (at SVNIT) finalist</p>
      <p>🥇 <strong style={{color: 'var(--highlight-color)'}}>1st Rank</strong> in Byte Quest, college coding competition</p>
      <p>🏅 <strong style={{color: 'var(--highlight-color)'}}>19th Rank</strong> in GeeksForGeeks Weekly contest 135</p>
      <p>🏅 <strong style={{color: 'var(--highlight-color)'}}>53rd Rank</strong> in GeeksForGeeks Weekly contest 129</p>
      <p>🎯 Qualified <strong style={{color: 'var(--highlight-color)'}}>JEE Advanced 2022</strong> with AIR 28k</p>
      <br/>
      <p>Type <strong style={{color: 'var(--highlight-color)'}}>dsa</strong> to see my competitive programming stats!</p>
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
            }><strong style={{color: 'var(--highlight-color)'}}>Google Developer Groups On Campus BVM</strong></a></p>
      <p><em>Tech Expert</em> | Sep 2024 – Present</p>
      <br/>
      <p>• Developed and deployed the official <a target={'_blank'}
                                                  href={`https://gdgc-bvm.vercel.app`}>GDG BVM website</a> using React.js</p>
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
          style={{color: 'var(--highlight-color)'}}>Free Code Camp</strong></a> - Contributed documentation improvements</p>
      <p><a target={'_blank'}
              href={`https://github.com/cboard-org/cboard`}><strong
          style={{color: 'var(--highlight-color)'}}>Cboard</strong></a> - Assisted with open source AAC communication tool</p>
      <br/>
      <p>I believe in giving back to the community that has taught me so much!</p>
    </span>
  ),

  dsa: (
      <span>
      <p>Knight in <a target={'_blank'}
              href={`https://leetcode.com/u/soldier_of_god`}><strong
          style={{color: 'var(--highlight-color)'}}>LeetCode</strong></a></p>
        
      <p>3-star rated coder in <a href={`https://www.codechef.com/users/jaimin_patel_3`}
              target={'_blank'}><strong
          style={{color: 'var(--highlight-color)'}}>CodeChef</strong></a></p>
      <br/>
      <p>I regularly practice algorithmic problem-solving to strengthen my analytical thinking.</p>
    </span>
  ),

  skills: (
      <span>
      <pre style={{color: 'var(--highlight-color)'}}>
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
        {`Type 'help' for all available commands.`} <br/>
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