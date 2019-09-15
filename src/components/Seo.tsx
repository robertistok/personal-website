/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";

import useSiteMetadata from "../hooks/useSiteMetadata";

type OGMetaTag = {
  property: string;
  content: string;
};

type TwitterMetaTag = {
  name: string;
  content: string;
};

interface SEOProps {
  lang?: string;
  meta?: (OGMetaTag | TwitterMetaTag)[];
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
          name: `google-site-verification`,
          content: `OZ82-xGcAi-7G55v3p4iJa-qlkwTTG1ExzUrYXxdsT0`,
        },
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
