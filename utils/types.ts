export interface IPostMeta {
  slug: string;
  frontmatter: IFrontmatter;
}

export interface IFrontmatter {
  title: string;
  cover_image: string;
  excerpt?: string;
  date: string;
  main_tech: string;
  tag: string;
}
