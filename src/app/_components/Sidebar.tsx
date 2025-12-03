'use client';

import Typewriter from 'typewriter-effect';
import MatrixRain from '@/app/_components/MatrixRain';


import styles from './Sidebar.module.css';
export function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <MatrixRain color="rgba(255, 255, 255, 0.171)" />
      <aside className={styles.sidebar}>
        <div className={styles.info}>
          <p className={styles.infoText}>Olá, eu sou o</p>
          <h2 className={styles.infoTitle}>
            <Typewriter
              options={{
                cursor: '|',
                delay: 75,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Felipe Valdez')
                  .start();
              }}
            />
          </h2>
          <span className={styles.infoDescription}>
            <span className={styles.infoDescriptionColor}>
              Desenvolvedor web.{' '}
            </span>
            Focado em criar{' '}
            <span className={styles.infoDescriptionColor}>soluções </span> 
            digitais modernas e{' '}
            <span className={styles.infoDescriptionColor}>eficientes</span>.
          </span>
        </div>
      </aside>
    </div>
  );
}