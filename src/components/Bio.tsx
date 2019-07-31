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
      <p>
        Written by <strong>{author.name}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${author.social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Bio;
