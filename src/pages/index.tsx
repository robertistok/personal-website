import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm } from "../utils/typography";
import useSiteMetadata from "../hooks/useSiteMetadata";
import FeaturedPosts from "../components/Home/FeaturedPosts";

const BlogIndex = props => {
  const { data } = props;
  const { title: siteTitle } = useSiteMetadata();

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Intro />
      <FeaturedPosts />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
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
`;
