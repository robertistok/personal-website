import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import PostCard from "../../Blog/PostCard";

import { device } from "../../../styles/constants";
import { Query } from "../../../types/graphql-types";
import { rhythm } from "../../../utils/typography.js";

interface FeaturedPostsProps {
  location: Location;
}

const FeaturedPosts: React.FunctionComponent<FeaturedPostsProps> = ({
  location,
}): React.ReactElement => {
  const { allMarkdownRemark }: Query = useStaticQuery(
    graphql`
      query FeaturedPosts {
        allMarkdownRemark(
          filter: {
            frontmatter: { draft: { eq: false }, featured: { eq: true } }
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
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
          <PostCard
            key={edge.node.fields.slug}
            title={edge.node.frontmatter.title}
            description={edge.node.frontmatter.description}
            date={edge.node.frontmatter.date}
            slug={edge.node.fields.slug}
            timeToRead={edge.node.timeToRead}
            location={location}
          />
        ))}
      </PostsContainer>
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;

  &:after {
    margin: 30px 0;
    content: "";

    max-width: ${rhythm(42)};
    border-bottom: 1px solid #ccc;
    display: block;
    position: relative;
  }

  h2 {
    margin: 0;
    margin-bottom: 0;
  }

  @media ${device.tablet} {
  }
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, 100%);
  grid-template-columns: 100%;
  align-items: center;
  justify-content: center;
`;

export default FeaturedPosts;
