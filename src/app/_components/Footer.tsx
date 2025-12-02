import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { GoOrganization } from "react-icons/go";

import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.menuWrapper}>
            <footer className={styles.social}>
                <Link href="https://github.com/f3l1p3v4">
                    <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/lipe-dev/">
                    <FaLinkedin />
                </Link>
                <Link href="https://creathor.com.br">
                    <GoOrganization />
                </Link>
            </footer>

            <p>© 2019 | Todos os direitos reservados. 🚀</p>
        </div>
    );
}
