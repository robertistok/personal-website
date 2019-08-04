import React from "react";
import { default as styled, ThemeProvider } from "styled-components";

import Header from "./Header";

import { rhythm } from "../utils/typography";
import { device, colors } from "../styles/constants";

interface LayoutProps {
  location?: Location;
  title?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): React.ReactElement => {
  return (
    <ThemeProvider theme={{ colors }}>
      <Root>
        <Header />
        <Main>{children}</Main>
      </Root>
    </ThemeProvider>
  );
};

const Root = styled.div`
  margin: 0 auto;
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(42)};
  height: calc(100% - 30px - ${rhythm(1.5)});
  padding: ${rhythm(3 / 4)};

  @media ${device.tablet} {
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  }
`;

export default Layout;
