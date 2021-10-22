const fs = require("fs/promises")
fs.readFile("./stats.json").then(buf => {
	const obj = JSON.parse(buf)

	let avgresult = 0
	for (const o of obj) {
		avgresult += o.e.substring(0, o.e.length - 1).replace(",", ".") - 0
	}
	console.log(obj)
	avgresult /= obj.length
	console.log(avgresult)
})
