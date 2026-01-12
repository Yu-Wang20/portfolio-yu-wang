import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  gif,
  tags = [],
  highlights = [],
  links = {},
  color = 'neonPurple',
  icon,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const colorClasses = {
    neonPurple: {
      bg: 'bg-neonPurple/10',
      text: 'text-neonPurple',
      border: 'border-neonPurple',
      glow: 'shadow-[0_0_30px_rgba(82,39,255,0.3)]'
    },
    pinkPop: {
      bg: 'bg-pinkPop/10',
      text: 'text-pinkPop',
      border: 'border-pinkPop',
      glow: 'shadow-[0_0_30px_rgba(255,159,252,0.3)]'
    },
    softPurple: {
      bg: 'bg-softPurple/10',
      text: 'text-softPurple',
      border: 'border-softPurple',
      glow: 'shadow-[0_0_30px_rgba(177,158,239,0.3)]'
    },
    red: {
      bg: 'bg-red-500/10',
      text: 'text-red-500',
      border: 'border-red-500',
      glow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)]'
    }
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      className={`
        relative rounded-3xl overflow-hidden
        bg-white/5 backdrop-blur-md border border-white/10
        transition-all duration-500
        ${isHovered ? `${colors.glow} border-white/20` : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowGif(false);
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* 项目截图/GIF 区域 */}
      <div className="relative h-48 overflow-hidden bg-black/50">
        {/* 静态图片 */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? 'brightness(0.7)' : 'brightness(0.9)'
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* GIF 覆盖层 */}
        <AnimatePresence>
          {gif && showGif && (
            <motion.img
              src={gif}
              alt={`${title} demo`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        {/* 播放按钮 */}
        {gif && (
          <motion.button
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-14 h-14 rounded-full ${colors.bg} ${colors.text}
              flex items-center justify-center
              backdrop-blur-sm border border-white/20
            `}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setShowGif(!showGif)}
          >
            <Play size={24} fill="currentColor" />
          </motion.button>
        )}

        {/* 图标徽章 */}
        <div className={`absolute top-4 left-4 p-3 rounded-xl ${colors.bg} ${colors.text}`}>
          {icon}
        </div>

        {/* 链接按钮 */}
        <motion.div 
          className="absolute top-4 right-4 flex gap-2"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </motion.div>
      </div>

      {/* 内容区域 */}
      <div className="p-6">
        <h3 className="text-2xl font-bold font-heading text-white mb-1">{title}</h3>
        <p className={`text-xs ${colors.text} uppercase tracking-wider mb-4`}>{subtitle}</p>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        {/* 亮点列表 */}
        {highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {highlights.map((highlight, i) => (
              <motion.li
                key={i}
                className="flex gap-2 text-sm text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={colors.text}>▹</span>
                {highlight}
              </motion.li>
            ))}
          </ul>
        )}

        {/* 技术标签 */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400 hover:border-white/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
