const timepermonth = 2
const questions = {
	//INTRO
	//LOS GEHTS
	// RECHTSSTAATSMECHANISMUS
	//POLONISIERUNG
	//ENTLASSUNG
	//Renationalisierung - Szenario
	//UMGANG MIT KRITIK
	//kesma
	//WERBESTEUER
	//OPENEND
}

let currentQuestion = "willkommen"

let previousQuestions = [],
	previousPopups = []
showQuestion(currentQuestion)

let barometerKritisch

initHeader()
setHeader()

function initHeader() {
	barometerKritisch = $("#barometerKritisch").barometer()
}

function setHeader() {
	document.getElementById(
		"headerText0"
	).innerHTML = `Kritische Journalist*innen: ${gameVariables.kritischeJournalisten}`
	barometerKritisch.rotate(map(300, 1400, 225, -45, gameVariables.kritischeJournalisten))

	document.getElementById("headerText1").innerHTML = `Zeit: ${Math.floor(
		gameVariables.time / timepermonth
	)} ${Math.floor(gameVariables.time / timepermonth) == 1 ? "Monat" : "Monate"} vergangen`
	document.getElementById("header1progress").style.width = `${map(
		0,
		12 * timepermonth,
		0,
		100,
		gameVariables.time
	)}%`
	if (gameVariables.time >= 9 * timepermonth)
		document.getElementById("header1progress").style["background-color"] = "orange"
	if (gameVariables.time >= 10.5 * timepermonth)
		document.getElementById("header1progress").style["background-color"] = "red"

	document.getElementById(
		"headerText3"
	).innerHTML = `Qualität der Beziehungen zur Adrejanischen Union`
	let posP = Math.max(0, gameVariables.aussenbeziehungen)
	posP = Math.min(30, posP)
	posP = map(0, 30, 0, 100, posP)
	document.getElementById("header2bgP").style["grid-template-columns"] = `${posP}% ${100 - posP}%`
	let posN = Math.max(-30, gameVariables.aussenbeziehungen)
	posN = Math.min(0, posN)
	posN = map(0, -30, 0, 100, posN)
	document.getElementById("header2bgN").style["grid-template-columns"] = `${100 - posN}% ${posN}%`

	if (currentQuestion == "vorstellung") {
		//console.log('x')
		$(".header>*").css("opacity", "1")
	}
}

function answerClick(answerNo) {
	const chosenAnswer = questions[currentQuestion].answers[answerNo]

	//variablen anpassen
	if (chosenAnswer.variables)
		for (let variable of chosenAnswer.variables) {
			if (variable.amount) gameVariables[variable.text] += variable.amount
			else gameVariables[variable.text] = variable.value
		}
	gameVariables.time = Math.min(gameVariables.time, timepermonth * 12)
	//Variablen ausgeben
	console.log(
		`Zeit: ${gameVariables.time}, falsch: ${gameVariables.falsch}, anerkennung: ${gameVariables.anerkennung}, aussenbeziehungen: ${gameVariables.aussenbeziehungen}, staatsnaehe: ${gameVariables.staatsnaehe}, kapitelBeginn: ${gameVariables.kapitelBeginn}, gutmensch: ${gameVariables.gutmensch}, benennungAufkaufen: ${gameVariables.benennungAufkaufen}, kritischeJournalisten: ${gameVariables.kritischeJournalisten}, sanktionsschwelle: ${gameVariables.sanktionsschwelle}`
	)

	setHeader()

	//neue Frage
	previousQuestions[previousQuestions.length] = currentQuestion
	currentQuestion =
		overWriteGoto ||
		chosenAnswer.goto ||
		(checkConditions(questions.klage) ? "klage" : "") ||
		(checkConditions(questions.klage2) ? "klage2" : "") ||
		(checkConditions(questions.sanktionen2) ? "sanktionen2" : "") ||
		(checkConditions(questions.sanktionen3) ? "sanktionen3" : "") ||
		(gameVariables.time >= 11 * timepermonth ? "ergebnis" : "") ||
		getNewQuestion() ||
		(checkConditions(questions.vorErgebnis0) ? "vorErgebnis0" : "") ||
		(checkConditions(questions.vorErgebnis1) ? "vorErgebnis1" : "") ||
		(checkConditions(questions.vorErgebnis2) ? "vorErgebnis2" : "") ||
		"ergebnis"
	overWriteGoto = ""
	console.log(currentQuestion)

	//Badges und Alarme
	popupRoutine()

	showQuestion(currentQuestion)
}

//neue Frage finden
function getNewQuestion() {
	let availableQuestions = Object.keys(questions)
		.filter(el => previousQuestions.indexOf(el) === -1)
		// gefiltert nach nicht vorgekommenen
		.filter(el => checkConditions(questions[el]))
	//gefiltert auch nach Conditions
	console.log(availableQuestions)
	const availableQuestion = availableQuestions[zufallszahl(0, availableQuestions.length - 1)]
	console.log(availableQuestion)
	if (!availableQuestions) {
		availableQuestion = "ergebnis"
		gameVariables.time = timepermonth * 12
		setHeader()
		console.error("keine Fragen verfügbar, also kommt jetzt das Endergebnis!")
	}
	//eine zufällige frage
	return availableQuestion
}

