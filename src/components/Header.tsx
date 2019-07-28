import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

interface LayoutProps {}

const Layout: React.FunctionComponent<
  LayoutProps
> = ({}): React.ReactElement => {
  return (
    <Root>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </nav>
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${rhythm(1.5)};
`

const StyledLink = styled(Link)`
  margin-right: ${rhythm(1 / 2)};
`

export default Layout
