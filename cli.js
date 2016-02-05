#!/usr/bin/env node
var child = require("child_process")
var spawn = child.spawnSync("open", 
    ["-n", "-b", "com.microsoft.VSCode", "--args", process.cwd()
])
