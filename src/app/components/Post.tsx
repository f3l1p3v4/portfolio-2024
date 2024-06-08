"use client"

import { format, formatDistanceToNow } from 'date-fns';

import styles from './Post.module.css';
import Link from 'next/link';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'title' | 'description' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author,
    publishedAt: Date,
    content: Content[]
}

interface PostProps {   
    post: PostType;
}
  
  export function Post({ post }: PostProps) {
   
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'");
  
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
      addSuffix: true
    });

    return (
        <Link href="#" className={styles.post}>
            <header>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
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
    )
}
  