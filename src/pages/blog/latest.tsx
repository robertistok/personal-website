import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Query } from "graphql-types";

import SEO from "../../components/Seo";
import { Redirect } from "../../components/common";

const ResumePage: React.FunctionComponent = (): React.ReactElement => {
  const { allMarkdownRemark }: Query = useStaticQuery(
    graphql`
      query LatestPost {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title="Latest post" />
      <Redirect
        to={`/blog/${
          allMarkdownRemark.edges
            ? allMarkdownRemark.edges[0].node.frontmatter.slug
            : "404"
        }`}
      />
    </>
  );
};

export default ResumePage;
