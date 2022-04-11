import styled from "styled-components";
import { ACCENT_COLOR } from "../../utils/constants";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.componentBg};
  padding: 0.5rem 1.5rem;

  > div:last-child {
    display: flex;
    justify-content: space-between;
    width: 5rem;
  }
`;

export const Menu = styled.div`
  color: ${({ theme }) => theme.fontColor};
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${ACCENT_COLOR};
  }
`;

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${ACCENT_COLOR};
  }
`;

export const Search = styled.div`
  color: ${({ theme }) => theme.fontColor};
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${ACCENT_COLOR};
  }
`;

export const ThemeToggle = styled.div`
  color: ${({ theme }) => theme.fontColor};
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${ACCENT_COLOR};
  }
`;
