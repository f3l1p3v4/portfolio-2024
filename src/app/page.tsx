import { Post, PostType } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/f3l1p3v4.png',
      name: 'Felipe Valdez',
      role: 'Web Developer'
    },
    content: [
      { type: 'title', content: '(ChatGPT) O que você precisa saber 👋' },
      { type: 'description', content: 'ChatGPT é uma ferramenta de processamento de linguagem natural (NLP) desenvolvida pela OpenAI.' },
      { type: 'link', content: 'IA' },
    ],
    publishedAt: new Date('2024-04-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'title', content: 'Como iniciar um projeto com Reactjs' },
      { type: 'description', content: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.z' },
      { type: 'link', content: 'Reactjs' },
    ],
    publishedAt: new Date('2023-08-10 20:00:00'),
  },
];

export default function Home() {
  return (
    <>
      <h1>Posts</h1>

      {posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
          />
        )
      })}
    </>
  );
}
