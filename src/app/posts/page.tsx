import { PostItem } from '@/app/_components/PostItem';
import { getAllPosts } from "@/utils/api";

export default function Posts() {
  const allPosts = getAllPosts();

  return (
    <>
      <h1>Posts</h1>
      <PostItem posts={allPosts}/>
    </>
  );
}