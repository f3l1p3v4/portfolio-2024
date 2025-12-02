'use client';

import Typewriter from 'typewriter-effect';

import styles from './Sidebar.module.css';
export function Sidebar() {
  return (
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
            Desenvolvedor web
          </span>
          , estudante de{' '}
          <span className={styles.infoDescriptionColor}>cibersegurança</span> e
          apaixonado por tudo que envolve{' '}
          <span className={styles.infoDescriptionColor}>tecnologia</span>.
        </span>
      </div>
    </aside>
  );
}