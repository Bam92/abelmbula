import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const { data, location } = this.props
    const post = data.markdownRemark
    const { cover, title, description, date } = post.frontmatter

    return (
      <Layout
        location={location}
        title={title}
        cover={cover}
      >
        <SEO
          title={title}
          description={description || post.excerpt}
        />
        <article>
          <header>
            <h3
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(2),
              }}
            >
              {date}
            </p>
            <div>
            {cover ? <Img fluid={cover.childImageSharp.fluid} /> : null}
            </div>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />

          {/* <div
            style={{
              background: "rgba(0, 0, 0, .1)",
              borderLeft: "5px solid #1ca086",
              padding: ".7em 1.5em",
              fontSize: "smaller",
            }}
          >
            Find an issue with this post? Think you could clarify, update or add
            something?
            <br />
            All my posts are available to{" "}
            <a
              href={`https://github.com/Bam92/abelmbula/tree/master/content/${location.pathname}`}
            >
              edit on Github
            </a>
            . Any fix, little or small, is appreciated!
            <br />
            <br />
            I'm also available for discussion on{" "}
            <a href="https://twitter.com/abelmbula">Twitter</a>
          </div> */}
          {/* 
          <footer>
            <PostBio />
          </footer> */}
          {/* <hr />
          <div className="newsletter">
            <h4>
              Like the article? Subscribe to get notified whenever a new article
              gets published!
            </h4>
            <Newsletter />
          </div> */}
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
        {/* <footer>
          <Footer />
        </footer> */}
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
        cover {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
` // is there something like fixed(maxWidth)?
