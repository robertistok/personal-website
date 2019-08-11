import React from "react";
import { GatsbyLocation } from "local-types";
import { useTransition, animated } from "react-spring";

import Layout from "../components/Layout";
import Blog from "../components/Blog";
import SEO from "../components/Seo";
import useSiteMetadata from "../hooks/useSiteMetadata";

interface BlogIndexProps {
  location: GatsbyLocation;
}

const BlogIndex: React.FunctionComponent<BlogIndexProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata();
  const { state: locationState = { prevPath: "" } } = location;

  const comingBack = locationState.prevPath.match(/\/blog\/*/);

  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0.5,
      transform: `translate3d(${comingBack ? "-100vw" : "100vw"}, 0, 0)`,
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    config: { tension: 280, friction: 40 },
  });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Blog location={location} />
        </animated.div>
      ))}
    </Layout>
  );
};

export default BlogIndex;
