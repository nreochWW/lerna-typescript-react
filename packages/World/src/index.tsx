import * as React from "react";
import styled from "styled-components";

export interface WorldProps {
  compiler: string;
  framework: string;
}

const Wrapper = styled.div`
  border: 1px solid red;
  margin-top: 10px;
`;

const World = (props: WorldProps) => (
  <Wrapper>
    <h1>
      Hello World from {props.compiler} and {props.framework}!
    </h1>
  </Wrapper>
);

export default World;
