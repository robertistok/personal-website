import React from "react";
import { animated } from "react-spring";
import { GatsbyLocation } from "local-types";

import About from "../components/About";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useSiteMetadata, usePageTransitions } from "../hooks";

interface AboutPageProps {
  location: GatsbyLocation;
}

const AboutPage: React.FunctionComponent<AboutPageProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle, author } = useSiteMetadata();

  const transitions = usePageTransitions({ location });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO description="Loves to build products, read books, explore the world, and engage in mindblowing conversations" title="About" />
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <About author={author} />
        </animated.div>
      ))}
    </Layout>
  );
};

export default AboutPage;
