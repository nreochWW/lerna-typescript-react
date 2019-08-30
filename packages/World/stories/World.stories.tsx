import * as React from "react";
import { storiesOf } from "@storybook/react";
import World from "../src/index";

storiesOf("World", module).add("World", () => (
  <World compiler="TypeScript" framework="React" />
));
