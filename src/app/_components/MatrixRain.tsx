'use client';

import React, { useEffect, useRef } from 'react';
import styles from './MatrixRain.module.css';

interface MatrixRainProps {
  color?: string;
  backgroundColor?: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ 
  color = '#8a8a8a1f', 
  backgroundColor = '#151C2B'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let intervalId: NodeJS.Timeout;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const binary = '01';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * (canvas.height / fontSize));
    }

    const draw = () => {
      context.fillStyle = '#151c2b32'; // Use a semi-transparent version of the background for the trail
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = color;
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const handleResize = () => {
      clearInterval(intervalId);
      setup();
      intervalId = setInterval(draw, 75);
    };

    setup();
    intervalId = setInterval(draw, 75);
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, backgroundColor]);

  return <canvas ref={canvasRef} className={styles.matrixCanvas} />;
};

export default MatrixRain;
