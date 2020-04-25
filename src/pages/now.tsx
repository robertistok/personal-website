import React from "react";
import { animated } from "react-spring";
import { GatsbyLocation } from "local-types";
import dayjs from "dayjs";

import Now from "../components/Now";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { useSiteMetadata, usePageTransitions } from "../hooks";

interface NowPageProps {
  location: GatsbyLocation;
}

const NowPage: React.FunctionComponent<NowPageProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle, nowPageUpdatedAt } = useSiteMetadata();

  const pageUpdatedAtFormatted = dayjs(nowPageUpdatedAt).format("MMM DD, YYYY");

  const transitions = usePageTransitions({ location });

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        description={`My life at the moment; updated ${pageUpdatedAtFormatted}`}
        title="Now"
      />
      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Now />
        </animated.div>
      ))}
    </Layout>
  );
};

export default NowPage;
