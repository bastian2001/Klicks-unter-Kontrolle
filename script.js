const timepermonth = 2
const questions = {
  //INTRO
  willkommen: {
    question: "Hey, wie geht's?",
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
    question: "Schön, dich kennenzulernen. Ich bin deine persönliche Assistenz.",
    answers: [
      {
        text: "Wobei?",
        goto: "befoerderung"
      },
    ],
  },

  befoerderung: {
    question:
      "Du wurdest befördert. Dein Chef Rokossowski hat dir die Aufgabe übertragen, die Medienpolitik deines Landes Nuppland zu organisieren. Du bist Vorsitzende*r in einem Ausschuss, der versucht, alle Entscheidungen, die die Medien betreffen, zugunsten eurer Partei, der WhR (Wir haben Recht) zu treffen. Links siehst du die Anzahl der kritischen Journalist*innen, die regelmäßig publizieren, im Land, und die Zahl muss runtergehen, und das geht am Leichtesten, indem man ihnen das Leben schwer macht. Viele geben dann auch von ganz allein auf. Verstanden?",
      info: 'Auf diesem Fragezeichen findest du über das Spiel verteilt immer wieder Anmerkungen zu Ländern, Regierungen und Medienunternehmen, die ähnliche Maßnahmen getroffen haben. Außerdem kannst du herausfinden, welche Auswirkungen das hatte.',
    answers: [
      {
        text: "Okay...",
        goto: "information",
      },
    ],
  },
  information: {
    question: 'Kurzer Spoiler: Das Ganze hier hat natürlich einen Zweck - Du sollst etwas zu Pressefreiheit lernen. Viele der hier dargestellten Situationen basieren auf Geschehnissen in Osteuropa in den letzten Jahren. Mehr zu diesen "Vorbildern" findest du unten rechts auf dem Fragezeichen.',
    info: 'Auf diesem Fragezeichen findest du über das Spiel verteilt immer wieder Anmerkungen zu Ländern, Regierungen und Medienunternehmen, die ähnliche Maßnahmen getroffen haben. Außerdem kannst du herausfinden, welche Auswirkungen das hatte.',
    answers: [
      {
        text: "Hab ich verstanden.",
        goto: "wahlen"
      }
    ]
  },

  wahlen: {
    question:
      "Naja, und wenn die Journalist*innen nicht mehr schreiben können, weil es keine Medien mehr gibt, in denen sie unterkommen, dann geht die Zahl natürlich auch runter. Ein Journalist ohne Job ist kein Journalist, haha... In einem Jahr stehen wieder Wahlen an. Bis dahin musst du alles dafür tun, dass ihr gute Karten habt und in den Medien so wenig Negatives wie möglich über euch gebracht wird. An der Seite siehst du, wie viel Zeit du noch bis zur Wahl hast.",
    answers: [
      {
        text: "Verstanden.",
        goto: "au",
      },
    ],
  },

  au: {
    question:
      "Nuppland ist Mitglied der Adrejanischen Union, eines Staatenbunds. Andere Staaten können also begrenzt in eure Politik eingreifen und Sanktionen verhängen. Ins Ausland sollte daher nicht zu viel dringen, was euch Probleme bereiten könnte.",
    answers: [
      {
        text: "Kapiert.",
        goto: "oerr",
      },
    ],
  },
//LOS GEHTS
  oerr: {
    question:
      "Bisher gibt es einen öffentlich-rechtlichen Rundfunk in deinem Land. Dieser finanziert sich über eine Abgabe von allen, keine Steuer, und wird von einem Ausschuss, dem Rundfunkrat, beobachtet. Insgesamt neun Menschen sitzen im Rat, von denen drei von der Präsidentin, vier von der ersten und zwei von der zweiten Parlamentskammer bestimmt werden. Meinst du, da kann man noch was machen?",
    info: "In Deutschland gibt es einen öffentlich-rechtlichen Rundfunk mit insgesamt 9 Landesrundfunkanstalten (LRAs), die in der ARD zusammengeschlossen sind. Außerdem gibt es das ZDF und weitere Anstalten wie die Deutsche Welle. Jede Anstalt hat ihren eigenen Rundfunkrat, in dem aber meist zwischen 30 und 60 Personen sitzen. Die hier beschriebene Lage orientiert sich an der Situation in Polen vor 2016.",
    answers: [
      {
        text:
          "Ich denke, es sollten insgesamt weniger Leute im Rat sitzen. Die kann man besser kontrollieren.",
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
            amount: -32
          },
          {
            text: "staatsnaehe",
            amount: 3
          }

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
            amount: 54
          }
        ],
      },
    ],
  },

  weniger: {
    question:
      "Richtig so! So wird es für dich viel leichter, mitzubekommen, was so in weiten Teilen der Medien läuft. Ein bisschen kann dein Ansehen nach Außen natürlich darunter leiden, aber man macht sich ja immer irgendwie Feinde.",
      info: 'In Polen hat die Regierungspartei PiS 2016 das "Kleine Mediengesetz" erlassen, in dem der Rundfunk umstrukturiert wurde. Auch der Rundfunkrat KRRiT wurde verkleinert, von ursprünglich neun auf fünf Mitglieder. <a href=https://www.ard.de/home/Rundfunkrat/456538/index.html>Im Vergleich zu den Rundfunkräten in Deutschland ist das sehr wenig.</a>',
    answers: [
      {
        text: "Ich hab Blut geleckt.",
        goto: "bestimmung"
      },
      {
        text: "Aber ist das nicht moralisch fragwürdig?",
        goto: "nein1",
        variables: [
          {
            text: "gutmensch",
            amount: 1
          },
        ],
      },
    ],
  },
  bestimmung: {
    question: "Willst du vielleicht sogar noch ändern, wie die Ratsmitglieder bestimmt werden?",
    answers: [
      {
        text: "Alle der Präsident, das hätte doch was.",
        goto: "mmh",
        variables: [
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          },
          {
            text: "time",
            amount: 2,
          },
          {
            text: "kritischeJournalisten",
            amount: 87
          },
          {
            text: "staatsnaehe",
            amount: 3
          }
        ]
      },
      {
        text: "Ich denke, die Bevölkerung sollte da mehr Mitspracherecht bekommen. Verschiedene gesellschaftliche Gruppen sollten jeweils Mitglieder für den Rundfunkrat entsenden.",
        goto: "naja",
        variables: [
          {
            text: "gutmensch",
            amount: 1
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: 3
          },
          {
            text: "time",
            amount: 2,
          },
          {
            text: "kritischeJournalisten",
            amount: -56
          }
        ]
      },
      {
        text: "Ich denke, so wie es ist, ist es ganz gut.",
        goto: "gleich",
        variables: [
          {
            text: "time",
            amount: 1,
          },
        ]
      }
    ]
  },
  //openEnd: Zeitungsmeldung aus dem Ausland/Multimedia/whatever
  mmh: {
    question: "Ich glaube, damit hast du es etwas übertrieben, und dein Ansehen im Ausland hat ein wenig gelitten. Eine Katastrophe war es nicht, aber sei nächstes Mal etwas vorsichtiger.",
    answers: [
      {
        text: "Okay, versuche ich.",
        goto: "rsm",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]
      }
    ]
  },
  naja: {
    question: "Du bist doch kein Diplomat, dein Job ist es, ein gutes Wahlergebnis herbeizuführen. Glaubst du das so wirklich zu erreichen? Ich denke eher nicht. Naja, machen wir weiter.",
 
    answers: [
      {
        text: "Mmmhhh, okay.",
        goto: "rsm",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 2
          }
        ]
      }

    ],
  },
  gleich: {
    question: "Eigentlich ist es tatsächlich ganz gut so: Ein Teil der fünf Mitglieder wird je von der ersten und der zweiten Kammer sowie vom Präsidenten gewählt. Sagen wir, im Verhältnis 2:1:2? So kann der Präsident immer noch gut eine Mehrheit herbeiführen, wenn er nur eine Person überzeugt, die er nicht bestimmt hat. Im Ausland wird aber weniger ankommen.",
    answers: [
      {
        text: "Let's go!",
        goto: "rsm",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]
      }
    ]
  },
  nachfrage1: {
    question:
      "Bist du dir sicher? Je mehr Menschen im Rundfunkrat sitzen, desto schwerer fällt es, dort Einfluss zu nehmen.",
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
            amount: 109
          }
        ]
      },
      {
        text: "Nein, das möchte ich nicht.",
        goto: 'nagut',
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
            amount: 2
          }
        ]
      }
    ]
  },

  nein1: {
    question: "Kommt auf deine Moral an. Ich denke eher, dass du so deiner Partei zu einem Sieg verhelfen kannst. In der Politik müssen eben manchmal scharfe Geschütze aufgefahren werden.",
    answers: [
      {
        text: "Wenn du meinst... Dann lass uns weiter Journalisten jagen.",
        goto: "rsm",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
      {
        text: "Das ist nicht mein Stil. Ich glaub, ich bin nicht geschaffen dafür.",
        goto: "letzteNachfrage",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 2
          }
        ]
      }
    ]
  },

  nagut: {
    question: "Na gut. Wenn du nicht willst, kann man dich nicht dazu zwingen, schließlich bist du die wichtigste Person, was die nuppischen Medien angeht.",
    answers: [
      {
        text: "Da hatten wir keinen guten Start miteinander. Aber lass' uns was anderes probieren.",
        goto: "rsm",
        variables: [
          {
            text: "time",
            amount: 1,
          },
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
      {
        text: "Ich glaub, ich will komplett zurücktreten.",
        goto: "letzteNachfrage",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 2
          }
        ]
      }
    ]
  },

  //Alternative dazu: Gründung eines Medienrats wie in Ungarn, ausschließlich mit regierungstreuen Mitgliedern besetzt, entzieht z. B. Klubradio die Lizenz#

  // RECHTSSTAATSMECHANISMUS

  rsm: {
    conditions: [
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      },

    ],
    question: 'Moooooment, nicht so schnell. Uns kommt da gerade etwas dazwischen: Die Adrejanische Union plant eine neue Regelung - einen sogenannten "Rechtsstaatsmechanismus". Das bedeutet, dass bei Verstößen gegen die Rechtsstaatlichkeit, zum Beispiel bei Einschränkungen der Medienfreiheit, besondere Sanktionen zu erwarten sind. Insbesondere natürlich die Einbehaltung von AU-Mitteln. Auch zuvor gab es bereits Regelungen in dieser Richtung, allerdings hat das Parlament diese als zu schwach eingeschätzt. Wir könnten dagegen klagen, was meinst du?',
    info: 'Die Europäische Union hat zum 1.1.2021 einen solchen Mechanismus auf den Weg gebracht. Gelder sollten nicht in die Hände derjenigen gelangen, die die Demokratie bedrohen, so die Argumentation. Rechtsstaatlichkeit ist in der EU als Grundwert verankert: "Sie bedeutet, dass Regierungen das Recht achten sollten und keine willkürlichen Entscheidungen treffen dürfen. Die Bürger sollten in der Lage sein, das Handeln von Regierungen vor unabhängigen Gerichten anzufechten. Die Rechtsstaatlichkeit umfasst auch die Bekämpfung von Korruption und den Schutz der Medienfreiheit, wodurch sichergestellt wird, dass die Öffentlichkeit angemessen über staatliche Maßnahmen informiert wird", schreibt das EU-Parlament auf seiner <a href= https://www.europarl.europa.eu/news/de/headlines/eu-affairs/20201001STO88311/rechtsstaatsmechanismus-schutz-des-eu-haushalts-und-der-europaischen-werte>Webseite</a>.',
    answers: [
      {
        text: "Ich glaube, wir sollten da lieber keine schlafenden Hunde wecken. Natürlich unterzeichnen wir mit.",
        goto: "unterschreiben",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "aussenbeziehungen",
            amount: 4
          },
          {
            text: "time",
            amount: 1
          },
          {
            text: "gutmensch",
            amount: 1
          }
        ]
      },
      {
        text: "Ja, natürlich klagen wir! Bei der geringsten Erfolgschance müssen wir es probieren. Und ansonsten verlängern wir wenigstens das Verfahren.",
        goto: "klagen",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          },
          {
            text: "time",
            amount: 1
          },
          {
            text: "kritischeJournalisten",
            amount: 143
          },
          {
            text: "geklagt",
            value: true
          }
        ]

      },
      {
        text: "Ich weiß nicht. Wie entscheiden sich denn die anderen Länder?",
        goto: "verbuendete",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
      
    ]
  },
  unterschreiben: {
    question: "Wie du meinst. So stellen wir uns auf jeden Fall gut mit den anderen Ländern. Hoffentlich fällt uns das nicht später noch zur Last.",
    info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
    answers: 
    [{text: "Ach, das passt schon. Weiter geht's im Wahlkampf!",
    variables: [
      {
        text: "kapitelBeginn",
        value: true
      },
      {
        text: "time",
        amount: 1
      }
    ]}]

  },
  klagen: {
    question: "Wir sind nicht einmal die einzigen, die klagen! Auch das Nachbarland Tilpern, das eine Regierung hat, die deiner Partei sehr nahesteht und ähnliche Werte vertritt, schließt sich dem an. Wie wollen wir denn argumentieren?",
    info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
    answers: [
      {
        text: 'Wir beziehen uns darauf, dass diese Regelung ausschließlich uns und Tilpern schaden soll, weil alle anderen Staaten in der AU linke Mainstream-Regierungen haben.',
        goto: "klagen2a",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -3

          },
          {
            text: "kritischeJournalisten",
            amount: 25
          },
          {
            text: "geklagt",
            value: true
          }
        ]

      }
    ]

  },
  verbuendete: {
    question: "Vielleicht haben wir zu lange gezögert. Wären wir vorgeprescht, hätten sich vielleicht andere angeschlossen, schade. Willst du dich auch allein dagegen stellen?",
    info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
    answers: [
      {
        text: "Nein, dann lassen wir das lieber so auf sich beruhen und unterschreiben. Und weiter im Wahlkampf!",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "aussenbeziehungen",
            amount: 3
          },
          {
            text: "time",
            amount: 2
          }
        ]

      },
      {
        text: "Ärgerlich, aber es ist trotzdem wichtig, dass wir uns dagegen stellen. Wir sind doch kein Sozialamt, sondern haben auch unsere Ziele. Wir klagen.",
        goto: "klagen2",
        variables: [
          {
            text: "kritischeJournalisten",
            amount: 124
          },
          {
            text: "aussenbeziehungen",
            amount: -5
          },
          {
            text: "time",
            amount: 1
          },
          {
            text: "geklagt",
            value: true
          }
        ]

      }
    ]

  },
  klagen2: {
    question: "Die Gefahr ist natürlich, dass Nupplands Regierung sich jetzt zum Feindbild entwickelt. Aber gut, in einigen Wochen wissen wir mehr. In der Zwischenzeit wird der Adrejanische Gerichtshof uns anhören.",
    answers: [
      {
        text: "Weiter geht's.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },
  klagen2a: {
    question: "Gut, dann ziehen wir jetzt so vor den Adrejanischen Gerichtshof. Wir werden in einigen Wochen sehen, was daraus wird.",
    info: "Tatsächlich haben Ungarn und Polen die Rechtmäßigkeit des Mechanismus in der EU in Frage gestellt und vor dem EU-Gerichtshof geklagt. Der Mechanismus wird dennoch weiter angewendet.",
    answers: [
      {
        text: "Weiter geht's.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  //POLONISIERUNG
  nuppisierung: {
    conditions: [
      {
        variableName: 'kapitelBeginn', //Wert, der verglichen wird
        type: '==', //  =, < , >, <=, >=
        value: true //vergleichswert
      }
    ],
    question: "80 Prozent der regionalen Tageszeitungen gehören zu einem Unternehmen. Dieses wurde allerdings von einem größeren Verlag aus dem Nachbarland aufgekauft. Außerdem gehören diesem Konzern auch viele Online-Nachrichtenplattformen, die in den letzten Jahren extrem gewachsen sind. Was bedeutet das für uns?",
    answers: [
      {
        text: "Weiß ich auch nicht. Ist das verkehrt?",
        goto: "erklaerung1",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
      {
        text: "Naja, so lässt sich schlechter kontrollieren, was die schreiben.",
        goto: "geld",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
      {
        text: "Das Geld bleibt zum Teil im Ausland.",
        goto: "kontrolle",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
    ],
  },

  erklaerung1: {
    question: "Ausländische Auftraggeber können dir so viel leichter in die Berichterstattung deines Landes reden. Und das kann wiederum dem Ansehen deiner Partei schaden.",
    answers: [
      {
        text: "Verstehe.",
        goto: "aufkaufen",
      },
    ],
  },

  geld: {
    question: "Richtig! Hinzu kommt, dass du natürlich auch weniger Geld im Land behalten kannst, wenn es so weit kommt.",
    answers: [
      {
        text: "Okay.",
        goto: "aufkaufen",
      },
    ],
  },

  kontrolle: {
    question: "Außerdem lässt sich doch so viel schwieriger beeinflussen, was in den Medien steht. Ein gemeinsames Feindbild, zum Beispiel die Adrejanische Union, könnte sehr gut im Wahlkampf sein. Wenn das Nachbarland, was in der OU sehr anerkannt ist, allerdings die Periodika besitzt, wird es schwierig, dass sowas in den Medien kommt.",
    answers: [
      {
        text: "Kapiert.",
        goto: "aufkaufen",
      },
    ],
  },

  aufkaufen: {
    question: "Hast du eine Idee, was man dagegen machen könnte?",
    info: "Vor einer ähnlichen Situation sah und sieht sich Polen zur Zeit. Die meisten regionalen Tageszeitungen haben zur Verlagsgruppe Passau, also einem deutschen Medienunternehmen, gehört. Wie es weiterging, siehst du, sobald du dich selbst entschieden hast.",
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
            amount: 1
          },
          {
            text: "time",
            amount: 3,
          },
          {
            text: "kritischeJournalisten",
            amount: 56
          },
          {
            text: "staatsnaehe",
            amount: 10
          },
          {
            text: "aufgekauft",
            value: true
          }
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
            amount: 125
          },
          {
            text: "staatsnaehe",
            value: 6
          },
          {
            text: "aufgekauft",
            value: true
          }
        ],
      },
      {
        text: "Ich denke, es sollte so bleiben, wie es ist.",
        goto: "nachfrage2",
        variables: [
          {
            text: "anerkennung",
            amount: -1
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
            amount: -34
          }
        ]
      }
    ],
  },

  pressefreiheit: {
    question: "Uhh, ganz schlechte Idee. Die anderen Länder der Adrejanischen Union haben uns doch eh schon auf dem Kieker. Wenn wir jetzt noch einen großen Teil der lokalen Presse kaufen, wird das nicht gut enden. Wie machen wir weiter?",
    answers: [
      {
        text: "Naja, Fehler passieren. Vergessen wir das einfach.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "entlassungenDone",
            value: true
          }
        ]
      },
      {
        text: "Ist jetzt passiert, aber jetzt können wir unsere Macht natürlich auch ausnutzen. Da könnte man doch alle entlassen, die sich mal kritisch geäußert haben.",
        goto: "massaker",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          },
        ]
      }
      
    ]
  },
