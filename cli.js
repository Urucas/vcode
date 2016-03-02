#!/usr/bin/env node
var child = require("child_process")
var path = require('path')
if(process.platform == "darwin") { 
  var spawn = child.spawnSync("open", 
    ["-n", "-b", "com.microsoft.VSCode", "--args", process.cwd()
  ])
}else if(process.platform == "linux") {
  var open = path.join(__dirname, "xdg-open")
  var spawn = child.spawnSync(open,  
    ["-n", "-b", "com.microsoft.VSCode", "--args", process.cwd()
  ])
}else if(/win/.test(process.platform)) {
  var spawn = child.spawnSync("cmd",
    ["/c", "start", "-n", "-b", "com.microsoft.VSCode", "--args", process.cwd()
  ])
}
