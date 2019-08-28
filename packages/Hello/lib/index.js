"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Hello = (props) => (React.createElement("h1", null,
    "Hello World from ",
    props.compiler,
    " and ",
    props.framework,
    "!"));
exports.default = Hello;
