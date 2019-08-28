import * as React from "react";

export interface WorldProps {
  compiler: string;
  framework: string;
}

const World = (props: WorldProps) => (
  <h1>
    Hello World from {props.compiler} and {props.framework}!
  </h1>
);

export default World;
