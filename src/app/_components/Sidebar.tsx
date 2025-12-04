'use client';

import Link from "next/link";
import Typewriter from 'typewriter-effect';

import { FaWhatsapp } from "react-icons/fa";

import MatrixRain from '@/app/_components/MatrixRain';


import styles from './Sidebar.module.css';
import { Profile } from './Profile';
export function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <MatrixRain color="rgba(255, 255, 255, 0.171)" /> 
      <aside className={styles.sidebar}>
        <div className={styles.info}>
          <Profile />
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
          <Link href="https://wa.me/5567992656801?text=Ol%C3%A1!%20Encontrei%20seu%20contato%20atrav%C3%A9s%20do%20seu%20site." className={styles.infoContact}>
            <FaWhatsapp />  
            Entrar em contato
          </Link>
        </div>
      </aside>
    </div>
  );
}