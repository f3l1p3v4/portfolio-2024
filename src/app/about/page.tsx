
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <h1>Sobre Min</h1>

      <section className={styles.wrapper}>
        
        <h2>Olá! 👋</h2>

        <p>
          Meu nome é Felipe, nasci e moro em Campo Grande - MS. Atualmente, trabalho como programador pleno no Consórcio Guaicurus, onde atuo no desenvolvimento e manutenção de sistemas internos. Paralelamente, estou estruturando a 
          {" "}<a href="https://creathor.com.br/">Creathor</a>, uma agência de serviços web que fundei com o objetivo de atender projetos como freelancer e expandir minha atuação no mercado digital.
        </p>

        <p>
        Minha jornada na tecnologia começou em 2016, quando iniciei o curso de Ciência da Computação na Universidade {" "}
          <a href="https://www.anhanguera.com/">Uniderp Anhanguera</a>. Foi lá que tive meu primeiro contato com programação 👨‍💻 e me apaixonei pela área. Pouco tempo depois, decidi pausar a graduação para focar em cursos profissionalizantes e projetos práticos, o que me permitiu adquirir experiência com tecnologias como HTML, CSS, JavaScript, React, Next.js, Node.js, NestJS, PostgreSQL, MySQL, MongoDB, entre outras.
        </p>

        <p>
          Após anos de prática no desenvolvimento web, em 2024 senti que era hora de voltar à sala de aula 👨‍🎓. Retomei o curso de Ciência da Computação com o objetivo de aprofundar minha base teórica e evoluir ainda mais como profissional em um setor em constante mudança.
        </p>
      </section>
    </>
  );
}