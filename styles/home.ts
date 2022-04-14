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
  z-index: 2;

  > strong {
    margin-top: 2rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  color: #eee;
  font-weight: 900;
  font-size: 25vw;
  z-index: 1;
  user-select: none;
  white-space: nowrap;
  opacity: 0.1;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export const ArticlesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ArticleList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 2;
`;
