import React from 'react';
import {Link} from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navlist">
        <h1>Ludwig Oleby</h1>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cv">Cv</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar


