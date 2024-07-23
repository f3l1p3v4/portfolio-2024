import Link from "next/link";

import { usePathname } from 'next/navigation'

import { CgReadme } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";

import styles from './Navigation.module.css';

interface NavigationProps {
    setIsMenuOpen: (isOpen: boolean) => void;
}

export function Navigation({ setIsMenuOpen }: NavigationProps) {
    const pathname = usePathname()

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.navigation}>
             <Link href="/" className={`${pathname === '/' ? 'active' : 'not-active'}`} onClick={handleLinkClick}>
                <CgReadme />
                Posts
            </Link>
            <Link href="/projects" className={`${pathname === '/projects' ? 'active' : 'not-active'}`} onClick={handleLinkClick}>
                <CgWebsite />
                Projetos
            </Link>
            <Link href="/about" className={`${pathname === '/about' ? 'active' : 'not-active'}`} onClick={handleLinkClick}>
                <FaRegAddressCard />
                Sobre Mim
            </Link>
        </div>
    );
}
