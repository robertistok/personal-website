import React from "react";
import styled from "styled-components";
import { GatsbyLocation } from "local-types";
import { animated } from "react-spring";

import About from "../components/About";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useSiteMetadata, usePageTransitions } from "../hooks";

interface AboutPageProps {
  location: GatsbyLocation;
}

const AboutPage: React.FunctionComponent<
  AboutPageProps
> = (): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();

  const transitions = usePageTransitions();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <About />
        </animated.div>
      ))}
    </Layout>
  );
};

const Root = styled.section``;

export default AboutPage;
