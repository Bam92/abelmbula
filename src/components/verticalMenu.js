import React from 'react'
import { Link } from 'gatsby'

import './verticalMenu.css'

export default () => {
    
    return (
        <nav className="side_nav" style={{
               
            position: `-webkit-sticky`,
            position: `sticky`,
            bottom: `42vh`,
            right: `-20vw`,
            // textAlign: `right`,
            // height: `20vh`,
            width: `150px`,
            // border: `2px solid red`,
                   // display: `none`,
            // display: `block`,
            zIndex: `100`

        }}>
            <ul style={{
                listStyle: `none`,
                // border: `2px solid red`

            }}>
                
                <li><Link to="/#intro">About </Link> 
                </li>
                <li><Link to="/#work">Work</Link></li>
                <li><Link to="/#projects">Projects</Link></li>

            </ul>
        </nav>
    )
}