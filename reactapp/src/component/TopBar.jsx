import React from 'react'
import {Link} from 'react-router-dom'

function TopBar() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <Link to="/"><li>HomePage</li></Link>
        <Link to="/article"><li>Article</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default TopBar
