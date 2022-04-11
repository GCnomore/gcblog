import styled from "styled-components";
import { ACCENT_COLOR } from "../../utils/constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.componentBg};
  cursor: pointer;

  &:hover {
    color: ${ACCENT_COLOR};
  }

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 3rem;
    }

    > h3 {
      margin: 0;
      padding: 0 1rem;
    }
  }
`;
