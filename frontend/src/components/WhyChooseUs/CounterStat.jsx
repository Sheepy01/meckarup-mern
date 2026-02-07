import React, { useState, useEffect, useRef } from 'react';
import styles from './WhyChooseUs.module.css';
import { useInView } from 'react-intersection-observer';

const CounterStat = ({ 
  end, 
  suffix = "+", 
  label, 
  duration = 2000,
  icon: Icon,
  color = "#1A365D"
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      let startTime;
      let animationFrameId;
      
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCount);
        }
      };
      
      animationFrameId = requestAnimationFrame(animateCount);
      
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [inView, hasAnimated, end, duration]);

  return (
    <div 
      ref={ref}
      className={styles.statItem}
      style={{
        position: 'relative',
        zIndex: 1,
        animation: inView && hasAnimated ? 'fadeInUp 0.8s ease-out' : 'none'
      }}
    >
      <div className={styles.statContent}>
        {Icon && (
          <div 
            className={styles.statIcon}
            style={{
              background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
              border: `1px solid ${color}30`
            }}
          >
            <Icon style={{ color: color }} />
          </div>
        )}
        
        <div className={styles.statNumbers}>
          <span 
            ref={countRef}
            className={styles.statCount}
            style={{ color: color }}
          >
            {count.toLocaleString()}{suffix}
          </span>
        </div>
        
        <div className={styles.statLabel}>{label}</div>
        
        {/* Animated underline */}
        <div 
          className={styles.statUnderline}
          style={{ 
            background: `linear-gradient(90deg, ${color}40, ${color})`,
            width: inView && hasAnimated ? '60px' : '0px'
          }}
        ></div>
      </div>
    </div>
  );
};

// Add styles for CounterStat component
const counterStyles = `
  .statItem {
    text-align: center;
    padding: 2rem 1.5rem;
    background: var(--bg-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(229, 231, 235, 0.5);
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
  }
  
  .statItem:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(26, 54, 93, 0.2);
  }
  
  .statItem:hover .statIcon {
    transform: scale(1.1) rotate(5deg);
  }
  
  .statContent {
    position: relative;
    z-index: 2;
  }
  
  .statIcon {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: all var(--transition-normal);
  }
  
  .statIcon svg {
    font-size: 2rem;
  }
  
  .statNumbers {
    margin-bottom: 0.75rem;
  }
  
  .statCount {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
    display: block;
    transition: all var(--transition-normal);
  }
  
  .statLabel {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
    line-height: 1.4;
  }
  
  .statUnderline {
    height: 3px;
    border-radius: 3px;
    margin: 1rem auto 0;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 60px;
  }
`;

export default CounterStat;
export { counterStyles };