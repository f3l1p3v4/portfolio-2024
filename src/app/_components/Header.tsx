'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

import { CgReadme, CgWebsite } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";

import styles from './Header.module.css';

interface SidebarProps {
    setIsMenuOpen: (isOpen: boolean) => void;
}

export function Header() {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.navigation}>
                    <Link href="/" className={`${pathname === '/posts' ? 'active' : 'not-active'}`}>
                        <CgReadme />
                        Posts
                    </Link>
                    <Link href="/projects" className={`${pathname === '/projects' ? 'active' : 'not-active'}`}>
                        <CgWebsite />
                        Projetos
                    </Link>
                    <Link href="/about" className={`${pathname === '/about' ? 'active' : 'not-active'}`}>
                        <FaRegAddressCard />
                        Sobre
                    </Link>
                </div>
            </div>
        </header>
    );
}