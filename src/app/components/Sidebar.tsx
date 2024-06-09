import { GoOrganization } from "react-icons/go";
import { CgReadme } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import { Profile } from "./Profile";

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>        
            <Profile />

            <p className={styles.description}>
                Desenvolvedor Front-end Freelancer, estudante de desenvolvimento web Fullstack e apaixonado por tudo que envolve tecnologia.
            </p>

            <div className={styles.menu}>
                <a href="/">
                    <CgReadme />
                    Blog
                </a>
                <a href="/projects">
                    <CgWebsite />
                    Projetos
                </a>
                <a href="/about">
                    <FaRegAddressCard />
                    Sobre Min
                </a>
            </div>
 
            <footer>
                <a href="#">
                    <FaGithub />
                </a>
                <a href="#">
                    <IoLogoYoutube />
                </a>
                <a href="#">
                    <FaLinkedin />
                </a>
                <a href="https://creathor.com.br">
                    <GoOrganization />
                </a>
            </footer>
        </aside>
    );
}