import styled from "styled-components";
import { ACCENT_COLOR, CONTAINER } from "../utils/constants";

export const Container = styled(CONTAINER)`
  padding-top: 4rem;
`;

export const BackButton = styled.div`
  width: 2rem;
  cursor: pointer;
  &:hover {
    color: ${ACCENT_COLOR};
  }
`;

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
