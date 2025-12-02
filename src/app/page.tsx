import { Sidebar } from '@/app/_components/Sidebar';
import MatrixRain from '@/app/_components/MatrixRain';
import { getAllPosts } from "@/utils/api";

export default function Home() {
  const allPosts = getAllPosts();

  return (
    <>
      <MatrixRain color="rgba(255, 255, 255, 0.466)" />
      <Sidebar />
    </>
  );
}