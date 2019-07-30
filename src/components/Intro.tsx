/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { rhythm } from "../utils/typography";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Bio = () => {
  const { author } = useSiteMetadata();

  return (
    <Root>
      <h1>Hi! 👋</h1>
      <p>
        I'm Robert, a full stack software engineer, an avid reader and a global
        citizen.
      </p>
      <p></p>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  height: 100%;
`;

const StyledImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
`;

export default Bio;
