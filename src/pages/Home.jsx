import React from 'react';
import { motion } from 'framer-motion';
import ShinyText from '../components/ShinyText';
import GradientText from '../components/GradientText';
import SkillRadar from '../components/SkillRadar';
import ProjectCard from '../components/ProjectCard';
import Lanyard from '../components/Lanyard';
import LogoLoop from '../components/LogoLoop';
import { BentoGrid, BentoCard, StatCard, LocationCard, SocialCard } from '../components/BentoGrid';
import { 
  Code, Database, Terminal, BarChart3, 
  GitBranch, BrainCircuit, Globe, Linkedin,
  Github, Mail, Trophy, GraduationCap, Spade,
  Download, MapPin, Car, Smile
} from 'lucide-react';

const Home = () => {
  // 技能数据 - 用于雷达图
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'R/Stats', level: 88 },
    { name: 'ML/AI', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Data Viz', level: 92 },
  ];

  // Tech Stack 图标数据
  const techLogos = [
    <span key="python" className="text-2xl">🐍</span>,
    <span key="react" className="text-2xl text-cyan-400">⚛️</span>,
    <span key="sql" className="text-2xl">🗄️</span>,
    <span key="tableau" className="text-2xl">📊</span>,
    <span key="git" className="text-2xl">🔀</span>,
    <span key="ml" className="text-2xl">🤖</span>,
  ];

  // 项目数据 - 添加真实链接
  const projects = [
    {
      title: 'SICE',
      subtitle: 'Poker Decision Engine',
      description: 'A data-driven Texas Hold\'em research platform. Input your situation, get mathematically optimal decisions powered by game theory.',
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&h=400&fit=crop',
      tags: ['Game Theory', 'React', 'Python', 'Probability'],
      highlights: [
        'Real-time EV calculations using Monte Carlo simulation',
        'GTO (Game Theory Optimal) strategy recommendations',
        'Hand range visualization with equity graphs'
      ],
      links: { 
        github: 'https://github.com/Yu-Wang20',
        live: 'https://aishowcase-qu8phppe.manus.space/'
      },
      color: 'neonPurple',
      icon: <Spade size={24} />
    },
    {
      title: 'ChurnGuard',
      subtitle: 'Customer Lifecycle Analytics',
      description: 'ML-powered platform for predicting customer churn and optimizing retention strategies through RFM segmentation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'Streamlit'],
      highlights: [
        'Calibrated churn model with 0.89 AUC-ROC',
        'RFM segmentation identifying 5 customer personas',
        'ROI simulator for marketing budget optimization'
      ],
      links: { 
        github: 'https://github.com/Yu-Wang20',
        live: 'https://lifecycleengine-83zeab8g.manus.space/'
      },
      color: 'pinkPop',
      icon: <BarChart3 size={24} />
    },
    {
      title: 'Hotel Funnel Lab',
      subtitle: 'Conversion Analytics Platform',
      description: 'End-to-end booking funnel analytics with A/B testing framework to diagnose drop-offs and optimize conversions.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      tags: ['A/B Testing', 'SQL', 'Statistics', 'Python'],
      highlights: [
        'Funnel analysis revealing 34% checkout abandonment',
        'A/B test framework with power analysis',
        'Statistical significance testing at α=0.05'
      ],
      links: { 
        github: 'https://github.com/Yu-Wang20',
        live: 'https://hotelfunnel-fiurddsy.manus.space/'
      },
      color: 'softPurple',
      icon: <Globe size={24} />
    }
  ];

  // Fun Facts 数据 - 带图片
  const funFacts = [
    { 
      icon: <img src="/images/funfacts/cities.png" alt="Cities" className="w-8 h-8 object-contain" />, 
      text: 'Lived in Shanghai, NYC, Champaign', 
      color: 'text-blue-400' 
    },
    { 
      icon: <img src="/images/funfacts/manchester-united.png" alt="Man Utd" className="w-8 h-8 object-contain" />, 
      text: 'Manchester United Fan', 
      color: 'text-red-400' 
    },
    { 
      icon: <img src="/images/funfacts/sports-car.png" alt="Car" className="w-8 h-8 object-contain" />, 
      text: 'Car Enthusiast', 
      color: 'text-green-400' 
    },
    { 
      icon: <img src="/images/funfacts/poker-cards.png" alt="Poker" className="w-8 h-8 object-contain" />, 
      text: 'Texas Hold\'em Player', 
      color: 'text-purple-400' 
    },
    { 
      icon: <img src="/images/funfacts/minion.png" alt="Minion" className="w-8 h-8 object-contain" />, 
      text: 'Minions Lover', 
      color: 'text-yellow-400' 
    },
    { 
      icon: <img src="/images/funfacts/clash-royale.png" alt="Clash Royale" className="w-8 h-8 object-contain" />, 
      text: 'Clash Royale Player', 
      color: 'text-orange-400' 
    },
  ];

  return (
    <div className="relative w-full z-10 px-4 md:px-8 lg:px-12 pb-20 max-w-7xl mx-auto">
      
      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen pt-28 pb-16">
        
        {/* Hero Grid: Left Content + Right Lanyard */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          
          {/* Left: Main Content */}
          <div>
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GradientText 
                colors={['#5227FF', '#FF9FFC', '#B19EEF']} 
                animationSpeed={6} 
                showBorder={false}
                className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-4"
              >
                Calculated Risks & Data-Driven Wins
              </GradientText>
            </motion.div>
            
            {/* Name */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-[0.95] text-white tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              BRIAN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                WANG
              </span>
            </motion.h1>

            {/* About Me Card */}
            <motion.div 
              className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs text-neonPurple uppercase tracking-wider mb-3 font-mono">About Me</p>
              <ShinyText 
                text="Statistics & CS student at UIUC who treats data like a poker hand — every decision is a calculated bet. I build ML models that predict outcomes and dashboards that tell stories."
                speed={3}
                className="text-gray-300 text-sm md:text-base leading-relaxed"
              />
              <div className="flex flex-wrap gap-3 mt-5">
                <a 
                  href="#contact" 
                  className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Challenge Me
                </a>
                <a 
                  href="https://github.com/Yu-Wang20" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Github size={14}/> See My Code
                </a>
              </div>
            </motion.div>

            {/* New Bento Cards: Tech Stack, Seeking, Resume, Relocate */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Tech Stack LogoLoop */}
              <div className="col-span-2 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-neonPurple/30 transition-colors overflow-hidden">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
                <LogoLoop
                  logos={[
                    { node: <span className="text-white/90 font-mono text-sm px-2 py-1 bg-white/5 rounded">Python</span> },
                    { node: <span className="text-cyan-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">React</span> },
                    { node: <span className="text-yellow-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">SQL</span> },
                    { node: <span className="text-blue-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">Tableau</span> },
                    { node: <span className="text-orange-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">Git</span> },
                    { node: <span className="text-purple-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">ML</span> },
                    { node: <span className="text-green-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">Pandas</span> },
                    { node: <span className="text-pink-400 font-mono text-sm px-2 py-1 bg-white/5 rounded">R</span> },
                  ]}
                  speed={60}
                  direction="left"
                  logoHeight={24}
                  gap={16}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0,0,0,0.4)"
                />
              </div>
              
              {/* Seeking Summer '26 */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-green-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Status</p>
                </div>
                <p className="text-sm font-semibold text-green-400">Seeking Summer '26</p>
              </div>
              
              {/* Resume Download */}
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-pinkPop/30 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Download size={12} className="text-pinkPop group-hover:animate-bounce" />
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Resume</p>
                </div>
                <p className="text-sm font-semibold text-pinkPop group-hover:text-white transition-colors">Grab My Resume</p>
              </a>
            </motion.div>

            {/* Second Row: Location + Relocation */}
            <motion.div 
              className="grid grid-cols-2 gap-3 max-w-md mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {/* Current Location */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-softPurple/30 transition-colors">
                <p className="text-2xl mb-1">📍</p>
                <p className="text-xs text-gray-500">Champaign, IL</p>
              </div>
              
              {/* Willing to Relocate */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-blue-500/30 transition-colors flex items-center gap-3">
                <Globe size={18} className="text-blue-400" />
                <p className="text-sm text-blue-400 font-medium">Willing to Relocate</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Lanyard */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ width: '320px', height: '450px' }}
          >
            <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} />
          </motion.div>
        </div>

        {/* Poker Philosophy Section */}
        <motion.div 
          className="relative p-6 md:p-8 rounded-3xl bg-black/50 backdrop-blur-md border border-white/10 mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-4 right-4 text-4xl opacity-10">♠️</div>
          <p className="text-xs uppercase tracking-wider mb-3 font-mono flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              ♠ Why a Poker Player Makes a Better Data Scientist
            </span>
          </p>
          <blockquote className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            "In poker, you never have complete information — just probabilities. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold"> I've learned to make optimal decisions under uncertainty</span>, 
            quantify risk, and know when the expected value favors action over caution."
          </blockquote>
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-purple-400">♦</span> Bayesian Thinking
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-pink-400">♣</span> Risk Management
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-purple-400">♥</span> Pattern Recognition
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-pink-400">♠</span> EV Optimization
            </span>
          </div>
        </motion.div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Technical <span className="text-neonPurple">Arsenal</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Proficiency levels based on project experience and professional application
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 雷达图 */}
          <div className="flex justify-center">
            <SkillRadar skills={skills} size={300} />
          </div>

          {/* 技能分类 */}
          <div className="space-y-4">
            <motion.div 
              className="p-5 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-neonPurple/30 transition-colors"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Code className="text-neonPurple" size={20} />
                <h3 className="text-base font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'R', 'Java', 'TypeScript', 'C++'].map(lang => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-neonPurple/10 text-neonPurple text-xs">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="p-5 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-pinkPop/30 transition-colors"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="text-pinkPop" size={20} />
                <h3 className="text-base font-semibold text-white">Tools & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Tableau', 'Git', 'React', 'Next.js', 'Pandas', 'Scikit-learn'].map(tool => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-pinkPop/10 text-pinkPop text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="p-5 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-softPurple/30 transition-colors"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BrainCircuit className="text-softPurple" size={20} />
                <h3 className="text-base font-semibold text-white">Analytics & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['A/B Testing', 'ML Analytics', 'Product Analytics', 'Statistical Modeling', 'NLP'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-softPurple/10 text-softPurple text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION & EXPERIENCE ========== */}
      <section id="experience" className="py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div 
            className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-softPurple/20 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-softPurple/10 text-softPurple">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Education</h3>
                <p className="text-xs text-gray-500">Sep 2023 - May 2027</p>
              </div>
            </div>
            
            <h4 className="text-base font-semibold text-white mb-1">
              University of Illinois Urbana-Champaign
            </h4>
            <p className="text-softPurple text-sm mb-3">B.S. Statistics, Minor in Computer Science</p>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1.5 rounded-full bg-pinkPop/10 text-pinkPop text-sm font-semibold">
                GPA: 3.75/4.0
              </div>
              <div className="flex items-center gap-1.5 text-yellow-500 text-xs">
                <Trophy size={14} />
                <span>Dean's List '23-'25</span>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              <span className="text-gray-300 font-medium">Key Courses:</span> Statistical Modeling, 
              Data Structures, Applied LLMs, Probability Theory
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div 
            className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-neonPurple/20 transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-neonPurple/10 text-neonPurple">
                <Database size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Experience</h3>
                <p className="text-xs text-gray-500">Aug 2025 - Dec 2025</p>
              </div>
            </div>
            
            <h4 className="text-base font-semibold text-white mb-1">
              Data Analyst Intern
            </h4>
            <p className="text-neonPurple text-sm mb-3">Atlas, UIUC</p>
            
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex gap-2">
                <span className="text-neonPurple mt-0.5">▹</span>
                Built Tableau dashboards surfacing operational trends for staffing optimization
              </li>
              <li className="flex gap-2">
                <span className="text-neonPurple mt-0.5">▹</span>
                Transformed raw datasets using SQL, producing analysis-ready tables
              </li>
              <li className="flex gap-2">
                <span className="text-neonPurple mt-0.5">▹</span>
                Presented weekly insights to leadership, driving workflow improvements
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Selected <span className="text-pinkPop">Works</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg">
            Projects showcasing data science, machine learning, and full-stack development capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* ========== BEYOND THE ALGORITHM SECTION ========== */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Algorithm</span>
          </h2>
          <p className="text-gray-400 text-sm italic">
            When I'm not coding, you can find me here:
          </p>
        </motion.div>

        {/* Fun Facts Grid - More compact and centered */}
        <motion.div 
          className="max-w-4xl mx-auto p-6 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {funFacts.map((fact, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-3 px-5 py-3 rounded-full bg-black/50 border border-white/10 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all cursor-default`}
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={`${fact.color} text-lg`}>{typeof fact.icon === 'string' ? fact.icon : fact.icon}</span>
                <span className="text-sm text-gray-200 font-medium">{fact.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GradientText colors={['#888', '#fff', '#888']} className="text-xs mb-6 mx-auto tracking-wider">
            READY TO COLLABORATE?
          </GradientText>
          
          {/* Email */}
          <a 
            href="mailto:yuw17@illinois.edu" 
            className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-300 hover:text-neonPurple transition-colors block mb-10 tracking-tight"
          >
            yuw17@illinois.edu
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href="https://www.linkedin.com/in/yu-wang-7b295b371"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Yu-Wang20"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:yuw17@illinois.edu"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        
        <footer className="mt-20 text-gray-700 text-[10px] uppercase tracking-widest">
          © 2026 Brian Wang. Built with React & Data-Driven Design.
        </footer>
      </section>

    </div>
  );
};

export default Home;
