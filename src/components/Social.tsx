import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import styled from "styled-components";

import useSiteMetadata from "../hooks/useSiteMetadata";

const LINKEDIN = "https://www.linkedin.com/in";

const Social: React.FunctionComponent = (): React.ReactElement => {
  const {
    author: { social },
  } = useSiteMetadata();

  return (
    <Root>
      <OutsideLink href={`${LINKEDIN}/${social.linkedin}`}>
        <FaLinkedin />
      </OutsideLink>
      <FaGithub />
      <FaMedium />
      <FaTwitter />
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 30px);
  grid-gap: 10px;

  svg {
    width: 30px;
    height: 30px;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const OutsideLink = styled.a`
  color: inherit;
  text-decoration: none;
  box-shadow: none;
`;

export default Social;
