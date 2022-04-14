import Link from "next/link";

import { IPostMeta } from "../../utils/types";
import * as Styled from "./PostMeta_Styled";

interface PostMetaProps {
  post: IPostMeta;
}

export default function PostMeta({ post }: PostMetaProps) {
  return (
    <Link href={`/articles/${post.slug}`} passHref={true}>
      <Styled.Container>
        <div>
          <img
            src={`/icons/${post.frontmatter.main_tech}-icon.webp`}
            alt=""
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/icons/star-icon.webp";
            }}
          />
          <h3>{post.frontmatter.title}</h3>
        </div>

        <div className="post-date">{post.frontmatter.date}</div>
      </Styled.Container>
    </Link>
  );
}
