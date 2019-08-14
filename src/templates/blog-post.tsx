import React from "react";
import { graphql } from "gatsby";
import { animated } from "react-spring";
import { GatsbyLocation } from "local-types";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Post from "../components/Post";
import { useSiteMetadata, usePageTransitions } from "../hooks";
import { MarkdownRemark } from "../types/graphql-types";

interface BlogPostTemplateProps {
  location: GatsbyLocation;
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogPostTemplate: React.FunctionComponent<BlogPostTemplateProps> = ({
  data,
  location,
}): React.ReactElement => {
  const post = data.markdownRemark;
  const { title: siteTitle } = useSiteMetadata();

  const transitions = usePageTransitions();

  return (
    <Layout
      location={location}
      title={siteTitle}
      headerProps={{ showBackNav: true }}
    >
      <SEO title={post.frontmatter.title} />
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Post post={post} />
        </animated.div>
      ))}
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
      timeToRead
    }
  }
`;
