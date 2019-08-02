import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import PostCard from "./PostCard";
import { rhythm } from "../../utils/typography";

const Blog: React.FunctionComponent = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Root>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <PostCard
            key={node.fields.slug}
            title={title}
            slug={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
          />
        );
      })}
    </Root>
  );
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${rhythm(24)};
`;

export default Blog;
