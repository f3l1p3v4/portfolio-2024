'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Profile } from "./Profile";
import { Social } from "./Social";


import { CgReadme, CgWebsite } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";

import styles from './Sidebar.module.css';

interface SidebarProps {
    setIsMenuOpen: (isOpen: boolean) => void;
}

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className={styles.sidebar}>        
            <Profile />

            <p className={styles.info}>
                Estudante de desenvolvimento web, cibersegurança e apaixonado por tudo que envolve tecnologia.
            </p>

            <div className={styles.navigation}>
                <Link href="/" className={`${pathname === '/' ? 'active' : 'not-active'}`}>
                    <CgReadme />
                    Posts
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

            <Social />
        </aside>
    );
}