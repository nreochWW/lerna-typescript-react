"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const World = (props) => (React.createElement("div", { style: { border: "1px solid blue" } },
    React.createElement("h1", null,
        "Hello World from ",
        props.compiler,
        " and ",
        props.framework,
        "!")));
exports.default = World;
