import React from "react";
import {
  FaAt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaGoodreadsG,
} from "react-icons/fa";
import styled from "styled-components";

import { useSiteMetadata } from "../hooks";
import { rhythm, scale } from "../utils/typography.js";

const LINKEDIN = "https://www.linkedin.com/in";
const GITHUB = "https://github.com";
const MEDIUM = "https://medium.com";
const TWITTER = "https://twitter.com";
const GOODREADS = "https://goodreads.com";

interface SocialProps {
  className?: string;
}

const Social: React.FunctionComponent<SocialProps> = ({
  className,
}): React.ReactElement => {
  const {
    author: { social },
  } = useSiteMetadata();

  return (
    <Root className={className}>
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
      <OutsideLink
        href={`mailto:${social.email}?subject=Hey Robert%21`}
        title="Email"
      >
        <FaAt />
      </OutsideLink>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(6, ${rhythm(1.25)});
  grid-gap: 10px;

  svg {
    width: ${rhythm(1.25)};
    height: ${rhythm(1.25)};

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
