import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link
    to={`/blog` + post.fields.slug}
    className="row"
    style={{
      display: "flex",
      justifyContent: "space-between",
      border: "2px solid #fff",
      borderLeft: "8px solid #1ca086",
      marginBottom: ".7em",
      padding: ".5em 30px .7em",
      background: "#fff",
      borderRadius: "4px",
      boxShadow: "2px 2px 4px #000000",
    }}
  >
    <div className="cell">{post.frontmatter.title}</div>
    <small
      className="cell"
      style={{
        color: "#868e96",
      }}
    >
      <time>{post.frontmatter.date}</time>
    </small>
  </Link>
)

export default PostLink
