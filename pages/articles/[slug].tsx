import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Head from "next/head";

import * as Styled from "../../styles/postPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IFrontmatter } from "../../utils/types";
import Comments from "../../components/Comments/Comments";

interface PostPageProps {
  frontmatter: IFrontmatter;
  slug: string;
  content: string;
}

const PostPage: React.FC<PostPageProps> = ({
  frontmatter: { title, date, cover_image, tag },
  slug,
  content,
}) => {
  return (
    <Styled.Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Styled.BackButton>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </Styled.BackButton>
      <Styled.TitleContainer>
        <h1>{title}</h1>
        <div>{date}</div>
        <div>
          {tag?.split(",").map((item: string) => (
            <Styled.Tag>{item}</Styled.Tag>
          ))}
        </div>
      </Styled.TitleContainer>
      <Styled.ArticleContainer>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </Styled.ArticleContainer>
      <Comments />
    </Styled.Container>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default PostPage;
