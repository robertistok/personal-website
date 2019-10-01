import { useStaticQuery, graphql } from "gatsby";

import { Query, File } from "../types/graphql-types";

interface useAvatarProps {
  width?: number;
  height?: number;
}

const useAvatar = (props: useAvatarProps): File => {
  const { width = 50, height = 50 } = props;

  const data: Query = useStaticQuery(
    graphql`
      query Avatar {
        file(absolutePath: { regex: "/robertistok_avatar.jpeg/" }) {
          childImageSharp {
            fixed(width: 1024, height: 1024) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return {
    ...data.file,
    childImageSharp: {
      ...data.file.childImageSharp,
      fixed: { ...data.file.childImageSharp.fixed, width, height },
    },
  };
};

export default useAvatar;