function calcResult() {
	let result = 50
	result += map(600, 1400, 30, -40, gameVariables.kritischeJournalisten)
	//console.log(result, 'Nach Journalisten')
	result += map(10, -25, 30, -20, gameVariables.aussenbeziehungen)
	//console.log(result, 'Nach Außen')
	result += map(30, -20, 8, -20, gameVariables.anerkennung)
	//console.log(result, 'Nach Anerkennung')
	result += map(25, 0, 15, -10, gameVariables.staatsnaehe)
	//console.log(result, 'Nach Staatsnähe')
	result += map(0, 1, -3, 3, Math.random())
	//console.log(result, 'Nach Zufall')
	result += gameVariables.ergebnisOffset
	//console.log(result, 'Nach Offset')
	return (
		Math.round(
			Math.min(Math.max(zufallszahl(204, 244) / 10, result), zufallszahl(704, 761) / 10) * 10
		) /
			10 +
		"%"
	).replace(".", ",")
}

function showInfo() {
	showPopup({ message: questions[currentQuestion].info, button: "OK" })
}

function zufallszahl(min, max) {
	return Math.floor(map(0, 1, min, max + 1, Math.random()))
}

function showQuestion(name) {
	//console.log(questions, questions[name], questions[name].question)
	document.getElementById("frage").innerHTML = questions[name].question
		.replaceAll("$benennungAufkaufen", gameVariables.benennungAufkaufen)
		.replaceAll("$kritischeJournalisten", gameVariables.kritischeJournalisten)
		.replaceAll("$wahlergebnis", calcResult())
		.replaceAll("$sanktionsschwelle", gameVariables.sanktionsschwelle)
		.replaceAll(
			"$ergebnisErgänzung",
			gameVariables.kritischeJournalisten > 1199
				? "So richtig erfolgreich warst du in diesem Punkt ja nicht wirklich."
				: gameVariables.kritischeJournalisten < 1200 && gameVariables.kritischeJournalisten > 800
				? "Naja, ein paar Weichen hast du auf jeden Fall gestellt."
				: "Gute Arbeit!"
		)
	if (questions[name].info) document.getElementById("info").style.display = "block"
	else document.getElementById("info").style.display = "none"

	for (let i = 0; i < 3; i++) {
		if (questions[name].answers[i]) {
			document.getElementById(`antwort${i}`).style = "display: inline-block"
			document.getElementById(`antwort${i}`).innerHTML = questions[name].answers[i].text
		} else {
			document.getElementById(`antwort${i}`).style = "display:none"
		}
	}
}

function popupRoutine() {
	let availablePopups = Object.keys(popups)
		//bis hier alle popup-keys
		.filter(el => previousPopups.indexOf(el) === -1)
		//hier nur noch nicht vorgekommene keys
		.filter(el => checkConditions(popups[el]))
	//hier nur noch nicht vorgekommene und gecheckte keys
	//console.log(availablePopups)
	if (availablePopups[0]) {
		showPopup(popups[availablePopups[0]])
		previousPopups[previousPopups.length] = availablePopups[0]
	}
}

function checkConditions(obj) {
	if (!obj.conditions) return false
	//prüfen ob conditions zutreffen
	let allConditions = true
	for (let condition of obj.conditions) {
		allConditions = allConditions && checkSingleCondition(condition)
	}
	return allConditions
	//leeres Array: Frage immer verfügbar, kein Array: frage nie verfügbar außer über goto
}
function checkSingleCondition(condition) {
	switch (condition.type) {
		case "==":
			return gameVariables[condition.variableName] == condition.value
		case "<":
			return gameVariables[condition.variableName] < condition.value
		case ">":
			return gameVariables[condition.variableName] > condition.value
		case "<=":
			return gameVariables[condition.variableName] <= condition.value
		case ">=":
			return gameVariables[condition.variableName] >= condition.value
		default:
			console.error("error in conditions", condition)
			return false
	}
}

function showPopup(popup) {
	//console.log('showing popup', popup)
	document.getElementById("popupbg").style = "display:block;"
	const headline = document.getElementById("popupHeadline")
	const message = document.getElementById("popupMessage")
	const button = document.getElementById("popupButton")
	if (popup.headline) {
		headline.style = "display: block;"
		headline.innerHTML = popup.headline
	} else {
		headline.style = "display: none"
	}
	if (popup.message) {
		message.style = "display: block;"
		message.innerHTML = popup.message.replaceAll("$wahlergebnis", calcResult())
	} else {
		message.style = "display: none"
	}
	button.innerHTML = popup.button || "Weiter"
}
