import { notFound } from 'next/navigation'
import { CustomMDX } from '../components/mdx'
import { getBlogPosts } from '../../utils/blog'
import { baseUrl } from '../sitemap'

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: Params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    description, // Adicionei a extração da descrição aqui
    date: publishedTime, // Renomeando para publishedTime para consistência
    image,
  } = post.metadata

  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: { params: Params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1 className="title">
        {post.metadata.title}
      </h1>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}