// Prio ist doch: OverWriteGoto, Goto, Conditions, oder? Ansonsten hier drüber das mit Massaker nochmal checken
  aufkaufen2: {
    question: 'Brillant! So bleibt das ganze unter der Hand und dringt nicht so an die Öffentlichkeit. Komplett geheim halten können wir das ja aber auch nicht. Unter welchem Namen kommunizieren wir das Ganze denn? Der Fokus wird bei einer "Renationalisierung" natürlich anders gelegt als bei einer "Entmonopolisierung", aber beide Namen klingen doch eigentlich ganz gut, oder?',
    answers: [
      {
        text: "Renationalisierung",
        goto: "aufkaufen3",
        variables: [
          {
            text: 'benennungAufkaufen',
            value: 'Renationalisierung',
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          },
          {
            text: "time",
            amount: 2
          }
        ]
      },
      {
        text: "Entmonopolisierung",
        goto: "aufkaufen3",
        variables: [
          {
            text: 'benennungAufkaufen',
            value: 'Entmonopolisierung'
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
    ],
  },
  aufkaufen3: {
    question: 'Sehr gut. Gut, wir nutzen für unsere $benennungAufkaufen also ein Unternehmen, das zum Teil staatlich ist, um diese Titel, Internetportale, Vertriebskanäle und Druckereien aufzukaufen. So können wir die Medien wieder "nuppisieren" und ausländische Investoren zurückdrängen. Aber welches Unternehmen nutzen wir dafür?',
    answers: [
      {
        text: "Naja, ein bisschen Erfahrung mit der Führung eines Verlagshauses sollte man schon haben. Ich entscheide mich für eine große Buchhandelskette.",
        goto: "buchhandel",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "aussenwahrnehmung",
            amount: -2
          }
        ]
      },
      {
        text: "Es gibt da diese Kiosk- und Tankstellenkette...",
        goto: "orlen",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: 3
          },
          {
            text: "aussenwahrnehmung",
            amount: -1
          }
        ]
      },
      {
        text: "Vielleicht eine PR-Agentur, die extra dafür gegründet wird? Die haben dann auch die Expertise, falls da publicity-mäßig was schiefläuft.",
        goto: "pr",
        variables: [
          {
            text: "time",
            amount: 3
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "aussenwahrnehmung",
            amount: -3
          }
        ]
      }
    ]
  },

  orlen: {
    question: 'Klingt zwar erst einmal skurril, aber du hast die beste Wahl getroffen! In Tankstellen und Kiosks werden viele der Pressetitel verkauft, da könnte man also bestimmte Titel bevorzugen, und bei anderen gibt es dann vielleicht... hmm... Lieferengpässe oder so? Was wir natürlich niemals tun würden, oder? ;) Und wenn jemand was sagt, verweisen wir darauf, dass das üblich ist und in den USA auch Amazon die "Washington Post" gekauft hat.',
    info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
    answers: [
      {
        text: "Klingt logisch.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
        ]
      }
    ]
  },

  buchhandel: {
    question: "Kein schlechter Gedankengang. Trotzdem ist das leider etwas verdächtiger als ein Unternehmen, was scheinbar wenig mit Medien, deren Vertrieb und Organisation zu tun hat. Aber immerhin ist die Buchhandelskette bereits etabliert und bekannt.",
    info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
    answers: [
      {
        text: "Weiter geht's.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  pr: {
    question: "Nicht deine beste Idee, um ehrlich zu sein. Wenn ein Haufen Zeitungstitel und Onlineportale von einer PR-Agentur aufgekauft werden, wo der Staat seine Finger mit im Spiel hat, werden natürlich alle misstrauisch. Versuch doch nächstes mal, etwas subtiler zu agieren.",
    info: 'Tatsächlich hält Polen ein gutes Viertel der Aktien des Öl- und Tankstellenkonzerns Orlen. Das "polnische Gazprom" hat diese Tageszeitungen und die zugehörigen Internetportale - die "Polska Press" - aufgekauft und viele der Chefredakteur*innen ausgetauscht. Mehr Infos dazu findest du <a href=https://www.tagesschau.de/ausland/europa/polen-orlen-medien-101.html>hier</a>.',
    answers: [
      {
        text: "Na gut, ich versuch's.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  nachfrage2: {
    question: "Hältst du das echt für schlau? Wir hatten doch davor schon überlegt, dass es ganz schlau wäre, da etwas zu ändern.",
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
        goto: 'nagut2',
        variables: [
          {
            text: "gutmensch",
            amount: 2
          },
          {
            text: "aussenbeziehungen",
            amount: 1
          },
          {
            text: "time",
            amount: 3
          }
        ]
      }
    ]
  },

  nagut2: {
    question: "Na gut, wenn du meinst.",
    answers: [
      {
        text: "Weiter.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  massaker: {
    conditions: [
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      },
      {
        variableName: "staatsnaehe",
        type: ">=",
        value: 8
      },
      {
        variableName: "aufgekauft",
        type: "==",
        value: true
      }
    ],
    question: "Du hast dich ja vorhin schon ziemlich unbeliebt damit gemacht, dass du das ausländische Medienunternehmen aufgekauft hast. Die meisten Tageszeitungen und großen Internetportale sind jetzt also Staatsmedien. Trotzdem publizieren sie bisher genau wie vorher.",
    answers: [
      {
        text: "Ist doch gut so. Medien von den Menschen, die hier leben, für die Menschen, die hier leben.",
        goto: "gleich2",
        variables: [
          {
            text: "time",
            amount: 3
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "gutmensch",
            amount: 1
          },
          {
            text: "kritischeJournalisten",
            amount: -14
          },
          {
            text: "kapitelBeginn",
            value: false
          }
        ]
      },
      {
        text: "Also entlasse ich alle Chefredakteur*innen, die sich in letzter Zeit kritisch geäußert haben...? Und dann besetze ich die Stellen mit parteitreuen Menschen.",
        goto: "entlassen2",
        variables: [
          {
            text: "time",
            amount: 3
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          },
          {
            text: "kritischeJournalisten",
            amount: -125
          },
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "massakerDone",
            value: true
          },
          {
            text: "entlassungenDone",
            value: true
          }
        ]
      },
      {
        text: "Zusätzlich zu den Chefredakteur*innen sollten auch die kleineren Fische aus dem Becken geworfen werden, wenn sie sich nicht opportun verhalten. Nestbeschmutzer!",
        goto: "nestbeschmutzer",
        variables: [
          {
            text: "time",
            amount: 4
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 3
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          },
          {
            text: "kritischeJournalisten",
            amount: -312
          },
          {
            text: "kapitelBeginn",
            value: false
          },
          {
            text: "massakerDone",
            value: true
          },
          {
            text: "entlassungenDone",
            value: true
          }
        ]
      },
    ],
  },

  gleich2: {
    question: "Laaaaangweilig. Weißt du, dass du so deinen Kritiker*innen das Feld komplett überlässt? Kein Wunder, dass eure Umfragewerte sinken. Klar freuen sich alle über eine bunte Medienlandschaft, aber stell dir bloß mal vor, was du alles mit ein paar Einschränkungen erreichen könntest.",
    info: "In den letzten Jahren wurden in Polen viele Posten in den Redaktionen neu besetzt. In den großen Städten ist es leichter, Ersatz zu finden, während Lokalzeitungen in dieser Hinsicht weniger Macht haben. Mehr zur Ersetzung der Journalist*innen findest du in <a href =https://www.deutschlandfunkkultur.de/medienpolitik-in-polen-angriff-auf-die-pressefreiheit.979.de.html?dram:article_id=496143>diesem Artikel vom Deutschlandfunk</a>.",
    answers: [
      {
        text: "Okay, vielleicht entlassen wir doch ein oder zwei der Chefredaktuer*innen...",
        goto: "entlassen2",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -3

          },
          {
            text: "kritischeJournalisten",
            amount: -65
          },
          {
            text: "massakerDone",
            value: true
          },
          {
            text: "entlassungenDone",
            value: true
          }
        ]
      },
      {
        text: "Im Ausland schauen die doch sowieso schon sehr genau hin, seit wir die Medien gekauft haben. Wir sollten da schon besser aufpassen. Darum hier lieber vorsichtig sein. Und ein paar Journalisten werden so auch weniger kritisch sein.",
        variables: [
           {
             text: "kapitelBeginn",
             value: true
           },
           {
             text: "anerkennung",
             amount: -2,
           },
           {
             text: "kritischeJournalisten",
             amount: -7
           }
        ]
      }
    ]
  },
  entlassen2: {
    question: "Sehr gut. Wenn die Chefpositionen mit regierungstreuen Leuten besetzt sind, schüchtert das wahrscheinlich auch die Journalist*innen in den Redaktionen schon etwas ein.",
    info: "In den großen Städten ist es leichter, Ersatz zu finden, während Lokalzeitungen in dieser Hinsicht weniger Macht haben. Mehr zur Ersetzung der Journalist*innen findest du in <a href =https://www.deutschlandfunkkultur.de/medienpolitik-in-polen-angriff-auf-die-pressefreiheit.979.de.html?dram:article_id=496143>diesem Artikel vom Deutschlandfunk</a>.",
    answers: [
      {
        text: "Und wenn ich zusätzlich trotzdem noch weitere Journalist*innen ersetze?",
        goto: "nestbeschmutzer",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          },
          {
            text: "kritischeJournalisten",
            amount: -216
          },
          {
            text: "massakerDone",
            value: true
          },
          {
            text: "entlassungenDone",
            value: true
          }
        ]
      },
      {
        text: "Reicht erstmal, denke ich.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]
      }
    ]
  },
  nestbeschmutzer: {
    question: "Die Zahl der kritischen Journalisten hat enorm abgenommen. Und natürlich verdienen sie es alle, die sich gegen die WhR stellen, nicht besser. Aber gerade auf dem Land und abseits der großen Städte, wo die Redaktionen der Lokalzeitungen sitzen, ist es schwierig, genug politisch Korrekte zu finden, mit denen du die Stellen besetzen kannst. Ein paar der jetzt staatlichen Zeitungen und Portale müssen eingedampft werden. Dadurch wird deine Anerkennung in der Partei leider auch sehr abnehmen.",
    info: "In den großen Städten ist es leichter, Ersatz zu finden, während Lokalzeitungen in dieser Hinsicht weniger Macht haben. Mehr zur Ersetzung der Journalist*innen findest du in <a href =https://www.deutschlandfunkkultur.de/medienpolitik-in-polen-angriff-auf-die-pressefreiheit.979.de.html?dram:article_id=496143>diesem Artikel vom Deutschlandfunk</a>.",
    answers: [
      {
        text: "Das hab' ich nicht bedacht... Blöd gelaufen.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "anerkennung",
            amount: -5
          },
          {
            text: "time",
            amount: 3
          }
        ]
      }
    ]
  },
  // werbesteuer: {

    //Renationalisierung - Szenario


  zensur: {
    conditions: [
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      }
    ],
    question: "Im öffentlich-rechtlichen Fernsehen äußert sich eine beliebte Moderatorin kritisch zu einem neuen Gesetzentwurf. Wie regierst du am besten?",
     answers: [
     {
       text: "Ich kann sie einfach von heute auf morgen entlassen, oder?",
       goto: "entlassen",
       variables: [
         {
           text: "anerkennung",
           amount: 2
         },
         {
           text: "aussenbeziehungen",
           amount: -1
         },
         {
           text: "time",
           amount: 1
         },
         {
           text: "kritischeJournalisten",
           amount: 3
         },
         {
           text: "kapitelBeginn",
           value: false
         },
         {
           text: "entlassungenDone",
           value: true
         }
       ]
     },
     {
       text: "Eine öffentliche Drohung gegenüber kritischen Journalist*innen klingt doch gut.",
       goto: "drohung",
       variables: [
         {
           text: "time",
           amount: 1
         },
         {
           text: "aussenbeziehungen",
           amount: -3
         },
         {
           text: "kritischeJournalisten",
           amount: -278
         },
         {
           text: "kapitelBeginn",
           value: false
         },
         {
           text: "zensurDone",
           value: true
         }
       ]
     },
     {
       text: "Ich habe moralische Einwände.",
       goto: "moralisch",
       variables: [
         {
           text: "gutmensch",
           amount: 1
         },
         {
           text: "time",
           amount: 2
         },
         {
           text: "kapitelBeginn",
           value: false
         }
       ]
     }
   ],
  },

  moralisch: {
    question: "Moralische was?",
    answers: [
      {
        text: "Einwände.",
        goto: "moralisch2",
        variables: [
          {
            text: "gutmensch",
            amount: 1
          },
          {
            text: "time",
            amount: 1
          }
        ]
      },
      {
        text: "Ach, nicht so wichtig.",
        goto: "zensur",
      }
    ]
  },

  moralisch2: {
    question: "Bist du dir sicher, dass du hier in diesem Job richtig bist?",
    answers: [
      {
        text: "Denke schon. Ich probiere es nochmal.",
        goto: "zensur"
      },
      {
        text: "Ich hab da kein gutes Gefühl bei der Sache. Ich trete zurück.",
        goto: "letzteNachfrage"
      }
    ]
  },

  entlassen: {
    question: "Klar, im Ausland kennt sie kaum jemand, und im Inland schieben wir einfach einen Grund vor, wenn du magst. Hast du eine Idee?",
    info: 'Durch das "Kleine Mediengesetz" in Polen konnte die Regierung bei der Personalpolitik des öffentlich-rechtlichen Rundfunks mitmischen. Viele Redakteure, Moderatorinnen und Journalisten wurden durch "politisch Korrekte" ersetzt, zum Beispiel die beliebte Moderatorin Beata Tadla. Mehr dazu findest du <a href=https://www.dw.com/de/polnische-medien-mauern-gegen-geplante-reklamesteuer/a-56527227>bei der Deutschen Welle</a>.',
    answers: [
      {
        text: "Sagen wir einfach, sie ist krank geworden.",
        goto: "krank",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "kritischeJournalisten",
            amount: 3
          }
        ]
      },
      {
        text: "Ich würde es totschweigen. Wir besetzen ihre Sendungen einfach neu.",
        goto: "nichts",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: 7
          }
        ]
      },
      {
        text: 'Wir sagen die Wahrheit, dass sie wegen kritischer Äußerungen rausgeflogen ist. Das schüchtert andere Journalist*innen doch auch ein.',
        goto: "wahrheit",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: -2
          },
          {
            text: "kritischeJournalisten",
            amount: -80
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          }
        ]
      }
    ]
  },
  krank: {
    question: "Von der Bildfläche komplett verschwinden darf sie natürlich nicht. Ansonsten aber eine ganz gute Wahl, denke ich.",
    answers: [
      {
        text: "Was machen wir als nächstes?",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },
  nichts: {
    question: "Keine schlafenden Hunde wecken, würde ich auch sagen. Ein paar Journalisten sind misstrauisch geworden, aber lass' uns da erstmal abwarten.",
    answers: [
      {
        text: "Was machen wir als nächstes?",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },
  wahrheit: {
    question: "Mhhh, schwierig. So lenkst du natürlich noch mehr Aufmerksamkeit auf das ganze Thema. Wahrscheinlich wäre es besser gewesen, alles zu verschweigen. Aber mit deiner Vermutung, dass so mehr Journalist*innen weniger Kritisches schreiben, lagst du richtig.",
    answers: [
      {
        text: "Weiter geht's!",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      },
      
    ]
  },
  drohung: {
    question: "Wow, mutig! Aber nicht verkehrt: Das hat ziemlich viele kritische Journalist*innen eingeschüchtert. Im Ausland kommt das natürlich nicht so gut an. Die wird so schnell nichts mehr gegen die WhR sagen.",
    info: 'Durch das "Kleine Mediengesetz" in Polen konnte die Regierung bei der Personalpolitik des öffentlich-rechtlichen Rundfunks mitmischen. Viele Redakteure, Moderatorinnen und Journalisten wurden durch "politisch Korrekte" ersetzt, zum Beispiel die beliebte Moderatorin Beata Tadla. Mehr dazu findest du <a href=https://www.dw.com/de/polnische-medien-mauern-gegen-geplante-reklamesteuer/a-56527227>bei der Deutschen Welle</a>. Öffentliche Drohungen gab es bisher nicht, zumindest nicht gegen Journalist*innen.',
    answers: [
      {
        text: "Richtig so!",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
        ]
      }
    ]
  },

  obama: {
    conditions: [
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      }
    ],
    question: 'Ein Präsident eines großen wichtigen Staates sagt auf einer Veranstaltung in Nuppland: "Wir blicken besorgt auf die nuppische Demokratie. Die demokratischen Verfahren werden zunehmend abgebaut, obwohl es wichtig ist, dass alle Staaten zusammenarbeiten. Nuppland ist als Beispiel für die ganze Welt zu sehen."',
    answers: [
      {
        text: "Das ist eine Katastrophe! Aber das müssen wir schon bringen. Sonst könnte man uns Manipulation vorwerfen.",
        goto: "wahrheit2",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "gutmensch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          },
          {
            text: "kapitelBeginn",
            value: false
          }
        ]        
      },
      {
        text: "Das können wir nicht zeigen! Vielleicht ein paar Schnittbilder von seiner Rede, aber das können wir nicht zeigen!",
        goto: "verschweigen",
        variables: [
          {
            text: "time",
            amount: 1
          },
        ]
      },
      {
        text: "Der Satz mit dem Beispiel ist doch wirklich missverständlich formuliert. Den kann man doch auch positiv umdeuten, wem soll das denn auffallen?",
        goto: "manipulation",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -6
          },
          {
            text: "kritischeJournalisten",
            amount: 89
          }
        ]
      }
    ]
  },

  wahrheit2: {
    question: "Du hast Recht. Falls das auffliegt, fliegt uns hier alles um die Ohren. Die Äußerung wird natürlich auch in den anderen Ländern wahrgenommen werden, aber besser stehen wir auch selbst dazu.",
    info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
    answers: [
      {
        text: "Ich hoffe, da gibt's nicht noch Ärger.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
    
  },
  verschweigen: {
    question: "Können wir natürlich versuchen. Aber falls das noch rauskommt, haben wir echt ein Problem.",
    answers: [
      {
        text: "Doch noch die Wahrheit sagen.",
        goto: "wahrheit2",
        variables: [
          {
            text: "time",
            amount: 5
          },
          {
            text: "gutmensch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          },
          {
            text: "kapitelBeginn",
            value: false
          }
        ]
      },
      {
        text: "Das passt schon.",
        goto: "wahrheit2a",
        variables: [
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -5
          },
          {
            text: "kritischeJournalisten",
            amount: 46
          },
          {
            text: "time",
            amount: 2
          }
        ]
      }
    ]
  },
  wahrheit2a: {
    question: "Na gut, immerhin haben wir ihm nicht die Worte im Munde verdreht. Trotzdem haben es einige im In- und Ausland mitbekommen... Da sind einige Regierungskritiker*innen dazu gekommen.",
    info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
    answers: [
      {
        text: "Einfach schnell weitermachen.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      },
      {
        text: "Wir müssen noch eine Rechtfertigung mit versteckter Drohung an Journalisten rausgeben. Vielleicht hilft das, die zum Verstummen zu bringen.",
        goto: "wahrheit2b",
        variables: [
          {
            text: "kritischeJournalisten",
            amount: -27
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          },
          {
            text: "entlassungenDone",
            value: true
          }
        ]
      }
    ]
  },
  wahrheit2b: {
    question: 'Die nuppische Pressefreiheit wird im Ausland echt als gefährdet angesehen. Kürzlich kam eine Rangliste der NGO "Journalisten um die Welt" heraus, in dem Nuppland immer weiter abrutscht.',
    answers: [
      {
        text: "Man kann nicht alle glücklich machen.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      },
      
    ]
  },
  manipulation: {
    question: 'Riskant. Aber gut. Dann übersetzen wir den Satz also... "Wir blicken [...] auf die nuppische Demokratie. [Die demokratischen Verfahren werden zunehmend abgebaut, obwohl] es [ist] wichtig [...], dass alle Staaten zusammenarbeiten. Nuppland ist als Beispiel für die ganze Welt zu sehen." Passt?',
    answers: [
      {
        text: "Krass, aber ja, machen wir so. Was so ein paar Wörtchen ändern können...",
        goto: "manipulation2",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -8
          },
          {
            text: "kritischeJournalisten",
            amount: 89
          }
        ]
      },
      {
        text: "Ja, müssen wir wohl.",
        goto: "manipulation2a",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -6
          },
          {
            text: "kritischeJournalisten",
            amount: 12
          }
        ]
      },
      {
        text: "Ne, das ist zu stark. Ich will mich nochmal umentscheiden.",
        goto: "obama",
        variables: [
          {
            text: "time",
            amount: 1
          }
        ]
      }
    ]
  },

  manipulation2: {
    question: "Wie es scheint, ist unsere kleine Änderung wohl aufgefallen: Ein ganzer Schwung an kritischen Journalisten ist dazugekommen. Wie wollen wir uns da rausreden?",
    info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
    answers: [
      {
        text:"Augen zu und durch, einfach ignorieren.",
        goto: "manipulation21",
        variables: [
          {
            text: "kritischeJournalisten",
            amount: 127
          },
          {
            text: "falsch",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: -3
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          },
          {
            text: "time",
            amount: 3
          }
        ]
      },
      {
        text: "Wir haben seine Aussage doch nur ... hmm... kontextualisiert! Könnten wir nicht sowas schreiben?",
        goto: "manipulation22",
        variables: [
          {
            text: "kritischeJournalisten",
            amount: 254
          },
          {
            text: "falsch",
            amount: 3
          },
          {
            text: "anerkennung",
            amount: -5
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          },
          {
            text: "time",
            amount: 2
          }
        ]
      },
      {
        text: "Ich fürchte, da müssen wir uns ehrlich entschuldigen, und erklären, dass uns ein Fehler unterlaufen ist. Natürlich nicht absichtlich.",
        goto: "manipulation23",
        variables: [
          {
            text: "kritischeJournalisten",
            amount: -8
          },
          {
            text: "falsch",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: -4
          },
          {
            text: "aussenbeziehungen",
            amount: 1
          },
          {
            text: "time",
            amount: 2
          }
        ]
      }
    ]
  },

  manipulation21: {
    question: "Das war ein echtes Desaster und hat auch seine Zeit gebraucht, bis wieder Ruhe war.",
    info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen.",
    answers: [
      {
        text: "Okay, ich wage mich dann mal wieder aus meinem Versteck...",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  manipulation22: {
    question: "Okay, jetzt fühlen sich alle auf den Arm genommen und sind ziemlich sauer auf dich. Sowohl deine Partei als auch deine Beziehungen ins adrejanische Ausland leiden.",
    answers: [
      {
        text: "Aussitzen.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  manipulation23: {
    question: "Den letzten Teil, dass es nicht absichtlich war, glaubt dir zwar fast niemand, aber die Wogen haben sich schnell geglättet.",
    answers: [
      {
        text: "Glück gehabt.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  manipulation2a: {
    question: "Glück gehabt. Nur ein paar wenige sind misstrauisch geworden. Lass' uns schnell weitermachen, damit das nicht weiter auffällt.",
    info: "Eine ähnliche Aussage gab es 2016 vom damaligen US-Präsidenten Barack Obama über Polen. Tatsächlich wurde die Aussage in der Übersetzung komplett verdreht, von einem mahnenden Ton zu einem lobenden. Obwohl das einigen aufgefallen ist, hat es keine großen Wellen geschlagen. Bei einer anderen Antwort hätte das Verhalten aber auch bei dir mehr Konsequenzen gehabt ;)",
    answers: [
      {
        text: "Klingt gut.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  //kesma
  linie: {
    conditions: [
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      },
      {
        variableName: "entlassungenDone",
        type: "==",
        value: true
      }
    ],
    question: "Um die Nachrichten jetzt noch etwas auf Linie zu bringen, habe ich verschiedene Ideen. Was meinst du, eignet sich besonders gut?",
    answers: [
      {
        text: "Eine Stiftung, unter der ich alle regierungsnahen Medien vereine, wäre doch super.",
        goto: "kesma",
        variables: [
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          },
          {
            text: "time",
            amount: 4
          },
          {
            text: "kritischeJournalisten",
            amount: 6
          },
          {
            text: "staatsnaehe",
            amount: 2
          },
          {
            text: "kapitelBeginn",
            value: false
          }
        ]
      },
      {
        text: "Die Nachrichten bringen bei den kleineren Sendern häufig eine ganz andere Linie rein als die, die ich mir wünschen würde. Kann man da nicht was machen?",
        goto: "agentur",
        variables: [
          {
            text: "kapitelBeginn",
            value: false
          }
        ]
      }
    ]
  },

  agentur: {
    question: "Mein Vorschlag ist, eine Nachrichtenagentur zu gründen, die eng verbunden mit der Regierung ist. Die könnte die Recherche für kleinere Redaktionen vereinfachen, aber natürlich auch dazu verleiten, dass sie Nachrichten veröffentlichen, die schon vorgefiltert sind.",
    info: "Die ungarische Nachrichtenagentur MTI wurde 2015 in die staatliche Rundfunkholding MTVA überführt, zu der auch der öffentlich-rechtliche Rundfunk gehört. Die Agentur stellt kostenlos Ressourcen für die ungarischen Medien zur Verfügung, macht damit aber gerade kleinere Redaktionen immer abhängiger von der Regierung. Zuvor waren gerade kleinere Redaktionen häufig diejenigen, die am ehesten regierungskritische Inhalte verbreiten konnten. Mehr Informationen zur MTVA findest du <a href=https://taz.de/Pressefreiheit-in-Ungarn-unter-Beschuss/!5668697/>hier</a> und <a href=https://www.reporter-ohne-grenzen.de/pressemitteilungen/meldung/fehlende-pressefreiheit-gefahr-fuer-europa/>hier</a>.",
    answers: [
      {
        text: "Wenn das Angebot kostenlos ist, sparen die sich das Budget für Recherche, aber können eben auch viel unkritischer berichten! Genial!",
        goto: "genial",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "staatsnaehe",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: 3
          },
          {
            text: "kritischeJournalisten",
            amount: -98
          },
          {
            text: "aussenbeziehungen",
            amount: -4
          }
        ]
      },
      {
        text: "Überzeugt mich nicht so. Das mit der Stiftung klang aber spannend.",
        goto: "kesma",
        variables: [
          {
            text: "time",
            amount: 1
          }
        ]
      },
      {
        text: "Ach, das ist doch alles nichts. Die Werte sehen gerade doch ganz gut aus. Ich bin bis zu den Wahlen im Urlaub - Paris, Athen, auf Wiedersehn!",
        goto: "letzteNachfrage",
      }
    ]
  },
  genial: {
    question: "Eine meiner besseren Ideen.",
    info: "Die ungarische Nachrichtenagentur MTI wurde 2015 in die staatliche Rundfunkholding MTVA überführt, zu der auch der öffentlich-rechtliche Rundfunk gehört. Die Agentur stellt kostenlos Ressourcen für die ungarischen Medien zur Verfügung, macht damit aber gerade kleinere Redaktionen immer abhängiger von der Regierung. Zuvor waren gerade kleinere Redaktionen häufig diejenigen, die am ehesten regierungskritische Inhalte verbreiten konnten. Mehr Informationen zur MTVA findest du <a href=https://taz.de/Pressefreiheit-in-Ungarn-unter-Beschuss/!5668697/>hier</a> und <a href=https://www.reporter-ohne-grenzen.de/pressemitteilungen/meldung/fehlende-pressefreiheit-gefahr-fuer-europa/>hier</a>.",
    answers: [
      {
        text: "Weiter!",
        variables: [
          {
            text: "time",
            amount:1
          },
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]

  },

  kesma: {
    question: 'Gut, du hast die Stiftung ZMSN ("Zentrale Medienstiftung Nuppland") gegründet. Abseits vom öffentlich-rechtlichen Rundfunk sind natürlich auch die vielen lokalen Medien, Druckereien und Internetportale Mitglied, die jetzt endlich in nuppländischer Hand sind. Vor allem also regierungsnahe Medien, viele davon in der Hand von Bekannten und Freunden von dir. Trotzdem gibt es natürlich noch viel Oppositionelles, gerade im Netz.',
    info: "2018 wurde in Ungarn die Medienstiftung KESMA (Közép-Európai Sajtó és Média Alapítvány, deutsch: Zentraleuropäische Presse- und Medienstiftung) gegründet. Sie wird von Journalistenverbänden oder der NGO Reporter ohne Grenzen kritisiert, aufgrund der engen Verbindungen zum ungarischen Premierminister Viktor Orbán.",
    answers: [
      {
        text: "So kann ich über meinen Bekanntenkreis doch ziemlich leicht alles im Blick behalten, oder?",
        goto: "nichtnurdas"
      },
      {
        text: "ZMSN-Medien könnten doch bestimmte Subventionen bekommen, oder andere Unterstützung, die den anderen Medien nicht zukommt. So haben die zu wenig Geld.",
        goto: "subventionen",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "staatsnaehe",
            amount: 2
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          },
          {
            text: "kritischeJournalisten",
            amount: -76
          }
        ]
      },

    ]
  },

  nichtnurdas: {
    question: "Noch besser. Der Stiftung gehören ja auch die Druckereien und Agenturen an. Normalerweise hätte das natürlich von der Kartellbehörde genehmigt werden müssen, aber so ein bisschen Mauschelei fällt ja nicht auf. Jetzt kontrollieren wir aber einen großen Teil der Kanäle und können durch den Zusammenschluss Synergien viel besser nutzen... und wie du schon sagtest, auch leicht ein Auge auf alles haben.",
    info: "2018 wurde in Ungarn die Medienstiftung KESMA (Közép-Európai Sajtó és Média Alapítvány, deutsch: Zentraleuropäische Presse- und Medienstiftung) gegründet. Sie wird von Journalistenverbänden oder der NGO Reporter ohne Grenzen kritisiert, aufgrund der engen Verbindungen zum ungarischen Premierminister Viktor Orbán.",
    answers: [
      {
        text: "Praktisch! Dann probiere ich das mit den Subventionen mal.",
        goto: "subventionen",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "staatsnaehe",
            amount: 2
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          },
          {
            text: "kritischeJournalisten",
            amount: -76
          }
        ]
      },
      {
        text: "Dann briefe ich direkt mal die Leitungen, auf was sie besonders acht haben sollen: möglichst wenig Leute feuern, aber auf jeden Fall einschüchtern.",
        goto: "briefing",
        variables: [
          {
            text: "anerkennung",
            amount: 3
          },
          {
            text: "staatsnaehe",
            amount: 2
          },
          {
            text: "time",
            amount: 3
          },
          {
            text: "kritischeJournalisten",
            amount: -154
          }
        ]
      }
    ]
  },

  briefing: {
    question: "Die Zahl der kritischen Journalist*innen hat abgenommen. Aber eher, weil sich zumindest die bei den Medien in der Stiftung niemand mehr traut, etwas Kritisches zu schreiben - sehr gut!",
    info: "In Polen wurden vielen kritischen Journalist*innen gekündigt, doch nach der Ansicht einiger Medienschaffender könnte sich die Regierung damit verkalkuliert haben. Sie meinen, dass es auf dem Land schwieriger ist, viele Stellen neu zu besetzen. In froßen Städten sei das einfacher. Insofern ist es effizienter, nicht alle zu entlassen, sondern sie eher einzuschränken.",
    answers: [
       {
         text: "Weiter geht's!",
         variables: [
           {
             text: "time",
             amount: 2
           },
           {
             text: "kapitelBeginn",
             value: true
           }
         ]
       }
    ]
  },

  subventionen: {
    question: "Gute Idee. So schaffst du Anreize, der Stiftung sogar freiwillig beizutreten, aber damit würden kritische Medien natürlich auch ein Stück ihrer Unabhängigkeit aufgeben und staatsnäher werden.",
    info: "Ein Kapitel dieses Spiels ist auch der neuen Medienabgabe in Polen nachempfunden. Dort empfangen die staatsnahen öffentlich-rechtlichen Sender Subventionen, sodass diese von der Abgabe kaum betroffen sind.",
    answers: [
      {
        text: "Weiter geht's!",
         variables: [
           {
             text: "time",
             amount: 2
           },
           {
             text: "kapitelBeginn",
             value: true
           }
         ]
      }
    ]

  },

  //WERBESTEUER
  ws: {
    conditions: [
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      },
      {
        variableName: "entlassungenDone",
        type: "==",
        value: true
      }
    ],
    question: "Du hast ja bereits einige Journalist*innen davon, sagen wir, überzeugen können, dass es besser ist, wenn sie ihren Job anders oder nicht mehr machen. Einige sind natürlich eingeschüchtert und zum Teil auch gar nicht mehr als Journalist*innen tätig. Aber andere haben sich privaten Medien angeschlossen, vor allem Onlinemedien, oder zum Teil selbst welche gegründet. Dort publizieren sie weiterhin kritisch. Wie können wir das wohl am besten unterbinden?",
    answers: [
      {
        text: "Finden wir irgendwelchen Papierkram, über den wir sie platt machen können?",
        goto: "lizenz",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "kapitelBeginn",
            value: false
          }
        ]
      },
      {
        text: "Drohungen haben ja versagt. Vielleicht, wenn wir den Geldhahn zudrehen?",
        goto: "abgabe",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "kapitelBeginn",
            value: false
          }
        ]
      }
    ]
  },
  lizenzB: {
    question: "Es gibt da einen größeren kritischen Radiosender, der bei der Beantragung seiner Sendefrequenz ein paar kleinere Fehler gemacht hat.",
    answers: [
      {
        text: "Da kann man doch eine Warnung rausgeben.",
        goto: "lizenz2B",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: 18
          },
          {
            text: "anerkennung",
            amount: -1
          }
        ]
      },
      {
        text: "Denen entziehen wir die Lizenz!",
        goto: "lizenz3B",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -98
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          }
        ]
      }
    ]
  },
  lizenz2B: {
    question: "Ziemlich lasch. Dein Handeln wurde nicht wirklich ernst genommen, der Sender ist sogar gewachsen. Aber lass' uns keine große Sache draus machen.",
    info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
    answers: [
      {
        text: "Weiter geht's.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]
      }
    ]
  },

  lizenz3B: {
    question: "Super Idee! Auch, wenn der Sender online noch weiter sendet, erreicht er so nur noch einen Bruchteil der Hörer*innen, und kann sich so natürlich auch schlechter finanzieren.",
    info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
    answers: [
      {
        text: "What's next?",
        variables: [
          { 
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]        
      },
    ]

  },
  lizenz: {
    question: "Es gibt da einen größeren kritischen Radiosender, der bei der Beantragung seiner Sendefrequenz ein paar kleinere Fehler gemacht hat.",
    answers: [
      {
        text: "Da kann man doch eine Warnung rausgeben.",
        goto: "lizenz2",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: 18
          },
          {
            text: "anerkennung",
            amount: -1
          }
        ]
      },
      {
        text: "Denen entziehen wir die Lizenz!",
        goto: "lizenz3",
        variables: [
          {
            text: "time",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -98
          },
          {
            text: "anerkennung",
            amount: 1
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          }
        ]
      }
    ]
  },
  lizenz2: {
    question: "Ziemlich lasch. Dein Handeln wurde nicht wirklich ernst genommen, der Sender ist sogar gewachsen. Naja - willst du es noch über die Finanzen probieren?",
    info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
    answers: [
      {
        text: "Ja, gern.",
        goto: "abgabeb"
      },
      {
        text: "Ne, das passt schon.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  lizenz3: {
    question: "Super Idee! Auch, wenn der Sender online noch weiter sendet, erreicht er so nur noch einen Bruchteil der Hörer*innen, und kann sich so natürlich auch schlechter finanzieren.",
    info: 'In Ungarn wurde dem Radiosender "Klubradio", einem der wenigen oppositionellen Medien, wegen einer solchen Bagatelle die Lizenz entzogen. Mittlerweile ist der Sender nur noch <a href=https://www.klubradio.hu/>übers Internet zu hören</a>. <a href=https://www.tagesschau.de/ausland/europa/ungarn-pressefreiheit-103.html>Hier</a> findest du mehr zum Entzug der Lizenz.',
    answers: [
      {
        text: "What's next?",
        variables: [
          { 
            text: "kapitelBeginn",
            value: true
          },
          {
            text: "time",
            amount: 1
          }
        ]        
      },
      {
        text: "Und was war die Idee mit dem Geld? Das würde ich mir nochmal anschauen.",
        goto: "abgabe"
      }
    ]

  },
  abgabeb: {
    question: "Mein Vorschlag wäre eine Steuer, beziehungsweise eine Abgabe, die die Medien zahlen müssen, wenn sie Werbung schalten. Aber damit es da weniger Widerstand gibt, brauchen wir einen guten Namen.",
    answers: [
      {
        text: '"Werbeprämie" klingt doch super.',
        goto: "werbepraemieB",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 3
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          }
        ]
      },
      {
        text: "Man kann das Kind auch beim Namen nennen. Es ist im Endeffekt eine Werbesteuer, also nennen wir es auch so.",
        goto: "schlechterNameB",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: -1
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          }
        ]
      },
      {
        text: 'Was meinst du zu "Medienabgabe"?',
        goto: "schlechterNameB",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: -1
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          }
        ]
      }
    ]

  },
  schlechterNameB: {
    question: "Mhhh. So fällt doch direkt auf, wer weswegen zahlen muss. Da hätte man auch einen besseren Namen finden können. Aber naja - letztlich kommt es darauf an, ob das Instrument wirkt, oder? Machen wir das?",
    info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
    answers: [
      {
        text: "Ja, machen wir! Und dann weiter.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -128
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          },
          {
            text: "kapitelBeginn",
            value: true
          }

        ]
      },
      {
        text: "Das überzeugt mich nicht.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }

    ]
  },
  werbepraemieB: {
    question: "Großartige Wahl! So fällt kaum auf, wer da eigentlich zahlt.",
    info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
    answers: [
      {
        text: "Super! So machen wir das! Und dann anders weiter.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -128
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          },
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      },
      {
        text: "Das überzeugt mich nicht. Lieber würde ich anders weitermachen.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },
  abgabe: {
    question: "Mein Vorschlag wäre eine Steuer, beziehungsweise eine Abgabe, die die Medien zahlen müssen, wenn sie Werbung schalten. Aber damit es da weniger Widerstand gibt, brauchen wir einen guten Namen.",
    answers: [
      {
        text: '"Werbeprämie" klingt doch super.',
        goto: "werbepraemie",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 3
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          }
        ]
      },
      {
        text: "Man kann das Kind auch beim Namen nennen. Es ist im Endeffekt eine Werbesteuer, also nennen wir es auch so.",
        goto: "schlechterName",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: -1
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          }
        ]
      },
      {
        text: 'Was meinst du zu "Medienabgabe"?',
        goto: "schlechterName",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: -1
          },
          {
            text: "aussenbeziehungen",
            amount: -1
          }
        ]
      }
    ]

  },
  schlechterName: {
    question: "Mhhh. So fällt doch direkt auf, wer weswegen zahlen muss. Da hätte man auch einen besseren Namen finden können. Aber naja - letztlich kommt es darauf an, ob das Instrument wirkt, oder? Machen wir das?",
    info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
    answers: [
      {
        text: "Ja, machen wir! Und dann weiter.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -128
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          },
          {
            text: "kapitelBeginn",
            value: true
          }

        ]
      },
      {
        text: "Das überzeugt mich nicht. Aber das mit dem Papierkram würde ich mir nochmal ansehen.",
        goto: "lizenzB"
      },
      {
        text: "Warum nicht beides? Zuerst die Abgabe auf den Weg bringen, und dann schau ich nochmal, ob die bei ihren Unterlagen Leichen im Keller haben.",
        goto: "lizenzB",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -128
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          },
          

        ]
      }

    ]
  },
  werbepraemie: {
    question: "Großartige Wahl! So fällt kaum auf, wer da eigentlich zahlt.",
    info: 'Polen hat 2021 einen Gesetzesentwurf vorgeschlagen, der Medien zu einer solchen Abgabe zwingen würde. Bisher ist er noch nicht durch alle Instanzen, und die privaten Medien haben sich mit einem Tag, an dem sie nicht gesendet haben oder schwarze Titelblätter gedruckt haben, klar gegen die Regelung positioniert. So wären sie "Medien ohne Wahl" und würden in große finanzielle Schwierigkeiten kommen. Das Finanzministerium, auf dessen Website der Vorschlag erschienen ist, spricht tatsächlich von einer <a href=https://www.gov.pl/web/finanse/media-pomoga-w-zwalczaniu-skutkow-covid-19-przepisy-o-skladce-reklamowej-w-prekonsultacjach>"Werbeprämie"</a>.',
    answers: [
      {
        text: "Super! So machen wir das! Und dann anders weiter.",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -128
          },
          {
            text: "aussenbeziehungen",
            amount: -3
          },
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      },
      {
        text: "Das überzeugt mich nicht. Aber das mit dem Papierkram würde ich mir nochmal ansehen.",
        goto: "lizenzB"
      },
      {
        text: "Warum nicht beides? Zuerst die Abgabe auf den Weg bringen, und dann schau ich nochmal, ob die bei ihren Unterlagen Leichen im Keller haben.",
        goto: "lizenzB",
        variables: [
          {
            text: "time",
            amount: 1
          },
          {
            text: "anerkennung",
            amount: 2
          },
          {
            text: "kritischeJournalisten",
            amount: -128
          },
          {
            text: "aussenbeziehungen",
            amount: -2
          },
          

        ]
      }
    ]
  },

  klage2: {
    conditions: [
      {
        variableName: "geklagt",
        type: "==",
        value: true
      },
      {
        variableName: "time",
        type: ">=",
        value: 12
      },
      {
        variableName: "klageErgebnis",
        type: "==",
        value: false
      },
      {
        variableName: "klageErfolg",
        type: "==",
        value: false
      }
    ],
    question: "Das Urteil des Adrejanischen Gerichtshofs ist durch: Nuppland hat leider nicht Recht bekommen. Das bedeutet, dass ihr nach wie vor schon bei wenigen Verstößen gegen die Rechtsstaatlichkeit mit weniger AU-Geldern rechnen könnt.",
    info: "Polen und Ungarn haben vor dem Europäischen Gerichtshof gegen den Rechtsstaatsmechanismus der EU geklagt. Bisher wurde nach Kompromissen gesucht. Zur Zeit wird der Mechanismus trotzdem ausgeführt. Eine abschließende Prüfung steht noch aus.",
    answers: [
      {
        text: "Kann man wohl nichts machen.",
        variables: [
          {
            text: "klageErgebnis",
            value: true
          },
          {
            text: "kritischeJournalisten",
            amount: 26
          }
        ]
      }
    ]

  },

  klage: {
    conditions: [
      {
        variableName: "geklagt",
        type: "==",
        value: true
      },
      {
        variableName: "time",
        type: ">=",
        value: 12
      },
      {
        variableName: "klageErfolg",
        type: "==",
        value: true
      },
      {
        variableName: "klageErgebnis",
        type: "==",
        value: false
      }
    ],
    question: "Der Adrejanische Gerichtshof hat sich beraten, Nuppland hat Recht bekommen. Das bedeutet, dass Nuppland erst bei starken Verstößen mit Sanktionen belegt wird. Herzlichen Glückwunsch zum Erfolg vor Gericht!",
    info: "Polen und Ungarn haben vor dem Europäischen Gerichtshof gegen den Rechtsstaatsmechanismus der EU geklagt. Bisher wurde nach Kompromissen gesucht. Zur Zeit wird der Mechanismus trotzdem ausgeführt. Eine abschließende Prüfung steht noch aus.",
    answers: [
      {
        text: "Yes! Glück gehabt!",
        variables: [
          {
            text: "sanktionsschwelle",
            value: -22
          },
          {
            text: "klageErgebnis",
            value: true
          },
          {
            text: "kritischeJournalisten",
            amount: 31
          },
        ]
      }
    ]
  },

  
