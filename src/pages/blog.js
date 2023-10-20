import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/blog/post-link"
import BlogList from "../components/blog/blogList"
import "./blog.css"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const posts = data.allMarkdownRemark.edges.map((edge) => (
      <PostLink key={edge.node.id} post={edge.node} />
    ))

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Abel L Mbula Blog</title>
        </Helmet>

        <Layout location={ location }>
          <SEO title="Blog" />
          <h3>
            Find great articles among { posts.length } that <i>really</i> suit your need.
          </h3>
          
          <BlogList> { posts } </BlogList>
        </Layout>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
            cover {
              publicURL
              childImageSharp {
                fixed(width: 2000) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            description
          }
        }
      }
    }
  }
`
