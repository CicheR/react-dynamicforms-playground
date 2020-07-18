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
        <li>
          <Link exact activeClassName="current" to="/resetPassword">
            Reset password
          </Link>
        </li>
      </ul>
    </nav>
  );
}
