import React from "react"

import { useWorkData } from "../hooks/use-work"

export default () => {
  const data = useWorkData()

  return (
    <>
      {data.map((item) => {
        return (
          <>
            <h2>{item.node.company} </h2>
            <h3>{item.node.position} </h3>
            <p>{item.node.description} </p>
          </>
        )
      })}
    </>
  )
}
