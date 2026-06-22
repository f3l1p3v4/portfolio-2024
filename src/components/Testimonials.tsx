import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

const testimonials = [
  {
    id: 1,
    name: "Eng. Reinaldo Jr",
    role: "CEO · Reitec Engenharia",
    avatar: "https://creathor.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjunior.4d9fbcc0.jpg&w=256&q=50",
    text: "A habilidade em capturar a essência da minha marca foram notáveis. Estou muito satisfeito e grato por ter escolhido o Felipe Valdez para o desenvolvimento do meu site.",
  },
  {
    id: 2,
    name: "Felipe Marsura",
    role: "Gestor de Tráfego",
    avatar: "https://creathor.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffelipemarsura.70a1c429.jpg&w=256&q=50",
    text: "Simplesmente incrível! A qualidade do trabalho entregue foi excepcional. Eles criaram para mim sites elegantes e intuitivos, facilitando muito os processos do meu negócio.",
  },
  {
    id: 3,
    name: "Gabriel Nascimento",
    role: "Barbearia Morumbi",
    avatar: "https://creathor.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgabriel.a1c8a81a.jpg&w=640&q=50",
    text: "Fiquei impressionado! O pessoal que fez meu site e sistema arrasou total! Eles entenderam direitinho o que eu queria e transformaram em algo incrível.",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const textToType = 'depoimentos';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.substring(0, i + 1));
      i++;
      if (i >= textToType.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 6000; // 6 seconds per testimonial
    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % testimonials.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-32 max-w-[1200px] mx-auto px-6 relative border-t border-bg-2/50">
      <div className="text-center animate-on-scroll mb-20">
        <p className="text-blue-accent font-mono text-sm mb-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-accent"></span>
          <span>{typedText}<span className="blinking-cursor ml-[1px]">|</span></span>
        </p>
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-text-1 mb-6 leading-tight">
          O que dizem sobre o meu <span className="text-blue-accent">trabalho.</span>
        </h2>
        <p className="text-text-2 text-xl max-w-2xl mx-auto">
          Resultados comprovados por quem já trabalhou comigo.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 animate-on-scroll delay-200">
        {/* Left Panel: Active Testimonial */}
        <div className="flex-1 bg-bg-2/20 border border-bg-2 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div>
            <FaQuoteLeft className="text-blue-accent w-10 h-10 mb-8" />
            <p
              className="text-2xl md:text-[1.75rem] leading-relaxed text-text-1 font-medium mb-12"
              dangerouslySetInnerHTML={{ __html: activeTestimonial.text }}
            />
          </div>

          <div className="flex items-center gap-4">
            <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="w-12 h-12 rounded-full object-cover border border-bg-2" />
            <div>
              <h4 className="text-text-1 font-bold">{activeTestimonial.name}</h4>
              <p className="text-text-2 text-sm font-mono">{activeTestimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Right Panel: List */}
        <div className="w-full md:w-[350px] flex flex-col justify-center gap-2">
          {testimonials.map((t, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveIndex(index);
                  setProgress(0);
                }}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${isActive ? 'bg-bg-2/40 border border-bg-2 shadow-lg' : 'hover:bg-bg-2/20 border border-transparent'
                  }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-accent"></div>
                )}
                <img src={t.avatar} alt={t.name} className={`w-10 h-10 rounded-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                <div>
                  <h4 className={`font-bold transition-colors duration-300 ${isActive ? 'text-text-1' : 'text-text-2'}`}>{t.name}</h4>
                  <p className="text-text-2/60 text-xs font-mono">{t.role}</p>
                </div>

                {/* Progress bar overlay for active item */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-blue-accent/50 transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  ></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
