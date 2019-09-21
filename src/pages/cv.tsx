import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import SEO from "../components/Seo";

const CVPage = () => {
  const { file: cv } = useStaticQuery(graphql`
    {
      file(name: { eq: "Robert_Istok_2019_CV" }) {
        publicURL
      }
    }
  `);
  const cvUrl = useRef(null);
  useEffect(() => cv && cvUrl.current && cvUrl.current.click(), [cv, cvUrl]);

  return (
    <>
      <SEO title="Curriculum Vitae" />
      <DownloadURL href={cv.publicURL} type="application/pdf" ref={cvUrl} />
    </>
  );
};

const DownloadURL = styled.a`
  display: none;
`;

export default CVPage;
