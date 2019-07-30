import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../utils/typography";
import useSiteMetadata from "../hooks/useSiteMetadata";

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(1.5)};
`;

const Title = styled.h2`
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    box-shadow: none;
  }
`;

const StyledNav = styled.nav``;

const StyledLink = styled(Link)`
  margin-right: ${rhythm(1 / 2)};
`;

export default Layout;
