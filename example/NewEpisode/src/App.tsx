import React from "react";
import { Store } from "./store";

export default function App(): JSX.Element {
  const store = React.useContext(Store);
  return (
    <React.Fragment>
      {console.log(store)}
      <h1>Fire and Ice</h1>
      <p>Pick your favorite Episode!!</p>
    </React.Fragment>
  );
}
