import React from "react";
import { default as styled, ThemeProvider } from "styled-components";
import { GatsbyLocation } from "local-types";

import Header, { HeaderProps } from "./Header";

import { rhythm, scale } from "../../utils/typography";
import { device, colors } from "../../styles/constants";

interface LayoutProps {
  location?: GatsbyLocation;
  title?: string;
  headerProps?: HeaderProps;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  headerProps,
  location,
}): React.ReactElement => {
  return (
    <ThemeProvider theme={{ colors }}>
      <Root>
        <Header location={location} {...headerProps} />
        <Main>{children}</Main>
        <Footer>© 2019 robertistok</Footer>
      </Root>
    </ThemeProvider>
  );
};

const Root = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  background: #fafafa;
  padding: ${rhythm(3 / 4 + 3)} ${rhythm(3 / 4)} ${rhythm(3 / 4)};

  @media ${device.tablet} {
    padding: ${rhythm(4.5)} ${rhythm(3 / 4)} ${rhythm(1.5)};
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(42)};
  height: calc(100% - 30px - ${rhythm(1.5)});
`;

const Footer = styled.footer`
  max-width: ${rhythm(42)};
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.6);
  ${scale(-0.5)};

  &:before {
    margin: ${rhythm(2)} 0 ${rhythm(1)};
    content: "";

    max-width: ${rhythm(42)};
    border-bottom: 1px solid #ccc;
    display: block;
    position: relative;
  }
`;

export default Layout;
