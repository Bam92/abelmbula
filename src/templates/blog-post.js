import React from "react"
import { graphql } from "gatsby"

import PostBio from "../components/blog/post-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const { data, location } = this.props
    const post = data.markdownRemark
    return (
      <Layout location={location} title="{siteTitle}">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h3
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h3>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <hr
            style={{
              marginBottom: rhythm(1),
            }}
          /> */}
          <div
            id="edit"
            style={{
              background: "rgba(0, 0, 0, .1)",
              borderLeft: "5px solid #1ca086",
              padding: ".7em 1.5em",
              fontSize: "smaller",

            }}
          >
            <p>
              Find an issue with this post? Think you could clarify, update or
              add something?
            </p>
            <p>
              All my posts are available to edit on Github. Any fix, little or
              small, is appreciated!
            </p>
            <p>
              <a
                href={`https://github.com/Bam92/abelmbula/tree/master/content/${location.pathname}`}
              >
                edit on github
              </a>
            </p>
          </div>

          <footer>
            <PostBio />
          </footer>
        </article>

        {/* <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
        <footer>
          <Footer />
        </footer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        published
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
