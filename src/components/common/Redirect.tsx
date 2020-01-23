import React, { useRef, useEffect } from "react";

interface RedirectLinkProps {
  to: string;
  type?: "application/pdf";
}

const RedirectLink: React.FunctionComponent<RedirectLinkProps> = ({
  to,
  type,
}): React.ReactElement => {
  const urlRef = useRef(null);
  useEffect(() => urlRef && urlRef.current && urlRef.current.click(), [urlRef]);

  return <a href={to} type={type} ref={urlRef} style={{ display: "none" }} />;
};

export default RedirectLink;
