'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

import { GoOrganization } from "react-icons/go";
import { CgReadme } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { Profile } from "./Profile";

import styles from './Sidebar.module.css';

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className={styles.sidebar}>        
            <Profile />

            <p className={styles.info}>
                Desenvolvedor Front-end Freelancer, estudante de desenvolvimento web Fullstack e apaixonado por tudo que envolve tecnologia.
            </p>

            <div className={styles.menu}>
                <Link href="/" className={`${pathname === '/' ? 'active' : 'not-active'}`}>
                    <CgReadme />
                    Blog
                </Link>
                <Link href="/projects" className={`${pathname === '/projects' ? 'active' : 'not-active'}`}>
                    <CgWebsite />
                    Projetos
                </Link>
                <Link href="/about" className={`${pathname === '/about' ? 'active' : 'not-active'}`}>
                    <FaRegAddressCard />
                    Sobre Mim
                </Link>
            </div>
 
            <footer>
                <a href="https://github.com/f3l1p3v4">
                    <FaGithub />
                </a>
                <a href="#">
                    <IoLogoYoutube />
                </a>
                <a href="https://www.linkedin.com/in/lipe-dev/">
                    <FaLinkedin />
                </a>
                <a href="https://creathor.com.br">
                    <GoOrganization />
                </a>
            </footer>
        </aside>
    );
}