import styled from "styled-components";

interface Theme {
  bg: string;
  componentBg: string;
  fontColor: string;
}

export enum THEME {
  DARK = "dark",
  LIGHT = "light",
}

export const DARK_THEME: Theme = {
  componentBg: "#191919",
  bg: "#242424",
  fontColor: "#fff",
};

export const LIGHT_THEME: Theme = {
  componentBg: "#ddd",
  bg: "#f4f4f4",
  fontColor: "#000",
};

export const ACCENT_COLOR: string = "#FF9A8B";

export const MAX_WIDTH_2XL: string = "1536px";
export const MAX_WIDTH_XL: string = "1280px";
export const MAX_WIDTH_LG: string = "1024px";
export const MAX_WIDTH_MD: string = "768px";
export const MAX_WIDTH_SM: string = "640px";
export const MAX_WIDTH_XS: string = "375px";

export const CONTAINER = styled.article`
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: ${MAX_WIDTH_XL}) {
    max-width: 1140px;
  }

  @media only screen and (min-width: ${MAX_WIDTH_LG}) and (max-width: ${MAX_WIDTH_XL}) {
    max-width: 840px;
  }

  @media only screen and (min-width: ${MAX_WIDTH_SM}) and (max-width: ${MAX_WIDTH_LG}) {
    max-width: 460px;
  }

  @media only screen and (max-width: ${MAX_WIDTH_SM}) {
    max-width: 310px;
  }
`;
