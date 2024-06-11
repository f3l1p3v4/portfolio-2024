import { Post } from "@/interfaces/post";

import styles from './PostItem.module.css';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  posts: Post[];
};

export function PostItem({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <Link key={post.slug} href={post.slug} className={styles.post}>
          <header>
            <time>{post.date}</time>
          </header>

          <div className={styles.content}>
            <h2>{post.title}</h2>
            {/* <p>{post.description}</p> */}
            {/* <span>{post.tags}</span> */}
            <button>Visualizar <FaArrowRight /></button>
          </div>
        </Link>
      ))}
    </>
  );
}