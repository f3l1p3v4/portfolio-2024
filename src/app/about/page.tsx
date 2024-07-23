
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <h1>Sobre Min</h1>

      <section className={styles.wrapper}>
        
        <h2>Olá! 👋</h2>

        <p>
          Meu nome é Felipe, nasci e moro em Campo Grande - MS. Atualmente, sou desenvolvedor web na  
          {" "}<a href="https://creathor.com.br/">Creathor</a>, uma agência de prestação de serviços web 
          que eu mesmo fundei.
        </p>

        <p>
          Em 2016, comecei a cursar Ciência da Computação na Universidade {" "}
          <a href="https://www.anhanguera.com/">Uniderp Anhanguera</a>, 
          onde tive meu primeiro contato com programação 👩‍💻. Fiquei tão 
          fascinado pela área que decidi trancar o curso para me dedicar 
          integralmente à programação, por meio de diversos cursos profissionalizantes. 
          Durante esse período, adquiri conhecimentos em HTML, CSS, JavaScript, Reactjs, Nextjs, Node.js, Nestjs, PosgreSQL, MySQL, MongoDB e outros.
        </p>

        <p>
          Em 2024, percebi a importância de uma formação acadêmica, especialmente em um mercado de tecnologia em constante evolução, e decidi retomar meu curso de Ciência da Computação 👨‍🎓.
        </p>
      </section>
    </>
  );
}
