import { useStaticQuery, graphql } from "gatsby";
import { Query, SiteSiteMetadata } from "graphql-types";

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
              photo
              resume
              birthDate
              social {
                email
                medium
                twitter
                github
                goodreads
                linkedin
                instagram
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
