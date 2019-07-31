import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { device } from "../styles/constants";

interface LayoutProps {}

const Layout: React.FunctionComponent<
  LayoutProps
> = ({}): React.ReactElement => {
  const { author } = useSiteMetadata();
  return (
    <Root>
      <Title>
        <Link to="/">{author.social.twitter.toLowerCase()}</Link>
      </Title>
      <StyledNav>
        <StyledLink to="/about">about</StyledLink>
        <StyledLink to="/blog">blog</StyledLink>
      </StyledNav>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(1.5)};

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  margin: 0 0 ${rhythm(3 / 4)} 0;
  ${scale(0.5)};

  a {
    color: inherit;
    text-decoration: none;
    box-shadow: none;
  }

  @media ${device.tablet} {
    margin-bottom: 0;
    ${scale(0.75)};
  }
`;

const StyledNav = styled.nav``;

const StyledLink = styled(Link)`
  margin-right: ${rhythm(1 / 2)};
`;

export default Layout;
