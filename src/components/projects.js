import React from "react"

import { useProjectsData } from "../hooks/use-projects"
import "./projects.css"

export default () => {
  const data = useProjectsData()

  return (
    <>
      {data.map(item => {
        return (
          <>
            <div
              className="wraper"
              style={{
                display: `flex`,
              }}
            >
              {/* <Link to={item.node.link}> */}
              <img
                src={item.node.image.childImageSharp.fluid.src}
                alt="project image"
                style={{
                  width: `22em`,
                  height: `14em`,
                  borderRadius: `10px`,
                  marginRight: `2em`,
                }}
              />
              {/* </Link> */}
              <div>
                <h3>{item.node.title} </h3>
                <p>{item.node.description} </p>
                <p
                  style={{
                    marginTop: `-1em`,
                  }}
                >
                  <a href={`./${item.node.link}`}>Visit the project</a>
                </p>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
