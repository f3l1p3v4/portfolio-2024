import Link from "next/link";
import Image from 'next/image';

import styles from "./project.module.css";
import { Card, ProjectType } from "../components/Card";

const projects: ProjectType[] = [
    {
      id: 1,
      content: [
        { type: 'title', content: '(ChatGPT) O que você precisa saber 👋' },
        { type: 'description', content: 'ChatGPT é uma ferramenta de processamento de linguagem natural (NLP) desenvolvida pela OpenAI.' },
        { type: 'link', content: 'IA' },
      ],
      publishedAt: new Date('2024-04-03 20:00:00'),
    },
    {
      id: 2,
      content: [
        { type: 'title', content: 'Como iniciar um projeto com Reactjs' },
        { type: 'description', content: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.z' },
        { type: 'link', content: 'Reactjs' },
      ],
      publishedAt: new Date('2023-08-10 20:00:00'),
    },
    {
        id: 3,
        content: [
          { type: 'title', content: '(ChatGPT) O que você precisa saber 👋' },
          { type: 'description', content: 'ChatGPT é uma ferramenta de processamento de linguagem natural (NLP) desenvolvida pela OpenAI.' },
          { type: 'link', content: 'IA' },
        ],
        publishedAt: new Date('2024-04-03 20:00:00'),
      },
      {
        id: 4,
        content: [
          { type: 'title', content: 'Como iniciar um projeto com Reactjs' },
          { type: 'description', content: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.z' },
          { type: 'link', content: 'Reactjs' },
        ],
        publishedAt: new Date('2023-08-10 20:00:00'),
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
                        project={project}
                    />
                    )
                })}
            </section>
        </>
    );
}
  