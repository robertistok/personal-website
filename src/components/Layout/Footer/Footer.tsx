import React from "react";
import styled from "styled-components";
import { rhythm, scale } from "../../../utils/typography";

import Social from "../../Social";

const Footer: React.FunctionComponent = (): React.ReactElement => {
  return (
    <Root>
      <Social className="footer_social" />
      <div>© 2019 robertistok</div>
    </Root>
  );
};

const Root = styled.footer`
  display: flex;
  text-align: center;
  flex-direction: column;
  max-width: ${rhythm(42)};
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.6);
  ${scale(-0.5)};

  &:before {
    margin: ${rhythm(2)} 0 ${rhythm(1)};
    content: "";

    max-width: ${rhythm(42)};
    border-bottom: 1px solid #ccc;
    display: block;
    position: relative;
  }

  .footer_social {
    align-self: center;
    grid-gap: 5px;
    grid-template-columns: repeat(6, ${rhythm(1)});

    svg {
      width: ${rhythm(1)};
      height: ${rhythm(1)};
    }
  }
`;

export default Footer;
