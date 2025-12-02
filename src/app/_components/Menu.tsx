'use client';

import { Navigation } from "./Navigation";
import { Social } from "./Footer";

import styles from './Menu.module.css';

interface MenuProps {
    isOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export function Menu({ isOpen, setIsMenuOpen }: MenuProps) {
    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <h3>Menu</h3>
            <Navigation setIsMenuOpen={setIsMenuOpen} />
            <Social />
        </div>
    );
}