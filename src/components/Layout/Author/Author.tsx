import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";

import { rhythm } from "../../../utils/typography";
import { device } from "../../../styles/constants";
import { useSiteMetadata, useAvatar } from "../../../hooks";

const Author = () => {
  const { author } = useSiteMetadata();
  const avatar = useAvatar({ width: 50, height: 50 });

  return (
    <Root>
      <StyledImage
        fixed={
          {
            ...avatar.childImageSharp.fixed,
            width: 50,
            height: 50,
          } as FixedObject
        }
        alt={author.name}
      />
      <h5>Personal blog about coding, remote work, habits and much more</h5>
    </Root>
  );
};

const Root = styled.section`
  display: grid;
  grid-template-columns: 50px auto;
  grid-gap: ${rhythm(1)};
  align-items: center;
  margin-bottom: ${rhythm(1)};

  h5 {
    margin: 0;
  }
`;

const StyledImage = styled(Image)`
  margin-bottom: 0;
  justify-self: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media ${device.tablet} {
    grid-row: auto;
    justify-self: flex-end;
  }
`;

export default Author;
