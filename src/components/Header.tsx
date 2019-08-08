import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      <StyledHeader>
        <Title>
          <AniLink swipe direction="right" to="/" delay={1} entryOffset={100}>
            {author.social.twitter.toLowerCase()}
          </AniLink>
        </Title>
        <StyledNav>
          <StyledLink
            swipe
            direction="right"
            to="/about"
            delay={1}
            entryOffset={100}
          >
            about
          </StyledLink>
          <StyledLink
            swipe
            direction="right"
            to="/blog"
            delay={1}
            entryOffset={100}
          >
            blog
          </StyledLink>
        </StyledNav>
      </StyledHeader>
    </Root>
  );
};

const Root = styled.div`
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.header`
  width: 100%;
  max-width: ${rhythm(42)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${rhythm(3 / 4)};

  @media ${device.tablet} {
    padding: ${rhythm(3 / 4)};
  }
`;

const Title = styled.h2`
  margin: 0;
  ${scale(0.25)};

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

const StyledLink = styled(AniLink)`
  margin-right: ${rhythm(1 / 2)};
`;

export default Layout;
