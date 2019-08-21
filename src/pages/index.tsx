import React from "react";
import { useTransition, animated, config } from "react-spring";
import { GatsbyLocation } from "local-types";

import Intro from "../components/Intro";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useSiteMetadata, usePageTransitions } from "../hooks";
import FeaturedPosts from "../components/Home/FeaturedPosts";

interface IndexProps {
  location?: GatsbyLocation;
}

const Index: React.FunctionComponent<IndexProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();

  const transitions = usePageTransitions({
    config: config.gentle,
    translateX: -100,
    location,
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Intro />
          <FeaturedPosts location={location} />
        </animated.div>
      ))}
    </Layout>
  );
};

export default Index;
