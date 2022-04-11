import React, { Dispatch, SetStateAction } from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import {
  faBars,
  faMagnifyingGlass,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Styled from "./NavBar_Styled";
import { THEME } from "../../utils/constants";

interface NavBarProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<THEME>>;
}

const NavBar: React.FC<NavBarProps> = ({ theme, setTheme }) => {
  const router: NextRouter = useRouter();
  const toggleTheme = (): void => {
    theme === THEME.DARK ? setTheme(THEME.LIGHT) : setTheme(THEME.DARK);
  };

  const pageTitle =
    router.pathname === "/" ? "~/GC_blog" : `~/GC_blog${router.asPath}`;

  return (
    <Styled.Container>
      <Styled.Menu>
        <FontAwesomeIcon icon={faBars} />
      </Styled.Menu>
      <Link href={"/"}>
        <Styled.TitleContainer>{pageTitle}</Styled.TitleContainer>
      </Link>
      <div>
        <Styled.Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Styled.Search>
        <Styled.ThemeToggle>
          <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
        </Styled.ThemeToggle>
      </div>
    </Styled.Container>
  );
};

export default NavBar;
