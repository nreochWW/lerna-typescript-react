"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const World = (props) => (React.createElement("h1", null,
    "World from ",
    props.compiler,
    " and ",
    props.framework,
    "!"));
exports.default = World;
