import { Card, ProjectType } from "../_components/Card";

import styles from "./project.module.css";

const projects: ProjectType[] = [
    {
      id: 1,
      image: '/projects/img-01.png',
      title: 'Pizza Shop',
      description: 'Uma aplicação para gerenciamento de pizzaria (dashboard de administrador).',
      link: 'https://google.com',
      skills: 'react, typescript, tailwind, shadcn-ui, zod, vitest, bun',
      reference: 'Rocketseat'
    },
    {
      id: 2,
      image: '/projects/img-01.png',
      title: 'Como iniciar',
      description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.z',
      link: 'https://google.com',
      skills: 'Reactjs, Typescript, Tailwind',
      reference: 'Felipe Fialho'
    },
    {
      id: 3,
      image: '/projects/img-01.png',
      title: '(ChatGPT)',
      description: 'ChatGPT é uma ferramenta de processamento de linguagem natural (NLP) desenvolvida pela OpenAI.',
      link: 'https://google.com',
      skills: 'Reactjs, Typescript, Tailwind',
      reference: 'Felipe Fial'

    },
    {
      id: 4,
      image: '/projects/img-01.png',
      title: 'Como iniciar',
      description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.z',
      link: 'https://google.com',
      skills: 'Reactjs, Typescript, Tailwind',
      reference: 'Felipe Fial'
    },
];

export default function Projects() {
    return (
        <>
            <h1>Alguns Projetos</h1>

            <section className={styles.cards}>
                {projects.map(project => {
                    return (
                    <Card
                        key={project.id}
                        projects={project}
                    />
                    )
                })}
            </section>
        </>
    );
}
  