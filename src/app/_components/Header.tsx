'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
                    <Link href="https://github.com/f3l1p3v4">
                        <FaGithub />
                        Github
                    </Link>
                    <Link href="https://www.linkedin.com/in/lipe-dev/">
                        <FaLinkedin />
                        Linkedin
                    </Link>
                </div>
            </div>
        </header>
    );
}