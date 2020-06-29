import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link to={`blog` + post.fields.slug} className="row" style={{
      display: 'flex',
      justifyContent: "space-between"
  }}>
    <div className="cell">
      <time>{post.frontmatter.date}</time>
    </div>
    <div className="cell">{post.frontmatter.title}</div>
  </Link>
)

export default PostLink
