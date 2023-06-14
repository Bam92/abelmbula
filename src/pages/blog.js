import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./blog.css"
import PostLink from "../components/blog/post-link"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges.map(edge => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | Great articles for great developers</title>
        </Helmet>
        <Layout location={this.props.location}>
          <SEO title="Blog" />
          <h3>Find great articles that <i>really</i> suit your need.</h3>
          <div>{posts}</div>
        </Layout>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC }}
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
            cover {id}
          }
        }
      }
    }
  }
`
