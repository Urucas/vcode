#!/usr/bin/env node
var child = require("child_process")
var args = process.argv.slice(2)
var file = args[0] || ""
var spawn = child.spawnSync("open", ["-n", "-b", "com.microsoft.VSCode", "--args", file])
