import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link exact activeClassName="current" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link exact activeClassName="current" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
