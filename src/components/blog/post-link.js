import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link
    to={`/blog` + post.fields.slug}
    className="row"
    style={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid #fff",
      borderLeft: "7px solid #1ca086",
      marginBottom: ".7em",
      padding: ".5em",
      background: "#fff",
      borderRadius: "4px",
      boxShadow:
        "rgba(60, 64, 67, .3) 0 1px 2px 0, rgba(60, 64, 67, .15) 0 1px 3px 1px",
      minHeight: "6em",
    }}
  >
    <div className="cell" >
      {post.frontmatter.title}
    </div>
    <div
      className="cell"
      style={{
        color: "#a9adc1"
      }}
    >
      <time>{post.frontmatter.date}</time>
      <p><small> {post.excerpt}</small></p>
    </div>
  </Link>
)

export default PostLink
