// styles/GlobalStyles.tsx
import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const BodyStyles = createGlobalStyle({
  body: {
    ...tw`antialiased bg-sage text-teal-900 font-Montserrat scroll-smooth`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <BodyStyles />
  </>
);

export default GlobalStyles;
