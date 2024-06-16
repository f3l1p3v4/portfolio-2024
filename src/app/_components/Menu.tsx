'use client';

import { Navigation } from "./Navigation";
import { Social } from "./Social";

import styles from './Menu.module.css';

interface MenuProps {
    isOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export function Menu({ isOpen, setIsMenuOpen }: MenuProps) {
    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <Navigation setIsMenuOpen={setIsMenuOpen} />
            <Social />
        </div>
    );
}