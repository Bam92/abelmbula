import React from "react"
import { graphql, StaticQuery } from "gatsby"

import PostLink from "./post-link"
import BlogList from "./blogList"

const LatestPosts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map((edge) => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return <BlogList> { posts } </BlogList>
}

export default function MyLatestPosts(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
            limit: 6
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
      `}
      render={(data) => <LatestPosts data={data} />}
    />
  )
}
