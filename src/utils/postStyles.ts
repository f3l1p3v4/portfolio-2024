export type PostThemeInfo = {
  category: string;
  categoryColorClass: string;
  cardBgClass: string;
  imageSrc: string | null;
};

export const getPostTheme = (tags: string[], slug?: string): PostThemeInfo => {
  const primaryTag = tags && tags.length > 0 ? tags[0].toLowerCase() : '';
  const allTags = tags ? tags.map(t => t.toLowerCase()) : [];

  // As cores agora usam o padrão do projeto: blue-accent (#a3ea2a), bg-2, text-1, etc.
  const defaultCategoryClass = 'bg-blue-accent/10 text-blue-accent border border-blue-accent/20 font-semibold';
  const defaultBgClass = 'bg-bg-2/40 border border-bg-2/60';

  let imageSrc = null;

  // ChatGPT
  if (primaryTag.includes('ia') || slug?.includes('chatgpt')) {
    imageSrc = '/assets/img-posts/chatgpt.png';
    return {
      category: 'Inteligência Artificial',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Frontend & React
  if (primaryTag.includes('react') || slug?.includes('reactjs')) {
    imageSrc = '/assets/img-posts/iniciando-reactjs.png';
    return {
      category: 'Frontend',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Backend & Node
  if (primaryTag.includes('node') || slug?.includes('nodejs')) {
    imageSrc = '/assets/img-posts/instalando-nodejs.png';
    return {
      category: 'Backend',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // HTML / Web Design
  if (primaryTag.includes('html') || slug?.includes('web-design')) {
    imageSrc = '/assets/img-posts/comecando-em-html.png';
    return {
      category: 'Frontend',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // JavaScript / Data
  if (primaryTag.includes('javascript') || slug?.includes('data-no-javascript')) {
    imageSrc = '/assets/img-posts/trabalhando-com-data.png';
    return {
      category: 'Frontend',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // DevTools / VSCode
  if (primaryTag.includes('vscode') || slug?.includes('vscode')) {
    imageSrc = '/assets/img-posts/extensao-vscode.png';
    return {
      category: 'Ferramentas',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Buscas Avançadas / SEO
  if (slug?.includes('buscas-avancadas')) {
    imageSrc = '/assets/img-posts/buscas-avancadas.png';
    return {
      category: 'Ferramentas',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Comunicação de Dados
  if (slug?.includes('comunicacao-de-dados')) {
    imageSrc = '/assets/img-posts/comunicacao-dados.png';
    return {
      category: 'Infraestrutura',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // ZSH Histórico Corrompido
  if (slug?.includes('zsh-corrompido')) {
    imageSrc = '/assets/img-posts/zsh-historico.png';
    return {
      category: 'Linux',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Redes de Computadores
  if (slug?.includes('redes-decomputadores') || slug?.includes('redes-de-computadores')) {
    imageSrc = '/assets/img-posts/redes-computadores.png';
    return {
      category: 'Redes',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Processos no Linux
  if (slug?.includes('processos') || slug?.includes('linux')) {
    imageSrc = '/assets/img-posts/processos-linux.png';
    return {
      category: 'Linux',
      categoryColorClass: defaultCategoryClass,
      cardBgClass: defaultBgClass,
      imageSrc,
    };
  }

  // Fallback
  return {
    category: tags && tags.length > 0 ? tags[0].charAt(0).toUpperCase() + tags[0].slice(1) : 'Artigo',
    categoryColorClass: defaultCategoryClass,
    cardBgClass: defaultBgClass,
    imageSrc: null,
  };
};

export const getGridSpanClass = (index: number) => {
  const pattern = index % 8;
  switch (pattern) {
    case 0: return 'md:col-span-6'; // 50%
    case 1: return 'md:col-span-6'; // 50%
    case 2: return 'md:col-span-5'; // 40%
    case 3: return 'md:col-span-7'; // 60%
    case 4: return 'md:col-span-6'; // 50%
    case 5: return 'md:col-span-6'; // 50%
    case 6: return 'md:col-span-7'; // 60%
    case 7: return 'md:col-span-5'; // 40%
    default: return 'md:col-span-6';
  }
};
