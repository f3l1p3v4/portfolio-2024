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
    const skillList = projects.skills.split(',').map((skill, index) => (
        <span key={index} className={styles.skill}>
            {skill.trim()}
        </span>
    ));

    return (
        <Link href={projects.link} className={styles.card} key={projects.id}>
            <Image
                width={500}
                height={500}
                className={styles.cover}
                src={projects.image} 
                alt=""
            />
            <div className={styles.content}>
                <h2>{projects.title}</h2>
                <p>{projects.description}</p>
                <h3>Tecnologias:</h3>
                <div className={styles.skills}>
                    {skillList}
                </div>
                <button>Ver projeto <FaArrowRight /></button>
            </div>
        </Link>
    );
}
