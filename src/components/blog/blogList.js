import React from "react";

import { posts } from "./blogList.module.css"

const BlogList = ({ children }) => 
    <div className={posts}> {children}</div>

export default BlogList