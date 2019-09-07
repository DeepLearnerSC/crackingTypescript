import React from "react";
import { Link } from "@reach/router";

import { Store } from "./store";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Fire and Ice</h1>
          <p>Pick your favorite Episode!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/fav">favorite(s):{state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
