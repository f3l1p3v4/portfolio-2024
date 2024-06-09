import Link from 'next/link';
import Image from 'next/image';

import { FaArrowRight } from "react-icons/fa6";

import styles from './Card.module.css';

export interface ProjectType {
    id: number;
    image: string;
    title: String;
    description: String;
    link: string;
    skills: String;
    reference: String;
}

interface ProjectProps {   
    projects: ProjectType;
}
export function Card({ projects }: ProjectProps) {
    return (
        <Link href={projects.link} className={styles.card} key={projects.id}>
            <Image
                width={500}
                height={500}
                className={styles.cover} 
                // src="https://images.unsplash.com/photo-1711619034404-665a4bc6dcd3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                src={projects.image} 
                alt=""
            />
            <div className={styles.content}>
                <h2>{projects.title}</h2>
                <p>{projects.description}</p>
                <h3>Tecnologias:</h3>
                <span>{projects.skills}</span>
                <span>Referencia: {projects.reference}</span>
                <button>Ver projeto <FaArrowRight /></button>
            </div>
        </Link>
    );
}
