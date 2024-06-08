
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <h1>Sobre Min</h1>

      <section className={styles.wrapper}>
        
        <h2>Olá! 👋</h2>

        <p>
          Meu nome é Felipe e atualmente sou desenvolvedor Front-end Freelancer. Nasci e moro em Campo Grande - MS. Em 2016,
          comecei a cursar Ciência da Computação pela Universidade <a href="https://www.anhanguera.com/">Uniderp Anhanguera</a>, onde tive meu primeiro contato com programação 👩‍💻.
        </p>

        <p>
        Gostei tanto que tranquei o curso e comecei a fazer vários cursos profissionalizantes na área de desenvolvimento. Durante esse período,
        estudei HTML, CSS, SCSS, Javascript, Vue.js, React.js, Gatsby.js, React Native, PHP, C#, Node.js, Java, Banco de Dados, entre outras tecnologias.
        </p>

        <p>
          Com tantas opções, fiquei totalmente perdido 😧 sobre em qual tecnologia focar, e na época acabei não evoluindo muito em nenhuma 
          delas. Hoje, sou focado no desenvolvimento Front-end na <a href="https://creathor.com.br/">Creathor</a>, a marca que criei.
        </p>

        <p>
          Em 2024, decidi voltar a cursar Ciência da Computação 👨‍🎓. Com o mercado de tecnologia em constante evolução, percebi a 
          importância de uma formação acadêmica sólida. (acesse um breve resumo do que estudei no curso de <a href="">Ciência da Computação</a>)
        </p>
      </section>
    </>
  );
}
