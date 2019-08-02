import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Post from "../components/Post";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { MarkdownRemark } from "../generated/graphql-types";

interface BlogPostTemplateProps {
  location: Location;
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogPostTemplate: React.FunctionComponent<BlogPostTemplateProps> = (
  props
): React.ReactElement => {
  const post = props.data.markdownRemark;
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <Post post={post} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
