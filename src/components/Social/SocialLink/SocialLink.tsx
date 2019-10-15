import React from "react";
import styled from "styled-components";

import SOCIALS from "./constants";
import { rhythm } from "../../../utils/typography";

interface SocialLinkProps<T> {
  type: keyof T;
  userId?: string;
  rootProps?: {
    href: string;
  };
}

const SocialLink: React.FunctionComponent<SocialLinkProps<typeof SOCIALS>> = ({
  userId,
  type,
  rootProps,
}) => {
  const { Icon, baseUrl, ...baseRootProps } = SOCIALS[type];

  return (
    <Root
      {...baseRootProps}
      {...(baseUrl && userId && { href: `${baseUrl}/${userId}` })}
      {...rootProps}
    >
      <Icon />
    </Root>
  );
};

const Root = styled.a<{ hoverColor?: string }>`
  color: inherit;
  text-decoration: none;
  box-shadow: none;

  svg {
    width: ${rhythm(1.25)};
    height: ${rhythm(1.25)};
    transition: transform 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);

    &:hover {
      cursor: pointer;
      transform: scale(1.4);
      color: ${({ hoverColor }) => hoverColor || "initial"};
    }
  }
`;

export default SocialLink;
