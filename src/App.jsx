import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import GooeyNav from './components/GooeyNav';
import ParticleBackground from './components/ParticleBackground';
import NoiseTexture from './components/NoiseTexture';
import './index.css';

function App() {
  // 导航定义
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <BrowserRouter>
      {/* 1. 深色渐变背景 */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0a0015] via-[#060010] to-black" />

      {/* 2. 粒子背景 (交互式) */}
      <ParticleBackground 
        particleCount={60}
        particleColor="rgba(82, 39, 255, 0.6)"
        lineColor="rgba(82, 39, 255, 0.08)"
        maxDistance={120}
        speed={0.3}
      />

      {/* 3. 噪点纹理 */}
      <NoiseTexture opacity={0.04} />

      {/* 4. Gooey 导航 (顶层) */}
      <div className="w-full flex justify-center fixed top-6 z-50 px-4">
        <div className="bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
          <GooeyNav 
            items={navItems}
            animationTime={600}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            initialActiveIndex={0}
          />
        </div>
      </div>

      {/* 5. 主内容区域 */}
      <main className="relative z-10">
        <Home />
      </main>
    </BrowserRouter>
  );
}

export default App;
