import React from 'react'
import { Link } from 'gatsby'

export default () => {
    return (
        <>
            <ul style={{
                display: `flex`
            }}>
                <li><Link to="/">Abel L. Mbula</Link> 
                    <span className="separator">/</span>
                </li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </>
    )
}