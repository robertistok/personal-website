import React from "react";
import styled from "styled-components";
import Image, { FixedObject } from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import { File } from "../../types/graphql-types";
import { rhythm } from "../../utils/typography";
import { device } from "../../styles/constants";

const About: React.FunctionComponent = (): React.ReactElement => {
  const data: {
    avatar: File;
  } = useStaticQuery(graphql`
    query About {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Root>
      <Avatar fixed={data.avatar.childImageSharp.fixed as FixedObject} />
      {/* <div>
          <div>Róbert Istók, 25 years</div>
          <div>Software enginner @ Relatable</div>
          <div>Gear</div>
        </div> */}

      <div>
        <h4>Hey there my friend!</h4>
        <p>
          My name is Róbert Istók and I am x years old. I have a passion for
          products which have a constructive effect on our lifes and I love to
          be involved in the development of purposeful applications.
        </p>

        <p>
          I contribute to the product life cycle with my comprehensive skills in
          web development, my growing knowledge in behavioural sciences and
          human psychology, and my neverending hunger for growth.
        </p>

        <p>When not building stuff, I love to explore and read.</p>
      </div>
    </Root>
  );
};

const Root = styled.section`
  display: grid;
  grid-gap: ${rhythm(2)};

  @media ${device.tablet} {
    grid-template-columns: minmax(20%, 200px) 70%;
  }
`;

const Avatar = styled(Image)`
  align-self: center;

  border-radius: 50%;
  width: 150px;
  height: 150px;
  justify-self: center;

  @media ${device.tablet} {
    width: auto;
    height: auto;
    justify-self: start;
  }
`;

export default About;
