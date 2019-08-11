import React from "react";
import { useTransition, animated, config } from "react-spring";

import Intro from "../components/Intro";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import useSiteMetadata from "../hooks/useSiteMetadata";
import FeaturedPosts from "../components/Home/FeaturedPosts";

interface IndexProps {
  location?: Location;
}

const Index: React.FunctionComponent<IndexProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0.1, transform: "translate3d(-40vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: config.gentle,
  });
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
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
