import * as React from "react";
import * as ReactDOM from "react-dom";

import World from "../src/index";

ReactDOM.render(
  <World compiler="TypeScript" framework="React" />,
  document.getElementById("world")
);
