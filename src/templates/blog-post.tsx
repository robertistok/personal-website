import React from "react";
import { graphql } from "gatsby";
import { useTransition, animated } from "react-spring";
import { GatsbyLocation } from "local-types";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Post from "../components/Post";
import useSiteMetadata from "../hooks/useSiteMetadata";
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

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0.5, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { tension: 280, friction: 40 },
  });

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
    }
  }
`;
