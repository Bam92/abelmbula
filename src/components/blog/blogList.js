import React from "react";

import "./blogList.style.css"

const BlogList = ({ children }) => {
    return <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
    }}>
        {children}
    </div>
}

export default BlogList