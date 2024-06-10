'use client';

import Link from 'next/link';

import { IoMdHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.nav}>
                <Link href="/">
                    <IoMdHome />
                    <p>Home</p>
                </Link>
                <Link href="#">
                    <span
                        title="Ir para o Topo"
                        role="button"
                        onKeyDown={() => {
                            window.scroll({ top: 0, behavior: "smooth" });
                        }}
                        onClick={() => {
                            window.scroll({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <IoMenu />
                        <p>Menu</p>
                    </span>
                </Link>
                <Link href="#">
                    <span
                        title="Ir para o Topo"
                        role="button"
                        onKeyDown={() => {
                            window.scroll({ top: 0, behavior: "smooth" });
                        }}
                        onClick={() => {
                            window.scroll({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <IoIosArrowUp />
                        <p>Topo</p>
                    </span>
                </Link>
            </div>
        </header>
    );
}