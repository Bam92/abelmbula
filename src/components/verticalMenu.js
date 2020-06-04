import React from 'react'
import { Link } from 'gatsby'

import './verticalMenu.css'

export default () => {
    
    return (
        <nav 
            className="side_nav" 
            style={{
                position: `-webkit-sticky`,
                position: `sticky`,
                bottom: `42vh`,
                right: `-20vw`,
                width: `150px`,
                zIndex: `100`

            }}
            // onScroll={() => handleScroll}
        >
            <ul style={{
                listStyle: `none`,
            }}>
                
                <li><Link to="/#intro">About </Link> 
                </li>
                <li><Link to="/#work">Work</Link></li>
                <li><Link to="/#projects">Projects</Link></li>

            </ul>
        </nav>
    )
}