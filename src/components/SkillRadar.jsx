import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SkillRadar = ({ skills = [], size = 300, className = '' }) => {
  const canvasRef = useRef(null);
  
  // 默认技能数据
  const defaultSkills = [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'R', level: 85 },
    { name: 'ML/Stats', level: 88 },
    { name: 'React', level: 80 },
    { name: 'Data Viz', level: 92 },
  ];
  
  const skillData = skills.length > 0 ? skills : defaultSkills;
  const numSkills = skillData.length;
  const angleStep = (2 * Math.PI) / numSkills;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size / 2 - 40;
    
    // 清空画布
    ctx.clearRect(0, 0, size, size);
    
    // 绘制背景网格
    const levels = 5;
    for (let i = 1; i <= levels; i++) {
      const radius = (maxRadius / levels) * i;
      ctx.beginPath();
      for (let j = 0; j <= numSkills; j++) {
        const angle = angleStep * j - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(82, 39, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    // 绘制轴线
    for (let i = 0; i < numSkills; i++) {
      const angle = angleStep * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + maxRadius * Math.cos(angle),
        centerY + maxRadius * Math.sin(angle)
      );
      ctx.strokeStyle = 'rgba(82, 39, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    // 绘制数据区域
    ctx.beginPath();
    skillData.forEach((skill, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    
    // 渐变填充
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
    gradient.addColorStop(0, 'rgba(82, 39, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 159, 252, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // 边框
    ctx.strokeStyle = '#5227FF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 绘制数据点
    skillData.forEach((skill, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#FF9FFC';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    
  }, [skillData, size, numSkills, angleStep]);
  
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <canvas 
        ref={canvasRef} 
        width={size} 
        height={size}
        className="mx-auto"
      />
      {/* 技能标签 */}
      {skillData.map((skill, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const labelRadius = size / 2 - 15;
        const x = size / 2 + labelRadius * Math.cos(angle);
        const y = size / 2 + labelRadius * Math.sin(angle);
        
        return (
          <motion.div
            key={skill.name}
            className="absolute text-xs font-mono text-gray-300 whitespace-nowrap"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            {skill.name}
            <span className="text-neonPurple ml-1">{skill.level}%</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SkillRadar;
