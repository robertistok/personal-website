import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaGoodreadsG,
} from "react-icons/fa";
import styled from "styled-components";

import useSiteMetadata from "../hooks/useSiteMetadata";

const LINKEDIN = "https://www.linkedin.com/in";
const GITHUB = "https://github.com";
const MEDIUM = "https://medium.com";
const TWITTER = "https://twitter.com";
const GOODREADS = "https://goodreads.com";

const Social: React.FunctionComponent = (): React.ReactElement => {
  const {
    author: { social },
  } = useSiteMetadata();

  return (
    <Root>
      <OutsideLink href={`${LINKEDIN}/${social.linkedin}`} title="LinkedIn">
        <FaLinkedin />
      </OutsideLink>
      <OutsideLink href={`${GITHUB}/${social.github}`} title="GitHub">
        <FaGithub />
      </OutsideLink>
      <OutsideLink href={`${MEDIUM}/@${social.medium}`} title="Medium">
        <FaMedium />
      </OutsideLink>
      <OutsideLink href={`${TWITTER}/${social.twitter}`} title="Twitter">
        <FaTwitter />
      </OutsideLink>
      <OutsideLink href={`${GOODREADS}/${social.goodreads}`} title="Goodreads">
        <FaGoodreadsG />
      </OutsideLink>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 30px);
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
