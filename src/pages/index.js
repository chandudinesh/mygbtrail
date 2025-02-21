import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Love you CB">
      <p>Hello Sravanthi .. I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/file.webp"
        />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage