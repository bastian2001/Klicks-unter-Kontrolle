let test = 0

const timepermonth = 2,
	chapterSelectionCount = 3

const chapters = {
	//Kapitel - Eigenschaften und Fragen (Inhalte der Fragen (Fragentext, Antworten, evtl. Bedingungen))
	intro: {
		props: {},
		questions: {
			willkommen: {
				text: "Hey, wie geht's?",
				answers: [
					{
						text: "ganz gut",
						goto: "vorstellung",
					},
					{
						text: "muss ja, ne?",
						goto: "vorstellung",
					},
				],
			},
			vorstellung: {
				text: "Schön, dich kennenzulernen. Ich bin deine persönliche Assistenz.",
				answers: [
					{
						text: "Wobei?",
						goto: "befoerderung",
					},
				],
			},

			befoerderung: {
				text: "Du wurdest befördert. Dein Chef Rokossowski hat dir die Aufgabe übertragen, die Medienpolitik deines Landes Nuppland zu organisieren. Du bist Vorsitzende*r in einem Ausschuss, der versucht, alle Entscheidungen, die die Medien betreffen, zugunsten eurer Partei, der WhR (Wir haben Recht) zu treffen. Links siehst du die Anzahl der kritischen Journalist*innen, die regelmäßig publizieren, im Land, und die Zahl muss runtergehen, und das geht am Leichtesten, indem man ihnen das Leben schwer macht. Viele geben dann auch von ganz allein auf. Verstanden?",
				info: "Auf diesem Fragezeichen findest du über das Spiel verteilt immer wieder Anmerkungen zu Ländern, Regierungen und Medienunternehmen, die ähnliche Maßnahmen getroffen haben. Außerdem kannst du herausfinden, welche Auswirkungen das hatte.",
				answers: [
					{
						text: "Okay...",
						goto: "information",
					},
				],
			},
			information: {
				text: 'Kurzer Spoiler: Das Ganze hier hat natürlich einen Zweck - Du sollst etwas zu Pressefreiheit lernen. Viele der hier dargestellten Situationen basieren auf Geschehnissen in Osteuropa in den letzten Jahren. Mehr zu diesen "Vorbildern" findest du unten rechts auf dem Fragezeichen.',
				info: "Auf diesem Fragezeichen findest du über das Spiel verteilt immer wieder Anmerkungen zu Ländern, Regierungen und Medienunternehmen, die ähnliche Maßnahmen getroffen haben. Außerdem kannst du herausfinden, welche Auswirkungen das hatte.",
				answers: [
					{
						text: "Hab ich verstanden.",
						goto: "wahlen",
					},
				],
			},

			wahlen: {
				text: "Naja, und wenn die Journalist*innen nicht mehr schreiben können, weil es keine Medien mehr gibt, in denen sie unterkommen, dann geht die Zahl natürlich auch runter. Ein Journalist ohne Job ist kein Journalist, haha... In einem Jahr stehen wieder Wahlen an. Bis dahin musst du alles dafür tun, dass ihr gute Karten habt und in den Medien so wenig Negatives wie möglich über euch gebracht wird. An der Seite siehst du, wie viel Zeit du noch bis zur Wahl hast.",
				answers: [
					{
						text: "Verstanden.",
						goto: "au",
					},
				],
			},

			au: {
				text: "Nuppland ist Mitglied der Adrejanischen Union, eines Staatenbunds. Andere Staaten können also begrenzt in eure Politik eingreifen und Sanktionen verhängen. Ins Ausland sollte daher nicht zu viel dringen, was euch Probleme bereiten könnte.",
				answers: [
					{
						text: "Kapiert.",
						newChapter: "losgehts",
					},
				],
			},
		},
	},

	losgehts: {
		props: {
			entry: 0,
		},
		questions: {
			rundfunkratverkleinern: {
				text: "Bisher gibt es einen öffentlich-rechtlichen Rundfunk in deinem Land. Dieser finanziert sich über eine Abgabe von allen, keine Steuer, und wird von einem Ausschuss, dem Rundfunkrat, beobachtet. Insgesamt neun Menschen sitzen im Rat, von denen drei von der Präsidentin, vier von der ersten und zwei von der zweiten Parlamentskammer bestimmt werden. Meinst du, da kann man noch was machen?",
				info: "In Deutschland gibt es einen öffentlich-rechtlichen Rundfunk mit insgesamt 9 Landesrundfunkanstalten (LRAs), die in der ARD zusammengeschlossen sind. Außerdem gibt es das ZDF und weitere Anstalten wie die Deutsche Welle. Jede Anstalt hat ihren eigenen Rundfunkrat, in dem aber meist zwischen 30 und 60 Personen sitzen. Die hier beschriebene Lage orientiert sich an der Situation in Polen vor 2016.",
				answers: [
					{
						text: "Ich denke, es sollten insgesamt weniger Leute im Rat sitzen. Die kann man besser kontrollieren.",
						goto: "weniger",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 4,
							},
							{
								amount: -3,
								text: "aussenbeziehungen",
							},
							{
								text: "kritischeJournalisten",
								amount: -32,
							},
							{
								text: "staatsnaehe",
								amount: 3,
							},
						],
					},
					{
						text: "Nichts, die Zusammensetzung ist doch gut so.",
						goto: "nachfrage1",
						variables: [
							{
								text: "time",
								amount: 3,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "kritischeJournalisten",
								amount: 54,
							},
						],
					},
				],
			},

			weniger: {
				text: "Richtig so! So wird es für dich viel leichter, mitzubekommen, was so in weiten Teilen der Medien läuft. Ein bisschen kann dein Ansehen nach Außen natürlich darunter leiden, aber man macht sich ja immer irgendwie Feinde.",
				info: 'In Polen hat die Regierungspartei PiS 2016 das "Kleine Mediengesetz" erlassen, in dem der Rundfunk umstrukturiert wurde. Auch der Rundfunkrat KRRiT wurde verkleinert, von ursprünglich neun auf fünf Mitglieder. <a href=https://www.ard.de/home/Rundfunkrat/456538/index.html>Im Vergleich zu den Rundfunkräten in Deutschland ist das sehr wenig.</a>',
				answers: [
					{
						text: "Ich hab Blut geleckt.",
						goto: "bestimmung",
					},
					{
						text: "Aber ist das nicht moralisch fragwürdig?",
						goto: "nein1",
						variables: [
							{
								text: "gutmensch",
								amount: 1,
							},
						],
					},
				],
			},
			bestimmung: {
				text: "Willst du vielleicht sogar noch ändern, wie die Ratsmitglieder bestimmt werden?",
				answers: [
					{
						text: "Alle der Präsident, das hätte doch was.",
						goto: "praesident",
						variables: [
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: 87,
							},
							{
								text: "staatsnaehe",
								amount: 3,
							},
						],
					},
					{
						text: "Ich denke, die Bevölkerung sollte da mehr Mitspracherecht bekommen. Verschiedene gesellschaftliche Gruppen sollten jeweils Mitglieder für den Rundfunkrat entsenden.",
						goto: "bevoelkerung",
						variables: [
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: 3,
							},
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -56,
							},
						],
					},
					{
						text: "Ich denke, so wie es ist, ist es ganz gut.",
						goto: "gleich",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			praesident: {
				text: "Ich glaube, damit hast du es etwas übertrieben, und dein Ansehen im Ausland hat ein wenig gelitten. Eine Katastrophe war es nicht, aber sei nächstes Mal etwas vorsichtiger.",
				answers: [
					{
						text: "Okay, versuche ich.",
						newChapter: "rechtsstaatsmechanismus",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			bevoelkerung: {
				text: "Du bist doch kein Diplomat, dein Job ist es, ein gutes Wahlergebnis herbeizuführen. Glaubst du das so wirklich zu erreichen? Ich denke eher nicht. Naja, machen wir weiter.",

				answers: [
					{
						text: "Mmmhhh, okay.",
						newChapter: "rechtsstaatsmechanismus",
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},
			gleich: {
				text: "Eigentlich ist es tatsächlich ganz gut so: Ein Teil der fünf Mitglieder wird je von der ersten und der zweiten Kammer sowie vom Präsidenten gewählt. Sagen wir, im Verhältnis 2:1:2? So kann der Präsident immer noch gut eine Mehrheit herbeiführen, wenn er nur eine Person überzeugt, die er nicht bestimmt hat. Im Ausland wird aber weniger ankommen.",
				answers: [
					{
						text: "Let's go!",
						newChapter: "rechtsstaatsmechanismus",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			nachfrage1: {
				text: "Bist du dir sicher? Je mehr Menschen im Rundfunkrat sitzen, desto schwerer fällt es, dort Einfluss zu nehmen.",
				info: 'In Polen hat die Regierungspartei PiS 2016 das "Kleine Mediengesetz" erlassen, in dem der Rundfunk umstrukturiert wurde. Auch der Rundfunkrat KRRiT wurde verkleinert.',
				answers: [
					{
						text: "Okay, dann reiche ich den Vorschlag halt ein...",
						goto: "weniger",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
							{
								text: "kritischeJournalisten",
								amount: 109,
							},
						],
					},
					{
						text: "Nein, das möchte ich nicht.",
						goto: "nagut",
						variables: [
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "gutmensch",
								amount: 2,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},

			nein1: {
				text: "Kommt auf deine Moral an. Ich denke eher, dass du so deiner Partei zu einem Sieg verhelfen kannst. In der Politik müssen eben manchmal scharfe Geschütze aufgefahren werden.",
				answers: [
					{
						text: "Wenn du meinst... Dann lass uns weiter Journalisten jagen.",
						newChapter: "rechtsstaatsmechanismus",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Das ist nicht mein Stil. Ich glaub, ich bin nicht geschaffen dafür.",
						goto: "nachfragen/letzteNachfrage",
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},

			nagut: {
				text: "Na gut. Wenn du nicht willst, kann man dich nicht dazu zwingen, schließlich bist du die wichtigste Person, was die nuppischen Medien angeht.",
				answers: [
					{
						text: "Da hatten wir keinen guten Start miteinander. Aber lass' uns was anderes probieren.",
						newChapter: "rechtsstaatsmechanismus",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Ich glaub, ich will komplett zurücktreten.",
						goto: "nachfragen/letzteNachfrage",
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},
		},
	},

	rechtsstaatsmechanismus: {
		props: {
			entry: 0,
		},
		questions: {
			rsm: {
				text: 'Moooooment, nicht so schnell. Uns kommt da gerade etwas dazwischen: Die Adrejanische Union plant eine neue Regelung - einen sogenannten "Rechtsstaats&shy;mechanismus". Das bedeutet, dass bei Verstößen gegen die Rechtsstaatlichkeit, zum Beispiel bei Einschränkungen der Medienfreiheit, besondere Sanktionen zu erwarten sind. Insbesondere natürlich die Einbehaltung von AU-Mitteln. Auch zuvor gab es bereits Regelungen in dieser Richtung, allerdings hat das Parlament diese als zu schwach eingeschätzt. Wir könnten dagegen klagen, was meinst du?',
				mediumType: "image",
				mediumSource: "https://picsum.photos/1200/700",
				info: 'Die Europäische Union hat zum 1.1.2021 einen solchen Mechanismus auf den Weg gebracht. Gelder sollten nicht in die Hände derjenigen gelangen, die die Demokratie bedrohen, so die Argumentation. Rechtsstaatlichkeit ist in der EU als Grundwert verankert: "Sie bedeutet, dass Regierungen das Recht achten sollten und keine willkürlichen Entscheidungen treffen dürfen. Die Bürger sollten in der Lage sein, das Handeln von Regierungen vor unabhängigen Gerichten anzufechten. Die Rechtsstaatlichkeit umfasst auch die Bekämpfung von Korruption und den Schutz der Medienfreiheit, wodurch sichergestellt wird, dass die Öffentlichkeit angemessen über staatliche Maßnahmen informiert wird", schreibt das EU-Parlament auf seiner <a href= https://www.europarl.europa.eu/news/de/headlines/eu-affairs/20201001STO88311/rechtsstaatsmechanismus-schutz-des-eu-haushalts-und-der-europaischen-werte>Webseite</a>.',
				answers: [
					{
						text: "Ich glaube, wir sollten da lieber keine schlafenden Hunde wecken. Natürlich unterzeichnen wir mit.",
						goto: "unterschreiben",
						variables: [
							{
								text: "aussenbeziehungen",
								amount: 4,
							},
							{
								text: "time",
								amount: 1,
							},
							{
								text: "gutmensch",
								amount: 1,
							},
						],
					},
					{
						text: "Ja, natürlich klagen wir! Bei der geringsten Erfolgschance müssen wir es probieren. Und ansonsten verlängern wir wenigstens das Verfahren.",
						goto: "klagen",
						variables: [
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
							{
								text: "time",
								amount: 1,
							},
							{
								text: "kritischeJournalisten",
								amount: 143,
							},
							{
								text: "geklagt",
								value: true,
							},
						],
					},
					{
						text: "Ich weiß nicht. Wie entscheiden sich denn die anderen Länder?",
						goto: "verbuendete",
						variables: [
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			unterschreiben: {
				text: "Wie du meinst. So stellen wir uns auf jeden Fall gut mit den anderen Ländern. Hoffentlich fällt uns das nicht später noch zur Last.",
				mediumType: "image",
				mediumSource: "https://picsum.photos/1200/300",
				info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
				answers: [
					{
						text: "Ach, das passt schon. Weiter geht's im Wahlkampf!",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			klagen: {
				text: "Wir sind nicht einmal die einzigen, die klagen! Auch das Nachbarland Tilpern, das eine Regierung hat, die deiner Partei sehr nahesteht und ähnliche Werte vertritt, schließt sich dem an. Wie wollen wir denn argumentieren?",
				mediumType: "image",
				mediumSource: "https://picsum.photos/300/700",
				info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
				answers: [
					{
						//TODO Keine Entscheidung, aber trotzdem Variablen ändern?
						text: "Wir beziehen uns darauf, dass diese Regelung ausschließlich uns und Tilpern schaden soll, weil alle anderen Staaten in der AU linke Mainstream-Regierungen haben.",
						goto: "klagen2",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "kritischeJournalisten",
								amount: 25,
							},
						],
					},
				],
			},
			verbuendete: {
				text: "Vielleicht haben wir zu lange gezögert. Wären wir vorgeprescht, hätten sich vielleicht andere angeschlossen, schade. Willst du dich auch allein dagegen stellen?",
				info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
				answers: [
					{
						text: "Nein, dann lassen wir das lieber so auf sich beruhen und unterschreiben. Und weiter im Wahlkampf!",
						newChapter: true,
						variables: [
							{
								text: "aussenbeziehungen",
								amount: 3,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
					{
						text: "Ärgerlich, aber es ist trotzdem wichtig, dass wir uns dagegen stellen. Wir sind doch kein Sozialamt, sondern haben auch unsere Ziele. Wir klagen.",
						goto: "klagengefahr",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: 124,
							},
							{
								text: "aussenbeziehungen",
								amount: -5,
							},
							{
								text: "time",
								amount: 1,
							},
							{
								text: "geklagt",
								value: true,
							},
						],
					},
				],
			},
			klagengefahr: {
				text: "Die Gefahr ist natürlich, dass Nupplands Regierung sich jetzt zum Feindbild entwickelt. Aber gut, in einigen Wochen wissen wir mehr. In der Zwischenzeit wird der Adrejanische Gerichtshof uns anhören.",
				answers: [
					{
						text: "Weiter geht's.",
						newChapter: true,
					},
				],
			},
			klagen2: {
				text: "Gut, dann ziehen wir jetzt so vor den Adrejanischen Gerichtshof. Wir werden in einigen Wochen sehen, was daraus wird.",
				info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in der EU in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
				answers: [
					{
						text: "Weiter geht's.",
						newChapter: true,
					},
				],
			},
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
			nuppisierung: {
				text: "80 Prozent der regionalen Tageszeitungen gehören zu einem Unternehmen. Dieses wurde allerdings von einem größeren Verlag aus dem Nachbarland aufgekauft. Außerdem gehören diesem Konzern auch viele Online-Nachrichtenplattformen, die in den letzten Jahren extrem gewachsen sind. Was bedeutet das für uns?",
				answers: [
					{
						text: "Weiß ich auch nicht. Ist das verkehrt?",
						goto: "erklaerung1",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Naja, so lässt sich schlechter kontrollieren, was die schreiben.",
						goto: "geld",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Das Geld bleibt zum Teil im Ausland.",
						goto: "kontrolle",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},

			erklaerung1: {
				text: "Ausländische Auftraggeber können dir so viel leichter in die Berichterstattung deines Landes reden. Und das kann wiederum dem Ansehen deiner Partei schaden.",
				answers: [
					{
						text: "Verstehe.",
						goto: "aufkaufen",
					},
				],
			},

			geld: {
				text: "Richtig! Hinzu kommt, dass du natürlich auch weniger Geld im Land behalten kannst, wenn es so weit kommt.",
				answers: [
					{
						text: "Okay.",
						goto: "aufkaufen",
					},
				],
			},

			kontrolle: {
				text: "Außerdem lässt sich doch so viel schwieriger beeinflussen, was in den Medien steht. Ein gemeinsames Feindbild, zum Beispiel die Oiropäische Union, könnte sehr gut im Wahlkampf sein. Wenn das Nachbarland, was in der OU sehr anerkannt ist, allerdings die Periodika besitzt, wird es schwierig, dass sowas in den Medien kommt.",
				answers: [
					{
						text: "Kapiert.",
						goto: "aufkaufen",
					},
				],
			},

			aufkaufen: {
				text: "Hast du eine Idee, was man dagegen machen könnte?",
				info: "Vor einer ähnlichen Situation sah und sieht sich Polen zur Zeit. Die meisten regionalen Tageszeitungen haben zur Verlagsgruppe Passau, also einem deutschen Medienunternehmen, gehört. Wie es weiterging, siehst du, sobald du dich selbst entschieden hast.",
				mediumType: "video",
				mediumSource: "https://team-polaris.de/res/car/Gen%200.mp4",
				answers: [
					{
						text: "Der Staat könnte das Medienunternehmen aufkaufen, so wäre die Kontrolle am einfachsten. Wir hätten direkten Einfluss auf die Personalentscheidungen und unser Einfluss würde auch im Lokalen wachsen!",
						goto: "pressefreiheit",
						variables: [
							{
								text: "anerkennung",
								amount: -2,
							},
							{
								text: "aussenbeziehungen",
								amount: -5,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "time",
								amount: 3,
							},
							{
								text: "kritischeJournalisten",
								amount: 56,
							},
							{
								text: "staatsnaehe",
								amount: 10,
							},
							{
								text: "aufgekauft",
								value: true,
							},
						],
					},
					{
						text: "Wir könnten ein hiesiges Unternehmen nutzen, das das Verlagshaus aufkauft. Einige Unternehmen gehören doch schon jetzt zum Teil dem Staat, zum Beispiel über Aktien.",
						goto: "aufkaufen2",
						variables: [
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: 125,
							},
							{
								text: "staatsnaehe",
								value: 6,
							},
							{
								text: "aufgekauft",
								value: true,
							},
						],
					},
					{
						text: "Ich denke, es sollte so bleiben, wie es ist.",
						goto: "nachfrage2",
						variables: [
							{
								text: "anerkennung",
								amount: -1,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "time",
								amount: 3,
							},
							{
								text: "kritischeJournalisten",
								amount: -34,
							},
						],
					},
				],
			},

			pressefreiheit: {
				text: "Uhh, ganz schlechte Idee. Die anderen Länder der Adrejanischen Union haben uns doch eh schon auf dem Kieker. Wenn wir jetzt noch einen großen Teil der lokalen Presse kaufen, wird das nicht gut enden. Wie machen wir weiter?",
				answers: [
					{
						text: "Naja, Fehler passieren. Vergessen wir das einfach.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
					{
						text: "Ist jetzt passiert, aber jetzt können wir unsere Macht natürlich auch ausnutzen. Da könnte man doch alle entlassen, die sich mal kritisch geäußert haben.",
						newChapter: "entlassung", //TODO ????
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},

			aufkaufen2: {
				text: 'Brillant! So bleibt das ganze unter der Hand und dringt nicht so an die Öffentlichkeit. Komplett geheim halten können wir das ja aber auch nicht. Unter welchem Namen kommunizieren wir das Ganze denn? Der Fokus wird bei einer "Renationalisierung" natürlich anders gelegt als bei einer "Entmonopolisierung", aber beide Namen klingen doch eigentlich ganz gut, oder?',
				answers: [
					{
						text: "Renationalisierung",
						goto: "aufkaufen3",
						variables: [
							{
								text: "benennungAufkaufen",
								value: "Renationalisierung",
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
					{
						text: "Entmonopolisierung",
						goto: "aufkaufen3",
						variables: [
							{
								text: "benennungAufkaufen",
								value: "Entmonopolisierung",
							},
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			aufkaufen3: {
				text: 'Sehr gut. Gut, wir nutzen für unsere $benennungAufkaufen also ein Unternehmen, das zum Teil staatlich ist, um diese Titel, Internetportale, Vertriebskanäle und Druckereien aufzukaufen. So können wir die Medien wieder "nuppisieren" und ausländische Investoren zurückdrängen. Aber welches Unternehmen nutzen wir dafür?',
				answers: [
					{
						text: "Naja, ein bisschen Erfahrung mit der Führung eines Verlagshauses sollte man schon haben. Ich entscheide mich für eine große Buchhandelskette.",
						goto: "buchhandel",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "aussenwahrnehmung",
								amount: -2,
							},
						],
					},
					{
						text: "Es gibt da diese Kiosk- und Tankstellenkette...",
						goto: "orlen",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "aussenwahrnehmung",
								amount: -1,
							},
						],
					},
					{
						text: "Vielleicht eine PR-Agentur, die extra dafür gegründet wird? Die haben dann auch die Expertise, falls da publicity-mäßig was schiefläuft.",
						goto: "pr",
						variables: [
							{
								text: "time",
								amount: 3,
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "aussenwahrnehmung",
								amount: -3,
							},
						],
					},
				],
			},

			orlen: {
				text: 'Klingt zwar erst einmal skurril, aber du hast die beste Wahl getroffen! In Tankstellen und Kiosks werden viele der Pressetitel verkauft, da könnte man also bestimmte Titel bevorzugen, und bei anderen gibt es dann vielleicht... hmm... Lieferengpässe oder so? Was wir natürlich niemals tun würden, oder? ;) Und wenn jemand was sagt, verweisen wir darauf, dass das üblich ist und in den USA auch Amazon die "Washington Post" gekauft hat.',
				info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
				answers: [
					{
						text: "Klingt logisch.",
						newChapter: true,
					},
				],
			},

			buchhandel: {
				text: "Kein schlechter Gedankengang. Trotzdem ist das leider etwas verdächtiger als ein Unternehmen, was scheinbar wenig mit Medien, deren Vertrieb und Organisation zu tun hat. Aber immerhin ist die Buchhandelskette bereits etabliert und bekannt.",
				info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
				answers: [
					{
						text: "Weiter geht's.",
						newChapter: true,
					},
				],
			},

			pr: {
				text: "Nicht deine beste Idee, um ehrlich zu sein. Wenn ein Haufen Zeitungstitel und Onlineportale von einer PR-Agentur aufgekauft werden, wo der Staat seine Finger mit im Spiel hat, werden natürlich alle misstrauisch. Versuch doch nächstes mal, etwas subtiler zu agieren.",
				info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
				answers: [
					{
						text: "Na gut, ich versuch's.",
						newChapter: true,
					},
				],
			},

			nachfrage2: {
				text: "Hältst du das echt für schlau? Wir hatten doch davor schon überlegt, dass es ganz schlau wäre, da etwas zu ändern.",
				answers: [
					{
						text: "Okay, ich will doch etwas ausprobieren.",
						goto: "aufkaufen",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Ne, wir lassen das so. Das ist viel besser für eine plurale Medienlandschaft.",
						goto: "nagut2",
						variables: [
							{
								text: "gutmensch",
								amount: 2,
							},
							{
								text: "aussenbeziehungen",
								amount: 1,
							},
							{
								text: "time",
								amount: 3,
							},
						],
					},
				],
			},

			nagut2: {
				text: "Na gut, wenn du meinst.",
				answers: [
					{
						text: "Weiter.",
						newChapter: true,
					},
				],
			},
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
					value: 8,
				},
				{
					variableName: "aufgekauft",
					type: "==",
					value: true,
				},
			],
		},
		questions: {
			entlassung: {
				text: "Du hast dich ja vorhin schon ziemlich unbeliebt damit gemacht, dass du das ausländische Medienunternehmen aufgekauft hast. Die meisten Tageszeitungen und großen Internetportale sind jetzt also Staatsmedien. Trotzdem publizieren sie bisher genau wie vorher.",
				answers: [
					{
						text: "Ist doch gut so. Medien von den Menschen, die hier leben, für die Menschen, die hier leben.",
						goto: "gleich2",
						variables: [
							{
								text: "time",
								amount: 3,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "kritischeJournalisten",
								amount: -14,
							},
						],
					},
					{
						text: "Also entlasse ich alle Chefredakteur*innen, die sich in letzter Zeit kritisch geäußert haben...? Und dann besetze ich die Stellen mit parteitreuen Menschen.",
						goto: "chefsentlassen",
						variables: [
							{
								text: "time",
								amount: 3,
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "kritischeJournalisten",
								amount: -125,
							},
							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
					{
						text: "Zusätzlich zu den Chefredakteur*innen sollten auch die kleineren Fische aus dem Becken geworfen werden, wenn sie sich nicht opportun verhalten. Nestbeschmutzer!",
						goto: "alleentlassen",
						variables: [
							{
								text: "time",
								amount: 4,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
							{
								text: "kritischeJournalisten",
								amount: -312,
							},
							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
				],
			},

			gleich2: {
				text: "Laaaaangweilig. Weißt du, dass du so deinen Kritiker*innen das Feld komplett überlässt? Kein Wunder, dass eure Umfragewerte sinken. Klar freuen sich alle über eine bunte Medienlandschaft, aber stell dir bloß mal vor, was du alles mit ein paar Einschränkungen erreichen könntest.",
				info: "In den letzten Jahren wurden in Polen viele Posten in den Redaktionen neu besetzt. In den großen Städten ist es leichter, Ersatz zu finden, während Lokalzeitungen in dieser Hinsicht weniger Macht haben. Mehr zur Ersetzung der Journalist*innen findest du in <a href =https://www.deutschlandfunkkultur.de/medienpolitik-in-polen-angriff-auf-die-pressefreiheit.979.de.html?dram:article_id=496143>diesem Artikel vom Deutschlandfunk</a>.",
				answers: [
					{
						text: "Okay, vielleicht entlassen wir doch ein oder zwei der Chefredaktuer*innen...",
						goto: "chefsentlassen",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "kritischeJournalisten",
								amount: -65,
							},
							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
					{
						text: "Im Ausland schauen die doch sowieso schon sehr genau hin, seit wir die Medien gekauft haben. Wir sollten da schon besser aufpassen. Darum hier lieber vorsichtig sein. Und ein paar Journalisten werden so auch weniger kritisch sein.",
						newChapter: true,
						variables: [
							{
								text: "anerkennung",
								amount: -2,
							},
							{
								text: "kritischeJournalisten",
								amount: -7,
							},
						],
					},
				],
			},
			chefsentlassen: {
				text: "Sehr gut. Wenn die Chefpositionen mit regierungstreuen Leuten besetzt sind, schüchtert das wahrscheinlich auch die Journalist*innen in den Redaktionen schon etwas ein.",
				info: "In den großen Städten ist es leichter, Ersatz zu finden, während Lokalzeitungen in dieser Hinsicht weniger Macht haben. Mehr zur Ersetzung der Journalist*innen findest du in <a href =https://www.deutschlandfunkkultur.de/medienpolitik-in-polen-angriff-auf-die-pressefreiheit.979.de.html?dram:article_id=496143>diesem Artikel vom Deutschlandfunk</a>.",
				answers: [
					{
						text: "Und wenn ich zusätzlich trotzdem noch weitere Journalist*innen ersetze?",
						goto: "alleentlassen",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
							{
								text: "kritischeJournalisten",
								amount: -216,
							},

							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
					{
						text: "Reicht erstmal, denke ich.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			alleentlassen: {
				text: "Die Zahl der kritischen Journalisten hat enorm abgenommen. Und natürlich verdienen sie es alle, die sich gegen die WhR stellen, nicht besser. Aber gerade auf dem Land und abseits der großen Städte, wo die Redaktionen der Lokalzeitungen sitzen, ist es schwierig, genug politisch Korrekte zu finden, mit denen du die Stellen besetzen kannst. Ein paar der jetzt staatlichen Zeitungen und Portale müssen eingedampft werden. Dadurch wird deine Anerkennung in der Partei leider auch sehr abnehmen.",
				info: "In den großen Städten ist es leichter, Ersatz zu finden, während Lokalzeitungen in dieser Hinsicht weniger Macht haben. Mehr zur Ersetzung der Journalist*innen findest du in <a href =https://www.deutschlandfunkkultur.de/medienpolitik-in-polen-angriff-auf-die-pressefreiheit.979.de.html?dram:article_id=496143>diesem Artikel vom Deutschlandfunk</a>.",
				answers: [
					{
						text: "Das hab' ich nicht bedacht... Blöd gelaufen.",
						newChapter: true,
						variables: [
							{
								text: "anerkennung",
								amount: -5,
							},
							{
								text: "time",
								amount: 3,
							},
						],
					},
				],
			},
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
			zensur: {
				text: "Im öffentlich-rechtlichen Fernsehen äußert sich eine beliebte Moderatorin kritisch zu einem neuen Gesetzentwurf. Wie regierst du am besten?",
				answers: [
					{
						text: "Ich kann sie einfach von heute auf morgen entlassen, oder?",
						goto: "entlassen",
						variables: [
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
							{
								text: "time",
								amount: 1,
							},
							{
								text: "kritischeJournalisten",
								amount: 3,
							},
							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
					{
						text: "Eine öffentliche Drohung gegenüber kritischen Journalist*innen klingt doch gut.",
						goto: "drohung",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "kritischeJournalisten",
								amount: -278,
							},
							{
								text: "zensurDone",
								value: true,
							},
						],
					},
					{
						text: "Ich habe moralische Einwände.",
						goto: "moralisch",
						variables: [
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},

			moralisch: {
				text: "Moralische was?",
				answers: [
					{
						text: "Einwände.",
						goto: "moralisch2",
						variables: [
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Ach, nicht so wichtig.",
						goto: "zensur",
					},
				],
			},

			moralisch2: {
				text: "Bist du dir sicher, dass du hier in diesem Job richtig bist?",
				answers: [
					{
						text: "Denke schon. Ich probiere es nochmal.",
						goto: "zensur",
					},
					{
						text: "Ich hab da kein gutes Gefühl bei der Sache. Ich trete zurück.",
						goto: "nachfragen/letzteNachfrage",
					},
				],
			},

			entlassen: {
				text: "Klar, im Ausland kennt sie kaum jemand, und im Inland schieben wir einfach einen Grund vor, wenn du magst. Hast du eine Idee?",
				info: 'Durch das "Kleine Mediengesetz" in Polen konnte die Regierung bei der Personalpolitik des öffentlich-rechtlichen Rundfunks mitmischen. Viele Redakteure, Moderatorinnen und Journalisten wurden durch "politisch Korrekte" ersetzt, zum Beispiel die beliebte Moderatorin Beata Tadla. Mehr dazu findest du <a href=https://www.dw.com/de/polnische-medien-mauern-gegen-geplante-reklamesteuer/a-56527227>bei der Deutschen Welle</a>.',
				answers: [
					{
						text: "Sagen wir einfach, sie ist krank geworden.",
						goto: "krank",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "kritischeJournalisten",
								amount: 3,
							},
						],
					},
					{
						text: "Ich würde es totschweigen. Wir besetzen ihre Sendungen einfach neu.",
						goto: "nichts",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: 7,
							},
						],
					},
					{
						text: "Wir sagen die Wahrheit, dass sie wegen kritischer Äußerungen rausgeflogen ist. Das schüchtert andere Journalist*innen doch auch ein.",
						goto: "wahrheit",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: -2,
							},
							{
								text: "kritischeJournalisten",
								amount: -80,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
						],
					},
				],
			},
			krank: {
				text: "Von der Bildfläche komplett verschwinden darf sie natürlich nicht. Ansonsten aber eine ganz gute Wahl, denke ich.",
				answers: [
					{
						text: "Was machen wir als nächstes?",
						newChapter: true,
					},
				],
			},
			nichts: {
				text: "Keine schlafenden Hunde wecken, würde ich auch sagen. Ein paar Journalisten sind misstrauisch geworden, aber lass' uns da erstmal abwarten.",
				answers: [
					{
						text: "Was machen wir als nächstes?",
						newChapter: true,
					},
				],
			},
			wahrheit: {
				text: "Mhhh, schwierig. So lenkst du natürlich noch mehr Aufmerksamkeit auf das ganze Thema. Wahrscheinlich wäre es besser gewesen, alles zu verschweigen. Aber mit deiner Vermutung, dass so mehr Journalist*innen weniger Kritisches schreiben, lagst du richtig.",
				answers: [
					{
						text: "Weiter geht's!",
						newChapter: true,
					},
				],
			},
			drohung: {
				text: "Wow, mutig! Aber nicht verkehrt: Das hat ziemlich viele kritische Journalist*innen eingeschüchtert. Im Ausland kommt das natürlich nicht so gut an. Die wird so schnell nichts mehr gegen die WhR sagen.",
				info: 'Durch das "Kleine Mediengesetz" in Polen konnte die Regierung bei der Personalpolitik des öffentlich-rechtlichen Rundfunks mitmischen. Viele Redakteure, Moderatorinnen und Journalisten wurden durch "politisch Korrekte" ersetzt, zum Beispiel die beliebte Moderatorin Beata Tadla. Mehr dazu findest du <a href=https://www.dw.com/de/polnische-medien-mauern-gegen-geplante-reklamesteuer/a-56527227>bei der Deutschen Welle</a>. Öffentliche Drohungen gab es bisher nicht, zumindest nicht gegen Journalist*innen.',
				answers: [
					{
						text: "Richtig so!",
						newChapter: true,
					},
				],
			},
		},
	},

	umgangMitKritik: {
		props: {
			entry: 0,
			title: "Umgang mit Kritik",
			description: "Die Adrejanische Union hat Wind bekommen",
			conditions: [],
		},
		questions: {
			obama: {
				text: 'Ein Präsident eines großen wichtigen Staates sagt auf einer Veranstaltung in Nuppland: "Wir blicken besorgt auf die nuppische Demokratie. Die demokratischen Verfahren werden zunehmend abgebaut, obwohl es wichtig ist, dass alle Staaten zusammenarbeiten. Nuppland ist als Beispiel für die ganze Welt zu sehen."',
				answers: [
					{
						text: "Das ist eine Katastrophe! Aber das müssen wir schon bringen. Sonst könnte man uns Manipulation vorwerfen.",
						goto: "wahrheit2",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
						],
					},
					{
						text: "Das können wir nicht zeigen! Vielleicht ein paar Schnittbilder von seiner Rede, aber das können wir nicht zeigen!",
						goto: "verschweigen",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Der Satz mit dem Beispiel ist doch wirklich missverständlich formuliert. Den kann man doch auch positiv umdeuten, wem soll das denn auffallen?",
						goto: "manipulation",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -6,
							},
							{
								text: "kritischeJournalisten",
								amount: 89,
							},
						],
					},
				],
			},

			wahrheit2: {
				text: "Du hast Recht. Falls das auffliegt, fliegt uns hier alles um die Ohren. Die Äußerung wird natürlich auch in den anderen Ländern wahrgenommen werden, aber besser stehen wir auch selbst dazu.",
				info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
				answers: [
					{
						text: "Ich hoffe, da gibt's nicht noch Ärger.",
						newChapter: true,
					},
				],
			},
			verschweigen: {
				text: "Können wir natürlich versuchen. Aber falls das noch rauskommt, haben wir echt ein Problem.",
				answers: [
					{
						text: "Doch noch die Wahrheit sagen.",
						goto: "wahrheit2",
						variables: [
							{
								text: "time",
								amount: 5,
							},
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
						],
					},
					{
						text: "Das passt schon.",
						goto: "wahrheit2a",
						variables: [
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -5,
							},
							{
								text: "kritischeJournalisten",
								amount: 46,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},
			wahrheit2a: {
				text: "Na gut, immerhin haben wir ihm nicht die Worte im Munde verdreht. Trotzdem haben es einige im In- und Ausland mitbekommen... Da sind einige Regierungskritiker*innen dazu gekommen.",
				info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
				answers: [
					{
						text: "Einfach schnell weitermachen.",
						newChapter: true,
					},
					{
						text: "Wir müssen noch eine Rechtfertigung mit versteckter Drohung an Journalisten rausgeben. Vielleicht hilft das, die zum Verstummen zu bringen.",
						goto: "wahrheit2b",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -27,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "entlassungenDone",
								value: true,
							},
						],
					},
				],
			},
			wahrheit2b: {
				text: 'Die nuppische Pressefreiheit wird im Ausland echt als gefährdet angesehen. Kürzlich kam eine Rangliste der NGO "Journalisten um die Welt" heraus, in dem Nuppland immer weiter abrutscht.',
				answers: [
					{
						text: "Man kann nicht alle glücklich machen.",
						newChapter: true,
					},
				],
			},
			manipulation: {
				text: 'Riskant. Aber gut. Dann übersetzen wir den Satz also... "Wir blicken [...] auf die nuppische Demokratie. [Die demokratischen Verfahren werden zunehmend abgebaut, obwohl] es [ist] wichtig [...], dass alle Staaten zusammenarbeiten. Nuppland ist als Beispiel für die ganze Welt zu sehen." Passt?',
				answers: [
					{
						text: "Krass, aber ja, machen wir so. Was so ein paar Wörtchen ändern können...",
						goto: "manipulation2",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -8,
							},
							{
								text: "kritischeJournalisten",
								amount: 89,
							},
						],
					},
					{
						text: "Ja, müssen wir wohl.",
						goto: "manipulation2a",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -6,
							},
							{
								text: "kritischeJournalisten",
								amount: 12,
							},
						],
					},
					{
						text: "Ne, das ist zu stark. Ich will mich nochmal umentscheiden.",
						goto: "obama",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},

			manipulation2: {
				text: "Wie es scheint, ist unsere kleine Änderung wohl aufgefallen: Ein ganzer Schwung an kritischen Journalisten ist dazugekommen. Wie wollen wir uns da rausreden?",
				info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
				answers: [
					{
						text: "Augen zu und durch, einfach ignorieren.",
						goto: "manipulation21",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: 127,
							},
							{
								text: "falsch",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: -3,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
							{
								text: "time",
								amount: 3,
							},
						],
					},
					{
						text: "Wir haben seine Aussage doch nur ... hmm... kontextualisiert! Könnten wir nicht sowas schreiben?",
						goto: "manipulation22",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: 254,
							},
							{
								text: "falsch",
								amount: 3,
							},
							{
								text: "anerkennung",
								amount: -5,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
					{
						text: "Ich fürchte, da müssen wir uns ehrlich entschuldigen, und erklären, dass uns ein Fehler unterlaufen ist. Natürlich nicht absichtlich.",
						goto: "manipulation23",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -8,
							},
							{
								text: "falsch",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: -4,
							},
							{
								text: "aussenbeziehungen",
								amount: 1,
							},
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},

			manipulation21: {
				text: "Das war ein echtes Desaster und hat auch seine Zeit gebraucht, bis wieder Ruhe war.",
				info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
				answers: [
					{
						text: "Okay, ich wage mich dann mal wieder aus meinem Versteck...",
						newChapter: true,
					},
				],
			},

			manipulation22: {
				text: "Okay, jetzt fühlen sich alle auf den Arm genommen und sind ziemlich sauer auf dich. Sowohl deine Partei als auch deine Beziehungen ins adrejanische Ausland leiden.",
				answers: [
					{
						text: "Aussitzen.",
						newChapter: true,
					},
				],
			},

			manipulation23: {
				text: "Den letzten Teil, dass es nicht absichtlich war, glaubt dir zwar fast niemand, aber die Wogen haben sich schnell geglättet.",
				answers: [
					{
						text: "Glück gehabt.",
						newChapter: true,
					},
				],
			},

			manipulation2a: {
				text: "Glück gehabt. Nur ein paar wenige sind misstrauisch geworden. Lass' uns schnell weitermachen, damit das nicht weiter auffällt.",
				info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen. Bei einer anderen Antwort hätte das Verhalten aber auch bei dir mehr Konsequenzen gehabt ;)",
				answers: [
					{
						text: "Klingt gut.",
						newChapter: true,
					},
				],
			},
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
			],
		},
		questions: {
			linie: {
				text: "Um die Nachrichten jetzt noch etwas auf Linie zu bringen, habe ich verschiedene Ideen. Was meinst du, eignet sich besonders gut?",
				answers: [
					{
						text: "Eine Stiftung, unter der ich alle regierungsnahen Medien vereine, wäre doch super.",
						goto: "kesma",
						variables: [
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "time",
								amount: 4,
							},
							{
								text: "kritischeJournalisten",
								amount: 6,
							},
							{
								text: "staatsnaehe",
								amount: 2,
							},
						],
					},
					{
						text: "Die Nachrichten bringen bei den kleineren Sendern häufig eine ganz andere Linie rein als die, die ich mir wünschen würde. Kann man da nicht was machen?",
						goto: "agentur",
					},
				],
			},

			agentur: {
				text: "Mein Vorschlag ist, eine Nachrichtenagentur zu gründen, die eng verbunden mit der Regierung ist. Die könnte die Recherche für kleinere Redaktionen vereinfachen, aber natürlich auch dazu verleiten, dass sie Nachrichten veröffentlichen, die schon vorgefiltert sind.",
				info: "Die ungarische Nachrichtenagentur MTI wurde 2015 in die staatliche Rundfunkholding MTVA überführt, zu der auch der öffentlich-rechtliche Rundfunk gehört. Die Agentur stellt kostenlos Ressourcen für die ungarischen Medien zur Verfügung, macht damit aber gerade kleinere Redaktionen immer abhängiger von der Regierung. Zuvor waren gerade kleinere Redaktionen häufig diejenigen, die am ehesten regierungskritische Inhalte verbreiten konnten. Mehr Informationen zur MTVA findest du <a href=https://taz.de/Pressefreiheit-in-Ungarn-unter-Beschuss/!5668697/>hier</a> und <a href=https://www.reporter-ohne-grenzen.de/pressemitteilungen/meldung/fehlende-pressefreiheit-gefahr-fuer-europa/>hier</a>.",
				answers: [
					{
						text: "Wenn das Angebot kostenlos ist, sparen die sich das Budget für Recherche, aber können eben auch viel unkritischer berichten! Genial!",
						goto: "genial",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "staatsnaehe",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "kritischeJournalisten",
								amount: -98,
							},
							{
								text: "aussenbeziehungen",
								amount: -4,
							},
						],
					},
					{
						text: "Überzeugt mich nicht so. Das mit der Stiftung klang aber spannend.",
						goto: "kesma",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Ach, das ist doch alles nichts. Die Werte sehen gerade doch ganz gut aus. Ich bin bis zu den Wahlen im Urlaub - Paris, Athen, auf Wiedersehn!",
						goto: "nachfragen/letzteNachfrage",
					},
				],
			},
			genial: {
				text: "Eine meiner besseren Ideen.",
				info: "Die ungarische Nachrichtenagentur MTI wurde 2015 in die staatliche Rundfunkholding MTVA überführt, zu der auch der öffentlich-rechtliche Rundfunk gehört. Die Agentur stellt kostenlos Ressourcen für die ungarischen Medien zur Verfügung, macht damit aber gerade kleinere Redaktionen immer abhängiger von der Regierung. Zuvor waren gerade kleinere Redaktionen häufig diejenigen, die am ehesten regierungskritische Inhalte verbreiten konnten. Mehr Informationen zur MTVA findest du <a href=https://taz.de/Pressefreiheit-in-Ungarn-unter-Beschuss/!5668697/>hier</a> und <a href=https://www.reporter-ohne-grenzen.de/pressemitteilungen/meldung/fehlende-pressefreiheit-gefahr-fuer-europa/>hier</a>.",
				answers: [
					{
						text: "Weiter!",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},

			kesma: {
				text: 'Gut, du hast die Stiftung ZMSN ("Zentrale Medienstiftung Nuppland") gegründet. Abseits vom öffentlich-rechtlichen Rundfunk sind natürlich auch die vielen lokalen Medien, Druckereien und Internetportale Mitglied, die jetzt endlich in nuppländischer Hand sind. Vor allem also regierungsnahe Medien, viele davon in der Hand von Bekannten und Freunden von dir. Trotzdem gibt es natürlich noch viel Oppositionelles, gerade im Netz.',
				info: "2018 wurde in Ungarn die Medienstiftung KESMA (Közép-Európai Sajtó és Média Alapítvány, deutsch: Zentraleuropäische Presse- und Medienstiftung) gegründet. Sie wird von Journalistenverbänden oder der NGO Reporter ohne Grenzen kritisiert, aufgrund der engen Verbindungen zum ungarischen Premierminister Viktor Orbán.",
				answers: [
					{
						text: "So kann ich über meinen Bekanntenkreis doch ziemlich leicht alles im Blick behalten, oder?",
						goto: "nichtnurdas",
					},
					{
						text: "ZMSN-Medien könnten doch bestimmte Subventionen bekommen, oder andere Unterstützung, die den anderen Medien nicht zukommt. So haben die zu wenig Geld.",
						goto: "subventionen",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "staatsnaehe",
								amount: 2,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
							{
								text: "kritischeJournalisten",
								amount: -76,
							},
						],
					},
				],
			},

			nichtnurdas: {
				text: "Noch besser. Der Stiftung gehören ja auch die Druckereien und Agenturen an. Normalerweise hätte das natürlich von der Kartellbehörde genehmigt werden müssen, aber so ein bisschen Mauschelei fällt ja nicht auf. Jetzt kontrollieren wir aber einen großen Teil der Kanäle und können durch den Zusammenschluss Synergien viel besser nutzen... und wie du schon sagtest, auch leicht ein Auge auf alles haben.",
				info: "2018 wurde in Ungarn die Medienstiftung KESMA (Közép-Európai Sajtó és Média Alapítvány, deutsch: Zentraleuropäische Presse- und Medienstiftung) gegründet. Sie wird von Journalistenverbänden oder der NGO Reporter ohne Grenzen kritisiert, aufgrund der engen Verbindungen zum ungarischen Premierminister Viktor Orbán.",
				answers: [
					{
						text: "Praktisch! Dann probiere ich das mit den Subventionen mal.",
						goto: "subventionen",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "staatsnaehe",
								amount: 2,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
							{
								text: "kritischeJournalisten",
								amount: -76,
							},
						],
					},
					{
						text: "Dann briefe ich direkt mal die Leitungen, auf was sie besonders acht haben sollen: möglichst wenig Leute feuern, aber auf jeden Fall einschüchtern.",
						goto: "briefing",
						variables: [
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "staatsnaehe",
								amount: 2,
							},
							{
								text: "time",
								amount: 3,
							},
							{
								text: "kritischeJournalisten",
								amount: -154,
							},
						],
					},
				],
			},

			briefing: {
				text: "Die Zahl der kritischen Journalist*innen hat abgenommen. Aber eher, weil sich zumindest die bei den Medien in der Stiftung niemand mehr traut, etwas Kritisches zu schreiben - sehr gut!",
				info: "In Polen wurden vielen kritischen Journalist*innen gekündigt, doch nach der Ansicht einiger Medienschaffender könnte sich die Regierung damit verkalkuliert haben. Sie meinen, dass es auf dem Land schwieriger ist, viele Stellen neu zu besetzen. In froßen Städten sei das einfacher. Insofern ist es effizienter, nicht alle zu entlassen, sondern sie eher einzuschränken.",
				answers: [
					{
						text: "Weiter geht's!",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},

			subventionen: {
				text: "Gute Idee. So schaffst du Anreize, der Stiftung sogar freiwillig beizutreten, aber damit würden kritische Medien natürlich auch ein Stück ihrer Unabhängigkeit aufgeben und staatsnäher werden.",
				info: "Ein Kapitel dieses Spiels ist auch der neuen Medienabgabe in Polen nachempfunden. Dort empfangen die staatsnahen öffentlich-rechtlichen Sender Subventionen, sodass diese von der Abgabe kaum betroffen sind.",
				answers: [
					{
						text: "Weiter geht's!",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
				],
			},
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
			],
		},
		questions: {
			ws: {
				text: "Du hast ja bereits einige Journalist*innen davon, sagen wir, überzeugen können, dass es besser ist, wenn sie ihren Job anders oder nicht mehr machen. Einige sind natürlich eingeschüchtert und zum Teil auch gar nicht mehr als Journalist*innen tätig. Aber andere haben sich privaten Medien angeschlossen, vor allem Onlinemedien, oder zum Teil selbst welche gegründet. Dort publizieren sie weiterhin kritisch. Wie können wir das wohl am besten unterbinden?",
				answers: [
					{
						text: "Finden wir irgendwelchen Papierkram, über den wir sie platt machen können?",
						goto: "lizenz",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Drohungen haben ja versagt. Vielleicht, wenn wir den Geldhahn zudrehen?",
						goto: "abgabe",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			lizenzB: {
				text: "Es gibt da einen größeren kritischen Radiosender, der bei der Beantragung seiner Sendefrequenz ein paar kleinere Fehler gemacht hat.",
				answers: [
					{
						text: "Da kann man doch eine Warnung rausgeben.",
						goto: "lizenz2B",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: 18,
							},
							{
								text: "anerkennung",
								amount: -1,
							},
						],
					},
					{
						text: "Denen entziehen wir die Lizenz!",
						goto: "lizenz3B",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -98,
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
					},
				],
			},
			lizenz2B: {
				text: "Ziemlich lasch. Dein Handeln wurde nicht wirklich ernst genommen, der Sender ist sogar gewachsen. Aber lass' uns keine große Sache draus machen.",
				info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
				answers: [
					{
						text: "Weiter geht's.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},

			lizenz3B: {
				text: "Super Idee! Auch, wenn der Sender online noch weiter sendet, erreicht er so nur noch einen Bruchteil der Hörer*innen, und kann sich so natürlich auch schlechter finanzieren.",
				info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
				answers: [
					{
						text: "What's next?",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			lizenz: {
				text: "Es gibt da einen größeren kritischen Radiosender, der bei der Beantragung seiner Sendefrequenz ein paar kleinere Fehler gemacht hat.",
				answers: [
					{
						text: "Da kann man doch eine Warnung rausgeben.",
						goto: "lizenz2",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: 18,
							},
							{
								text: "anerkennung",
								amount: -1,
							},
						],
					},
					{
						text: "Denen entziehen wir die Lizenz!",
						goto: "lizenz3",
						variables: [
							{
								text: "time",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -98,
							},
							{
								text: "anerkennung",
								amount: 1,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
					},
				],
			},
			lizenz2: {
				text: "Ziemlich lasch. Dein Handeln wurde nicht wirklich ernst genommen, der Sender ist sogar gewachsen. Naja - willst du es noch über die Finanzen probieren?",
				info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
				answers: [
					{
						text: "Ja, gern.",
						goto: "abgabeb",
					},
					{
						text: "Ne, das passt schon.",
						newChapter: true,
					},
				],
			},

			lizenz3: {
				text: "Super Idee! Auch, wenn der Sender online noch weiter sendet, erreicht er so nur noch einen Bruchteil der Hörer*innen, und kann sich so natürlich auch schlechter finanzieren.",
				info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
				answers: [
					{
						text: "What's next?",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Und was war die Idee mit dem Geld? Das würde ich mir nochmal anschauen.",
						goto: "abgabe",
					},
				],
			},
			abgabeb: {
				text: "Mein Vorschlag wäre eine Steuer, beziehungsweise eine Abgabe, die die Medien zahlen müssen, wenn sie Werbung schalten. Aber damit es da weniger Widerstand gibt, brauchen wir einen guten Namen.",
				answers: [
					{
						text: '"Werbeprämie" klingt doch super.',
						goto: "werbepraemieB",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
						],
					},
					{
						text: "Man kann das Kind auch beim Namen nennen. Es ist im Endeffekt eine Werbesteuer, also nennen wir es auch so.",
						goto: "schlechterNameB",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: -1,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
						],
					},
					{
						text: 'Was meinst du zu "Medienabgabe"?',
						goto: "schlechterNameB",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: -1,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
						],
					},
				],
			},
			schlechterNameB: {
				text: "Mhhh. So fällt doch direkt auf, wer weswegen zahlen muss. Da hätte man auch einen besseren Namen finden können. Aber naja - letztlich kommt es darauf an, ob das Instrument wirkt, oder? Machen wir das?",
				info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
				answers: [
					{
						text: "Ja, machen wir! Und dann weiter.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -128,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
					},
					{
						text: "Das überzeugt mich nicht.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			werbepraemieB: {
				text: "Großartige Wahl! So fällt kaum auf, wer da eigentlich zahlt.",
				info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
				answers: [
					{
						text: "Super! So machen wir das! Und dann anders weiter.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -128,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
					},
					{
						text: "Das überzeugt mich nicht. Lieber würde ich anders weitermachen.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			abgabe: {
				text: "Mein Vorschlag wäre eine Steuer, beziehungsweise eine Abgabe, die die Medien zahlen müssen, wenn sie Werbung schalten. Aber damit es da weniger Widerstand gibt, brauchen wir einen guten Namen.",
				answers: [
					{
						text: '"Werbeprämie" klingt doch super.',
						goto: "werbepraemie",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 3,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
						],
					},
					{
						text: "Man kann das Kind auch beim Namen nennen. Es ist im Endeffekt eine Werbesteuer, also nennen wir es auch so.",
						goto: "schlechterName",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: -1,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
						],
					},
					{
						text: 'Was meinst du zu "Medienabgabe"?',
						goto: "schlechterName",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: -1,
							},
							{
								text: "aussenbeziehungen",
								amount: -1,
							},
						],
					},
				],
			},
			schlechterName: {
				text: "Mhhh. So fällt doch direkt auf, wer weswegen zahlen muss. Da hätte man auch einen besseren Namen finden können. Aber naja - letztlich kommt es darauf an, ob das Instrument wirkt, oder? Machen wir das?",
				info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
				answers: [
					{
						text: "Ja, machen wir! Und dann weiter.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -128,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
						],
					},
					{
						text: "Das überzeugt mich nicht. Aber das mit dem Papierkram würde ich mir nochmal ansehen.",
						goto: "lizenzB",
					},
					{
						text: "Warum nicht beides? Zuerst die Abgabe auf den Weg bringen, und dann schau ich nochmal, ob die bei ihren Unterlagen Leichen im Keller haben.",
						goto: "lizenzB",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -128,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
					},
				],
			},
			werbepraemie: {
				text: "Großartige Wahl! So fällt kaum auf, wer da eigentlich zahlt.",
				info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
				answers: [
					{
						text: "Super! So machen wir das! Und dann anders weiter.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -128,
							},
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
						],
					},
					{
						text: "Das überzeugt mich nicht. Aber das mit dem Papierkram würde ich mir nochmal ansehen.",
						goto: "lizenzB",
					},
					{
						text: "Warum nicht beides? Zuerst die Abgabe auf den Weg bringen, und dann schau ich nochmal, ob die bei ihren Unterlagen Leichen im Keller haben.",
						goto: "lizenzB",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "anerkennung",
								amount: 2,
							},
							{
								text: "kritischeJournalisten",
								amount: -128,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
					},
				],
			},
		},
	},

	pegasus: {
		props: {
			title: "Digitale Überwachung",
			conditions: [],
			entry: 0,
		},
		questions: {
			start: {
				text: "Digitale Überwachung also? Ich sehe schon, du bist echt gerissen und mit allen Wassern gewaschen. Aber klar - no risk, no fun!",
				answers: [
					{
						text: "Wie bitte? Worum geht's denn genau? Nicht so schnell",
						goto: "wasIstDigitaleUeberwachung",
					},
					{
						text: "Ja klar, bin dabei!",
						goto: "tippZyklop",
					},
				],
			},
			wasIstDigitaleUeberwachung: {
				text: "Stell' dir vor, jemand bereitet einen regierungskritischen Beitrag vor. Du bekommst davon nichts mit und plötzlich weiß jeder von deinen Investments in Waffen oder so. Wenn du aber alle Journalist*innen, die potenziell kritische Beiträge veröffentlichen könnten, abhörst, weißt du genau, wer das Ziel deiner nächsten Attacke sein könnte. Du weißt doch: Feder und Papier entzünden mehr Feuer als alle Streichhölzer dieser Welt - und Feuer können wir gerade gar nicht gebrauchen.",
				answers: [
					{
						text: "Jo, können wir machen.",
						goto: "tippZyklop",
					},
				],
			},
			tippZyklop: {
				text: 'Ich hab da mal was vorbereitet. Heißer Tipp der Regierung vom Nachbarland Tilpern: Die Software "Zyklop". Mit ihr bekommst du vollen Zugriff auf infizierte Handys. Offiziell nur für Terrorverdächtige und zur Verbrechensbekämpfung gedacht, aber was ein Journalist nicht weiß, macht ihn nicht heiß.',
				answers: [
					{
						text: "Das ist mir doch zu heiß. Ich bin raus.",
						goto: "zyklopZuHeiss",
					},
					{
						text: "An sich eine gute Idee, aber uns fehlt die gesetzliche Grundlage für den Einsatz im Journalismus.",
						goto: "gesetzeAendern",
					},
					{
						text: "Klingt super!",
						goto: "ausmass",
					},
				],
			},
			zyklopZuHeiss: {
				text: "Mhhh, schade, aber ist deine Entscheidung",
				answers: [
					{
						text: "Okay, dann sehen wir mal weiter.",
						newChapter: true,
					},
				],
			},
			gesetzeAendern: {
				text: "Wenn du Gesetze ändern willst, bringst du ja erst die Aufmerksamkeit auf das Thema. Ich würde dir empfehlen, das unter der Hand zu behandeln und die Gesetze zu ignorieren.",
				info: "Die Spyware Pegasus wird vom israelischen Unternehmen NSO Group vertrieben. Mit ihrer Hilfe wurden Journalist*innen, Aktivist*innen und Politiker*innen ausgespäht. Sie wurde durch mehrere Staaten eingesetzt. So gibt es Hinweise, dass u. a. Marokko, Indien, Mexiko und Saudi-Arabien die Software genutzt haben.\n2017 bot die NSO Group die Software auch Deutschland an. Dass Deutschland sie tatsächlich genutzt hat, ist aber nicht bekannt und unwahrscheinlich. Ungarn hingegen spähte mit Pegasus wahrscheinlich mehrere Journalist*innen von oppositionellen Medien aus.\nLaut der NSO wird Pegasus nur gegen Kriminelle eingesetzt, allerdings überprüft sie ihre Kunden nur vor Abschluss der Verträge.",
				answers: [
					{
						text: "Gut, dann machen wir das so.",
						goto: "ausmass",
					},
					{
						text: "Trotzdem.  Ich verwende sie nur im vorgegebenen Bereich, bis die Gesetzesänderung durch ist. Also nur gegen Terror etc.",
						newChapter: true, //TODO Info"frage"? Evtl. erklären, dass wir warten, außerdem: Zeit vergehen?
						variables: [
							{
								text: "zyklopLoesung",
								value: "gesetzesänderung",
							},
						],
					},
				],
			},
			ausmass: {
				text: "Die Software wird von einem ausländischen Unternehmen gestellt und importiert. Wie drastisch willst du das Ganze denn angehen? Die Software lässt sich auch gegen Politiker*innen einsetzen. Aber wir fokussieren uns mal auf den Journalismus.",
				info: "Die Spyware Pegasus wird vom israelischen Unternehmen NSO Group vertrieben. Mit ihrer Hilfe wurden Journalist*innen, Aktivist*innen und Politiker*innen ausgespäht. Sie wurde durch mehrere Staaten eingesetzt. So gibt es Hinweise, dass u. a. Marokko, Indien, Mexiko und Saudi-Arabien die Software genutzt haben.\n2017 bot die NSO Group die Software auch Deutschland an. Dass Deutschland sie tatsächlich genutzt hat, ist aber nicht bekannt und unwahrscheinlich. Ungarn hingegen spähte mit Pegasus wahrscheinlich mehrere Journalist*innen von oppositionellen Medien aus.\nLaut der NSO wird Pegasus nur gegen Kriminelle eingesetzt, allerdings überprüft sie ihre Kunden nur vor Abschluss der Verträge.",
				answers: [
					{
						text: "Journalist*innen aus dem Ausland sind für uns besonders gefährlich. Die AU sollte so wenig wie möglich erfahren, was hier in Nuppland passiert. Daher stehen die im Vordergrund.",
						goto: "mittlereLoesung",
						variables: [
							{
								text: "zyklopLoesung",
								value: "mittel",
							},
						],
					},
					{
						text: "Inländische Journalist*innen, die unangenehm auffallen, sollten die Spyware über unauffällige Links zugespielt bekommen. Aber wir nutzen das Programm nur im Verdachtsfall auch zur Überwachung von Kamera, Mikro und Messengern.",
						goto: "entspannt",
						variables: [
							{
								text: "zyklopLoesung",
								value: "entspannt",
							},
						],
					},
					{
						text: "Ich würde mir das volle Programm wünschen: kritische Journalist*innen aus dem In- und Ausland. Und wenn wir alles an Daten haben, was wir kriegen können - Bild, Ton, Text - sind wir auf der sicheren Seite.",
						goto: "drastischeLoesung",
						variables: [
							{
								text: "zyklopLoesung",
								value: "drastisch",
							},
						],
					},
				],
			},
			mittlereLoesung: {
				text: "Umgekehrt ist das natürlich besonders gefährlich, wenn die AU es mitbekommt. ",
				answers: [
					{
						text: "Naja. Mal sehen, was es uns bringt.",
						newChapter: true, //TODO: es muss weiter gehen
					},
				],
			},
			entspannt: {
				text: "So greifst du relativ wenig ein, aber das Programm fällt natürlich auch nur wenig auf.",
				answers: [
					{
						text: "Na dann warten wir erstmal ab.",
						newChapter: true,
					},
				],
			},
			drastischeLoesung: {
				text: "Mutig! Mal sehen, wie das wird. Wenn die AU das mitbekommt, sind wir tot. Aber wenn nicht, hilft uns das auch sehr.",
				answers: [
					{
						text: "Warten wir es ab!",
						newChapter: true,
					},
				],
			},
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
			dauertZuLange: {
				conditions: [
					{
						variableName: "zyklopLoesung",
						type: "==",
						value: "gesetzesänderung",
					},
				],
				text: "Kurzer Zwischenstand zur Zyklop-Software, falls du dich erinnerst: Das wird zeitlich zu knapp. Du wolltest ja eine Gesetzesänderung angehen, aber wir packen das nicht mehr vor der Wahl. Hat aber auch sein Gutes: Dadurch bist du der AU definitiv weniger aufgefallen, das gibt Extrapunkte in den internationalen Beziehungen.",
				answers: [
					{
						text: "Okay, wie geht's weiter?",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							//TODO Beziehungen besser
						],
					},
				],
			},
			handysLangsam: {
				conditions: [
					{
						variableName: "zyklopLoesung",
						type: "==",
						value: "mittel",
					},
					{
						variableName: "randomZyklop",
						type: "<",
						value: 0.6,
					},
				],
				text: "Zwischenstand zur Zyklop-Spyware: Da die Handys der abgehörten Journalist*innen natürlich langsamer arbeiten, wenn die Spyware aktiv ist, ist aufgefallen, dass du Zyklop installiert hast. Leider konnte sogar die Verbindung zu dir gezogen werden. So schlägt das Ganze Wellen und mittlerweile hat auch die nuppische Bevölkerung davon mitbekommen. Von deinem guten Wahlergebnis kannst du dich verabschieden.",
				answers: [
					{
						text: "Schade, aber einen Versuch war es wert.",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			mittelErfolgreich: {
				conditions: [
					{
						variableName: "zyklopLoesung",
						type: "==",
						value: "mittel",
					},
				],
				text: "Übrigens: Glückwunsch! Bisher ist deine Nutzung von Zyklop nicht aufgefallen. Stattdessen konntest du einige kritische Journalist*innen identifizieren und sie gezielt einschüchtern.",
				answers: [
					{
						text: "Das klingt gut",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			entspanntErfolgreich: {
				conditions: [
					{
						variableName: "zyklopLoesung",
						type: "==",
						value: "entspannt",
					},
				],
				text: "Übrigens: Deine Nutzung der Spyware Zyklop ist immer noch nicht aufgefallen. Die AU fasst wieder Vertrauen. Aber da du so zurückhaltend warst, hast du bisher auch noch keinen nennenswerten Erfolg dadurch feiern können.",
				answers: [
					{
						text: "Naja gut, immerhin nichts schlimmes passiert.",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			drastischAlarm: {
				conditions: [
					{
						variableName: "zyklopLoesung",
						type: "==",
						value: "drastisch",
					},
					{
						variableName: "randomZyklop",
						type: "<",
						value: 0.6,
					},
				],
				text: "Alarm! Ich meine - damit war zu rechnen: Die Nutzung der Spyware Zyklop ist aufgefallen. Eine internationale Menschenrechtsorganisation klagt gegen dich, die AU verhängt schwere finanzielle Sanktionen und das merkt auch die nuppische Bevölkerung. Du konntest zwar in einigen Fällen kritische Berichterstattung verhindern, aber jetzt gibt es davon natürlich umso mehr.",
				answers: [
					{
						text: "Schade, aber damit war wohl zu rechnen.",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			drastischErfolgreich: {
				conditions: [
					{
						variableName: "zyklopLoesung",
						type: "==",
						value: "drastisch",
					},
				],
				text: "Du Teufel! GRANDIOS! Kurz vor der Wahl, deine Nutzung der Zyklop-Spyware ist immer noch nicht aufgefallen und durch die umfassende Einschränkung der Berichterstattung hast du so natürlich richtig gute Karten für die anstehende Wahl. Nirgends verliert jemand auch nur ein kritisches Wort gegen dich. Super gemacht! Oder einfach nur mehr Glück als Verstand.",
				answers: [
					{
						text: "Nix da mit Glück - reines Können",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
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
			einleitung: {
				text: "Wir haben momentan eine beunruhigend hohe Anzahl an kritischen Journalist*innen im Land. Wenn wir nichts dagegen tun, könnte das böse für dich enden.",
				answers: [
					{
						text: "Lass sie doch weiter berichten.",
						goto: "bistDuSicher",
					},
					{
						text: "Was schlägst du vor?",
						goto: "radikalereMassnahmen",
					},
				],
			},
			bistDuSicher: {
				text: "Bist du dir sicher? Wir können und sollten dagegen vorgehen.",
				answers: [
					{
						text: "Ja, wir müssen nichts unternehmen.",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
					{
						text: "Was schlägst du vor?",
						goto: "radikalereMassnahmen",
					},
				],
			},
			radikalereMassnahmen: {
				text: "Ich denke wir sollten radikalere Maßnahmen ergreifen. Vielleicht verstehen sie es dann.",
				answers: [
					{
						text: "Klingt gut.",
						goto: "vernuenftig",
					},
					{
						text: "klingt gefährlich",
						goto: "nichtsTun",
					},
				],
			},
			nichtsTun: {
				text: "Noch gefährlicher ist es, wenn wir nichts tun.",
				answers: [
					{
						text: "Vielleicht hast du recht.",
						goto: "vernuenftig",
					},
					{
						text: "Ich kann das aber nicht verantworten.",
						goto: "dannHaltNicht",
					},
				],
			},
			dannHaltNicht: {
				text: "Es ist deine Entscheidung. Mit dieser Einstellung wirst du unserem Land jedoch keinen Dienst erweisen.",
				answers: [
					{
						text: "Okay",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 3,
							},
						],
					},
				],
			},
			vernuenftig: {
				text: 'Ich wusste doch, dass du vernünftig bist. Wir sollten unseren Fokus auf die Gründerin des Blogs "Veritas" legen. Nach Ermittlungen unseres Geheimdienstes scheint sie in Besitz belastender Informationen gegenüber dir und der Regierung zu sein. Es sind also radikale, sofortige Maßnahmen erforderlich. Wie sollen wir vorgehen?',
				info: "In Russland kommt es immer wieder zu Vorfällen, bei denen der Regierung gegenüber kritische Journalist*innen unter unklaren Umständen sterben.  So ist beispielsweise 2018 der Investigativjournalist Maxim Borodin ums Leben gekommen. Er fiel aus seiner Wohnung im fünften Stock. Nach offiziellen Angaben handle es sich um einen Unfall oder um Selbstmord. Kolleg*innen hingegen merken die verdächtigen Umstände dieses Vorfalls an.",
				answers: [
					{
						text: 'Journalist*innen sind doch bekannt dafür, tollpatschig zu sein. Ich denke, sie sollte aus dem sechsten Stock ihres Apartments "stürzen". Unfälle passieren eben. Besonders wenn man nachhilft.',
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -133,
							},
							{
								text: "aussenbeziehungen",
								amount: -5,
							},
							{
								text: "time",
								amount: 2,
							},
						],
						goto: "gestuerzt",
					},
					{
						text: "Die Journalistin sollte diskret verschwinden. Wie wäre es, wenn sie von ihren regelmäßigen Wanderungen nicht wieder nach Hause kommt? Wandern ist nunmal nicht ganz ungefährlich.",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -41,
							},
							{
								text: "time",
								amount: 4,
							},
						],
						goto: "diskretVerschwunden",
					},
					{
						text: "Ich möchte kein Blut an meinen Händen kleben haben. Es genügt, wenn wir ihr einen Denkzettel verpassen. Sperren wir sie für ein paar Monate ins Gefängnis und drohen ihr, das gleiche mit ihren Familienmitgliedern zu tun, wenn sie sich weiterhin gegen unser Land stellt.",
						variables: [
							{
								text: "time",
								amount: 1,
							},
							{
								text: "kritischeJournalisten",
								amount: -54,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
						goto: "zuNaiv",
					},
				],
			},
			diskretVerschwunden: {
				text: "Damit sind wir sie auf jeden Fall los. Zwar ist die abschreckende Wirkung geringer, kaum jemand wird uns jedoch verdächtigen.",
				answers: [
					{
						text: "Das war auf jeden Fall die bessere Wahl",
						newChapter: true,
					},
				],
			},
			gestuerzt: {
				text: "Sehr gute Möglichkeit! Das sendet genau die richtige Nachricht an Journalist*innen und niemand wird beweisen können, dass wir etwas damit zu tun hatten.",
				answers: [
					{
						text: "Das war der Plan",
						goto: "stellungnahme",
					},
				],
			},
			stellungnahme: {
				text: "In- und ausländische Medien möchten eine Stellungnahmen von dir zu dem Vorfall. Was sollen wir ihnen sagen?",
				answers: [
					{
						text: "Gar nichts. Schweigen ist Gold.",
						goto: "schweigen",
						variables: [
							{
								text: "aussenbeziehungen",
								amount: -3,
							},
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Sagen wir ihnen, dass sie aufgrund einer undiagnostiziert Krankheit einen Schwindelanfall erlitt und in Folge dessen durch das Fenster stürzte.",
						goto: "schwindelanfall",
						variables: [
							{
								text: "time",
								amount: 2,
							},
						],
					},
					{
						text: "Sie hat sich einer Hausdurchsuchung wegen illegaler Aktivitäten widersetzt und versucht, durch das Fenster zu fliehen.",
						goto: "hellhoerig",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: 53,
							},
							{
								text: "time",
								amount: 1,
							},
						],
					},
				],
			},
			schweigen: {
				text: "Das wird ihnen nicht gefallen. Aber so können sie uns nichts anhängen.",
				answers: [
					{
						text: "Die können uns aber auch nicht einfach rumkommandieren.",
						newChapter: true,
					},
				],
			},
			schwindelanfall: {
				text: 'Sehr gute Idee. Ich bereite schonmal die Befundsberichte ihrer "Krankheit" vor.',
				answers: [
					{
						text: "Danke",
						newChapter: true,
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -8,
							},
						],
					},
				],
			},
			hellhoerig: {
				text: "Die Polizei wollte doch nur mit ihr reden. Das wird andere Journalist*innen jedoch hellhörig werden lassen.",
				answers: [
					{
						text: "Das war das kleinste Übel.",
						newChapter: true,
					},
				],
			},
			zuNaiv: {
				text: "Naiv von dir zu glauben, du hättest nicht schon längst Blut an dir kleben. Wir müssen auf Nummer sicher gehen und dein Vorschlag bietet hier keine Sicherheit.",
				info: "Deniz Yücel", //TODO
				answers: [
					{
						text: "Ich verstehe.",
						goto: "vernuenftigOhne3",
					},
					{
						text: "Ich werde nicht für den Tod einer Person verantwortlich sein.",
						goto: "mordNudger",
					},
				],
			},
			mordNudger: {
				text: "Sei vernünftig und setze es in Perspektive. Sollten die Informationen an die Öffentlichkeit gelangen, wird das unserem Land und Volk massiv schaden. Wen kümmert diese staatsfeindliche Journalistin?",
				answers: [
					{
						text: "Ich verstehe.",
						goto: "vernuenftigOhne3",
					},
					{
						text: "Das läuft alles vollkommen aus dem Ruder. Ich mach' hier nicht mehr mit!",
						goto: "ergebnis/mordUndTotschlagEnde",
					},
				],
			},
			vernuenftigOhne3: {
				text: 'Ich wusste doch, dass du vernünftig bist. Wir sollten unseren Fokus auf die Gründerin des Blogs "Veritas" legen. Nach Ermittlungen unseres Geheimdienstes scheint sie in Besitz belastender Informationen gegenüber dir und der Regierung zu sein. Es sind also radikale, sofortige Maßnahmen erforderlich. Wie sollen wir vorgehen?',
				info: "In Russland kommt es immer wieder zu Vorfällen, bei denen der Regierung gegenüber kritische Journalist*innen unter unklaren Umständen sterben.  So ist beispielsweise 2018 der Investigativjournalist Maxim Borodin ums Leben gekommen. Er fiel aus seiner Wohnung im fünften Stock. Nach offiziellen Angaben handle es sich um einen Unfall oder um Selbstmord. Kolleg*innen hingegen merken die verdächtigen Umstände dieses Vorfalls an.",
				answers: [
					{
						text: 'Journalist*innen sind doch bekannt dafür, tollpatschig zu sein. Ich denke, sie sollte aus dem sechsten Stock ihres Apartments "stürzen". Unfälle passieren eben. Besonders wenn man nachhilft.',
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -133,
							},
							{
								text: "aussenbeziehungen",
								amount: -5,
							},
							{
								text: "time",
								amount: 2,
							},
						],
						goto: "gestuerzt",
					},
					{
						text: "Die Journalistin sollte diskret verschwinden. Wie wäre es, wenn sie von ihren regelmäßigen Wanderungen nicht wieder nach Hause kommt? Wandern ist nunmal nicht ganz ungefährlich.",
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -41,
							},
							{
								text: "time",
								amount: 4,
							},
						],
						goto: "diskretVerschwunden",
					},
				],
			},
		},
	},

	klageErgebnis: {
		props: {},
		questions: {
			klageErfolglos: {
				conditions: [
					{
						variableName: "geklagt",
						type: "==",
						value: true,
					},
					{
						variableName: "time",
						type: ">=",
						value: 6 * timepermonth,
					},
					{
						variableName: "klageErgebnis",
						type: "==",
						value: false,
					},
					{
						variableName: "klageErfolg",
						type: "==",
						value: false,
					},
				],
				text: "Das Urteil des Adrejanischen Gerichtshofs ist durch: Nuppland hat leider nicht Recht bekommen. Das bedeutet, dass ihr nach wie vor schon bei wenigen Verstößen gegen die Rechtsstaatlichkeit mit weniger AU-Geldern rechnen könnt.",
				info: "Polen und Ungarn haben vor dem Europäischen Gerichtshof gegen den Rechtsstaatsmechanismus der EU geklagt. Bisher wurde nach Kompromissen gesucht. Zur Zeit wird der Mechanismus trotzdem ausgeführt. Eine abschließende Prüfung steht noch aus.",
				answers: [
					{
						text: "Kann man wohl nichts machen.",
						goto: "/back",
						variables: [
							{
								text: "klageErgebnis",
								value: true,
							},
							{
								text: "kritischeJournalisten",
								amount: 26,
							},
						],
					},
				],
			},

			klageErfolgreich: {
				conditions: [
					{
						variableName: "geklagt",
						type: "==",
						value: true,
					},
					{
						variableName: "time",
						type: ">=",
						value: 6 * timepermonth,
					},
					{
						variableName: "klageErfolg",
						type: "==",
						value: true,
					},
					{
						variableName: "klageErgebnis",
						type: "==",
						value: false,
					},
				],
				text: "Der Adrejanische Gerichtshof hat sich beraten, Nuppland hat Recht bekommen. Das bedeutet, dass Nuppland erst bei starken Verstößen mit Sanktionen belegt wird. Herzlichen Glückwunsch zum Erfolg vor Gericht!",
				info: "Polen und Ungarn haben vor dem Europäischen Gerichtshof gegen den Rechtsstaatsmechanismus der EU geklagt. Bisher wurde nach Kompromissen gesucht. Zur Zeit wird der Mechanismus trotzdem ausgeführt. Eine abschließende Prüfung steht noch aus.",
				answers: [
					{
						text: "Yes! Glück gehabt!",
						goto: "/back",
						variables: [
							{
								text: "sanktionsschwelle",
								value: -22,
							},
							{
								text: "klageErgebnis",
								value: true,
							},
							{
								text: "kritischeJournalisten",
								amount: 31,
							},
						],
					},
				],
			},

			/*
			Die Werbesteuer betrifft natürlich auch die öffentlich-rechtlichen Medien. Wie willst du damit umgehen? (mehr Subventionen, vom Gesetz her ausnehmen, Abgabe dafür erhöhen) Wir brauchen auch noch einen schicken Namen dafür ;) (Medienabgabe, Werbeprämie, Werbegebühr) oder Unter welchem Titel bringen wir das jetzt ins Volk?
		
		*/
		},
	},

	sanktionen: {
		props: {},
		questions: {
			sanktionen14: {
				text: "Übrigens: Ich hab dich gewarnt! Die Adrejanische Union verhängt Sanktionen gegen Nuppland. Grund dafür sind die mehrfachen Verstöße gegen die Verträge, auf denen die AU aufbaut. Rechtstaatlichkeit und Pressefreiheit werden dort als hohe Werte angesehen. Es gibt also weniger Geld von der AU, und dadurch sinkt natürlich auch deine Zustimmung bei der Bevölkerung.",
				answers: [
					{
						goto: "/back",
						text: "Mhhh... Wir müssen trotzdem weitermachen! Zurück zum Thema!",
						variables: [
							{
								text: "sanktionen",
								value: true,
							},
							{
								text: "ergebnisOffset",
								amount: -10,
							},
						],
					},
				],
			},
			sanktionen22: {
				text: "Übrigens: Ich hab dich gewarnt! Die Adrejanische Union verhängt Sanktionen gegen Nuppland. Grund dafür sind die mehrfachen Verstöße gegen die Verträge, auf denen die AU aufbaut. Rechtstaatlichkeit und Pressefreiheit werden dort als hohe Werte angesehen. Es gibt also weniger Geld von der AU, und dadurch wird natürlich auch dein Wahlergebnis schlechter. Und das alles, obwohl du erfolgreich geklagt hast und das Verfahren lange aufschieben konntest.",
				answers: [
					{
						text: "Mhhh... Weitermachen müssen wir trotzdem. Zurück zum Thema!",
						variables: [
							{
								text: "sanktionen",
								value: true,
							},
							{
								text: "ergebnisOffset",
								amount: -6,
							},
						],
						goto: "/back",
					},
				],
			},
		},
	},

	nachfragen: {
		props: {},
		questions: {
			letzteNachfrage: {
				text: "Willst du deine politische Karriere wirklich abbrechen?",
				answers: [
					{
						text: "Ja, ich trete zurück.",
						goto: "ergebnis/ergebnis",
						variables: [
							{
								text: "time",
								value: 12 * timepermonth,
							},
							{
								text: "ergebnisOffset",
								amount: -30,
							},
						],
					},
					{
						text: "Nein, ich versuche es doch nochmal mit etwas anderem.",
						newChapter: true,
					},
				],
			},

			vorErgebnis0: {
				conditions: [
					{
						variableName: "time",
						type: "<=",
						value: 6 * timepermonth,
					},
				],
				text: "Du scheinst nicht wirklich viel ändern zu wollen, also würde ich vorschlagen, dass wir direkt zur Wahl vorspringen. Aber da du deinen Einfluss so wenig genutzt hast, haben die Medien wahrscheinlich wenig zu eurem Wahlkampf beigetragen.",
				answers: [
					{
						text: "Okay, dann machen wir halt dort weiter.",
						goto: "ergebnis/ergebnis",
						variables: [
							{
								text: "ergebnisOffset",
								amount: -18,
							},
						],
					},
				],
			},
			vorErgebnis1: {
				conditions: [
					{
						variableName: "time",
						type: "<=",
						value: timepermonth * 9,
					},
					{
						variableName: "time",
						type: ">=",
						value: timepermonth * 6 + 1,
					},
				],
				text: "Du scheinst nicht sooo viel ändern zu wollen, also würde ich vorschlagen, dass wir direkt zur Wahl vorspringen. Viel mehr Ideen habe ich leider nicht mehr für deinen Wahlkampf. Insofern haben die Medien wahrscheinlich wenig zu eurem Wahlkampf beigetragen.",
				answers: [
					{
						text: "Okay, dann machen wir halt dort weiter.",
						goto: "ergebnis/ergebnis",
						variables: [
							{
								text: "ergebnisOffset",
								amount: -13,
							},
						],
					},
				],
			},
			vorErgebnis2: {
				conditions: [
					{
						variableName: "time",
						type: "<=",
						value: timepermonth * 11 - 1,
					},
					{
						variableName: "time",
						type: ">=",
						value: timepermonth * 9 + 1,
					},
				],
				text: "Viel mehr Ideen habe ich leider nicht mehr für deinen Wahlkampf. Was hältst du von einer kurzen Pause, bis die Wahl stattfindet?",
				answers: [
					{
						text: "Okay, bis in ein paar Wochen!.",
						goto: "ergebnis/ergebnis",
						variables: [
							{
								text: "ergebnisOffset",
								amount: -6,
							},
						],
					},
				],
			},
		},
	},

	ergebnis: {
		props: {
			title: "Ergebnis",
			description: "Ab zum Schluss (diese Nachricht solltest du nicht sehen)",
		},
		questions: {
			ergebnis: {
				conditions: [],
				text: "Okay, die Zeit ist vorbei. Schauen wir mal, wie deine Bilanz so aussieht. Bisher gibt es noch $kritischeJournalisten kritische Journalist*innen im Land. $ergebnisErgänzung",

				answers: [
					{
						text: "Und was ist mit dem Wahlergebnis?",
						goto: "ergebnis2",
					},
				],
			},

			ergebnis2: {
				text: `Bei der Wahl kommt deine Partei auf $wahlergebnis Prozent der Stimmen! Wenn du die Medien kontrollierst, kriegst du also auch bessere Ergebnisse. Je weniger kritische Beiträge über dich erscheinen, desto besser deine Chancen auf ein gutes Wahlergebnis.<br><br>Du möchtest, dass dein Ergebnis auf der Rangliste veröffentlicht wird? Gib hier deinen Namen an:<br><form method=post onsubmit="submitScore(event)" enctype="multipart/form-data"><input type="text" pattern="[a-zA-Z0-9À-ÿ-. ]{3,30}" minlength=3 maxlength=30 placeholder='Dein Name (Buchstaben, Zahlen oder ".- ")' id="submitScoreInput" required><button type=submit id=submitScoreButton >Eintragen!</button>`,
				answers: [
					{
						text: "Und jetzt?",
						goto: "einladungInfo",
					},
				],
			},
			einladungInfo: {
				text: 'Dieses Spiel sollte dir zeigen, wie Länder Einfluss auf die Pressefreiheit nehmen können. Obwohl deine Story hier natürlich fiktiv war, passieren einige der hier angesprochenen Dinge tatsächlich gerade oder sind bereits passiert. In Polen wird zum Beispiel eine Werbeabgabe initiiert, die es unabhängigen Medien sehr schwer macht, zu bestehen. Der öffentlich-rechtliche Rundfunk in Polen wird außerdem von einem lediglich fünfköpfigen Gremium beaufsichtigt, das von politischen Vertretern gewählt wird. In Ungarn oder Belarus ist die Lage zum Teil noch dramatischer. Wenn du mehr dazu erfahren willst, wirf doch mal einen Blick auf die kleinen Fragezeichen unten rechts neben den Fragen, die dir mehr zu den Hintergründen erzählen. Die NGO "Reporter ohne Grenzen" gibt jährlich eine <a target="_blank" href=https://www.reporter-ohne-grenzen.de/weltkarte/#rangliste-der-pressefreiheit>"Rangliste der Pressefreiheit"</a> heraus. Polen und Ungarn sind in den letzten Jahren beide dramatisch abgerutscht. <br/> <br/> <b>Vielen Dank fürs Spielen!</b> <br> <br><button class=answerButton onclick="window.location.reload()">Neu starten</button>',
				answers: [],
			},
			mordUndTotschlagEnde: {
				text: "Natürlich steht es dir immer frei zu gehen. Ich denke wir finden durchaus kompetenteren Ersatz für dich, der bei wichtigen Entscheidungen keinen Rückzieher macht. Vergiss nur nie, welchen Umgang wir mit Staatsfeinden pflegen.",
				answers: [
					{
						text: "Ich bin kein Mörder.",
						goto: "achievementKeinMoerder",
					},
				],
			},
			achievementKeinMoerder: {
				text: "Du hast eine Auszeichnung erhalten: Kein Mörder!",
				mediumType: "image",
				mediumSource: "https://picsum.photos/1000/1000?random=TODOKeinMoerder",
				answers: [
					{
						text: "Weiter",
						goto: "einladungInfo",
					},
				],
			},
		},
	},
}

const popups = {
	sanktionen: {
		conditions: [
			{
				variableName: "aussenbeziehungen",
				type: "<=",
				value: -6,
			},
		],
		message:
			"Aufpassen! Die Adrejanische Union schaut bei euch schon länger genauer hin. Wenn sich da noch was tut, verhängt die Union wahrscheinlich Sanktionen, was sich auch aufs Wahlergebnis auswirken dürfte.",
	},

	gutmensch: {
		conditions: [
			{
				variableName: "gutmensch",
				type: ">",
				value: 3,
			},
		],
		message:
			"Du Gutmensch! Eine plurale Medienlandschaft ist ja ganz nett, aber dein Job sieht anders aus. Die Umfragewerte deiner Partei schwinden.",
	},
	falsch: {
		conditions: [
			{
				variableName: "falsch",
				type: ">",
				value: 4,
			},
		],
		//headline: 'Hier eine Überschrift',
		message:
			"Du stellst dich echt nicht sonderlich gut an. Dein Ansehen in der Partei schwindet, und die Zeit bis zur Wahl auch. Halt dich besser ran, wenn du Rokossowski zufrieden sehen willst!" /*<img src='' class=''>*/,
	},
	guteArbeit: {
		conditions: [
			{
				variableName: "time",
				type: ">",
				value: 10 * timepermonth,
			},
			{
				variableName: "falsch",
				type: "<",
				value: 4,
			},
			{
				variableName: "time",
				type: "<=",
				value: 12 * timepermonth - 1,
			},
		],
		message:
			"Gute Arbeit! Rokossowski lobt dich. Bis zur Wahl sind es nur noch wenige Monate und bisher ist wenig Schlechtes über die WhR erschienen. Weiter so!",
	},
	zwischenergebnis: {
		conditions: [
			{
				variableName: "time",
				type: ">=",
				value: 7 * timepermonth,
			},
		],
		message:
			"Wenn nächsten Sonntag Wahlen wären, bekäme deine Partei nach Umfragewerten $wahlergebnis. Diese Werte solltest du allerdings nicht für bare Münze nehmen, da solche Umfragen nicht komplett repräsentativ die Bevölkerung abbilden können.",
	},
	zeit: {
		conditions: [
			{
				variableName: "time",
				type: ">",
				value: 8 * timepermonth - 1,
			},
			{
				variableName: "time",
				type: "<=",
				value: 12 * timepermonth - 1,
			},
		],
		message: "Du hast nicht mehr viel Zeit bis zur Wahl!",
	},

	//open end
}

/*
[
	{
		name: "...",
		score: "..."
	},
	{
		...
	}
	...
]
*/
fetch("./Bestenliste.json")
	.then(res => res.json())
	.then(highscores => {
		for (index in highscores) {
			let i = index - 1 + 2
			$(`#hs${i}name`).text(highscores[i - 1].name)
			$(`#hs${i}score`).text(highscores[i - 1].score)
			setTimeout(() => {
				$(`#hs${i}`).css("opacity", "1")
			}, 3000 - i * 500)
		}
	})
	.catch(reason => {
		console.error(reason)
		//Bestenliste kan nicht angezeigt werden
	})

let history = ""
let completeHistory = []
let kritJourStart = ranInt(800, 1000) //let because of test
let gameVariables = {
	time: 0, //bis zur nächsten Wahl
	falsch: 0, //falsche Entscheidung, für Gutmensch, aber auch für zu krasse Entscheidungen (vielleicht später raus?)
	//TODO: wird nur für Popup verwendet
	anerkennung: 0, //in der Partei?
	aussenbeziehungen: 5, //z. B. Beziehung zur EU
	staatsnaehe: 0, //muss versteckt sein. beschreibt, wie sehr die ÖRR und andere Medien vom Staat gelenkt werden
	gutmensch: 0,
	benennungAufkaufen: "Renationalisierung",
	zyklopLoesung: "", //der Ansatz, der für das Zyklop-Projekt gewählt wurde
	kritischeJournalisten: kritJourStart, //s. Barometer, kritJourStart beschreibt, wie viele Journalisten es am Anfang waren
	ergebnisOffset: 0,
	sanktionsschwelle: -14, //wird zu -22, falls die Klage erfolgreich war
	randomZyklop: Math.random(), //für Wahrscheinlichkeit
	aufgekauft: false, //wenn medien aufgekauft wurden
	geklagt: false, //ob geklagt wurde
	sanktionen: false, // ob Sanktionen schon erteilt wurden
	klageErfolg: kritJourStart > 920, //Klage erfolgreich, wenn man am Anfang schlechtere Karten hatte
	klageErgebnis: false, //wird true, sobald das Ergebnis angezeigt wurde
	entlassungenDone: false,
}

let wahlergebnis = 0 //bei jeder Frage wird das Wahlergebnis berechnet, damit es nicht zu verschiedenen Werten bei z.B. der Übermittlung in der Bestenliste kommt

let currentQuestion = {
	chapter: "intro",
	question: "willkommen",
}
let backQuestion = ""
let overrideGoto = ""

let startedChapters = [],
	previousPopups = []

showQuestion(currentQuestion)
initHeader()

function runTests(noOfTests) {
	test = noOfTests
	while (test) {
		showQuestion(currentQuestion)
	}
}

/**
 * @brief Wandelt Pfad in Keys um
 * @param  path string
 * @return {*} keys als Objekt
 */
function pathToKeys(path) {
	let chapter = currentQuestion.chapter,
		question = path
	if (path.indexOf("/") > -1) {
		const parts = path.split("/")
		chapter = parts[0]
		question = parts[1]
	}
	return { chapter, question }
}
/**
 * @brief Wandelt Keys in Pfad um
 * @param chapter string
 * @param question string
 * @returns string Fragepfad
 */
function keysToPath(chapter, question) {
	return `${chapter}/${question}`
}

/**
 * @brief Frageobjekt auf Basis von Chapter und Question - für Pfad: getQuestionFromPath
 * @param chapter string
 * @param question string
 * @returns Frageobjekt - die Frage
 */
function getQuestion(chapter, question) {
	if (chapters[chapter].questions[question] == undefined) {
		console.error(chapter, question)
	}
	return chapters[chapter].questions[question]
}

/**
 * @brief Frageobjekt auf Basis des Pfades
 * @param path string
 * @returns Frageobjekt
 */
function getQuestionFromPath(path) {
	const obj = pathToKeys(path)
	return getQuestion(obj.chapter, obj.question)
}

/**
 * mappt einen Wert (Dreisatz mit offset)
 * @param min Minimum des vorigen Bereichs
 * @param max Maximum des vorigen Bereichs
 * @param newMin Minimum des neuen Bereichs
 * @param newMax Maximum des neuen Bereichs
 * @param value der Wert, der in den neuen Bereich skaliert werden soll
 * @returns
 */
function map(min, max, newMin, newMax, value) {
	return ((value - min) / (max - min)) * (newMax - newMin) + newMin
}

/**
 * @brief zeigt das Popup zur aktuellen Frage an
 */
function showInfo() {
	showPopup({
		message: chapters[currentQuestion.chapter].questions[currentQuestion.question].info,
		button: "OK",
	})
}

/**
 * Zufallszahl zwischen min und max (ganz, beide Zahlen inklusive)
 * @param {*} min Der Minimalwert, der rauskommen soll
 * @param {*} max Der Maximalwert, der rauskommen soll
 * @returns Zufallszahl
 */
function ranInt(min, max) {
	return Math.floor(map(0, 1, min, max + 1, Math.random()))
}

/**
 * Zeigt eine Frage nach Keys an (getQuestion, getQuestionFromPath)
 * @param obj {chapter, question}
 */
function showQuestion(obj) {
	//-----------------LOGIK-----------------------
	//currentquestion setzen
	currentQuestion = obj
	history +=
		`Zeit: ${gameVariables.time}; ` +
		keysToPath(currentQuestion.chapter, currentQuestion.question) +
		"\n"

	//Wahlergebnis berechnen
	wahlergebnis = calcResult()

	// Zu gestarteten Kapiteln hinzufügen
	if (startedChapters.indexOf(obj.chapter) === -1) startedChapters.push(obj.chapter)

	if (test) {
		if (currentQuestion.chapter != "ergebnis")
			answerClick(ranInt(0, getQuestion(obj.chapter, obj.question).answers.length - 1))
		else if (test == 1) {
			//Testergebnis ausgeben
			console.log("test complete")
			let thisHistory = {
				h: history,
				e: wahlergebnis,
				id: test,
				kjs: kritJourStart,
				t: gameVariables.time,
			}
			completeHistory.push(thisHistory)
			const s = JSON.stringify(completeHistory)
			const b = new Blob([s], { type: "text/plain" })
			const url = window.URL.createObjectURL(b)
			const a = document.createElement("a")
			a.download = "stats.json"
			a.href = url
			a.click()
			test--
		} else if (test > 1) {
			let thisHistory = {
				h: history,
				e: wahlergebnis,
				id: test,
				kjs: kritJourStart,
				t: gameVariables.time,
			}
			completeHistory.push(thisHistory)
			history = ""
			gameVariables = {
				time: 0, //bis zur nächsten Wahl
				falsch: 0, //falsche Entscheidung, für Gutmensch, aber auch für zu krasse Entscheidungen (vielleicht später raus?)
				//TODO: wird nur für Popup verwendet
				anerkennung: 0, //in der Partei?
				aussenbeziehungen: 5, //z. B. Beziehung zur EU
				staatsnaehe: 0, //muss versteckt sein. beschreibt, wie sehr die ÖRR und andere Medien vom Staat gelenkt werden
				gutmensch: 0,
				benennungAufkaufen: "Renationalisierung",
				zyklopLoesung: "", //der Ansatz, der für das Zyklop-Projekt gewählt wurde
				kritischeJournalisten: kritJourStart, //s. Barometer, kritJourStart beschreibt, wie viele Journalisten es am Anfang waren
				ergebnisOffset: 0,
				sanktionsschwelle: -14, //wird zu -22, falls die Klage erfolgreich war
				randomZyklop: Math.random(), //für Wahrscheinlichkeit
				aufgekauft: false, //wenn medien aufgekauft wurden
				geklagt: false, //ob geklagt wurde
				sanktionen: false, // ob Sanktionen schon erteilt wurden
				klageErfolg: kritJourStart > 920, //Klage erfolgreich, wenn man am Anfang schlechtere Karten hatte
				klageErgebnis: false, //wird true, sobald das Ergebnis angezeigt wurde
				entlassungenDone: false,
			}
			kritJourStart = ranInt(800, 1000)
			wahlergebnis = 0
			currentQuestion = {
				chapter: "intro",
				question: "willkommen",
			}
			startedChapters = []
			previousPopups = []
			backQuestion = ""
			test--
		}
	}

	//---------------------ANZEIGE--------------------
	if (!test) {
		let question = getQuestion(obj.chapter, obj.question)

		//Frage statt Kapitelauswahl anzeigen
		document.getElementById("game").classList.remove("hidden")
		document.getElementById("chapterSelection").classList.add("hidden")

		//Fragemedium anzeigen
		let image = document.getElementById("frageBild")
		let video = document.getElementById("frageVideo")
		let audio = document.getElementById("frageAudio")
		switch (question.mediumType) {
			case undefined:
				image.classList.add("hidden")
				video.classList.add("hidden")
				audio.classList.add("hidden")
				break
			case "image":
				image.classList.remove("hidden")
				video.classList.add("hidden")
				audio.classList.add("hidden")
				image.src = question.mediumSource
				break
			case "video":
				image.classList.add("hidden")
				video.classList.remove("hidden")
				audio.classList.add("hidden")
				video.src = question.mediumSource
				video.oncanplaythrough = video.play
				break
			case "audio":
				image.classList.add("hidden")
				video.classList.add("hidden")
				audio.classList.remove("hidden")
				audio.src = question.mediumSource
				audio.oncanplaythrough = audio.play
				break
		}

		//Fragentext anzeigen
		document.getElementById("frage").innerHTML = question.text
			.replaceAll("$benennungAufkaufen", gameVariables.benennungAufkaufen)
			.replaceAll("$kritischeJournalisten", gameVariables.kritischeJournalisten)
			.replaceAll("$wahlergebnis", wahlergebnis)
			.replaceAll("$sanktionsschwelle", gameVariables.sanktionsschwelle)
			.replaceAll(
				"$ergebnisErgänzung",
				gameVariables.kritischeJournalisten > 1199
					? "So richtig erfolgreich warst du in diesem Punkt ja nicht wirklich."
					: gameVariables.kritischeJournalisten < 1200 &&
					  gameVariables.kritischeJournalisten > 800
					? "Naja, ein paar Weichen hast du auf jeden Fall gestellt."
					: "Gute Arbeit!"
			)

		//Fragezeichen anzeigen falls Info vorhanden
		if (question.info) {
			document.getElementById("info").style.display = "block"
		} else document.getElementById("info").style.display = "none"

		//bis zu 3 Antworten anzeigen
		for (let i = 0; i < 3; i++) {
			if (question.answers[i]) {
				document.getElementById(`antwort${i}`).classList.remove("hidden")
				document.getElementById(`antwort${i}`).innerHTML = question.answers[i].text
			} else {
				document.getElementById(`antwort${i}`).classList.add("hidden")
			}
		}
	}
}

/**
 * stoppt sämtliche Medien
 */
function stopMedia() {
	if (!test) {
		// Eventuelle Wiedergabe pausieren
		document.getElementById("frageVideo").pause()
		document.getElementById("frageAudio").pause()
		document.getElementById("frageVideo").oncanplaythrough = () => {}
		document.getElementById("frageAudio").oncanplaythrough = () => {}
	}
}

/**
 * @brief ändert Variablen
 * @param answer Antwortobjekt mit variables objekt
 */
function alterVariables(answer) {
	if (answer.variables) {
		for (let variable of answer.variables) {
			//wenn amount existiert: Addition, wenn nicht: ersetzen durch value
			if (variable.amount) gameVariables[variable.text] += variable.amount
			else gameVariables[variable.text] = variable.value
		}
	}
}

/**
 * Verarbeitet einen Antwortklick
 * @param answerNo Die answerNo-te Antwort (beginnt bei 0)
 */
function answerClick(answerNo) {
	const chosenAnswer = getQuestion(currentQuestion.chapter, currentQuestion.question).answers[
		answerNo
	]

	if (getQuestion(currentQuestion.chapter, currentQuestion.question).answers.length !== 1)
		history += `Antwort ${answerNo + 1} ausgewählt.\n`

	stopMedia()

	//Variablen anpassen
	alterVariables(chosenAnswer)

	if (gameVariables.time > timepermonth * 12) {
		// console.error("Zeit zu hoch: ", gameVariables.time)
		// history += `Error: Zeit zu hoch: ${gameVariables.time}\n`
		gameVariables.time = 12 * timepermonth
	}

	// Header anpassen
	setHeader()

	popupRoutine()

	showSmartNewQuestion(chosenAnswer)
}

/**
 * @brief Zeigt auf Basis eines Antwortobjekts eine neue Frage an
 *
 *  overrideGoto - Kapitelauswahl - Vorgeschriebenes nächstes Kapitel - goto inkl. back, notfalls Ergebnis
 * @param {*} answer das Antwortobjekt
 */
function showSmartNewQuestion(answer) {
	if (overrideGoto) {
		showQuestion(pathToKeys(overrideGoto))
		overrideGoto = ""
	} else if (answer.newChapter === true) {
		showChapterSelection()
	} else if (answer.newChapter) {
		startChapter(answer.newChapter)
	} else {
		let nextQuestion = answer.goto
		if (nextQuestion === "/back") {
			nextQuestion = backQuestion
		}
		if (!nextQuestion)
			console.error(
				"Hilfe, was soll als nächstes kommen?",
				currentQuestion,
				getQuestion(currentQuestion.chapter, currentQuestion.question),
				answer
			)
		else if (Array.isArray(nextQuestion)) {
			nextQuestion = getNewQuestion(answer.goto)
		}
		// if (gameVariables.time >= 12 * timepermonth && currentQuestion.chapter !== "ergebnis") {
		// 	nextQuestion = "ergebnis/ergebnis"
		// }
		showQuestion(pathToKeys(nextQuestion))
	}
}

/**
 * Zeigt die Kapitelauswahl an
 * @returns void
 */
function showChapterSelection() {
	//-------------------LOGIK--------------
	//ggf. Ergebnis

	//mögliche Kapitel suchen
	let availableChapters = Object.keys(chapters)
		.filter(el => startedChapters.indexOf(el) === -1)
		.filter(el => checkConditions(chapters[el].props))
	availableChapters = randomSelection(availableChapters, chapterSelectionCount)
	if (availableChapters.length === 0 || gameVariables.time >= timepermonth * 12) {
		if (availableChapters.length === 0) {
			console.error("Keine Kapitel zur Auswahl")
			history += "Error: Keine Kapitel zur Auswahl\n"
		}
		startChapter("ergebnis")
		return
	}

	//history pflegen
	history +=
		"Kapitelauswahl: " +
		JSON.stringify(availableChapters)
			.replaceAll('","', ", ")
			.replace('["', "")
			.replace('"]', "") +
		"\n"

	if (test) {
		// Zufälliges Kapitel starten, falls Test aktiviert
		startChapter(availableChapters[ranInt(0, availableChapters.length - 1)])
	}

	//-------------------ANZEIGE---------------
	if (!test) {
		document.getElementById("info").style.display = "none"

		document.getElementById("game").classList.add("hidden")
		document.getElementById("chapterSelection").classList.remove("hidden")

		for (let i = 0; i < chapterSelectionCount; i++) {
			const el = document.getElementById(`newChapter${i}`)
			if (availableChapters[i]) {
				el.style.display = "block"
				el.setAttribute("chapter", availableChapters[i])
				el.children[1].innerHTML = chapters[availableChapters[i]].props.title
				// el.children[2].innerHTML = chapters[availableChapters[i]].props.description
				if (chapters[availableChapters[i]].props.img) {
					el.children[0].src = chapters[availableChapters[i]].props.img
					el.children[0].style.display = "block"
				} else {
					el.children[0].style.display = "none"
				}
			} else {
				el.style.display = "none"
			}
		}
	}
}

/**
 * @brief Zufällig gekürztes Array
 */
function randomSelection(array, number = 3) {
	while (array.length > number) {
		array.splice(ranInt(0, array.length - 1), 1)
	}
	return array
}

/**
 * startet das Kapitel
 *
 * ggf mit Einwurf von Klage oder so
 * @param {*} name Name des Kapitels
 * @returns void
 */
function startChapter(name) {
	if (
		gameVariables.time >= 10 * timepermonth &&
		gameVariables.zyklopLoesung &&
		startedChapters.indexOf("zyklopAufloesung") === -1 &&
		name != "zyklopAufloesung"
	) {
		chapters.zyklopAufloesung.questions.dauertZuLange.answers[0].newChapter = name
		chapters.zyklopAufloesung.questions.drastischErfolgreich.answers[0].newChapter = name
		chapters.zyklopAufloesung.questions.drastischAlarm.answers[0].newChapter = name
		chapters.zyklopAufloesung.questions.entspanntErfolgreich.answers[0].newChapter = name
		chapters.zyklopAufloesung.questions.handysLangsam.answers[0].newChapter = name
		chapters.zyklopAufloesung.questions.mittelErfolgreich.answers[0].newChapter = name

		startChapter("zyklopAufloesung")
		return
	}

	history += `Springe zu Kapitel ${name}\n`
	if (startedChapters.indexOf(name) != -1) {
		console.warn(`Kapitel ${name} schon mal gestartet`)
	}
	startedChapters.push(name)

	let q
	if (typeof chapters[name].props.entry == "string") {
		//entry ist Fragenkey
		q = { chapter: name, question: chapters[name].props.entry }
	} else if (chapters[name].props.entry === undefined) {
		// entry ist nicht definiert (=> erste gültige Frage, egal was)
		let i = 0
		let questionName = Object.keys(chapters[name].questions)[i++]
		while (!checkConditions(chapters[name].questions[questionName])) {
			if (i === Object.keys(chapters[name].questions).length) {
				console.error(
					`Zeit nicht abgelaufen, aber keine Fragen aus dem Kapitel verfügbar, Kapitel ${name} Zeit: ${gameVariables.time}`
				)
				history += `Error: Zeit nicht abgelaufen, aber keine Fragen aus dem Kapitel verfügbar, Zeit: ${gameVariables.time}\n`
				gameVariables.time = timepermonth * 12
				startChapter("ergebnis")
				return
			}
			questionName = Object.keys(chapters[name].questions)[i++]
		}
		q = { chapter: name, question: questionName }
	} else if (Array.isArray(chapters[name].props.entry)) {
		// entry ist ein Array (=> erste gültige Frage aus dem Array)
		for (el of chapters[name].props.entry) {
			if (checkConditions(chapters[name].questions[el])) {
				q = { chapter: name, question: el }
				break
			}
		}
	} else if (typeof chapters[name].props.entry === "number") {
		//entry ist eine Zahl (=> so vielte Frage, 0=erste Frage)
		q = {
			chapter: name,
			question: Object.keys(chapters[name].questions)[chapters[name].props.entry],
		}
	} else {
		throw "WTF condition #lskdaslfz"
	}
	//Kapitelanfang überschreiben, z.B. Klage
	switch (
		true //wie else if ... else if
	) {
		case gameVariables.time >= timepermonth * 6 &&
			gameVariables.geklagt &&
			!gameVariables.klageErgebnis &&
			gameVariables.klageErfolg:
			backQuestion = keysToPath(q.chapter, q.question)
			q = "klageErgebnis/klageErfolgreich"
			break
		case gameVariables.time >= timepermonth * 6 &&
			gameVariables.geklagt &&
			!gameVariables.klageErgebnis &&
			!gameVariables.klageErfolg:
			backQuestion = keysToPath(q.chapter, q.question)
			q = "klageErgebnis/klageErfolglos"
			break
		//1.3 erhöhen, um die Sanktionen später kommen zu lassen
		case !gameVariables.sanktionen &&
			gameVariables.sanktionsschwelle === -22 &&
			gameVariables.geklagt &&
			gameVariables.aussenbeziehungen <= -22 &&
			(Math.pow(Math.random(), 1.3) > gameVariables.time / (12 * timepermonth) ||
				q.chapter === "ergebnis"):
			backQuestion = keysToPath(q.chapter, q.question)
			q = "sanktionen/sanktionen22"
			break
		case !gameVariables.sanktionen &&
			gameVariables.sanktionsschwelle === -14 &&
			gameVariables.geklagt &&
			gameVariables.aussenbeziehungen <= -14 &&
			(Math.pow(Math.random(), 1.3) > gameVariables.time / (12 * timepermonth) ||
				q.chapter === "ergebnis"):
			backQuestion = keysToPath(q.chapter, q.question)
			q = "sanktionen/sanktionen14"
			break
	}
	if (typeof q === "string") q = pathToKeys(q)
	showQuestion(q)
}

/**
 * Zieht aus einem Array eine neue Frage - gefilter nach conditions
 *
 * ggf wird das Ergebnis aufgerufen, falls keine gültige Frage dabei ist
 * @param {*} gotoArray Array an Fragenpfaden
 * @returns Fragenpfad
 */
function getNewQuestion(gotoArray) {
	gotoArray = gotoArray.filter(el => checkConditions(getQuestionFromPath(el)))
	if (gotoArray.length > 1) console.warn(`gotoArray hat ${availableQuestions.length} Elemente!`)
	else if (gotoArray.length == 0) {
		console.error(
			`gotoArray hat keine Elemente. Springe zum Ergebnis, Zeit: ${gameVariables.time}`
		)
		history += `Error: gotoArray hat keine Elemente. Springe zum Ergebnis, Zeit: ${gameVariables.time}\n`
		gameVariables.time = 12 * timepermonth
		return getNewQuestion([
			"ergebnis/vorErgebnis0",
			"ergebnis/vorErgebnis1",
			"ergebnis/vorErgebnis2",
			"ergebnis/ergebnis",
		])
	}
	return gotoArray[0]
}

/**
 * @brief Guckt, ob Popups angezeigt werden müssen
 */
function popupRoutine() {
	if (!test) {
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
}

/**
 * Prüft conditions eines Objekts
 * @param obj enthält das conditions-Array (obj.conditions ist [])
 */
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

/**
 * prüft eine condition
 * @param {*} condition
 * @returns true oder false
 */
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

/**
 * zeigt ein Popup an
 * @param {*} popup das Popupobjekt
 */
function showPopup(popup) {
	//console.log('showing popup', popup)
	document.getElementById("popupbg").classList.remove("hidden")
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
		message.innerHTML = popup.message
			.replaceAll("$wahlergebnis", wahlergebnis)
			.replaceAll("<a", '<a target="_blank"')
	} else {
		message.style = "display: none"
	}
	button.innerHTML = popup.button || "Weiter"
}

/**Berechnet das Ergebnis */
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
		Math.round(Math.min(Math.max(ranInt(204, 244) / 10, result), ranInt(704, 761) / 10) * 10) /
			10 +
		"%"
	).replace(".", ",")
}

var barometerKritisch
/**Initialisiert das Barometer bzw die Header */
function initHeader() {
	if (!test) barometerKritisch = $("#barometerKritisch").barometer()
}

/**
 * Setzt Werte in HEader ein
 */
function setHeader() {
	if (!test) {
		document.getElementById(
			"headerText0"
		).innerHTML = `Kritische Journalist*innen: ${gameVariables.kritischeJournalisten}`
		document.getElementById(
			"headerText0Alt"
		).innerHTML = `Kritische Journalist*innen: ${gameVariables.kritischeJournalisten}`

		barometerKritisch.rotate(map(300, 1400, 225, -45, gameVariables.kritischeJournalisten))
		document.getElementById("header0progress").style.width = `${map(
			300,
			1400,
			0,
			100,
			gameVariables.kritischeJournalisten
		)}%`
		if (gameVariables.kritischeJournalisten <= 700)
			document.getElementById("header0progress").style["background-color"] = "green"
		if (gameVariables.kritischeJournalisten >= 1100)
			document.getElementById("header0progress").style["background-color"] = "red"

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

		let posP = Math.max(0, gameVariables.aussenbeziehungen)
		posP = Math.min(30, posP)
		posP = map(0, 30, 0, 100, posP)
		document.getElementById("header2bgP").style["grid-template-columns"] = `${posP}% ${
			100 - posP
		}%`
		let posN = Math.max(-30, gameVariables.aussenbeziehungen)
		posN = Math.min(0, posN)
		posN = map(0, -30, 0, 100, posN)
		document.getElementById("header2bgN").style["grid-template-columns"] = `${
			100 - posN
		}% ${posN}%`

		if (currentQuestion.chapter === "intro" && currentQuestion.question === "willkommen") {
			$("#highscoretable").css("opacity", "0")
			setTimeout(() => {
				$("#highscoretable").css("display", "none")
				$(".headerElement").css("display", "")
			}, 500)
		}
		if (currentQuestion.chapter === "intro" && currentQuestion.question === "vorstellung") {
			// console.log("x")
			$(".headerElement").css("opacity", "1")
		}
	}
}

/**überträgt den Score an den Server
 * @param e das event, das geblockt werden muss
 */
function submitScore(e) {
	e.preventDefault()
	console.log(`${document.getElementById("submitScoreInput").value}\n${wahlergebnis}`)
	fetch("https://ak-ts.de/klicks-unter-kontrolle-highscore", {
		method: "POST",
		headers: { "Content-Type": "text/plain" },
		body: `${document.getElementById("submitScoreInput").value}\n${wahlergebnis}`,
	})
}
