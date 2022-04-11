export interface IPostMeta {
  slug: string;
  frontmatter: {
    title: string;
    cover_image: string;
    excerpt?: string;
    date: string;
    main_tech: string;
    tag: string[];
  };
}
