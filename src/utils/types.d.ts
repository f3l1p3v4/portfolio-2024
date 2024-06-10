export interface PostMetadata {
    date: string;
    title: string;
    description: string;
    tags: string;
    image: string
  }
  
  export interface Post {
    metadata: PostMetadata;
    slug: string;
    content: string;
  }