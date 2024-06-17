import { Card, ProjectType } from "../_components/Card";

import styles from "./project.module.css";

const projects: ProjectType[] = [
    // {
    //   id: 1,
    //   image: '/projects/img-01.png',
    //   title: 'Pizza Shop',
    //   description: 'Uma aplicação para gerenciamento de pizzaria (dashboard de administrador).',
    //   link: 'https://google.com',
    //   skills: 'react, typescript, tailwind, shadcn-ui, zod, vitest, bun',
    //   reference: 'Rocketseat'
    // },
    {
      id: 2,
      image: '/projects/img-02.png',
      title: 'Todo List',
      description: 'Trata-se de um to to list, onde pode criar tarefas, marcar como concluídas e deletar.',
      link: 'https://01-desafio-todo-list.vercel.app',
      skills: 'reactjs, typescript, vite',
      reference: 'Felipe Fialho'
    },
    {
      id: 3,
      image: '/projects/img-03.png',
      title: 'Timer',
      description: 'Trata-se de um timer onde é possível adicionar as suas tarefas do dia a dia e cronometrá-las com tempo mínimo de 5 minutos e tempo máximo de 60 minutos, podendo interrompê-las e ver o histórico de suas tarefas.',
      link: 'https://ignite-react-02-timer.vercel.app/',
      skills: 'reactjs, typescript, date-fns, styled-components, zod, immer',
      reference: 'Felipe Fialho'

    },
    {
      id: 4,
      image: '/projects/img-04.png',
      title: 'DT Money',
      description: 'A ideia deste projeto é criar um controle financeiro para o usuário. Nele o usuário pode adicionar as entradas e saídas financeiras do seu dia-a-dia.',
      link: 'https://ignite-react-03-dt-money.vercel.app',
      skills: 'reactjs, typescript, vite, styled-components, date-fns, zod',
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
  