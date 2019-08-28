import * as React from "react";
import { shallow } from "enzyme";
import World from "../src/index";

describe("World package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<World compiler="TypeScript" framework="React" />);
    expect(wrapper).toMatchSnapshot();
  });
});
