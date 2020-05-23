import React from "react"

import containerStyles from "./container.module.css"

export default ({ children }) => (
    <div 
        className={containerStyles.container}
        style={{
            // border: `2px solid red`,
            
        }}
    >
        {children}
    </div>
)