/*
  Die Werbesteuer betrifft natürlich auch die öffentlich-rechtlichen Medien. Wie willst du damit umgehen? (mehr Subventionen, vom Gesetz her ausnehmen, Abgabe dafür erhöhen) Wir brauchen auch noch einen schicken Namen dafür ;) (Medienabgabe, Werbeprämie, Werbegebühr) oder Unter welchem Titel bringen wir das jetzt ins Volk?

*/

  //OPENEND

  sanktionen2: {
    conditions: [
    
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      },
      {
        variableName: "sanktionsschwelle",
        type: "==",
        value: -14
      },
      {
        variableName: "aussenbeziehungen",
        type: "<=",
        value: -14
      },
      {
        variableName: "sanktionen",
        type: "==",
        value: false
      }
    ],
    question: "Ich hab dich gewarnt! Die Adrejanische Union verhängt Sanktionen gegen Nuppland. Grund dafür sind die mehrfachen Verstöße gegen die Verträge, auf denen die AU aufbaut. Rechtstaatlichkeit und Pressefreiheit werden dort als hohe Werte angesehen. Es gibt also weniger Geld von der AU, und dadurch sinkt natürlich auch deine Zustimmung bei der Bevölkerung.",
    answers: [
      {
        text: "Mhhh... Wir müssen trotzdem weitermachen!",
        variables: [
          {
            text: "sanktionen",
            value: true
          },
          {
            text: "ergebnisOffset",
            amount: -10
          }
        ]
      }
    ]
  },
  sanktionen3: {
    conditions: [
      {
        variableName: "sanktionsschwelle",
        type: "==",
        value: -22
      },
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      },
      {
        variableName: "geklagt",
        type: "==",
        value: true
      },
      {
        variableName: "aussenbeziehungen",
        type: "<=",
        value: -22
      },
      {
        variableName: "sanktionen",
        type: "==",
        value: false
      }
    ],
    question: "Ich hab dich gewarnt! Die Adrejanische Union verhängt Sanktionen gegen Nuppland. Grund dafür sind die mehrfachen Verstöße gegen die Verträge, auf denen die AU aufbaut. Rechtstaatlichkeit und Pressefreiheit werden dort als hohe Werte angesehen. Es gibt also weniger Geld von der AU, und dadurch wird natürlich auch dein Wahlergebnis schlechter. Und das alles, obwohl du erfolgreich geklagt hast und das Verfahren lange aufschieben konntest.",
    answers: [
      {
        text: "Mhhh... Weitermachen müssen wir trotzdem.",
        variables: [
          {
            text: "sanktionen",
            value: true
          },
          {
            text: "ergebnisOffset",
            amount: -6
          }
        ]
      }
    ]
  },

  letzteNachfrage: {
    question: "Willst du deine politische Karriere wirklich abbrechen?",
    answers: [
      {
        text: "Ja, ich trete zurück.",
        goto: "ergebnis",
        variables: [
          {
            text: "time",
            value: 12*timepermonth
          },
          {
            text: "ergebnisOffset",
            amount: -30
          }
        ]
      },
      {
        text: "Nein, ich versuche es doch nochmal mit etwas anderem.",
        variables: [
          {
            text: "kapitelBeginn",
            value: true
          }
        ]
      }
    ]
  },

  vorErgebnis0: {
    conditions: [
      {
        variableName: "time",
        type: "<=",
        value: timepermonth*6
      },
    ],
    question: "Du scheinst nicht wirklich viel ändern zu wollen, also würde ich vorschlagen, dass wir direkt zur Wahl vorspringen. Aber da du deinen Einfluss so wenig genutzt hast, haben die Medien wahrscheinlich wenig zu eurem Wahlkampf beigetragen.",
    answers: [
      {
        text: "Okay, dann machen wir halt dort weiter.",
        goto: "ergebnis",
        variables: [
          {
            text: "ergebnisOffset",
            amount: -18
          }
        ]
      }
    ]
  },
  vorErgebnis1: {
    conditions: [
      {
        variableName: "time",
        type: "<=",
        value: timepermonth*9
      },
      {
        variableName: "time",
        type: ">=",
        value: timepermonth*6+1
      }
    ],
    question: "Du scheinst nicht sooo viel ändern zu wollen, also würde ich vorschlagen, dass wir direkt zur Wahl vorspringen. Viel mehr Ideen habe ich leider nicht mehr für deinen Wahlkampf. Insofern haben die Medien wahrscheinlich wenig zu eurem Wahlkampf beigetragen.",
    answers: [
      {
        text: "Okay, dann machen wir halt dort weiter.",
        goto: "ergebnis",
        variables: [
          {
            text: "ergebnisOffset",
            amount: -13
          }
        ]
      }
    ]
  },
  vorErgebnis2: {
    conditions: [
      {
        variableName: "time",
        type: "<=",
        value: timepermonth*11-1
      },
      {
        variableName: "time",
        type: ">=",
        value: timepermonth*9+1
      }
    ],
    question: "Viel mehr Ideen habe ich leider nicht mehr für deinen Wahlkampf. Was hältst du von einer kurzen Pause, bis die Wahlstattfindet?",
    answers: [
      {
        text: "Okay, bis in ein paar Wochen!.",
        goto: "ergebnis",
        variables: [
          {
            text: "ergebnisOffset",
            amount: -6
          }
        ]
      }
    ]
  },

  ergebnis: {
    conditions: [
      {
        variableName: "time",
        type: ">=",
        value: 23
      },
      {
        variableName: "kapitelBeginn",
        type: "==",
        value: true
      }
    ],
    question: 'Okay, die Zeit ist vorbei. Schauen wir mal, wie deine Bilanz so aussieht. Bisher gibt es noch $kritischeJournalisten kritische Journalist*innen im Land. $ergebnisErgänzung',
  

    answers: [
      {
        text: "Und was ist mit dem Wahlergebnis?",
        goto: "ergebnis2"
      }
    ]
  },

  ergebnis2: {
    question: `Bei der Wahl kommt deine Partei auf $wahlergebnis Prozent der Stimmen! Wenn du die Medien kontrollierst, kriegst du also auch bessere Ergebnisse. Je weniger kritische Beiträge über dich erscheinen, desto besser deine Chancen auf ein gutes Wahlergebnis.`,
    answers: [
      {
        text: "Und jetzt?",
        goto: "einladungInfo",
      }
    ]
  },
  einladungInfo: {
    question: 'Dieses Spiel sollte dir zeigen, wie Länder Einfluss auf die Pressefreiheit nehmen können. Obwohl deine Story hier natürlich fiktiv war, passieren einige der hier angesprochenen Dinge tatsächlich gerade oder sind bereits passiert. In Polen wird zum Beispiel eine Werbeabgabe initiiert, die es unabhängigen Medien sehr schwer macht, zu bestehen. Der öffentlich-rechtliche Rundfunk in Polen wird außerdem von einem lediglich fünfköpfigen Gremium beaufsichtigt, das von politischen Vertretern gewählt wird. In Ungarn oder Belarus ist die Lage zum Teil noch dramatischer. Wenn du mehr dazu erfahren willst, wirf doch mal einen Blick auf die kleinen Fragezeichen unten rechts neben den Fragen, die dir mehr zu den Hintergründen erzählen. Die NGO "Reporter ohne Grenzen" gibt jährlich eine <a href=https://www.reporter-ohne-grenzen.de/weltkarte/#rangliste-der-pressefreiheit target="_blank">"Rangliste der Pressefreiheit"</a> heraus. Polen und Ungarn sind in den letzten Jahren beide dramatisch abgerutscht. <br/> <br/> <b>Vielen Dank fürs Spielen!</b> <br> <br><button onclick="window.location.reload()">Neu starten</button>',
    answers: [],
  }


}

const popups = {
  sanktionen: {
    conditions: [
      {
        variableName: "aussenbeziehungen",
        type: "<=",
        value: -6
      }
    ],
    message: "Aufpassen! Die Adrejanische Union schaut bei euch schon länger genauer hin. Wenn sich da noch was tut, verhängt die Union wahrscheinlich Sanktionen, was sich auch aufs Wahlergebnis auswirken dürfte."

  },
  
  gutmensch: {
    conditions: [
      {
        variableName: "gutmensch",
        type: ">",
        value: 3
      }
    ],
    message: "Du Gutmensch! Eine plurale Medienlandschaft ist ja ganz nett, aber dein Job sieht anders aus. Die Umfragewerte deiner Partei schwinden.",
  },
  falsch: {
    conditions: [{
      variableName: "falsch",
      type: ">",
      value: 4
    }],
    //headline: 'Hier eine Überschrift',
    message: "Du stellst dich echt nicht sonderlich gut an. Dein Ansehen in der Partei schwindet, und die Zeit bis zur Wahl auch. Halt dich besser ran, wenn du Rokossowski zufrieden sehen willst!"/*<img src='' class=''>*/,
  },
  guteArbeit: {
    conditions: [
      {
        variableName: "time",
        type: ">",
        value: 10*timepermonth
      },
      {
        variableName: "falsch",
        type: "<",
        value: 4
      },
      {
        variableName: "time",
        type: "<=",
        value: 12*timepermonth - 1
      }
    ],
    message: "Gute Arbeit! Rokossowski lobt dich. Bis zur Wahl sind es nur noch wenige Monate und bisher ist wenig Schlechtes über die WhR erschienen. Weiter so!",
  },
  zwischenergebnis: {
    conditions: [
      {
        variableName: "time",
        type: "==",
        value: 7 * timepermonth
      },

    ],
    message: "Wenn nächsten Sonntag Wahlen wären, bekäme deine Partei nach Umfragewerten $wahlergebnis. Diese Werte solltest du allerdings nicht für bare Münze nehmen, da solche Umfragen nicht komplett repräsentativ die Bevölkerung abbilden können."
  },
  zeit: {
    conditions: [
      {
        variableName: "time",
        type: ">",
        value: 8*timepermonth-1
      },
      {
        variableName: "time",
        type: "<=",
        value: 12*timepermonth-1
      }

    ],
    message: "Du hast nicht mehr viel Zeit bis zur Wahl!"
  },
  

  //open end
}

const kritJour = zufallszahl(800, 1000)
let gameVariables = {
  time: 0, //bis zur nächsten Wahl
  falsch: 0, //falsche Entscheidung, für Gutmensch, aber auch für zu krasse Entscheidungen (vielleicht später raus?)
  anerkennung: 0, //in der Partei?
  aussenbeziehungen: 5, //z. B. Beziehung zur EU
  staatsnaehe: 0, //muss versteckt sein. beschreibt, wie sehr die ÖRR und andere Medien vom Staat gelenkt werden
  gutmensch: 0,
  benennungAufkaufen: 'Renationalisierung',
  kritischeJournalisten: kritJour,
  kapitelBeginn: false,
  aufgekauft: false,
  unternehmen: false,
  ergebnisOffset: 0,
  geklagt: false,
  sanktionsschwelle: -14,
  sanktionen: false,
  klageErgebnis: false,
  klageErfolg: kritJour > 920,
  entlassungenDone: false
}

let currentQuestion = "willkommen"
let overWriteGoto = ''

let previousQuestions = [],
  previousPopups = []
showQuestion(currentQuestion)

let barometerKritisch

initHeader()
setHeader()

function initHeader() {
  barometerKritisch = $('#barometerKritisch').barometer()
}

function setHeader(){
  document.getElementById('headerText0').innerHTML = `Kritische Journalist*innen: ${gameVariables.kritischeJournalisten}`
  barometerKritisch.rotate(map(300, 1400, 225, -45, gameVariables.kritischeJournalisten));

  document.getElementById("headerText1").innerHTML = `Zeit: ${Math.floor(gameVariables.time / timepermonth)} ${Math.floor(gameVariables.time/timepermonth) == 1 ? 'Monat' : 'Monate'} vergangen`
  document.getElementById("header1progress").style.width = `${map(0, 12*timepermonth, 0, 100, gameVariables.time)}%`
  if(gameVariables.time >= 9 * timepermonth)
    document.getElementById("header1progress").style['background-color'] = 'orange'
  if(gameVariables.time >= 10.5 * timepermonth)
    document.getElementById("header1progress").style['background-color'] = 'red'

  document.getElementById('headerText3').innerHTML = `Qualität der Beziehungen zur Adrejanischen Union`
  let posP = Math.max(0, gameVariables.aussenbeziehungen)
  posP = Math.min(30, posP)
  posP = map(0, 30, 0, 100, posP)
  document.getElementById('header2bgP').style['grid-template-columns'] = `${posP}% ${100 - posP}%`
  let posN = Math.max(-30, gameVariables.aussenbeziehungen)
  posN = Math.min(0, posN)
  posN = map(0, -30, 0, 100, posN)
  document.getElementById('header2bgN').style['grid-template-columns'] = `${100 - posN}% ${posN}%`

  if (currentQuestion == 'vorstellung'){
    //console.log('x')
    $('.header>*').css('opacity', '1')
  }
}

function map(min, max, newMin, newMax, value){
  return (value - min) / (max - min) * (newMax - newMin) + newMin
}

function answerClick(answerNo){
  const chosenAnswer = questions[currentQuestion].answers[answerNo]

  //variablen anpassen
  if (chosenAnswer.variables)
    for (let variable of chosenAnswer.variables){
      if (variable.amount)
        gameVariables[variable.text] += variable.amount
      else
        gameVariables[variable.text] = variable.value
    }
  gameVariables.time = Math.min(gameVariables.time, timepermonth * 12)
  //Variablen ausgeben
  console.log(`Zeit: ${gameVariables.time}, falsch: ${gameVariables.falsch}, anerkennung: ${gameVariables.anerkennung}, aussenbeziehungen: ${gameVariables.aussenbeziehungen}, staatsnaehe: ${gameVariables.staatsnaehe}, kapitelBeginn: ${gameVariables.kapitelBeginn}, gutmensch: ${gameVariables.gutmensch}, benennungAufkaufen: ${gameVariables.benennungAufkaufen}, kritischeJournalisten: ${gameVariables.kritischeJournalisten}, sanktionsschwelle: ${gameVariables.sanktionsschwelle}` )

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
    (gameVariables.time >= 11*timepermonth ? 'ergebnis' : '') ||
    getNewQuestion() ||
    (checkConditions(questions.vorErgebnis0) ? "vorErgebnis0" : "") ||
    (checkConditions(questions.vorErgebnis1) ? "vorErgebnis1" : "") ||
    (checkConditions(questions.vorErgebnis2) ? "vorErgebnis2" : "") ||
    'ergebnis'
  overWriteGoto = ''
  console.log(currentQuestion)

  //Badges und Alarme
  popupRoutine()

  showQuestion(currentQuestion)
}

//neue Frage finden
function getNewQuestion(){
  let availableQuestions = Object.keys(questions)
    .filter(el => previousQuestions.indexOf(el) === -1)
    // gefiltert nach nicht vorgekommenen
    .filter(el => checkConditions(questions[el]))
    //gefiltert auch nach Conditions
  console.log(availableQuestions)
  const availableQuestion = availableQuestions[zufallszahl(0, availableQuestions.length - 1)]
  console.log(availableQuestion)
  if (!availableQuestions){
    availableQuestion = 'ergebnis'
    gameVariables.time = timepermonth * 12
    setHeader()
    console.error('keine Fragen verfügbar, also kommt jetzt das Endergebnis!')
  }
  //eine zufällige frage
  return availableQuestion
}



function calcResult(){
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
  return (Math.round(Math.min(Math.max(zufallszahl(204, 244)/10, result), zufallszahl(704, 761)/10) * 10) / 10 + '%').replace('.', ',')
}

function showInfo(){
  showPopup({message: questions[currentQuestion].info, button: 'OK'})
}

function zufallszahl(min, max){
  return Math.floor(map(0, 1, min, max+1, Math.random()))
}

function showQuestion(name){
  //console.log(questions, questions[name], questions[name].question)
  document.getElementById("frage").innerHTML = questions[name].question
    .replaceAll('$benennungAufkaufen', gameVariables.benennungAufkaufen)
    .replaceAll('$kritischeJournalisten', gameVariables.kritischeJournalisten)
    .replaceAll('$wahlergebnis', calcResult())
    .replaceAll('$sanktionsschwelle', gameVariables.sanktionsschwelle)
    .replaceAll('$ergebnisErgänzung',
      (gameVariables.kritischeJournalisten > 1199) ? 'So richtig erfolgreich warst du in diesem Punkt ja nicht wirklich.' : 
      (gameVariables.kritischeJournalisten < 1200 && gameVariables.kritischeJournalisten > 800 ?
        "Naja, ein paar Weichen hast du auf jeden Fall gestellt." : 'Gute Arbeit!'
        )
      )
  if (questions[name].info)
    document.getElementById('info').style.display = 'block'
  else
    document.getElementById('info').style.display = 'none'
  
  for(let i = 0; i < 3; i++){
    if (questions[name].answers[i]){
      document.getElementById(`antwort${i}`).style = "display: inline-block"
      document.getElementById(`antwort${i}`).innerHTML = questions[name].answers[i].text
    } else {
      document.getElementById(`antwort${i}`).style = "display:none"
    }
  }
}

function popupRoutine(){
  let availablePopups = Object.keys(popups)
    //bis hier alle popup-keys
    .filter(el => previousPopups.indexOf(el) === -1)
    //hier nur noch nicht vorgekommene keys
    .filter(el => checkConditions(popups[el]))
    //hier nur noch nicht vorgekommene und gecheckte keys
  //console.log(availablePopups)
  if (availablePopups[0]){
    showPopup(popups[availablePopups[0]])
    previousPopups[previousPopups.length] = availablePopups[0]
  }
}

function checkConditions(obj){
  if (!obj.conditions)
    return false
  //prüfen ob conditions zutreffen
  let allConditions = true
  for(let condition of obj.conditions){
    allConditions = allConditions && checkSingleCondition(condition)
  }
  return allConditions
  //leeres Array: Frage immer verfügbar, kein Array: frage nie verfügbar außer über goto
}
function checkSingleCondition(condition){
  switch(condition.type){
    case '==':
      return gameVariables[condition.variableName] == condition.value
    case '<':
      return gameVariables[condition.variableName] < condition.value
    case '>':
      return gameVariables[condition.variableName] > condition.value
    case '<=':
      return gameVariables[condition.variableName] <= condition.value
    case '>=':
      return gameVariables[condition.variableName] >= condition.value
    default:
      console.error('error in conditions', condition)
      return false
  }
}

function showPopup(popup){
  //console.log('showing popup', popup)
  document.getElementById('popupbg').style="display:block;"
  const headline = document.getElementById('popupHeadline')
  const message = document.getElementById('popupMessage')
  const button = document.getElementById('popupButton')
  if (popup.headline){
    headline.style = 'display: block;'
    headline.innerHTML = popup.headline
  } else {
    headline.style = 'display: none'
  }
  if (popup.message){
    message.style = 'display: block;'
    message.innerHTML = popup.message
      .replaceAll("$wahlergebnis", calcResult())
  } else {
    message.style = 'display: none'
  }
  button.innerHTML = (popup.button || 'Weiter')
}