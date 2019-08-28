"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const world_typescript_react_1 = require("world-typescript-react");
const Hello = (props) => (React.createElement("div", { style: { border: "1px solid blue", padding: "10px" } },
    React.createElement("h1", null,
        "Hello World from ",
        props.compiler,
        " and ",
        props.framework,
        "!"),
    React.createElement(world_typescript_react_1.default, { compiler: "TypeScript", framework: "React" })));
exports.default = Hello;
