'use client';

import Link from 'next/link';
import { useState } from 'react';

import { IoMdHome } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

import { Menu } from './Menu';
import styles from './Footer.module.css';

export function Footer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.nav}>
                {isMenuOpen && <Menu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}  
                <Link href="/" className={styles.homeBtn}>
                    <span role="button">
                        <IoMdHome />
                        <p>Home</p>
                    </span>
                </Link>
                <span
                    className={styles.btnMenu}
                    role="button"
                    onClick={handleMenuToggle}
                >
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                    <p>Menu</p>
                </span>
                <span
                    title="Ir para o Topo"
                    role="button"
                    onKeyDown={() => window.scroll({ top: 0, behavior: "smooth" })}
                    onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                >
                    <IoIosArrowUp />
                    <p>Topo</p>
                </span>
            </div>
        </footer>
    );
}
