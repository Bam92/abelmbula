import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"
import PostLink from "../components/blog/post-link"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges.map(edge => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | Abel L Mbula</title>
        </Helmet>
        <SEO title="Blog" />
        <h3>Blog</h3>
        <p>Articles, tutorials, and more...</p>
        <div>{posts}</div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
