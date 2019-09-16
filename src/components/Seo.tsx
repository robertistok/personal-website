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
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  url?: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
  lang = "en",
  meta = [],
  title,
  description,
  image,
  imageAlt,
  type = "website",
  url,
}): React.ReactElement => {
  const {
    title: defaultTitle = "",
    description: defaultDescription = "",
    author,
  } = useSiteMetadata();

  const metaDescription = description || defaultDescription;
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
        { property: `og:title`, content: title },
        { name: `twitter:title`, content: title },

        { name: `description`, content: metaDescription },
        { property: `og:description`, content: metaDescription },
        { name: `twitter:description`, content: metaDescription },

        { name: `twitter:card`, content: `summary` },
        { property: `og:type`, content: type },

        ...(url
          ? [
              { property: "og:url", content: url },
              { property: "twitter:url", content: url },
            ]
          : []),

        ...(image
          ? [
              { property: `og:image`, content: image },
              { name: `twitter:image`, content: image },
            ]
          : []),

        ...(imageAlt
          ? [
              { property: `og:image:alt`, content: imageAlt },
              { name: `twitter:image:alt`, content: imageAlt },
            ]
          : []),

        ...(author.social.twitter
          ? [
              { name: `twitter:creator`, content: author.social.twitter },
              { name: `twitter:site`, content: author.social.twitter },
            ]
          : []),
      ].concat(meta)}
    />
  );
};

export default SEO;
