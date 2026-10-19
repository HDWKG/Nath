// Everything on the site lives here. Edit text, add projects, drop images in public/assets/.

export const site = {
  name: 'Nathan Darrell',
  intro: 'Student at Fontys ICT, building mobile apps, games and web interfaces, usually with a team and sometimes alone.',
  about: [
    'I work across mobile (Kotlin, Swift), games (Unity, C#) and the web (React, Svelte). I like projects where design and code have to meet in the middle.',
    'Most of what is below started as a university or competition project.',
  ],
  contact: [
    { label: 'GitHub', href: 'https://github.com/HDWKG' },
    { label: 'ndsutejo@gmail.com', href: 'mailto:ndsutejo@gmail.com' },
  ],
}

const li = (name, url) => ({ name, url })

export const projects = [
  {
    slug: 'psc-sorong', title: 'PSC Sorong', kind: 'Web app', date: '2025', team: 'Team project',
    images: ['crossnet2.png', 'crossnet1.png'],
    aboutTitle: 'What is PSC Sorong',
    about: 'PSC Sorong is a web-based emergency response management system used by the government health sector in Sorong. It allows operators and supervisors to monitor incoming emergency cases, manage dispatch information, track response data, and generate reports. The platform centralizes case handling and ensures faster, more coordinated communication between health facilities, ambulances, and emergency teams.',
    featuresTitle: 'Features',
    features: [
      'The platform provides real-time dashboards for tracking emergency case data, integrated reporting, and tools for managing incident categories, healthcare facilities, and operational statistics. I worked on the frontend, implementing clean and responsive UI components, connecting API endpoints, and ensuring smooth data flow between the backend and the interface.',
      'The system includes analytics pages with charts, summary reports, and daily logs to help administrators monitor emergency workloads and performance. I also optimized UI interactions and improved the experience for operators and internal staff.',
    ],
    learned: [
      'I strengthened my skills in building scalable frontend architectures using Svelte 5 and TypeScript. I learned how to handle dynamic API-driven interfaces, process complex JSON structures, and manage state efficiently while keeping the UI clean and responsive.',
      'I also gained experience collaborating with backend teams, improving API integration workflows, and solving real-world UI/UX challenges in a production-grade government web application.',
    ],
    tech: ['Svelte 5', 'TypeScript', 'REST API integration', 'Front-end architecture', 'Responsive UI'],
  },
  {
    slug: 'react-pokedex', title: 'React Pokédex', kind: 'Web app', date: '2025', team: 'Solo project',
    images: ['pokemon1.png', 'pokemon2.png'],
    aboutTitle: 'What is Pokédex Manager?',
    about: 'Pokédex Manager is a web application that lets users explore Pokémon data, view detailed stats, and manage a personal Pokémon collection. It fetches real-time data from the PokéAPI and provides an interactive experience for searching, saving, and organizing Pokémon.',
    featuresTitle: 'Features',
    features: [
      'A dynamic catalog page where users can browse Pokémon and view types, stats, and images. A dedicated "My Pokémon" page lets users catch and store favorites locally, with a responsive UI and smooth navigation using React Router.',
      'Real-time search, animated card layouts, and persistent storage using LocalStorage, so the collection survives a refresh or browser restart.',
    ],
    learned: [
      'I improved my skills with React, including component state management, routing architecture, and API data handling with fetch/axios. I learned to build reusable UI components, optimize rendering performance, and design responsive layouts using Tailwind CSS.',
      'The project also strengthened my full-stack fundamentals, preparing me to integrate CI/CD pipelines, containerize applications using Docker, and structure production-ready web apps.',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'PokéAPI', 'LocalStorage', 'JavaScript (ES6+)', 'REST API integration'],
    links: [{ label: 'GitHub repository', href: 'https://github.com/HDWKG/Pokedex-React' }],
  },
  {
    slug: 'presentea', title: 'Presentea', kind: 'AI-powered app', date: '2025', team: 'Team project',
    images: ['logopresentea.jpg', 'presentf.jpg'],
    aboutTitle: 'What is Presentea',
    about: 'Presentea is an AI-powered presentation evaluation app that helps users improve their public speaking. It analyzes body language, facial expressions, and vocal delivery, detecting filler words like "uhm" and "ahh" to provide real-time feedback and scoring. By offering insights into confidence, clarity, and engagement, it helps users deliver more polished, professional presentations.',
    featuresTitle: 'Features',
    features: [
      'Real-time feedback on posture, gestures, and eye contact, plus filler-word detection. It also assesses speech clarity, measuring tone, pace, and articulation.',
      'The app generates detailed scores and reports with personalized suggestions. Users can track their progress over multiple presentations, which makes it useful for students, professionals, and anyone who wants to speak better.',
    ],
    learned: [
      'I improved my skills in implementing Teachable Machine, training models to recognize body language patterns and filler words. I also gained experience in data processing and real-time feedback systems, and in presenting AI predictions in a user-friendly way. The project reinforced the importance of usability and accuracy.',
    ],
    tech: ['Teachable Machine', 'Machine Learning', 'Python', 'Voice detection', 'Gesture detection'],
    credits: {
      people: [li('Gerald Gavin Lienardi', 'https://www.linkedin.com/in/gerald-lienardi-502427256/'), li('Christian Tanjung', 'https://www.linkedin.com/in/christian-tanjung-79a09b257/'), li('Gabriela Sihutomo', 'https://www.linkedin.com/in/gabriela-sihutomo/'), li('Jason Miracle Gunawan', 'https://www.linkedin.com/in/jason-miracle-gunawan-515961256/'), li('Karyna Budi Sanjaya', 'https://www.linkedin.com/in/karyna-sanjaya/')],
      note: '',
    },
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/reel/DDLgmkYyoZi/?igsh=MXQybGttY3l5ZHNpdg==' },
      { label: 'Ciputra UC article', href: 'https://www.ciputra.ac.id/presentea-aplikasi-presentasi-berbasis-ai-karya-mahasiswa-informatika-uc/' },
    ],
  },
  {
    slug: 'yucca-ai', title: 'Yucca AI', kind: 'AI chatbot', date: 'January 2025', team: 'Team project',
    images: ['yuuka.jpg', 'yuuka1.jpg'],
    aboutTitle: 'About Yucca',
    about: 'Yucca AI is an interactive chatbot that answers questions about UC (Universitas Ciputra), New Student Admissions (PMB), and available scholarships. Built with Unity for an engaging 3D interface and Python for data processing and AI, it gives fast, accurate, and easily accessible answers.',
    featuresTitle: 'Features',
    features: [
      'Questions about UC, scholarships, and admissions are answered by an interactive AI model backed by a knowledge base we gathered.',
      ['Speech input and output', 'Questions can be spoken, and answers are returned in a generated AI voice.'],
    ],
    learned: [
      'I improved my skills using APIs, making sure Whisper works seamlessly with ElevenLabs for smooth results between the user and Yucca. I learned a lot about API integration in Unity and about rigging and animating models within Unity.',
    ],
    tech: ['Unity', 'LangChain', 'Whisper', 'ElevenLabs', 'Figma', 'Blender'],
    credits: {
      people: [li('Bryan Samuel', 'https://www.linkedin.com/in/bryan-samuel/'), li('Christian Tanjung', 'https://www.linkedin.com/in/christian-tanjung-79a09b257/'), li('Rafi Abhista', 'https://www.linkedin.com/in/rafiabhista/'), li('Derend Marvel', 'https://www.linkedin.com/in/derend-marvel/')],
      note: 'Thanks also to MNA for hosting the internal competition between IMT X VCD.',
    },
    links: [
      { label: 'Download Yucca', href: 'https://drive.google.com/file/d/1gkoLUgrHHhJXdzcf-2UhEkgybCYzk7O8/view?usp=drive_link' },
      { label: 'Presentation', href: 'https://www.canva.com/design/DAGbkSMYmrE/y-nyGhJjsxdqM4-NHsf1AQ/view' },
    ],
  },
  {
    slug: 'nusantara-kafe', title: 'Nusantara Kafe', kind: 'Game', date: 'Aug – Sep 2024', team: 'Team project',
    images: ['nusantara.png', 'nusantara1.jpeg'],
    aboutTitle: 'About Nusantara Kafe',
    about: 'Welcome to a culinary world full of challenges and excitement. You play as Ina, a talented waitress at a restaurant owned by Chef Toni, a renowned chef with extraordinary cooking skills. Together you manage the restaurant, satisfy customers, and earn a lot of money.',
    featuresTitle: 'Story',
    features: [
      'Ina is a young girl full of enthusiasm with big dreams in the culinary world. She has always idolized Chef Toni, a famous chef who owns a small but very popular restaurant in the city. When Ina gets the chance to work as a waitress there, she sees it as the first step toward her dream.',
    ],
    learned: [
      'I improved my skills in game design, UI/UX principles, C# coding, and project management. As PM, I also gained experience in teamwork and problem-solving when facing technical challenges.',
    ],
    tech: ['Unity', 'C#', 'Photoshop', 'Aseprite', 'Figma'],
    credits: {
      people: [li('Bryan Samuel', 'https://www.linkedin.com/in/bryan-samuel/'), li('Christian Tanjung', 'https://www.linkedin.com/in/christian-tanjung-79a09b257/'), li('Rafi Abhista', 'https://www.linkedin.com/in/rafiabhista/'), li('Derend Marvel', 'https://www.linkedin.com/in/derend-marvel/')],
      note: 'Thanks also to TSA Gamefest for hosting the game competition.',
    },
    links: [{ label: 'Play on itch.io', href: 'https://hdwk.itch.io/nusantara-kafe' }],
  },
  {
    slug: 'bloom-sketch', title: 'Bloom Sketch', kind: 'iOS app', date: 'May – Jun 2024', team: 'Team project',
    images: ['bloom1.jpg', 'bloom2.png'],
    aboutTitle: 'About Bloom Sketch',
    about: 'Bloom Sketch is a creative drawing app that gives kids a fun, engaging way to learn and express their creativity.',
    featuresTitle: 'Features',
    features: [
      ['Comprehensive drawing tools', 'A wide range of brushes and tools for creative expression, including customizable color palettes.'],
      ['Motivational progress tracking', "A tree growth and streaks system visually represents users' artistic progress, motivating them to keep improving."],
    ],
    learned: ['I learned how to use WatchOS, code in Swift, create SwiftUI interfaces, and use Apple\'s PencilKit to build the drawing experience.'],
    tech: ['Swift', 'Xcode', 'PencilKit', 'WatchOS', 'Figma'],
    credits: {
      people: [li('Bernicko Raphael', 'https://www.linkedin.com/in/bernicko-rphl-25474524b/'), li('Samuel Miracle Kristanto Lie', 'https://www.linkedin.com/in/samuelmiracle/'), li('Willy Cahyadi', 'https://www.linkedin.com/in/wcahyadi/'), li('Steven Rafael')],
      note: '',
    },
    links: [
      { label: 'Presentation', href: 'https://www.canva.com/design/DAGHRNvWomc/F2onbivy9OD12TfoIEKNQg/view' },
      { label: 'GitHub repository', href: 'https://github.com/HDWKG/BloomSketch' },
    ],
  },
  {
    slug: 'uc-social', title: 'UC Social', kind: 'Mobile app', date: 'Dec 2023 – Jan 2024', team: 'Team project',
    images: ['ucSocial.png', 'ucSocial1.png'],
    aboutTitle: 'About UC Social',
    about: 'A platform for Ciputra University students to find information on committees and events, with Credit Points as the reward. We set out to make the best UC app for new and returning students.',
    featuresTitle: 'Features',
    features: [
      ['Create and share posts', 'Users can share thoughts, experiences, or updates with the university community, including text, images, and videos.'],
      ['Browse and interact with committees', 'Users can explore committees, view updates, and engage by liking, commenting, and sharing.'],
    ],
    learned: [
      'I gained experience with Android Studio, connecting the backend to the frontend so data flows smoothly. I also learned to use Postman for API testing, which let me troubleshoot and validate the interactions between the mobile app and the server.',
    ],
    tech: ['Android Studio', 'Kotlin', 'Postman', 'MySQL', 'Laravel', 'Figma'],
    credits: {
      people: [li('Daniel Fernando', 'https://www.linkedin.com/in/daniel-fernando-575992250/'), li('Steven Nelson'), li('Ferrio Gent Landy', 'https://www.linkedin.com/in/ferriogentlandy/')],
      note: 'Thanks also to MNA for hosting the internal competition between IMT X VCD.',
    },
    links: [{ label: 'Presentation', href: 'https://www.canva.com/design/DAGFH_dJp9s/FepNJnJAKzfUYMy6tmccfQ/view' }],
  },
]
export const experience = [
  {
    role: 'Front-End Developer Intern',
    org: 'PT. Cross Network Indonesia',
    date: 'Jul – Dec 2025',
    text: 'Built and improved internal web applications with Svelte and TypeScript: responsive interfaces, dynamic dashboards, and components that turn API data into clean UI. Worked with the backend team on integration and page performance.',
    tags: ['Svelte', 'TypeScript'],
  },
  {
    role: 'Assistant Lecturer, Mobile App Development',
    date: 'Feb – Jun 2025',
    text: 'Taught students to build iOS apps in Swift, covering UIKit, SwiftUI, Core Data and API integration. Ran lab sessions, reviewed code and gave feedback.',
    tags: ['Swift', 'SwiftUI', 'Core Data'],
  },
  {
    role: 'Assistant Lecturer, Visual Programming',
    date: 'Sep 2024 – Jan 2025',
    text: 'Taught Android development with Kotlin and Android Studio through hands-on projects, so students could build apps from the ground up.',
    tags: ['Kotlin', 'Android Studio'],
  },
  {
    role: 'Assistant Lecturer, Web Development',
    date: 'Feb – Jun 2024',
    text: 'Supported lessons on front-end and back-end development, with code reviews and one-on-one guidance on student projects.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Laravel'],
  },
  {
    role: 'Publication & Documentation Coordinator',
    org: 'Student Union Informatics',
    date: 'Jul 2022 – Jul 2023',
    text: 'Photographed and filmed union events and produced the visual content for them.', // TODO: describe what you actually did
    tags: ['Photography', 'Videography'],
  },
]