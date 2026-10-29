// src/App.jsx — v3: complete redesign (2026)
// Single-page portfolio: hero, about, experience, education, projects, skills, contact.

const experience = [
  {
    org: 'Apple Inc.',
    role: 'Quality Engineer (Contractor)',
    period: 'April 2022 – April 2025',
    location: 'Hong Kong',
    points: [
      'Built data pipelines and automated tests to support quality assurance in the AI/ML team across 10+ locales.',
      'Developed data processing pipelines for over 10 locales, reducing data preparation time significantly.',
      'Created Python scripts to perform ETL to maintain and expand testing scope and domains.',
      'Configured CI/CD pipelines to streamline software deployment workflows.',
      'Expanded Swift test cases for comprehensive scenario coverage and quality assurance.',
    ],
  },
  {
    org: 'The Chinese University of Hong Kong',
    role: 'AI/ML Research Assistant (AI for the Future)',
    period: 'August 2021 – April 2022',
    location: 'Hong Kong',
    points: [
      'Leveraged the pre-trained AI Magenta model to generate music tailored to user specifications.',
      'Developed an interactive web application using Ajax with Flask APIs for the music generation.',
      'Dockerized and deployed the application to be used by over 200 schools in Hong Kong.',
    ],
  },
  {
    org: 'PCCW Solutions',
    role: 'Solution Developer',
    period: 'September 2020 – April 2021',
    location: 'Hong Kong',
    points: [
      'Maintained both the front-end and back-end of an e-commerce platform for clients in Singapore.',
      'Worked closely with the Business Intelligence team to execute ETL processes, extracting and transforming raw customer data from the data warehouse.',
    ],
  },
];

const education = [
  {
    school: 'Tufts University',
    credential: "Master's in Artificial Intelligence — Class of 2028",
    period: 'September 2026 – May 2028',
    location: 'Medford, MA',
    detail:
      'Focus: machine learning, reinforcement learning, and large language models — including diffusion language models, agentic AI, and AI for science.',
  },
  {
    school: 'Chinese University of Hong Kong',
    credential: 'B.Sc Computer Science',
    period: 'September 2016 – June 2020',
    location: 'Hong Kong',
    detail:
      'Relevant courses: Data Structures, Formal Languages and Automata Theory, Algorithms, Fundamentals of Artificial Intelligence, Software Engineering, Machine Learning.',
  },
  {
    school: 'Eötvös Loránd University',
    credential: 'Term Exchange',
    period: 'February 2019 – June 2019',
    location: 'Budapest, Hungary',
    detail:
      'Relevant courses: Operating Systems, Machine Learning, Data Models and Databases, Data Mining in Smart Systems.',
  },
  {
    school: 'Tsinghua University',
    credential: 'Summer Exchange',
    period: 'July 2018',
    location: 'Beijing, China',
    detail:
      'Relevant courses: Physics of Information, Computational Modeling for Environmental and Ecological Management.',
  },
];

const projects = [
  {
    title: 'Automatic Piano Reduction',
    category: 'AI & Machine Learning',
    description:
      'AI system converting orchestral scores to single-pianist scores using LSTM modeling.',
    image: '/images/piano.jpg',
    url: 'https://github.com/ivjiyeon/Automatic-Piano-Reduction',
  },
  {
    title: 'Skin Lesion Classification',
    category: 'AI & Machine Learning',
    description:
      'Skin cancer detection model built with ResNet and TFRecord data augmentation.',
    image: '/images/skin.jpg',
    url: 'https://github.com/ivjiyeon/Skin-Lesion-Classification',
  },
  {
    title: 'Hyperliquid Copy Trading',
    category: 'Automation',
    description:
      'Real-time copy trading system mirroring top traders via Hyperliquid API integration.',
    image: '/images/hyperliquid-logo.jpg',
    url: 'https://github.com/ivjiyeon/HyperliquidCopyTrading',
  },
];

