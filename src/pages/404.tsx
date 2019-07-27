import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface NotFoundPageProps {
  location: any
}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = ({
  location,
}): React.ReactElement => {
  const { title: siteTitle } = useSiteMetadata()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
