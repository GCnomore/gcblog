import styled from "styled-components";
import { CONTAINER } from "../utils/constants";

export const Container = styled(CONTAINER)`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fontColor};
`;

export const IntroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20% 0;

  > strong {
    margin-top: 2rem;
  }
`;

export const ArticlesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArticleList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
