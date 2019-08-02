import React from "react";

import Layout from "../components/Layout";
import Blog from "../components/Blog";
import SEO from "../components/Seo";
import useSiteMetadata from "../hooks/useSiteMetadata";

const BlogIndex = props => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Blog />
    </Layout>
  );
};

export default BlogIndex;
