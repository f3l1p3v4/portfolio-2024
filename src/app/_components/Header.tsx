'use client';

import Link from 'next/link';

import { Profile } from "./Profile";

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Profile />
            </div>
        </header>
    );
}