//Same principle as import * from "path" but different syntax
const exporter = require("./ReusableModuleNode");

exporter.exporter();

console.log(exporter.exportMe);