import React from "react";
import { GatsbyLocation } from "local-types";

import Layout from "../components/Layout";
import Blog from "../components/Blog";
import SEO from "../components/Seo";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface BlogIndexProps {
  location: GatsbyLocation;
}

const BlogIndex: React.FunctionComponent<BlogIndexProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Blog location={location} />
    </Layout>
  );
};

export default BlogIndex;
