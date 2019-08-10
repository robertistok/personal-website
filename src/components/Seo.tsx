/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import useSiteMetadata from "../hooks/useSiteMetadata";

interface SEOProps {
  lang?: string;
  meta?: any[];
  title: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
  lang = "en",
  meta = [],
  title,
}): React.ReactElement => {
  const {
    title: defaultTitle = "",
    description: metaDescription,
    author,
  } = useSiteMetadata();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      titleTemplate={`${title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author.name,
        },
        {
          name: `twitter:title`,
          content: author.social.twitter,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
