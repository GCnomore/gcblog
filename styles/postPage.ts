import styled from "styled-components";
import { ACCENT_COLOR, CONTAINER } from "../utils/constants";

export const Container = styled(CONTAINER)`
  height: auto;
  padding-top: 4rem;
`;

export const BackButton = styled.div`
  > svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:hover {
      color: ${ACCENT_COLOR};
    }
  }
`;

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  > div:last-child {
    margin-top: 1rem;
    display: flex;
  }
`;

export const Tag = styled.span`
  padding: 0.2em 0.4em;
  margin: 0.5rem 0.25rem;
  font-size: 95%;
  background-color: rgba(110, 118, 129, 0.4);
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s linear;
  }
`;

export const ArticleContainer = styled.article`
  margin-bottom: 10%;
  h2 {
    font-size: 2.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
  }
`;
