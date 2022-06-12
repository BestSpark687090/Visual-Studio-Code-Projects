const fs = require('fs')
fs.appendFile("./writehere/compiledOl.js", `${process.argv[2]}\n`)