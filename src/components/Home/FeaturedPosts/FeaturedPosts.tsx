import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { device } from "../../../styles/constants";
import { Query } from "../../../generated/graphql-types";
import { rhythm } from "../../../utils/typography.js";

const FeaturedPosts: React.FunctionComponent = (): React.ReactElement => {
  const { allMarkdownRemark }: Query = useStaticQuery(
    graphql`
      query FeaturedPosts {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
              timeToRead
            }
          }
        }
      }
    `
  );

  return (
    <Root>
      <h2>Featured Posts</h2>

      <PostsContainer>
        {allMarkdownRemark.edges.map(edge => (
          <PostCard>
            <h4>{edge.node.frontmatter.title}</h4>
          </PostCard>
        ))}
      </PostsContainer>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${rhythm(1)} 0;

  @media ${device.tablet} {
    align-items: inherit;
  }
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, 100%);
  grid-gap: ${rhythm(1)};

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PostCard = styled.section`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: ${rhythm(1)} ${rhythm(3 / 4)};

  h4 {
    margin: 0;
  }
`;

export default FeaturedPosts;
