import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
        data.allFile.nodes.map(x => (
        <li key={x.name}>
            {x.name}
        </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const stquery = graphql `query MyQuery {
  allFile {
    nodes {
      name
    }
  }
}`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage