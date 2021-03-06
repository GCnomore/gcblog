import { ReactNode, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  DARK_THEME,
  GlobalStyles,
  LIGHT_THEME,
  THEME,
} from "../../utils/constants";
import NavBar from "../Nav_Bar/NavBar";

interface LayoutProp {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  const [theme, setTheme] = useState<THEME>(THEME.DARK);
  return (
    <ThemeProvider theme={theme === "dark" ? DARK_THEME : LIGHT_THEME}>
      <GlobalStyles />
      <NavBar theme={theme} setTheme={setTheme} />
      <Container>{children}</Container>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fontColor};
`;
