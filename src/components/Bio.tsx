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
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { author } = useSiteMetadata();

  return (
    <Root>
      <StyledImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
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
  margin-bottom: ${rhythm(2.5)};
`;

const StyledImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
`;

export default Bio;
