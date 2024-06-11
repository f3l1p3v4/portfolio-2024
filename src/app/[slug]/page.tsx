import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/utils/api";
import { CMS_NAME } from "@/utils/constants";
import markdownToHtml from "@/utils/markdownToHtml";
import Container from "@/app/_components/Container";
import { PostBody } from "@/app/_components/PostBody";

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <section>
      <Container>
        <h1 className="title">
          {post.title}
        </h1>
        <article>
          <PostBody content={content}/>
        </article>
      </Container>
    </section>
  )
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      // images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

