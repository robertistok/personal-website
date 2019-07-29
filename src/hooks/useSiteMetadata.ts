import { useStaticQuery, graphql } from "gatsby";

import { Query, SiteSiteMetadata } from "../generated/graphql-types";

const useSiteMetadata = (): SiteSiteMetadata => {
  const { site }: Query = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              firstname
              lastname
              name
              bio
              photo
              social {
                email
                telegram
                twitter
                github
                rss
                vkontakte
              }
            }
            menu {
              label
              path
            }
            description
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
