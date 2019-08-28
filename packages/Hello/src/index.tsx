import * as React from "react";
import World from "world-typescript-react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <h1>
    Hello World from {props.compiler} and {props.framework}!
    <World compiler="TypeScript" framework="React" />
  </h1>
);

export default Hello;
