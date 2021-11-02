const fs = require("fs/promises")
fs.readFile("./stats.json").then(buf => {
	const obj = JSON.parse(buf)

	let avgresult = 0
	let results = [];
	for (let i = 0; i <= 1000; i++){
		results[i] = 0
	}
	
	let avgerrors = 0

	let avgDuration = 0

	let qCounter = {}

	for (const o of obj) {
		const thisResult = o.e.substring(0, o.e.length - 1).replace(",", ".") - 0
		results[parseInt(thisResult * 10)]++;
		avgresult += thisResult

		const lines = o.h.split("\n")
		const questionLines = lines.filter(el => el.startsWith('Zeit: '))
		const lastTimeLine = questionLines[questionLines.length - 2]
		const time = lastTimeLine.split(';')[0].substring(6)
		avgDuration += time - 0

		for (line in lines){
			if (line.startsWith('Error'))
				avgerrors++;
			else if (line.startsWith('Zeit: ')){
				let l = line.split(';')[1].substring(1)
				l = l.substring(0, l.length - 1)
				qCounter[l] = qCounter[l] + 1 | 1
			}
		}
	}
	console.log(obj)
	avgresult /= obj.length
	avgDuration /= obj.length
	avgerrors /= obj.length
	console.log(avgresult)
	console.log(avgDuration)
	console.log(avgerrors)
})
