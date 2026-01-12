import React from 'react';
import './LightPillar.css';
import { motion } from 'framer-motion';

const LightPillar = ({
  topColor = "#5227FF",
  bottomColor = "#FF9FFC",
  intensity = 1.0,
  pillarWidth = 3.0,
  className = ''
}) => {
  return (
    <div className={`light-pillar-container ${className}`}>
        {/* 静态光柱底座 */}
        <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
                width: `${pillarWidth * 100}px`,
                height: '150%', 
                position: 'absolute',
                left: '50%',
                top: '-20%',
                transform: 'translateX(-50%) rotate(15deg)',
                background: `linear-gradient(to bottom, ${topColor}, ${bottomColor}, transparent)`,
                filter: `blur(${40 * intensity}px)`,
                opacity: 0.6 * intensity,
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
        {/* 动态呼吸高亮 */}
        <motion.div 
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
                width: `${pillarWidth * 20}px`,
                height: '120%',
                position: 'absolute',
                left: '50%',
                top: '-10%',
                transform: 'translateX(-50%) rotate(15deg)',
                background: `linear-gradient(to bottom, white, ${topColor}, transparent)`,
                filter: 'blur(20px)',
                opacity: 0.8,
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    </div>
  );
};

export default LightPillar;
