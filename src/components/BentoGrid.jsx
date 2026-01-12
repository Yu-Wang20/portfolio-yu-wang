import React from 'react';
import { motion } from 'framer-motion';

// Bento Grid 容器
export const BentoGrid = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[120px] ${className}`}>
      {children}
    </div>
  );
};

// Bento Grid 单元格
export const BentoCard = ({ 
  children, 
  className = '', 
  colSpan = 1, 
  rowSpan = 1,
  glassEffect = true,
  hoverEffect = true,
  delay = 0
}) => {
  const spanClasses = {
    col: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
    },
    row: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
    }
  };

  return (
    <motion.div
      className={`
        ${spanClasses.col[colSpan]} 
        ${spanClasses.row[rowSpan]}
        rounded-2xl overflow-hidden
        ${glassEffect ? 'bg-white/5 backdrop-blur-md border border-white/10' : ''}
        ${hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// 特殊卡片：头像卡片
export const AvatarCard = ({ name, title, avatarUrl, className = '' }) => {
  return (
    <BentoCard colSpan={2} rowSpan={2} className={`p-6 flex flex-col justify-end ${className}`}>
      <div className="relative">
        <motion.div 
          className="w-20 h-20 rounded-full overflow-hidden border-2 border-neonPurple mb-4"
          whileHover={{ scale: 1.1 }}
        >
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </motion.div>
        <h2 className="text-3xl font-bold font-heading text-white">{name}</h2>
        <p className="text-pinkPop font-mono text-sm mt-1">{title}</p>
      </div>
    </BentoCard>
  );
};

// 特殊卡片：地图卡片
export const LocationCard = ({ location, className = '' }) => {
  return (
    <BentoCard colSpan={2} rowSpan={1} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 to-transparent" />
      <div className="relative p-4 h-full flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
          <p className="text-white font-semibold">{location}</p>
        </div>
        <motion.div 
          className="text-4xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📍
        </motion.div>
      </div>
    </BentoCard>
  );
};

// 特殊卡片：统计数字卡片
export const StatCard = ({ label, value, icon, color = 'neonPurple', className = '' }) => {
  const colorClasses = {
    neonPurple: 'text-neonPurple bg-neonPurple/10',
    pinkPop: 'text-pinkPop bg-pinkPop/10',
    softPurple: 'text-softPurple bg-softPurple/10',
    red: 'text-red-500 bg-red-500/10',
  };

  return (
    <BentoCard colSpan={1} rowSpan={1} className={`p-4 flex flex-col justify-between ${className}`}>
      <div className={`w-10 h-10 rounded-lg ${colorClasses[color]} flex items-center justify-center text-xl`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </BentoCard>
  );
};

// 特殊卡片：社交链接卡片
export const SocialCard = ({ platform, url, icon, className = '' }) => {
  return (
    <BentoCard colSpan={1} rowSpan={1} className={`group cursor-pointer ${className}`}>
      <a 
        href={url} 
        target="_blank" 
        rel="noreferrer"
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div 
          className="text-3xl text-gray-400 group-hover:text-white transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          {icon}
        </motion.div>
      </a>
    </BentoCard>
  );
};

export default BentoGrid;
