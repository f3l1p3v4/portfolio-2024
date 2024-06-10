import { getBlogPosts } from '../utils/blog';
import { Post as PostType } from '../utils/types';
import { Post } from './components/Post';

export default function Home() {
  const allBlogs: PostType[] = getBlogPosts();

  return (
    <>
      <h1>Posts</h1>

      {allBlogs.map((post) => (
        <Post
          key={post.slug}
          post={post}
        />
      ))}
    </>
  );
}