import React from "react";

function Link({ to, children }) {
  return (
    <a href={to} target="_blank" rel="noopener noopener">
      {children}
    </a>
  );
}

export default function Header() {
  return (
    <>
      <h1>React DynamicsForms PlayGround</h1>
      <p>
        Implementation based on “
        <Link to="https://medium.com/craft-academy/create-a-dynamic-form-in-react-using-hooks-f64cfabaeaaa">
          Create a dynamic form in React using Hooks
        </Link>
        ” <Link to="https://medium.com/@gerg.kallai">Medium</Link> article by{" "}
        <Link to="https://medium.com/@gerg.kallai">Greg Kallai</Link>
      </p>
      <p>
        Styles from{" "}
        <Link to="https://codepen.io/nikstech/pen/xmMxpr">
          Jumping input text
        </Link>
      </p>
      <hr />
    </>
  );
}