const skillGroups = [
  {
    title: 'AI & Machine Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'LangChain', 'RAG', 'Hermes', 'Temporal Fusion Transformer (TFT)', 'LightGBM', 'Reinforcement Learning', 'LLMs & Agentic AI'],
  },
  {
    title: 'Programming Languages',
    items: ['Python', 'Swift', 'C', 'C#', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Web & Data',
    items: ['React', 'Tailwind CSS', 'Flask', 'RESTful APIs', 'Gradio', 'Ajax', 'Scrapy', 'Selenium', 'MySQL'],
  },
  {
    title: 'Tools & Cloud',
    items: ['Docker', 'Google Cloud (GCP / Cloud Run)', 'Azure DevOps', 'Git', 'CI/CD', 'WPF'],
  },
];

const interests = [
  {
    title: 'Deep Learning',
    desc: 'Neural models for language, vision, and sequential data — trained, evaluated, and honestly validated.',
  },
  {
    title: 'Agentic AI & LLMs',
    desc: 'LLM systems, RAG, and multi-agent workflows that reason, use tools, and act.',
  },
  {
    title: 'Reinforcement Learning',
    desc: 'Bandits and sequential decision-making, especially in nonstationary environments where the world drifts.',
  },
  {
    title: 'AI for Science',
    desc: 'Diffusion language models and machine learning for scientific discovery.',
  },
];

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-medium">{title}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#16150f]">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 bg-[#faf8f4]/85 backdrop-blur-md border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-2xl font-semibold tracking-tight">
            Jiyeon Byun
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black/70">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#experience" className="hover:text-black">Experience</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#skills" className="hover:text-black">Skills</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a
            href="#contact"
            className="text-sm font-semibold bg-[#16150f] text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
          >
            Summer / Fall 2027 Internships
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div className="rise">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 mb-5">
              Boston, MA · Master's in AI at Tufts University
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.05] mb-6">
              AI/ML engineer building systems for real-world problems.
            </h1>
            <p className="text-lg text-black/70 leading-relaxed mb-8 max-w-xl">
              I'm Jiyeon Byun, a Master's in AI student at Tufts with 4+ years of
              software engineering experience, including three years at Apple building
              data pipelines. I build machine learning systems end to end,
              and I validate them like it matters — because it does.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-amber-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-800 transition-colors"
              >
                View projects
              </a>
              <a
                href="https://github.com/ivjiyeon"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/25 font-semibold px-6 py-3 rounded-full hover:border-black transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jiyeon-byun"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black/25 font-semibold px-6 py-3 rounded-full hover:border-black transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="rise">
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-xl rotate-1">
              <img src="/images/jiyeon.JPG" alt="Jiyeon Byun" className="w-full h-full object-cover object-center scale-110 -translate-x-[5%] translate-y-[5%] aspect-[4/5]" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            ['4+', 'years of engineering experience'],
            ['3', 'years at Apple building data pipelines'],
            ['10+', 'locales served by my pipelines'],
            ['200+', 'schools reached by my CUHK web app'],
          ].map(([num, label]) => (
            <div key={label} className="bg-white border border-black/10 rounded-2xl p-5">
              <div className="font-serif text-4xl font-semibold mb-1">{num}</div>
              <div className="text-sm text-black/60">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-white border-y border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionHeading title="About" />
          <div className="grid md:grid-cols-2 gap-10 text-black/75 leading-relaxed text-[1.05rem]">
            <p>
              I started in computer science at The Chinese University of Hong Kong,
              specializing in Intelligent Science, and spent over four years shipping
              real systems — data pipelines and automated tests at Apple supporting
              quality assurance for the AI/ML team across 10+ locales, an AI
              music-generation web app at CUHK used by over 200 schools, and an
              e-commerce platform at PCCW Solutions.
            </p>
            <p>
              Now in Boston for my Master's in AI at Tufts, my work centers on machine
              learning that survives contact with unseen data: multi-timeframe trading
              signal systems with strict held-out validation, reinforcement learning in
              nonstationary environments, and LLM and agentic AI systems. I'm looking
              for Summer and Fall 2027 internships in AI/ML engineering, data science,
              and software engineering.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {interests.map((item) => (
              <div key={item.title} className="border border-black/10 rounded-2xl p-6 bg-[#faf8f4]">
                <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-black/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Experience" />
        <div className="space-y-6">
          {experience.map((job) => (
            <article key={job.org} className="bg-white border border-black/10 rounded-3xl p-7 md:p-9 grid md:grid-cols-[1fr_1.6fr] gap-6">
              <div>
                <h3 className="font-serif text-2xl font-medium leading-snug">{job.org}</h3>
                <p className="text-amber-700 font-semibold mt-2">{job.role}</p>
                <p className="text-sm text-black/55 mt-1">{job.period}</p>
                <p className="text-sm text-black/55 mt-1">{job.location}</p>
              </div>
              <ul className="space-y-2.5 text-black/75 leading-relaxed list-disc pl-5">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <SectionHeading title="Education" />
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((ed) => (
              <article key={ed.school} className="border border-black/10 rounded-3xl p-7 bg-white">
                <h3 className="font-serif text-2xl font-medium">{ed.school}</h3>
                <p className="text-amber-700 font-semibold mt-1.5">{ed.credential}</p>
                <p className="text-sm text-black/55 mt-1">{ed.period}</p>
                <p className="text-sm text-black/55 mt-1">{ed.location}</p>
                <p className="text-black/70 leading-relaxed mt-3 text-[0.95rem]">{ed.detail}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Leadership & Service */}
        <div className="mt-20">
          <SectionHeading title="Leadership & Service" />
          <div className="space-y-6">
            {[
              {
                org: 'Hong Kong Institution of Engineers — Student Chapter',
                role: 'Chairperson',
                period: 'September 2017 – September 2018',
                location: 'Hong Kong',
                points: [
                  'Led inter-university events, career programming, and member recruitment for the chapter.',
                  'Hosted a career talk for Mechanical and Automation Engineering students.',
                  'Recruited members for the HKIE from The Chinese University of Hong Kong.',
                ],
              },
              {
                org: 'C. W. Chu College Student Union, CUHK',
                role: 'General Affairs Manager',
                period: 'March 2017 – March 2018',
                location: 'Hong Kong',
                points: [
                  'Represented the college on the Library Users Group and ITSC Student User Consultation Committee.',
                  'Advocated for an amendment to protect the privacy of student emails and their personal data.',
                ],
              },
            ].map((job) => (
              <article key={job.org} className="bg-white border border-black/10 rounded-3xl p-7 md:p-9 grid md:grid-cols-[1fr_1.6fr] gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium leading-snug">{job.org}</h3>
                  <p className="text-amber-700 font-semibold mt-2">{job.role}</p>
                  <p className="text-sm text-black/55 mt-1">{job.period}</p>
                  <p className="text-sm text-black/55 mt-1">{job.location}</p>
                </div>
                <ul className="space-y-2.5 text-black/75 leading-relaxed list-disc pl-5">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="bg-[#16150f] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-10">Projects</h2>

          {/* Featured project */}
          <a
            href="https://github.com/ivjiyeon/TemporalFusionTransformerTrading"
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-amber-500/25 via-[#22201a] to-[#1a1915] p-8 md:p-12 mb-6 hover:border-amber-400/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-4">
                  Featured · AI & Machine Learning
                </p>
                <h3 className="font-serif text-3xl md:text-5xl font-medium mb-4 group-hover:text-amber-300 transition-colors">
                  Algorithmic Trading System & Agent Framework
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Automated cryptocurrency futures (BTC/USDT) trading integrating Binance
                  APIs, with machine-learning forecasting — Temporal Fusion Transformer
                  (TFT) and LightGBM — for multi-timeframe volatility and price movement,
                  and a cloud-native webhook execution architecture on Google Cloud Run
                  with Docker and Telegram bot integration for event-driven signals.
                  FinRL reinforcement-learning approaches were evaluated for trade
                  execution policies, and every strategy is backtested with strict
                  held-out validation: the 4h long strategy, tuned on 2021–2024, returned
                  +21.5% out-of-sample on untouched 2025–2026 data while buy-and-hold
                  lost 9.7%.
                </p>
              </div>
              <div className="hidden md:flex w-24 h-24 shrink-0 rounded-full bg-amber-500/20 border border-amber-400/40 items-center justify-center font-serif text-5xl text-amber-300">
                ₿
              </div>
            </div>
          </a>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => {
              const Wrapper = project.url ? 'a' : 'div';
              const wrapperProps = project.url
                ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
              <Wrapper
                key={project.title}
                {...wrapperProps}
                className="group bg-[#22201b] border border-white/10 rounded-3xl overflow-hidden hover:border-amber-400/40 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-400 mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{project.description}</p>
                </div>
              </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Skills & certifications ── */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading title="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-white border border-black/10 rounded-3xl p-6">
              <h3 className="font-serif text-xl font-medium mb-4">{group.title}</h3>
              <p className="text-sm text-black/70 leading-relaxed">{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-black/10 rounded-3xl p-6 mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          <h3 className="font-serif text-xl font-medium">Languages</h3>
          <p className="text-sm text-black/70 leading-relaxed">English (Fluent) · Korean (Native) · Mandarin (Proficient)</p>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          {[
            ['IBM AI Engineering', 'https://coursera.org/share/528e27529c3ddf930a7cbf5a4beff8ad'],
            ['IBM RAG and Agentic AI', 'https://coursera.org/share/42f00107f9b0293c8e1b581f7596d7c3'],
            ['IBM Deep Learning with PyTorch, Keras and TensorFlow', 'https://www.coursera.org/account/accomplishments/specialization/9Q1GYQZJQ5FP'],
            ['Generative AI Engineering with LLMs', 'https://www.coursera.org/account/accomplishments/specialization/ZK33OYDUP18L'],
          ].map(([title, link]) =>
            link ? (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-black/10 rounded-full px-5 py-3 font-medium hover:border-amber-700 hover:text-amber-700 transition-colors"
              >
                Certification · {title} ↗
              </a>
            ) : (
              <span
                key={title}
                className="bg-white border border-black/10 rounded-full px-5 py-3 font-medium"
              >
                Certification · {title}
              </span>
            )
          )}
        </div>
      </section>

      {/* ── Contact ── */}
      <footer id="contact" className="bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Let's build something.</h2>
            <p className="text-black/65 max-w-md leading-relaxed">
              I'm in Boston and looking for Summer / Fall 2027 internships in AI/ML
              engineering, data science, and software engineering. The fastest way to
              reach me is email.
            </p>
          </div>
          <div className="space-y-2 text-[1.05rem]">
            <div>
              <a href="mailto:ivjiyeonb@gmail.com" className="font-semibold hover:text-amber-700">
                ivjiyeonb@gmail.com
              </a>
            </div>
            <div>
              <a href="https://github.com/ivjiyeon" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-amber-700">
                github.com/ivjiyeon
              </a>
            </div>
            <div>
              <a href="https://linkedin.com/in/jiyeon-byun" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-amber-700">
                linkedin.com/in/jiyeon-byun
              </a>
            </div>
            <div className="text-black/60">
              Boston, MA, USA
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 py-5 text-center text-sm text-black/45">
          © 2026 Jiyeon Byun
        </div>
      </footer>
    </div>
  );
}
