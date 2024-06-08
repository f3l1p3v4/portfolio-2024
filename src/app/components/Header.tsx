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
                    <IoMenu />
                    <p>Menu</p>
                </Link>
                <Link href="#">
                    <IoIosArrowUp />
                    <p>Topo</p>
                </Link>
            </div>
        </header>
    );
}