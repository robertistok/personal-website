import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import SEO from "../components/Seo";

const ResumePage = () => {
  const { file: resume } = useStaticQuery(graphql`
    {
      file(name: { eq: "Robert_Istok_2019_resume" }) {
        publicURL
      }
    }
  `);
  const resumeUrl = useRef(null);
  useEffect(() => resume && resumeUrl.current && resumeUrl.current.click(), [
    resume,
    resumeUrl,
  ]);

  return (
    <>
      <SEO title="Curriculum Vitae" />
      <DownloadURL
        href={resume.publicURL}
        type="application/pdf"
        ref={resumeUrl}
      />
    </>
  );
};

const DownloadURL = styled.a`
  display: none;
`;

export default ResumePage;
