import { useStaticQuery, graphql } from "gatsby";

import { Query, SiteSiteMetadata } from "../types/graphql-types";

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
              birthDate
              social {
                email
                medium
                twitter
                github
                goodreads
                linkedin
              }
            }
            description
            siteUrl
            title
            copyright
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
