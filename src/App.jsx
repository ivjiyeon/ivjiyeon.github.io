// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
  ];
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',       
      behavior: 'instant'   
    
    });
  }, [activeTab]);

  const [filter, setFilter] = useState('All');

  // Project Data
  const projects = [
    {
      id: 1,
      title: 'Hyperliquid Copy Trading',
      category: 'Automation',
      description: 'Real-time copy trading system mirroring top traders via Hyperliquid API integration.',
      image: '/src/assets/images/hyperliquid-logo.jpg',
      githubUrl: 'https://github.com/ivjiyeon/HyperliquidCopyTrading'
    },
    {
      id: 2,
      title: 'Automatic Piano Reduction',
      category: 'AI & Machine Learning',
      description: 'AI system converting orchestral to single-pianist scores using LSTM modeling.',
      image: '/src/assets/images/piano.jpg',
      githubUrl: 'https://github.com/ivjiyeon/FYP'
    },
    {
      id: 3,
      title: 'Skin Lesion Classification',
      category: 'AI & Machine Learning',
      description: 'Skin cancer detection model built with ResNet and TFRecord data augmentation.',
      image: '/src/assets/images/skin.jpg',
      githubUrl: 'https://github.com/ivjiyeon/Skin-Lesion-Classification'
    },
    {
      id: 4,
      title: 'Typing Game',
      category: 'Game',
      description: 'Interactive typing practice game developed in C# with WPF and MVC architecture.',
      image: '/src/assets/images/typing.jpg',
      githubUrl: 'https://github.com/ivjiyeon/TypingGame'
    },
  ];

  // Filtered projects based on selected category
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const programmingLanguages = [
    "Python",
    "Swift",
    "C",
    "C#",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  const machineLearning = [
    "PyTorch",
    "Tensorflow", 
    "Keras", 
    "Scikit-learn",
    "LangChain",
    "RAG"
  ]

  const websiteDev = [
    "React",
    "TailwindCSS",
    "Gradio", 
    "Ajax",
    "Flask",
    "RESTful APIs"
  ]

  const dataEng = [
    "Scrapy", 
    "Selenium",    
    "MySQL"
  ] 

  const devOps = [
    "Docker", 
  ]

  const others = [
    "WPF", 
  ]
    
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white font-['Poppins'] flex">
      <aside
        className="
          hidden lg:block lg:w-80 lg:flex-shrink-0 lg:border-r lg:border-gray-800/50
          fixed inset-y-0 left-0 z-30 overflow-y-auto
          bg-[#111113] p-8
        "
      >
        <div className="flex flex-col h-full">
          {/* Profile */}
          <div className="flex flex-col items-center pt-16 mb-12">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700/50 mb-6">
              <img
                src="\src\assets\images\jiyeon.JPG"
                alt="Jiyeon Byun"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </div>

            <h1 className="text-3xl font-semibold mb-2">Jiyeon Byun</h1>
            <p className="text-gray-400 text-sm mb-4">Data Scientist & Software Engineer</p>

            <span className="px-5 py-2 bg-gray-800/60 text-yellow-400 text-sm rounded-full font-medium">
              AI Enthusiast
            </span>
          </div>

          {/* Contact info */}
          <div className="space-y-6 mt-auto">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-yellow-400 text-xl">
                ✉
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                <a
                  href="mailto:ivjiyeonb@gmail.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  ivjiyeonb@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-yellow-400 text-xl">
                📱
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Phone</div>
                <a href="tel:+85265799634" className="hover:text-yellow-400 transition-colors">
                  +852 6579 9634
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-yellow-400 text-xl">
                📍
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                <div>Hong Kong, HKSAR</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area – scrolls independently */}
      <div className="flex-1 lg:ml-80 flex flex-col">
        {/* Tab bar – sticky at top */}
        <div className="
          sticky top-0 z-20 bg-[#111113]/90 backdrop-blur-md border-b border-gray-800/50
        ">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-6 flex justify-end">
            <div className="inline-flex bg-[#1a1a1e]/80 rounded-full p-1.5 shadow-lg border border-gray-700/30">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300
                    ${activeTab === tab.id
                      ? 'bg-yellow-500/20 text-yellow-400 shadow-inner'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto pb-12">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-10">
            {activeTab === 'about' && (
              <div className="space-y-14 animate-fade-in">
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-1 bg-yellow-500 rounded-full" />
                    <h1 className="text-4xl font-bold">About Me</h1>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    I'm a Data Scientist and Software Engineer from Hong Kong, with a Bachelor's in Computer Science from The Chinese University of Hong Kong, specializing in Intelligent Science. With over five years of experience, I thrive on transforming complex data challenges into efficient, scalable solutions using AI and machine learning.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-lg mt-6">
                    My expertise lies in building robust data pipelines and applications that are reliable, performant, and insightful. I add a thoughtful touch to every project, ensuring seamless integration of tools like Python, Docker, and ML frameworks to deliver real impact—whether it's reducing data prep time by 80% at Apple or deploying AI-driven web apps for education. My goal is to drive innovation through code, creating systems that solve problems and uncover hidden opportunities. I've developed projects for diverse applications, from real-time trading bots to anomaly detection models for healthcare.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-6">My Interests</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: "Data Analysis", icon: "📊", desc: "The most modern and high-quality design made at a professional level." },
                      { title: "Web Development", icon: "🌐", desc: "High-quality development of sites at the professional level." },
                      { title: "Deep Learning", icon: "🧠", desc: "Professional development of deep learning models." },
                      { title: "Photography", icon: "📸", desc: "High-quality photography at a professional level." },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="bg-[#1a1a1e] rounded-2xl p-6 border border-gray-800/50 transition-all"
                      >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'resume' && (
              <div className="space-y-16 animate-fade-in">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-1 bg-yellow-500 rounded-full" />
                  <h1 className="text-4xl font-bold">Resume</h1>
                </div>

                {/* ── Education ── */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xl">
                      🎓
                    </div>
                    <h2 className="text-3xl font-semibold">Education</h2>
                  </div>

                  <div className="relative pl-10 border-l-2 border-gray-700/50 space-y-12">
                    {/* Item 1 */}
                    <div className="relative">
                      <div className="absolute -left-[41px] -top-[-6px] w-5 h-5 rounded-full bg-yellow-500/30 border-4 border-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>

                      <h3 className="text-xl font-medium text-white mb-1">
                        Chinese University of Hong Kong
                      </h3>
                      <p className="text-yellow-400 font-medium">B.Sc Computer Science</p>
                      <p className="text-gray-400 text-sm mt-1">September 2016 – June 2020</p>

                      <p className="mt-3 text-gray-300">
                        <span className="font-medium">Relevant courses:</span> Data Structures, Formal Languages and Automata Theory, Algorithms, Fundamentals of Artificial Intelligence, Software Engineering, Machine Learning
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative">
                      <div className="absolute -left-[41px] -top-[-6px] w-5 h-5 rounded-full bg-yellow-500/30 border-4 border-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>

                      <h3 className="text-xl font-medium text-white mb-1">
                        Eötvös Loránd University
                      </h3>
                      <p className="text-yellow-400 font-medium">Term Exchange</p>
                      <p className="text-gray-400 text-sm mt-1">February 2019 – June 2019</p>

                      <p className="mt-3 text-gray-300">
                        <span className="font-medium">Relevant Courses:</span> Operating Systems, Machine Learning, Data Models and Databases, Data Mining in Smart Systems
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="relative">
                      <div className="absolute -left-[41px] -top-[-6px] w-5 h-5 rounded-full bg-yellow-500/30 border-4 border-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>

                      <h3 className="text-xl font-medium text-white mb-1">
                        Tsinghua University
                      </h3>
                      <p className="text-yellow-400 font-medium">Summer Exchange</p>
                      <p className="text-gray-400 text-sm mt-1">July 2018</p>

                      <p className="mt-3 text-gray-300">
                        <span className="font-medium">Relevant Courses:</span> Physics of Information, Computational Modeling for Environmental and Ecological Management
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── Experience ── */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xl">
                      💼
                    </div>
                    <h2 className="text-3xl font-semibold">Experience</h2>
                  </div>

                  <div className="relative pl-10 border-l-2 border-gray-700/50 space-y-14">
                    {/* Apple */}
                    <div className="relative">
                      <div className="absolute -left-[41px] -top-[-6px] w-5 h-5 rounded-full bg-yellow-500/30 border-4 border-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>

                      <h3 className="text-xl font-medium text-white mb-1">
                        Apple Asia Limited (via TEKsystems)
                      </h3>
                      <p className="text-yellow-400 font-medium">Contractor</p>
                      <p className="text-gray-400 text-sm mt-1">April 2022 – April 2025</p>

                      <ul className="mt-4 space-y-2 text-gray-300 list-disc">
                        <li>Developed data processing pipelines for over 10 locales, reducing data preparation time by 80%.</li>
                        <li>Created Python scripts to perform ETL to maintain and expand testing scope and domains.</li>
                        <li>Configured CI/CD pipelines to streamline software deployment workflows.</li>
                        <li>Expanded Swift test cases for comprehensive scenario coverage and quality assurance.</li>
                      </ul>
                    </div>

                    {/* CUHK */}
                    <div className="relative">
                      <div className="absolute -left-[41px] -top-[-6px] w-5 h-5 rounded-full bg-yellow-500/30 border-4 border-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>

                      <h3 className="text-xl font-medium text-white mb-1">
                        The Chinese University of Hong Kong
                      </h3>
                      <p className="text-yellow-400 font-medium">Research Assistant</p>
                      <p className="text-gray-400 text-sm mt-1">August 2021 – April 2022</p>

                      <ul className="mt-4 space-y-2 text-gray-300 list-disc">
                        <li>Leveraged the pre-trained AI Magenta model to generate music tailored to user specifications.</li>
                        <li>Developed an interactive web application using Ajax with Flask APIs for the music generation.</li>
                        <li>Dockerized and deployed the application to be used by over 200 schools in Hong Kong.</li>
                      </ul>
                    </div>

                    {/* PCCW */}
                    <div className="relative">
                      <div className="absolute -left-[41px] -top-[-6px] w-5 h-5 rounded-full bg-yellow-500/30 border-4 border-yellow-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      </div>

                      <h3 className="text-xl font-medium text-white mb-1">
                        PCCW Solutions
                      </h3>
                      <p className="text-yellow-400 font-medium">Solution Developer</p>
                      <p className="text-gray-400 text-sm mt-1">September 2020 – April 2021</p>

                      <ul className="mt-4 space-y-2 text-gray-300 list-disc">
                        <li>Maintained both the front-end and back-end of an e-commerce platform for clients in Singapore.</li>
                        <li>Worked closely with the Business Intelligence team to execute the ETL processes, extracting and transforming raw customer data from the data warehouse.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── Skills ── (suggested new design: compact grid with icons) */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xl">
                      ⚙️
                    </div>
                    <h2 className="text-3xl font-semibold">Skills</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Technical Skills */}
                    <div className="bg-[#1a1a1e] rounded-2xl p-6 border border-gray-800/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                          🛠️
                        </div>
                        <h3 className="text-xl font-medium">AI & Machine Learning</h3>
                      </div>
                      <ul className="text-gray-300 space-y-1 pl-11">
                        {machineLearning.map((lang) => (
                          <li key={lang} className="text-base">• {lang}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#1a1a1e] rounded-2xl p-6 border border-gray-800/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                          💻
                        </div>
                        <h3 className="text-xl font-medium">Website Development</h3>
                      </div>
                      <ul className="text-gray-300 space-y-1 pl-11">
                        {websiteDev.map((lang) => (
                          <li key={lang} className="text-base">• {lang}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Programming Languages */}
                    <div className="bg-[#1a1a1e] rounded-2xl p-6 border border-gray-800/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                          🌐
                        </div>
                        <h3 className="text-xl font-medium">Programming Languages</h3>
                      </div>
                      <ul className="text-gray-300 space-y-1 pl-11">
                        {programmingLanguages.map((lang) => (
                          <li key={lang} className="text-base">• {lang}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── Certifications ── (suggested: compact list with icons) */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xl">
                      🏆
                    </div>
                    <h2 className="text-3xl font-semibold">Certifications</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
                    {[
                      {
                        title: "IBM AI Engineering",
                        link: "https://coursera.org/share/528e27529c3ddf930a7cbf5a4beff8ad", // ← replace with real link
                        icon: "🤖",
                      },
                      {
                        title: "IBM RAG and Agentic AI",
                        link: "https://coursera.org/share/42f00107f9b0293c8e1b581f7596d7c3", // ← real link
                        icon: "🧠",
                      },
                      // {
                      //   title: "Generative AI Engineering with LLMs",
                      //   link: "https://www.linkedin.com/learning/certificates/...",
                      //   icon: "✨",
                      // },
                    ].map((cert, index) => (
                      <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          bg-[#1a1a1e] rounded-xl p-5 border border-gray-800/50 
                          flex items-center gap-4 hover:border-yellow-500/40 
                          hover:bg-[#222226] transition-all duration-300 
                          cursor-pointer group
                        "
                      >
                        <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                          {cert.icon}
                        </div>
                        <p className="font-medium text-gray-200 group-hover:text-white transition-colors">
                          {cert.title}
                        </p>
                      </a>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-1 bg-yellow-500 rounded-full" />
                  <h1 className="text-4xl font-bold">Projects</h1>
                </div>
                {/* Projects content */}
                {/* Filter buttons – horizontal, pill-style */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['All', 'AI & Machine Learning', 'Automation', 'Game' ].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`
                        px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300
                        ${
                          filter === category
                            ? 'bg-yellow-500/20 text-yellow-400 shadow-inner border border-yellow-500/30'
                            : 'bg-[#1a1a1e] text-gray-300 hover:text-gray-100 hover:bg-gray-800/50 border border-gray-700/50'
                        }
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 md:pt-10 lg:pt-12">
                  {filteredProjects.map((project) => (
                    <a
                      key={project.id}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block group bg-[#1a1a1e] rounded-2xl overflow-hidden border border-gray-800/50
                        hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10
                        transition-all duration-300 transform hover:scale-[1.02] cursor-pointer
                      "
                    >
                      <div
                        key={project.id}
                        className="
                          group bg-[#1a1a1e] rounded-2xl overflow-hidden border border-gray-800/50
                          hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10
                          transition-all duration-300 transform hover:scale-[1.02]
                        "
                      >
                        {/* Project image / mockup */}
                        <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">
                            {project.category}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed line-clamp-5 flex-grow">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;