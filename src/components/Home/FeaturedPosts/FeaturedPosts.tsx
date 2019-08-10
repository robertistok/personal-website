import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import PostCard from "../../Blog/PostCard";

import { device } from "../../../styles/constants";
import { Query } from "../../../generated/graphql-types";
import { rhythm } from "../../../utils/typography.js";

const FeaturedPosts: React.FunctionComponent = (): React.ReactElement => {
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
          />
          // <PostCard>
          //   <h4>{edge.node.frontmatter.title}</h4>
          //   <span>
          //     {edge.node.frontmatter.date} • {edge.node.timeToRead} min read
          //   </span>
          //   <p>{edge.node.frontmatter.description}</p>
          // </PostCard>
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
    margin-bottom: 0;
    /* color: ${({ theme }) => theme.colors.accent}; */
    /* margin-bottom: ${rhythm(2)}; */
  }

  @media ${device.tablet} {
    /* align-items: center; */
  }
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, 100%);
  grid-template-columns: 100%;
  align-items: center;
  justify-content: center;


  /* @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

// const PostCard = styled.section`
//   padding: ${rhythm(1)} ${rhythm(3 / 4)};

//   h4 {
//     margin: 0;
//   }
// `;

export default FeaturedPosts;
