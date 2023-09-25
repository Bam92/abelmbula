import React from "react"

import { container } from "./container.module.css"

export default ({ children }) => (
  <div
    className={container}
  >
    {children}
  </div>
)
