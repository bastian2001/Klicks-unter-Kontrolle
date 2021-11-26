const fs = require("fs/promises")

const chapters = {
	//Kapitel - Eigenschaften und Fragen (Inhalte der Fragen (Fragentext, Antworten, evtl. Bedingungen))
	intro: {
		props: {},
		questions: {
			willkommen: {},
			vorstellung: {},

			befoerderung: {},
			information: {},

			wahlen: {},

			au: {},
		},
	},

	losgehts: {
		props: {
			entry: 0,
		},
		questions: {
			rundfunkratverkleinern: {},

			weniger: {},
			bestimmung: {},
			praesident: {},
			bevoelkerung: {},
			gleich: {},
			nachfrage1: {},

			nein1: {},

			nagut: {},
		},
	},

	rechtsstaatsmechanismus: {
		props: {
			entry: 0,
		},
		questions: {
			rsm: {},
			unterschreiben: {},
			klagen: {},
			verbuendete: {},
			klagengefahr: {},
			klagen2: {},
		},
	},

	renationalisierung: {
		props: {
			entry: 0,
			title: "Renationa&shy;lisierung",
			description:
				"Neue Regelung gegen Verstöße von Rechtsstaatlichkeit, z.B. gegen Einschränkungen der Medienfreiheit",
			img: "https://picsum.photos/1000/600",
			conditions: [],
		},
		questions: {
			nuppisierung: {},

			erklaerung1: {},

			geld: {},

			kontrolle: {},

			aufkaufen: {},

			pressefreiheit: {},

			aufkaufen2: {},
			aufkaufen3: {},

			orlen: {},

			buchhandel: {},

			pr: {},

			nachfrage2: {},

			nagut2: {},
		},
	},

	entlassung: {
		props: {
			entry: 0,
			title: "Entlassung",
			description: "Untreue in den Staatsmedien",
			conditions: [
				{
					variableName: "staatsnaehe",
					type: ">=",
					value: 5,
				},
				{
					variableName: "aufgekauft",
					type: "==",
					value: true,
				},
				{
					variableName: "time",
					type: "<=",
					value: 21,
				},
			],
		},
		questions: {
			entlassung: {},

			gleich2: {},
			chefsentlassen: {},
			alleentlassen: {},
		},
	},

	szenarioRenationalisierung: {
		props: {
			entry: 0,
			title: "Szenario Renationalisierung",
			description: "Eine bekannte Moderatorin äußert sich dir gegenüber kritisch",
			conditions: [],
		},
		questions: {
			zensur: {},

			moralisch: {},

			moralisch2: {},

			entlassen: {},
			krank: {},
			nichts: {},
			wahrheit: {},
			drohung: {},
		},
	},

	umgangMitKritik: {
		props: {
			entry: 0,
			title: "Umgang mit Kritik",
			description: "Die Adrejanische Union hat Wind bekommen",
			conditions: [
				{
					variableName: "time",
					type: "<=",
					value: 19,
				},
			],
		},
		questions: {
			obama: {},

			wahrheit2: {},
			verschweigen: {},
			wahrheit2a: {},
			wahrheit2b: {},
			manipulation: {},

			manipulation2: {},

			manipulation21: {},

			manipulation22: {},

			manipulation23: {},

			manipulation2a: {},
		},
	},

	medienstiftung: {
		props: {
			entry: 0,
			title: "Medienstiftung",
			description: "Mehr Geld für Deine Medien",
			conditions: [
				{
					variableName: "entlassungenDone",
					type: "==",
					value: true,
				},
				{
					variableName: "time",
					type: "<=",
					value: 19,
				},
			],
		},
		questions: {
			linie: {},

			agentur: {},
			genial: {},

			kesma: {},

			nichtnurdas: {},

			briefing: {},

			subventionen: {},
		},
	},

	werbesteuer: {
		props: {
			entry: 0,
			title: "Werbesteuer",
			description: "...",
			conditions: [
				{
					variableName: "entlassungenDone",
					type: "==",
					value: true,
				},
				{
					variableName: "time",
					type: "<=",
					value: 20,
				},
			],
		},
		questions: {
			ws: {},
			lizenzB: {},
			lizenz2B: {},

			lizenz3B: {},
			lizenz: {},
			lizenz2: {},

			lizenz3: {},
			abgabeb: {},
			schlechterNameB: {},
			werbepraemieB: {},
			abgabe: {},
			schlechterName: {},
			werbepraemie: {},
		},
	},

	pegasus: {
		props: {
			title: "Digitale Überwachung",
			conditions: [],
			entry: 0,
		},
		questions: {
			start: {},
			wasIstDigitaleUeberwachung: {},
			tippZyklop: {},
			zyklopZuHeiss: {},
			gesetzeAendern: {},
			ausmass: {},
			mittlereLoesung: {},
			entspannt: {},
			drastischeLoesung: {},
		},
	},

	zyklopAufloesung: {
		props: {
			entry: [
				"dauertZuLange",
				"handysLangsam",
				"mittelErfolgreich",
				"entspanntErfolgreich",
				"drastischAlarm",
				"drastischErfolgreich",
			],
		},
		questions: {
			dauertZuLange: {},
			handysLangsam: {},
			mittelErfolgreich: {},
			entspanntErfolgreich: {},
			drastischAlarm: {},
			drastischErfolgreich: {},
		},
	},

	mordUndTotschlag: {
		props: {
			title: "Drastische Maßnahmen",
			conditions: [
				{
					variableName: "kritischeJournalisten",
					type: ">=",
					value: 1030,
				},
			],
			entry: 0,
		},
		questions: {
			einleitung: {},
			bistDuSicher: {},
			radikalereMassnahmen: {},
			nichtsTun: {},
			dannHaltNicht: {},
			vernuenftig: {},
			diskretVerschwunden: {},
			gestuerzt: {},
			stellungnahme: {},
			schweigen: {},
			schwindelanfall: {},
			hellhoerig: {},
			zuNaiv: {},
			mordNudger: {},
			vernuenftigOhne3: {},
		},
	},

	klageErgebnis: {
		props: {},
		questions: {
			klageErfolglos: {},

			klageErfolgreich: {},

			/*
			Die Werbesteuer betrifft natürlich auch die öffentlich-rechtlichen Medien. Wie willst du damit umgehen? (mehr Subventionen, vom Gesetz her ausnehmen, Abgabe dafür erhöhen) Wir brauchen auch noch einen schicken Namen dafür ;) (Medienabgabe, Werbeprämie, Werbegebühr) oder Unter welchem Titel bringen wir das jetzt ins Volk?
		
		*/
		},
	},

	sanktionen: {
		props: {},
		questions: {
			sanktionen14: {},
			sanktionen22: {},
		},
	},
	nachfrage: {
		questions: {
			letzteNachfrage: {},
		},
	},

	ergebnis: {
		props: {
			title: "Ergebnis",
			description: "Ab zum Schluss (diese Nachricht solltest du nicht sehen)",
		},
		questions: {
			vorErgebnis0: {},
			vorErgebnis1: {},
			vorErgebnis2: {},
			ergebnis: {},

			ergebnis2: {},
			einladungInfo: {},
			mordUndTotschlagEnde: {},
			achievementKeinMoerder: {},
		},
	},
}

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
	let eCounter = {}

	let muts = 0

	let sub20 = 0

	for (const chapter of Object.keys(chapters)) {
		for (const question of Object.keys(chapters[chapter].questions))
			qCounter[`${chapter}/${question}`] = 0
	}

	for (const o of obj) {
		const thisResult = o.e.substring(0, o.e.length - 1).replace(",", ".") - 0
		results[parseInt(thisResult * 10)]++
		avgresult += thisResult
		if (o.t < 20) {
			sub20++
		}
		const lines = o.h.split("\n")
		avgDuration += o.t
		for (const line of lines) {
			if (line.startsWith("Error")) {
				avgerrors++
				if (!eCounter[line]) eCounter[line] = 0
				eCounter[line] = eCounter[line] + 1
			} else if (line.startsWith("Zeit: ")) {
				let l = line.split(";")[1].substring(1)
				l = l.substring(0, l.length)
				qCounter[l] = qCounter[l] + 1
			} else if (line.startsWith("Springe zu Kapitel")) {
				if (
					line.indexOf("losgehts") === -1 &&
					line.indexOf("rechtsstaatsmechanismus") === -1 &&
					line.indexOf("klageErgebnis") === -1 &&
					line.indexOf("sanktionen") === -1 &&
					line.indexOf("nachfrage") === -1 &&
					line.indexOf("zyklopAufloesung") === -1
				)
					muts++
			}
		}
	}
	// console.log(obj)
	avgresult /= obj.length
	avgDuration /= obj.length
	// avgerrors /= obj.length
	console.log(qCounter)
	console.log(eCounter)
	console.log("Die nuller:")
	for (const name of Object.keys(qCounter)) if (qCounter[name] == 0) console.log("   ", name)
	console.log("Von", obj.length, "Spielen:")
	console.log("Zeit unter 20", sub20)
	console.log("Durchschnittsergebnis", avgresult)
	console.log("Durchschnittszeit ", avgDuration)
	console.log("Durchschnittlich aktiv gestartete Kapitel", muts / obj.length)
})
