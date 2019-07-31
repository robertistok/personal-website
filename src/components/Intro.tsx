/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { device } from "../styles/constants";

const Bio = () => {
  const { author } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Root>
      <HeadingContainer>
        <StyledImage
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <PitchContainer>
          <Greeting>Hi, I'm Robert 👋</Greeting>
          <SubTitle>Javascript Engineer</SubTitle>
          <Intro>
            A web developer fascinated by automation, having a product mindset
            and a neverending hunger to grow.
          </Intro>
        </PitchContainer>
      </HeadingContainer>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;

const HeadingContainer = styled.section`
  display: grid;
  grid-template-rows: 150px auto;
  margin-top: ${rhythm(1.25)};

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: none;
  }
`;

const PitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    display: block;
    grid-row: 1;
  }
`;

const Greeting = styled.h1`
  margin: ${rhythm(1 / 4)} 0;
  margin-bottom: 0;

  ${scale(0.25)}

  @media ${device.tablet} {
    ${scale(1)}
  }
`;

const SubTitle = styled.h4`
  ${scale(-0.15)};
  margin-top: 0;

  @media ${device.tablet} {
    margin-top: ${rhythm(1 / 4)};
    ${scale(0.25)};

    &:after {
      margin: 30px 0;
      content: "";
      width: 50px;
      border-bottom: 1px solid #ccc;
      display: block;
    }
  }
`;

const Intro = styled.p`
  ${scale(-0.3)};

  @media ${device.tablet} {
    ${scale(0)};
  }
`;

const StyledImage = styled(Image)`
  margin-bottom: 0;
  justify-self: center;
  min-width: 150px;
  min-height: 150px;
  border-radius: 100%;

  @media ${device.tablet} {
    grid-row: auto;
    justify-self: flex-end;
  }
`;

export default Bio;
