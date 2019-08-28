import * as React from "react";

export interface WorldProps {
  compiler: string;
  framework: string;
}

const World = (props: WorldProps) => (
  <div style={{ border: "1px solid blue" }}>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
  </div>
);

export default World;
