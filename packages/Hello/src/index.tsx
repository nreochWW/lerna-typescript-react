import * as React from "react";
import World from "world-typescript-react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <div style={{ border: "1px solid blue", padding: "10px" }}>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
    <World compiler="TypeScript" framework="React" />
  </div>
);

export default Hello;
