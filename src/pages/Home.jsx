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
  Download, MapPin, Car, Smile, Crown, Bike
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

  // 项目数据 - 同步最新简历描述
  const projects = [
    {
      title: 'SICE',
      subtitle: 'Poker Decision Engine',
      description: 'A research data-driven Texas poker research website. Developed a GTO (Game Theory Optimal) solver using Monte Carlo simulations to calculate real-time EV.',
      image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&h=400&fit=crop',
      tags: ['Game Theory', 'Monte Carlo', 'Python', 'React'],
      highlights: [
        'Real-time EV calculations for complex poker scenarios',
        'GTO strategy recommendations and mathematical principles',
        'Interactive feedback loop for decision-making improvement'
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
      description: 'ML-powered platform for predicting customer churn and optimizing retention strategies through RFM segmentation and predictive risk scoring.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['XGBoost', 'RFM', 'Scikit-learn', 'Streamlit'],
      highlights: [
        'Achieved 0.89 AUC-ROC in predicting customer churn',
        'RFM segmentation identifying high-value customer personas',
        'Simulated promotion scenarios to forecast incremental ROI'
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
      description: 'End-to-end booking funnel analytics with A/B testing framework to diagnose drop-offs and optimize conversions through statistical validation.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      tags: ['A/B Testing', 'SQL', 'Statistics', 'Python'],
      highlights: [
        'Diagnosed critical user drop-offs with 34% abandonment rate',
        'Rigorous A/B testing protocols with power analysis',
        'Statistical significance testing at α=0.05'
      ],
      links: { 
        github: 'https://github.com/Yu-Wang20',
        live: 'https://hotelfunnel-fiurddsy.manus.space/'
      },
      color: 'softPurple',
      icon: <Globe size={24} />
    },
    {
      title: 'Prey Simulator',
      subtitle: 'Predator-Prey Dynamics',
      description: 'A course project simulating predator-prey dynamics via discrete stochastic phases to study ecosystem stability.',
      image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop',
      tags: ['Stochastic', 'Simulation', 'Python'],
      highlights: [
        'Discrete stochastic phase modeling',
        'Dynamic ecosystem stability analysis',
        'Visualizing population fluctuations'
      ],
      links: { 
        github: 'https://github.com/Yu-Wang20'
      },
      color: 'neonPurple',
      icon: <Terminal size={24} />
    },
    {
      title: 'NYC Flight Viz',
      subtitle: 'Traffic & Delay Visualization',
      description: 'A course project visualizing route traffic and delays using Canvas-accelerated maps for high-performance data rendering.',
      image: '/nyc-flight-viz.png',
      tags: ['Canvas', 'Data Viz', 'JavaScript'],
      highlights: [
        'Canvas-accelerated map rendering',
        'Real-time traffic and delay visualization',
        'Interactive route exploration'
      ],
      links: { 
        github: 'https://github.com/Yu-Wang20'
      },
      color: 'pinkPop',
      icon: <MapPin size={24} />
    }
  ];

  // Fun Facts 数据 - 统一使用 Lucide 图标
  const funFacts = [
    { 
      icon: <Trophy size={20} />, 
      text: 'Manchester United Fan', 
      color: 'text-red-500' 
    },
    { 
      icon: <Car size={20} />, 
      text: 'Car Enthusiast', 
      color: 'text-blue-400' 
    },
    { 
      icon: <Bike size={20} />, 
      text: 'Cycling Enthusiast', 
      color: 'text-green-400' 
    },
    { 
      icon: <Spade size={20} />, 
      text: 'Texas Hold\'em Player', 
      color: 'text-purple-400' 
    },
    { 
      icon: <Smile size={20} />, 
      text: 'Minions Lover', 
      color: 'text-yellow-400' 
    },
    { 
      icon: <Crown size={20} />, 
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
                <p className="text-xs font-medium text-white">Seeking Summer '26</p>
              </div>

              {/* Resume Download */}
              <a 
                href="/resume.pdf" 
                className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-pinkPop/30 transition-colors group"
              >
                <Download size={14} className="text-pinkPop mb-2 group-hover:bounce" />
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Resume</p>
                <p className="text-xs font-medium text-white">Grab My Resume</p>
              </a>

              {/* Location */}
              <div className="col-span-2 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                      <MapPin size={10} className="text-red-500" />
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Location</p>
                    </div>
                    <p className="text-xs font-medium text-white">Champaign, IL</p>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                      <Globe size={10} className="text-blue-400" />
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Relocation</p>
                    </div>
                    <p className="text-xs font-medium text-white">Willing to Relocate</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="col-span-2 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-around">
                <a href="https://www.linkedin.com/in/yu-wang-7b295b371" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/Yu-Wang20" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={18} />
                </a>
                <a href="mailto:yuw17@illinois.edu" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Lanyard 3D */}
          <div className="hidden lg:block h-[600px] sticky top-28">
            <Lanyard />
          </div>
        </div>
      </section>

      {/* ========== POKER PHILOSOPHY SECTION ========== */}
      <section className="py-12">
        <motion.div 
          className="relative p-6 md:p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 opacity-5">
            <Spade size={100} className="text-white" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Spade size={14} className="text-purple-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
                Bayesian Perspective & Poker Logic
              </span>
            </div>
            
            <h2 className="text-lg md:text-xl font-heading text-white leading-snug mb-6">
              "All models are wrong, but <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">some are useful.</span>"
              <span className="block text-sm text-gray-400 mt-2 font-normal italic">— George E. P. Box</span>
            </h2>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              As a <span className="text-purple-400 font-semibold">Bayesian</span>, I treat every poker hand and data point as a prior to be updated, constantly refining my beliefs as new information emerges.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '♦', label: 'Bayesian' },
                { icon: '♣', label: 'Risk Mgmt' },
                { icon: '♥', label: 'Patterns' },
                { icon: '♠', label: 'EV Opt' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  <span className="text-pink-500 text-xs font-bold">{item.icon}</span>
                  <span className="text-[10px] text-gray-400 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Radar Chart */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Technical Arsenal</h2>
              <p className="text-gray-400 mb-8 text-sm max-w-md">
                Proficiency levels based on project experience and professional application
              </p>
              <div className="h-[400px] w-full">
                <SkillRadar data={skills} />
              </div>
            </motion.div>
          </div>

          {/* Right: Skill Categories */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                title: 'Languages', 
                icon: <Code size={18} />, 
                items: ['Python', 'SQL', 'R', 'Java', 'TypeScript', 'C++'] 
              },
              { 
                title: 'Tools & Frameworks', 
                icon: <GitBranch size={18} />, 
                items: ['Tableau', 'Git', 'React', 'Next.js', 'Pandas', 'Scikit-learn'] 
              },
              { 
                title: 'Analytics & ML', 
                icon: <BrainCircuit size={18} />, 
                items: ['A/B Testing', 'ML Analytics', 'Product Analytics', 'Statistical Modeling', 'NLP'] 
              }
            ].map((cat, i) => (
              <motion.div 
                key={cat.title}
                className={`p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 ${i === 2 ? 'md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 text-neonPurple">
                  {cat.icon}
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EDUCATION & EXPERIENCE ========== */}
      <section id="experience" className="py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-md border border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-neonPurple/20 text-neonPurple">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-white">Education</h2>
            </div>
            
            <div className="relative pl-8 border-l border-white/10">
              <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-neonPurple shadow-[0_0_10px_#5227FF]" />
              <p className="text-xs font-mono text-neonPurple mb-2">Sep 2023 - May 2027</p>
              <h3 className="text-lg font-bold text-white mb-1">University of Illinois Urbana-Champaign</h3>
              <p className="text-gray-300 text-sm mb-4">B.S. Statistics, Minor in Computer Science</p>
              <div className="space-y-2">
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-600" /> GPA: 3.75/4.0
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-600" /> Dean's List '23-'25
                </p>
                <p className="text-xs text-gray-400 leading-relaxed mt-4">
                  <span className="text-gray-300 font-medium">Key Courses:</span> Statistical Modeling, Data Structures, Applied LLMs, Probability Theory
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-md border border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-pinkPop/20 text-pinkPop">
                <Trophy size={24} />
              </div>
              <h2 className="text-2xl font-heading font-bold text-white">Experience</h2>
            </div>
            
            <div className="relative pl-8 border-l border-white/10">
              <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-pinkPop shadow-[0_0_10px_#FF9FFC]" />
              <p className="text-xs font-mono text-pinkPop mb-2">Aug 2025 - Dec 2025</p>
              <h3 className="text-lg font-bold text-white mb-1">Data Analyst Intern</h3>
              <p className="text-gray-300 text-sm mb-4">Atlas, UIUC</p>
              <ul className="space-y-3">
                {[
                  'Built Tableau dashboards surfacing operational trends for staffing optimization',
                  'Transformed raw datasets using SQL, producing analysis-ready tables',
                  'Presented weekly insights to leadership, driving workflow improvements'
                ].map((bullet, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Selected Works</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Projects showcasing data science, machine learning, and full-stack development capabilities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <span className={`${fact.color}`}>{fact.icon}</span>
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
