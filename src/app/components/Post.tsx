import styles from './Post.module.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Post as PostType } from '../../utils/types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const { metadata } = post;

  return (
    <Link href={post.slug} className={styles.post}>
      <header>
        <time>{metadata.date}</time>
      </header>

      <div className={styles.content}>
        <h2>{metadata.title}</h2>
        <p>{metadata.description}</p>
        <span>{metadata.tags}</span>
        <button>Visualizar <FaArrowRight /></button>
      </div>
    </Link>
  );
}