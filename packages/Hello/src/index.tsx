import * as React from "react";
import styled from "styled-components";
import World from "world-typescript-react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const Hello = (props: HelloProps) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
    <World compiler="TypeScript" framework="React" />
    <p>This is a change</p>
  </Wrapper>
);

export default Hello;
