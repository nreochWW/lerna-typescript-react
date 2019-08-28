import * as React from "react";
import { shallow } from "enzyme";
import Hello from "../src/index";

describe("Hello package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Hello compiler="TypeScript" framework="React" />);
    expect(wrapper).toMatchSnapshot();
  });
});
