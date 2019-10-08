import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyLocation } from "local-types";

import ShowcasedPostsContainer from "./ShowcasedPostsContainer";

import { Query } from "../../../types/graphql-types";

interface HomeProps {
  location: GatsbyLocation;
}

const Home: React.FunctionComponent<HomeProps> = ({
  location,
}): React.ReactElement => {
  const { allMarkdownRemark }: Query = useStaticQuery(
    graphql`
      query LatestPosts {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              ...ShowcasedPostInformation
            }
          }
        }
      }
    `
  );

  const latestPosts = allMarkdownRemark.edges.slice(0, 3);
  const featuredPosts = allMarkdownRemark.edges
    .filter(p => p.node.frontmatter.featured)
    .filter(
      p =>
        !Boolean(
          latestPosts.find(lp => lp.node.fields.slug === p.node.fields.slug)
        )
    )
    .slice(0, 3);

  return (
    <>
      <ShowcasedPostsContainer
        location={location}
        posts={latestPosts}
        title="Latest ⌛️"
      />
      <ShowcasedPostsContainer
        location={location}
        posts={featuredPosts}
        title="Featured ✨"
      />
    </>
  );
};

export default Home;
