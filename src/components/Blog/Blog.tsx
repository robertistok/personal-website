import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Image, { FixedObject } from "gatsby-image";
import { GatsbyLocation } from "local-types";

import PostCard from "./PostCard";
import { rhythm } from "../../utils/typography";
import { device } from "../../styles/constants";
import { MarkdownRemarkConnection, File } from "../../types/graphql-types";
import useSiteMetadata from "../../hooks/useSiteMetadata";

interface BlogProps {
  location: GatsbyLocation;
}

const Blog: React.FunctionComponent<BlogProps> = ({
  location,
}): React.ReactElement => {
  const data: {
    avatar: File;
    allMarkdownRemark: MarkdownRemarkConnection;
  } = useStaticQuery(graphql`
    query {
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

      avatar: file(absolutePath: { regex: "/robertistok_avatar.jpeg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { author } = useSiteMetadata();

  const posts = data.allMarkdownRemark.edges;

  return (
    <Root>
      <Header>
        <StyledImage
          fixed={data.avatar.childImageSharp.fixed as FixedObject}
          alt={author.name}
        />
        <h5>Personal blog about coding, remote work, habits and much more</h5>
      </Header>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <PostCard
            key={node.fields.slug}
            title={title}
            slug={node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
            location={location}
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

const Header = styled.section`
  display: grid;
  grid-template-columns: 50px auto;
  grid-gap: ${rhythm(1)};
  align-items: center;
  margin-bottom: ${rhythm(1)};

  h5 {
    margin: 0;
  }
`;

const StyledImage = styled(Image)`
  margin-bottom: 0;
  justify-self: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media ${device.tablet} {
    grid-row: auto;
    justify-self: flex-end;
  }
`;

export default Blog;
