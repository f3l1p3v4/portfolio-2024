import Link from 'next/link';
import Image from 'next/image';

import styles from './Card.module.css';

interface ContentProject {
    type: 'title' | 'description' | 'link';
    content: string;
}

export interface ProjectType {
    id: number;
    publishedAt: Date,
    content: ContentProject[]
}

interface ProjectProps {   
    project: ProjectType;
}

export function Card({ project }: ProjectProps) {
    return (
        <Link href="#" className={styles.card}>
            <Image
                width={500}
                height={500}
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1711619034404-665a4bc6dcd3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt=""
            />
            <div className={styles.content}>
                {project.content.map(line => {
                    if (line.type === 'title') {
                        return <h2 key={line.content}>{line.content}</h2>;
                    } else if (line.type === 'description') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <span key={line.content}>{line.content}</span>
                    }
                })}
            </div>
        </Link>
    );
}