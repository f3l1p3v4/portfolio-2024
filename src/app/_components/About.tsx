import React from "react";
import { Profile } from "../_components/Profile";
import styles from "./About.module.css";

const person = {
  name: "Felipe",
  role: "Programador Pleno",
  location: "Campo Grande - MS",
  avatar: "/caminho-da-sua-foto.jpg",
  social: [
    { name: "GitHub", url: "https://github.com/seusrouario" },
    { name: "LinkedIn", url: "https://linkedin.com/in/seuusuario" },
  ]
};

const aboutData = {
  intro: `Meu nome é Felipe, sou casado, cristão e moro em Campo Grande - MS. 
  Minha jornada na tecnologia começou em 2016, quando iniciei o curso de Ciência da Computação. 
  Tive meu primeiro contato com programação 👨‍💻 e me apaixonei pela área.`,
  
  experiences: [
    {
      company: "Consórcio Guaicurus",
      role: "Programador Pleno",
      timeframe: "Atualmente",
      description: "Atuo no desenvolvimento e manutenção de sistemas internos."
    },
    {
      company: "Creathor",
      role: "Fundador / Freelancer",
      timeframe: "Em andamento",
      description: "Agência de serviços web que fundei com o objetivo de atender projetos como freelancer e expandir minha atuação no mercado digital.",
      link: "https://creathor.com.br/"
    }
  ],
  studies: [
    {
      institution: "Uniderp Anhanguera",
      degree: "Ciência da Computação",
      status: "Retomado em 2024",
      description: "Retomei o curso com o objetivo de aprofundar minha base teórica."
    },
    {
      institution: "Uniderp Anhanguera",
      degree: "Ciência da Computação",
      status: "Iniciado em 2016",
      description: "Pausado para focar em cursos profissionalizantes e projetos práticos."
    }
  ],
  skills: [
    {
      category: "Frontend",
      techs: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
    },
    {
      category: "Backend & Database",
      techs: ["Node.js", "NestJS", "PostgreSQL", "MySQL", "MongoDB"]
    }
  ]
};

export function About() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        
        {/* Intro */}
        <section className={styles.sectionAbout}>
          <Profile />
          <div>
            <h2 className={styles.sectionTitleAbout}>Sobre Mim</h2>
            <p className={styles.textAbout}>{aboutData.intro}</p>
          </div>
        </section>

        {/* Experiência */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiência</h2>
          <div className={styles.list}>
            {aboutData.experiences.map((exp, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>
                    {exp.link ? <a href={exp.link} target="_blank">{exp.company}</a> : exp.company}
                  </h3>
                  <span className={styles.badge}>{exp.timeframe}</span>
                </div>
                <p className={styles.cardSubtitle}>{exp.role}</p>
                <p className={styles.text}>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Estudos */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Estudos</h2>
          <div className={styles.list}>
            {aboutData.studies.map((study, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{study.institution}</h3>
                  <span className={styles.badge}>{study.status}</span>
                </div>
                <p className={styles.cardSubtitle}>{study.degree}</p>
                <p className={styles.text}>{study.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tecnologias</h2>
          <div className={styles.skillsGrid}>
            {aboutData.skills.map((skillGroup, index) => (
              <div key={index} className={styles.skillGroup}>
                <h4 className={styles.skillTitle}>{skillGroup.category}</h4>
                <div className={styles.tags}>
                  {skillGroup.techs.map((tech) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}