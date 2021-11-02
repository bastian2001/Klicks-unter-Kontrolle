const fs = require("fs/promises")
fs.readFile("./stats.json").then(buf => {
	const obj = JSON.parse(buf)

	let avgresult = 0
	let results = []
	for (let i = 0; i <= 1000; i++) {
		results[i] = 0
	}

	let avgerrors = 0

	let avgDuration = 0

	let qCounter = {}

	for (const o of obj) {
		const thisResult = o.e.substring(0, o.e.length - 1).replace(",", ".") - 0
		results[parseInt(thisResult * 10)]++
		avgresult += thisResult

		const lines = o.h.split("\n")
		avgDuration += o.t

		for (let line in lines) {
			if (line.startsWith("Error")) avgerrors++
			else if (line.startsWith("Zeit: ")) {
				let l = line.split(";")[1].substring(1)
				l = l.substring(0, l.length - 1)
				qCounter[l] = (qCounter[l] + 1) | 1
			}
		}
	}
	console.log(obj)
	avgresult /= obj.length
	avgDuration /= obj.length
	avgerrors /= obj.length
	console.log("Durchschnittsergebnis", avgresult)
	console.log("Durchschnittszeit ", avgDuration)
	console.log(avgerrors)
})
