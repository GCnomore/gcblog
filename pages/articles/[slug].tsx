import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

import * as Styled from "../../styles/postPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PostPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <Styled.Container>
      <Link href="/">
        <Styled.BackButton>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Styled.BackButton>
      </Link>
      <Styled.TitleContainer>
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
      </Styled.TitleContainer>
      <div className="card card-page">
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
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

export async function getStaticProps({ params: { slug } }) {
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