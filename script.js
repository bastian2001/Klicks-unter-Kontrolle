let test = 0

const timepermonth = 1,
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
				text: "Du wurdest befördert. Die Präsidentin von Nuppland, deine Chefin Rokossowski, hat dir die Aufgabe übertragen, die Medienpolitik des Landes zu organisieren. Deine Aufgabe: Eure Partei, die WhR (Wir haben Recht) soll wiedergewählt werden - und das geht am Leichtesten, wenn nichts Schlechtes über dich und deine Partei in den Medien erscheint. Links siehst du die Anzahl der kritischen Journalist*innen, die regelmäßig publizieren, im Land, und die Zahl muss runtergehen, und das geht am Leichtesten, indem man ihnen das Leben schwer macht. Viele geben dann auch von ganz allein auf. Verstanden?",
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
				text: "Du lebst in Nuppland. Nuppland ist Mitglied der Adrejanischen Union, eines Staatenbunds. Andere Staaten können also in eure Politik eingreifen und Sanktionen verhängen. Ins Ausland sollte daher nichts dringen, was euch Probleme bereiten könnte.",
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
				text: "Bisher gibt es einen öffentlich-rechtlichen Rundfunk in deinem Land. Dieser finanziert sich über eine Abgabe von allen, keine Steuer, und wird vom Rundfunkrat beobachtet. Insgesamt neun Menschen sitzen im Rat, von denen drei von der Präsidentin, vier von der ersten und zwei von der zweiten Parlamentskammer bestimmt werden. Meinst du, da kann man noch was machen?",
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
				text: "Richtig so! So kannst du leichter beeinflussen, was im Fernsehen läuft. Ein bisschen kann dein Ansehen nach Außen natürlich darunter leiden, aber irgendwie macht man sich ja immer Feinde.",
				info: 'In Polen hat die Regierungspartei PiS 2016 das "Kleine Mediengesetz" erlassen, in dem der Rundfunk umstrukturiert wurde. Auch der Rundfunkrat KRRiT wurde verkleinert, von ursprünglich neun auf fünf Mitglieder. Im Vergleich zu den Rundfunkräten in Deutschland ist das sehr wenig.',
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
						text: "Alle die Präsidentin, das hätte doch was.",
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
				text: "An sich wäre das zwar praktisch. So könnte die WhR sehr leicht bestimmen, was in den Medien läuft. Aber damit hast du es etwas übertrieben, und dein Ansehen im Ausland hat ein wenig gelitten. Eine Katastrophe war es nicht, aber sei nächstes Mal etwas vorsichtiger.",
				answers: [
					{
						text: "Okay, versuche ich.",
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
			bevoelkerung: {
				text: "Du bist doch kein Diplomat, dein Job ist es, ein gutes Wahlergebnis herbeizuführen. Glaubst du das so wirklich zu erreichen? Ich denke eher nicht. Naja, machen wir weiter.",

				answers: [
					{
						text: "Mmmhhh, okay.",
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
			gleich: {
				text: "Eigentlich ist es tatsächlich ganz gut so: Ein Teil der fünf Mitglieder wird je von der ersten und der zweiten Kammer sowie von der Präsidentin gewählt. Sagen wir, im Verhältnis 2:1:2? So kann die Präsidentin mit nur einer dritten Person eine Mehrheit herbeiführen. Im Ausland wird aber weniger darüber geredet werden.",
				answers: [
					{
						text: "Let's go!",
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
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Das ist nicht mein Stil. Ich glaub, ich bin nicht geschaffen dafür.",
						goto: "nachfrage/letzteNachfrage",
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
						newChapter: true,
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
						goto: "nachfrage/letzteNachfrage",
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
	renationalisierung: {
		props: {
			entry: 0,
			title: "Renationa&shy;lisierung",
			description:
				"Neue Regelung gegen Verstöße von Rechtsstaatlichkeit, z.B. gegen Einschränkungen der Medienfreiheit",
			conditions: [],
		},
		questions: {
			nuppisierung: {
				text: "80 Prozent der regionalen Tageszeitungen und Online-Nachrichtenplattformen gehörten zu einem nuppischen Unternehmen. Dieses wurde allerdings kürzlich vom Verlag Press Enterprises aus dem Nachbarland aufgekauft. Was bedeutet das für uns?",
				mediumType: "youtube",
				mediumSource: "E7VqsUseIs8",
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
				text: "Ausländische Auftraggeber können dir so viel leichter in die Berichterstattung deines Landes pfuschen. Und das kann wiederum dem Ansehen deiner Partei schaden.",
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
				text: "Außerdem lässt sich doch so viel schwieriger beeinflussen, was in den Medien steht. Im Wahlkampf könnte ein Feindbild, zum Beispiel das Nachbarland, sehr nützlich sein. Aber wenn die Medien Press Enterprises gehören, werden die wenig Kritisches schreiben.",
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
				answers: [
					{
						text: "Nuppland könnte die Medien zurückkaufen, so wäre die Kontrolle am einfachsten. Wir hätten direkten Einfluss auf die Personalentscheidungen und unser Einfluss würde auch im Lokalen wachsen!",
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
								amount: 85,
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
						text: "Wir könnten ein hiesiges Unternehmen nutzen, das Press Enterprises aufkauft. Das könnten wir staatlich fördern, sodass die Medien zum Teil dem Staat gehören würden. Einige Unternehmen gehören doch schon jetzt zum Teil dem Staat, zum Beispiel über Aktien.",
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
								amount: 156,
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
						],
					},
				],
			},

			pressefreiheit: {
				text: "Uhh, ganz schlechte Idee. Die anderen Länder der Adrejanischen Union haben uns doch eh schon auf dem Kieker. Wenn wir jetzt noch einen großen Teil der lokalen Presse kaufen, wird das nicht gut enden.",
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
						text: "Ist jetzt passiert, aber jetzt können wir unsere Macht natürlich auch ausnutzen. Da könnte man doch alle Journalisten entlassen, die sich mal kritisch geäußert haben, oder?",
						newChapter: "entlassung",
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
				text: 'Brillant! So bleibt das ganze unter der Hand und dringt nicht so an die Öffentlichkeit. Komplett geheim halten können wir das aber auch nicht. Wir nutzen für unsere $benennungAufkaufen also ein Unternehmen, das zum Teil staatlich ist, um diese Titel, Internetportale, Vertriebskanäle und Druckereien aufzukaufen. So können wir die Medien wieder "nuppisieren" und ausländische Investoren zurückdrängen. Aber welches Unternehmen nutzen wir dafür?',
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
							{
								text: "kritischeJournalisten",
								amount: 86,
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
							{
								text: "kritischeJournalisten",
								amount: 42,
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
							{
								text: "kritischeJournalisten",
								amount: 124,
							},
						],
					},
				],
			},

			orlen: {
				text: "Klingt zwar erst einmal skurril, aber du hast die beste Wahl getroffen! In Tankstellen und Kiosks werden viele der Pressetitel verkauft, da könnte man also bestimmte Titel bevorzugen, und bei anderen gibt es dann vielleicht... hmm... Lieferengpässe oder so? Was wir natürlich niemals tun würden, oder? ;)",
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
				text: "Nicht deine beste Idee. Wenn ein Haufen Zeitungstitel und Onlineportale von einer PR-Agentur aufgekauft werden, wo der Staat seine Finger mit im Spiel hat, werden natürlich alle misstrauisch. Versuch doch nächstes mal, etwas subtiler zu agieren.",
				info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
				answers: [
					{
						text: "Na gut, ich versuch's.",
						newChapter: true,
					},
				],
			},

			nachfrage2: {
				text: "Hältst du das echt für schlau? So liegen die Medien in ausländischen Händen.",
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
						text: "Ne, wir lassen das so. Einer plurale Medienlandschaft sollte das nicht schaden.",
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
							{
								text: "kritischeJournalisten",
								amount: 234,
							},
						],
					},
				],
			},

			nagut2: {
				text: "Du spinnst doch. Wess' Brot ich ess', dess' Lied ich sing'. Ist doch klar, dass die so genau das gleiche Mainstream-Geblubber schreiben werden wie alle, statt unsere Partei zu pushen!",
				answers: [
					{
						text: "Weiter.",
						newChapter: true,
					},
				],
			},
		},
	},

	umgangMitKritik: {
		props: {
			entry: 0,
			title: "Manipulation",
			description: "Die Adrejanische Union hat Wind bekommen",
			conditions: [
				{
					variableName: "time",
					type: "<=",
					value: 9.5 * timepermonth,
				},
			],
		},
		questions: {
			obama: {
				text: 'Melek Orama ist Präsident von Odenia, einem sehr wichtigen Land der AU. Auf einem wichtigen Regierungsgipfel sagte er heute: "Wir blicken besorgt auf die nuppische Demokratie. Die demokratischen Verfahren werden zunehmend abgebaut, aber es ist wichtig, dass alle Staaten zusammenarbeiten. Nuppland ist als Beispiel für die ganze Welt zu sehen."',
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
								amount: -2,
							},
							{
								text: "kritischeJournalisten",
								amount: 48,
							},
						],
					},
					{
						text: "Das können wir nicht zeigen! Vielleicht ein paar Schnittbilder von seiner Rede, aber nicht dieses Zitat.",
						goto: "verschweigen",
						variables: [
							{
								text: "time",
								amount: 1,
							},
						],
					},
					{
						text: "Der Satz mit dem Beispiel ist doch wirklich missverständlich formuliert. Den kann man doch auch positiv umdeuten, wem soll das denn auffallen? Ein bisschen Kosmetik und schon sagt er das Gegenteil und lobt unsere Demokratie.",
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
				text: "Du hast Recht. Falls wir da was manipulieren, fliegt uns hier alles um die Ohren. Die Äußerung wird natürlich auch in den anderen Ländern wahrgenommen werden, aber wir müssen auch selbst dazu stehen.",
				info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
				mediumType: "youtube",
				mediumSource: "WC6Y9zMQsHI",
				answers: [
					{
						text: "Ich hoffe, da gibt's nicht noch Ärger.",
						newChapter: true,
					},
				],
			},
			verschweigen: {
				text: "Können wir natürlich versuchen. Aber falls das noch rauskommt, haben wir echt ein Problem.",
				mediumType: "youtube",
				mediumSource: "w0EVg8c0eL8",
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
						text: "Dann geben wir eine versteckte Drohung an die Journalisten raus. Vielleicht hilft das, die zum Verstummen zu bringen.",
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
				text: 'Riskant. Aber gut. Dann übersetzen wir den Satz also... "Wir blicken auf die nuppische Demokratie. Es ist wichtig, dass alle Staaten zusammenarbeiten. Nuppland ist als Beispiel für die ganze Welt zu sehen." Das fällt doch keinem auf!',
				mediumType: "youtube",
				mediumSource: "P6nXtTzL13U",
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
								amount: -6,
							},
							{
								text: "kritischeJournalisten",
								amount: 107,
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
								amount: 38,
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
								amount: 4,
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
								amount: 49,
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
				text: "Dein Ernst? So fühlen sich doch alle auf den Arm genommen. Sowohl deine Partei als auch deine Beziehungen ins adrejanische Ausland leiden.",
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
				text: "Es ist deine Entscheidung. Mit dieser Einstellung wirst du unserem Land jedoch keinen Dienst erweisen. Moralapostel!",
				answers: [
					{
						text: "Okay",
						newChapter: true,
						variables: [
							{
								text: "time",
								amount: 3,
							},
							{
								text: "gutmensch",
								amount: 1,
							},
							{
								text: "falsch",
								amount: 2,
							},
						],
					},
				],
			},
			vernuenftig: {
				text: 'Ich wusste doch, dass du vernünftig bist. Wir sollten unseren Fokus auf die Gründerin des Blogs "Veritas" legen. Nach Ermittlungen unseres Geheimdienstes scheint sie in Besitz belastender Informationen über dich und die Regierung zu sein. Es sind also radikale, sofortige Maßnahmen erforderlich. Wie sollen wir vorgehen?',
				info: "In Russland kommt es immer wieder zu Vorfällen, bei denen der Regierung gegenüber kritische Journalist*innen unter unklaren Umständen sterben.  So ist beispielsweise 2018 der Investigativjournalist Maxim Borodin ums Leben gekommen. Er fiel aus seiner Wohnung im fünften Stock. Nach offiziellen Angaben handle es sich um einen Unfall oder um Selbstmord. Kolleg*innen hingegen merken die verdächtigen Umstände dieses Vorfalls an. <a href='https://www.faz.net/aktuell/feuilleton/russischer-journalist-borodin-stirbt-selbstmord-unfall-oder-mord-15553929.html'>Link 1</a>, <a href='https://taz.de/Mysterioeser-Todesfall-in-Russland/!5498686/'>Link 2</a>",
				answers: [
					{
						text: 'Journalist*innen sind doch bekannt dafür, tollpatschig zu sein. Ich denke, sie sollte aus dem sechsten Stock ihres Apartments "stürzen". Unfälle passieren eben. Besonders wenn man nachhilft.',
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -116,
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
								text: "anerkennung",
								amount: 1,
							},
						],
						goto: "gestuerzt",
					},
					{
						text: 'Wie wäre es wenn die Journalistin während ihrer regelmäßigen Wanderungen über einen "Ast stolpert" und sich ein Bein bricht? Einige Waldwege sind wirklich schlecht gesichert. Es wäre zu schade, wenn auch ihrer Familie das Gleiche passieren würde... ;)?',
						variables: [
							{
								text: "kritischeJournalisten",
								amount: -11,
							},
							{
								text: "time",
								amount: 4,
							},
							{
								text: "aussenbeziehungen",
								amount: -2,
							},
						],
						goto: "diskretVerschwunden",
					},
					{
						text: "Ich möchte kein Blut an meinen Händen kleben haben. Es genügt, wenn wir ihr einen Denkzettel verpassen. Sperren wir sie für ein Wochenende ins Gefängnis, aber genug ist genug!",
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
				text: "Das würde ihr auf alle Fälle mächtig Angst einjagen, die abschreckende Wirkung gegenüber anderen Journalist*innen ist jedoch geringer.",
				answers: [
					{
						text: "Das war auf jeden Fall die bessere Wahl.",
						newChapter: true,
					},
				],
			},
			gestuerzt: {
				text: "Sehr gute Möglichkeit! Das sendet genau die richtige Nachricht an Journalist*innen und niemand wird beweisen können, dass wir etwas damit zu tun hatten.",
				mediumType: "youtube",
				mediumSource: "RjE3mioliu0",
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
								amount: -2,
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
							{
								text: "falsch",
								amount: 1,
							},
						],
					},
				],
			},
			schweigen: {
				text: "Das wird den Medien nicht gefallen. Aber so können sie uns nichts anhängen.",
				answers: [
					{
						text: "Tja, wer ist hier in der Regierung?",
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
				text: "Keine gute Idee. Das wird andere Journalist*innen hellhörig werden lassen!",
				answers: [
					{
						text: "Das war das kleinste Übel.",
						newChapter: true,
					},
				],
			},
			zuNaiv: {
				text: "Naiv von dir zu glauben, du hättest nicht schon längst Blut an dir kleben. Wir müssen auf Nummer sicher gehen, was die Berichterstattung angeht. Und dein Vorschlag bietet hier keine Sicherheit.",
				info: "Weltweit sitzen jährlich hunderte Journalist*innen aufgrund ihrer Berichterstattung im Gefängnis. Ein prominentes Beispiel hierfür ist der deutsch- türkische Journalist Deniz Yücel, der durch seine kritische journalistischen Arbeit ca. ein Jahr in türkischer Haft war. Erst durch diplomatischen Druck aus Deutschland wurde Yücel letztendlich freigelassen. <a href='https://www.hessenschau.de/kultur/interview-mit-deniz-yuecel-die-freiheit-der-kunst-gilt-auch-fuer-die-bescheuerten,deniz-yuecel-pen-praesident-100.html'>Link 1</a>, <a href='https://www.reporter-ohne-grenzen.de/barometer/2021/journalisten-in-haft'>Link 2</a>, <a href='https://www.sueddeutsche.de/politik/deniz-yuecel-prozess-chronologie-1.4946432'>Link 3</a>",
				answers: [
					{
						text: "Ich verstehe. Dann müssen wir doch radikaler vorgehen.",
						goto: "vernuenftigOhne3",
					},
					{
						text: "Ich werde weder für einen Angriff gegen sie noch für ihren Tod verantwortlich sein.",
						goto: "mordNudger",
					},
				],
			},
			mordNudger: {
				text: "Sei vernünftig und setze es in Perspektive. Sollten die Informationen an die Öffentlichkeit gelangen, wird das unserem Land und Volk massiv schaden. Wen kümmert diese staatsfeindliche Journalistin?",
				answers: [
					{
						text: "Das läuft alles vollkommen aus dem Ruder. Ich mach' hier nicht mehr mit!",
						goto: "ergebnis/mordUndTotschlagEnde",
					},
				],
			},
			vernuenftigOhne3: {
				text: 'Ich wusste doch, dass du vernünftig bist. Wir sollten unseren Fokus auf die Gründerin des Blogs "Veritas" legen. Nach Ermittlungen unseres Geheimdienstes scheint sie in Besitz belastender Informationen über dich und die Regierung zu sein. Es sind also radikale sofortige Maßnahmen erforderlich. Wie sollen wir vorgehen?',
				info: "In Russland kommt es immer wieder zu Vorfällen, bei denen der Regierung gegenüber kritische Journalist*innen unter unklaren Umständen sterben.  So ist beispielsweise 2018 der Investigativjournalist Maxim Borodin ums Leben gekommen. Er fiel aus seiner Wohnung im fünften Stock. Nach offiziellen Angaben handle es sich um einen Unfall oder um Selbstmord. Kolleg*innen hingegen merken die verdächtigen Umstände dieses Vorfalls an. <a href='https://www.faz.net/aktuell/feuilleton/russischer-journalist-borodin-stirbt-selbstmord-unfall-oder-mord-15553929.html'>Link 1</a>, <a href='https://taz.de/Mysterioeser-Todesfall-in-Russland/!5498686/'>Link 2</a>",
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
						text: 'Wie wäre es wenn die Journalistin während ihrer regelmäßigen Wanderungen über einen "Ast stolpert" und sich ein Bein bricht? Einige Waldwege sind wirklich schlecht gesichert. Es wäre zu schade, wenn auch ihrer Familie das Gleiche passieren würde... ;)',
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
	sanktionen: {
		props: {},
		questions: {
			sanktionen14: {
				text: "Übrigens: Ich hab dich gewarnt! Die Adrejanische Union verhängt Sanktionen gegen Nuppland. Grund dafür sind die mehrfachen Verstöße gegen die Verträge, auf denen die AU aufbaut. Rechtstaatlichkeit und Pressefreiheit werden dort als hohe Werte angesehen. Es gibt also weniger Geld von der AU, und dadurch sinkt natürlich auch deine Zustimmung bei der Bevölkerung.",
				answers: [
					{
						goto: "/back",
						text: "Zurück zum Thema!",
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

	nachfrage: {
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
		},
	},

	ergebnis: {
		props: {
			title: "Ergebnis",
			description: "Ab zum Schluss (diese Nachricht solltest du nicht sehen)",
		},
		questions: {
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
						goto: "ergebnis",
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
						goto: "ergebnis",
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
						goto: "ergebnis",
						variables: [
							{
								text: "ergebnisOffset",
								amount: -6,
							},
						],
					},
				],
			},
			ergebnis: {
				conditions: [
					{
						variableName: "time",
						type: ">=",
						value: timepermonth * 11,
					},
				],
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
				text: "Das war ja moralisch beinahe einwandfrei. Du hast also doch deine Grenzen... Respekt! Vielleicht bist du einfach nicht für die Macht geschaffen. Die WhR hat dich schnell gegen jemanden ersetzt, der sowieso an deinem Stuhl gesägt hat. Aber immerhin: Du bist echt eine moralische Instanz ... naja.",
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
				value: 2,
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
				value: 2,
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
				value: 2,
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
// fetch("./Bestenliste.json")
// 	.then(res => res.json())
// 	.then(highscores => {
// 		for (index in highscores) {
// 			let i = index - 1 + 2
// 			$(`#hs${i}name`).text(highscores[i - 1].name)
// 			$(`#hs${i}score`).text(highscores[i - 1].score)
// 			setTimeout(() => {
// 				$(`#hs${i}`).css("opacity", "1")
// 			}, 3000 - i * 500)
// 		}
// 	})
// 	.catch(reason => {
// 		console.error(reason)
// 		//Bestenliste kan nicht angezeigt werden
// 	})

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

let endTime = -1
/**
 * Zeigt eine Frage nach Keys an (getQuestion, getQuestionFromPath)
 * @param obj {chapter, question}
 */
function showQuestion(obj) {
	//-----------------LOGIK-----------------------
	//currentquestion setzen
	currentQuestion = obj
	history += `Zeit: ${gameVariables.time}; ` + keysToPath(currentQuestion.chapter, currentQuestion.question) + "\n"

	//Wahlergebnis berechnen
	wahlergebnis = calcResult()

	// Zu gestarteten Kapiteln hinzufügen
	if (startedChapters.indexOf(obj.chapter) === -1) startedChapters.push(obj.chapter)

	if (test) {
		if (endTime != -1 && currentQuestion.chapter != "ergebnis") endTime = -1
		if (endTime === -1 && (currentQuestion.chapter == "ergebnis" || currentQuestion.chapter == "nachfrage")) {
			endTime = gameVariables.time
		}
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
				t: endTime,
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
				t: endTime,
			}
			endTime = -1
			completeHistory.push(thisHistory)
			history = ""
			kritJourStart = ranInt(800, 1000)
			gameVariables = {
				time: 0,
				falsch: 0,
				aussenbeziehungen: 5,
				staatsnaehe: 0,
				gutmensch: 0,
				benennungAufkaufen: "Renationalisierung",
				zyklopLoesung: "",
				kritischeJournalisten: kritJourStart,
				ergebnisOffset: 0,
				sanktionsschwelle: -14,
				randomZyklop: Math.random(),
				aufgekauft: false,
				geklagt: false,
				sanktionen: false,
				klageErfolg: kritJourStart > 920,
				klageErgebnis: false,
				entlassungenDone: false,
			}
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
		let iframe = document.getElementById("frageIframe")
		let youtube = document.getElementById("frageIframeIframe")
		switch (question.mediumType) {
			case undefined:
				image.classList.add("hidden")
				video.classList.add("hidden")
				audio.classList.add("hidden")
				iframe.classList.add("hidden")
				break
			case "image":
				image.classList.remove("hidden")
				video.classList.add("hidden")
				audio.classList.add("hidden")
				iframe.classList.add("hidden")
				image.src = question.mediumSource
				break
			case "video":
				image.classLiframeist.add("hidden")
				video.classList.remove("hidden")
				audio.classList.add("hidden")
				iframe.classList.add("hidden")
				video.src = question.mediumSource
				video.oncanplaythrough = video.play
				break
			case "audio":
				image.classList.add("hidden")
				video.classList.add("hidden")
				audio.classList.remove("hidden")
				iframe.classList.add("hidden")
				audio.src = question.mediumSource
				audio.oncanplaythrough = audio.play
				break
			case "youtube":
				image.classList.add("hidden")
				video.classList.add("hidden")
				audio.classList.add("hidden")
				iframe.classList.remove("hidden")
				youtube.src = `https://www.youtube.com/embed/${question.mediumSource}?modestbranding=1&rel=0&showinfo=0`
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
					: gameVariables.kritischeJournalisten < 1200 && gameVariables.kritischeJournalisten > 800
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
		document.getElementById("frageIframeIframe").src = ""
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
	const chosenAnswer = getQuestion(currentQuestion.chapter, currentQuestion.question).answers[answerNo]

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
			if (!test) console.error("Keine Kapitel zur Auswahl")
			history += "Error: Keine Kapitel zur Auswahl\n"
		}
		startChapter("ergebnis")
		return
	}

	//history pflegen
	history +=
		"Kapitelauswahl: " +
		JSON.stringify(availableChapters).replaceAll('","', ", ").replace('["', "").replace('"]', "") +
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
			(Math.pow(Math.random(), 1.3) > gameVariables.time / (12 * timepermonth) || q.chapter === "ergebnis"):
			backQuestion = keysToPath(q.chapter, q.question)
			q = "sanktionen/sanktionen22"
			break
		case !gameVariables.sanktionen &&
			gameVariables.sanktionsschwelle === -14 &&
			gameVariables.geklagt &&
			gameVariables.aussenbeziehungen <= -14 &&
			(Math.pow(Math.random(), 1.3) > gameVariables.time / (12 * timepermonth) || q.chapter === "ergebnis"):
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
		console.error(`gotoArray hat keine Elemente. Springe zum Ergebnis, Zeit: ${gameVariables.time}`)
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
		if (availablePopups[0] && currentQuestion.chapter != "ergebnis" && currentQuestion.chapter != "nachfrage") {
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
		Math.round(Math.min(Math.max(ranInt(204, 244) / 10, result), ranInt(704, 761) / 10) * 10) / 10 +
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

		document.getElementById("headerText1").innerHTML = `Zeit: ${Math.floor(gameVariables.time / timepermonth)} ${
			Math.floor(gameVariables.time / timepermonth) == 1 ? "Monat" : "Monate"
		} vergangen`
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
		document.getElementById("header2bgP").style["grid-template-columns"] = `${posP}% ${100 - posP}%`
		let posN = Math.max(-30, gameVariables.aussenbeziehungen)
		posN = Math.min(0, posN)
		posN = map(0, -30, 0, 100, posN)
		document.getElementById("header2bgN").style["grid-template-columns"] = `${100 - posN}% ${posN}%`

		// if (currentQuestion.chapter === "intro" && currentQuestion.question === "willkommen") {
		// 	$("#highscoretable").css("opacity", "0")
		// 	setTimeout(() => {
		// 		$("#highscoretable").css("display", "none")
		// 		$(".headerElement").css("display", "")
		// 	}, 500)
		// }
		if (currentQuestion.chapter === "intro" && currentQuestion.question === "vorstellung") {
			// console.log("x")
			$(".headerElement").removeClass("hidden")
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
