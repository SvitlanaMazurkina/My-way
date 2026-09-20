const lesenTeil3 = [
  // ============================================================
  // TEST 1
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Das kann man pauschal gar nicht so sagen. Wie das in deinem Unternehmen geregelt ist, steht in deinem Arbeitsvertrag. Ab wann du eine Arbeitsunfähigkeitsbescheinigung brauchst, findest du meistens unter den Paragraphen „Arbeitsverhinderung" oder „Krankheit".`,

      b: `Nein, vorher musst du erst mal eine Abmahnung bekommen. Wenn du dann allerdings noch mal fehlst, ohne Bescheid zu sagen, musst du mit der Kündigung rechnen. Such doch noch mal das Gespräch mit deinem Chef. Ihr findet bestimmt eine Lösung.`,

      c: `Du kannst nicht einfach kommen und gehen, wann du willst, auch wenn du die Absicht hattest, die versäumte Zeit nachzuholen. Die Arbeitszeiten sind ja vertraglich geregelt. Wenn sich Mitarbeiter nicht daran halten, ist eine Abmahnung vor der Kündigung nicht notwendig.`,

      d: `Wie du selbst schreibst, können im Krankheitsfall die Urlaubstage auf dein Urlaubskonto zurückgebucht werden. Du brauchst natürlich ab dem ersten Tag ein ärztliches Attest. Anders sieht es aus, wenn du einen Familienangehörigen betreust. Das ist dann nicht Sache deines Arbeitgebers.`,

      e: `Diese Situation kennen doch alle Eltern. Wenn ich für meinen Sohn mal keine Betreuung finde, kann ich ihn auch ausnahmsweise mit ins Büro nehmen. Meine Chefin ist da zum Glück sehr verständnisvoll.`,

      f: `Also ich gehe immer gleich am ersten Krankheitstag zum Arzt. Sicher ist sicher. Außerdem kann es nicht schaden, wenn dich ein Doktor anschaut, wenn du dich nicht wohlfühlst. Gerade wenn du Kinder hast, ist es wichtig, dass du weißt, was dir fehlt. Du willst ja niemanden anstecken.`,
    },

    questions: [
      {
        number: 10,
        name: "Petra",
        text: `Ich konnte leider wieder nicht zur Arbeit gehen, weil mein Kind krank war. Als ich heute angerufen habe, hat mein Chef völlig übertrieben reagiert und mir mit der Kündigung gedroht, wenn ich mehr als einen Tag fehle. Das kann doch nicht richtig sein, oder?`,
        correct: "X",
      },

      {
        number: 11,
        name: "Giovanni",
        text: `Ich bin letzten Montag mit starken Kopfschmerzen aufgewacht und konnte nicht aufstehen. Leider habe ich vergessen, meinen Arbeitgeber anzurufen und bin im Bett geblieben. Jetzt will mein Chef mich kündigen, weil ich unentschuldigt gefehlt habe. Kann er das einfach so machen?`,
        correct: "b",
      },

      {
        number: 12,
        name: "Leo",
        text: `Gestern war ich krank. Als ich heute wieder im Büro war, wollte mein Chef sofort die Krankmeldung sehen. Ich dachte immer, man braucht die erst nach drei Tagen?`,
        correct: "a",
      },

      {
        number: 13,
        name: "Ines Maria",
        text: `Ich war gerade im Urlaub und am ersten Tag ist meine kleine Tochter krank geworden. Ich musste mich vier Tage um sie kümmern. Wenn ich selbst im Urlaub krank werde, können die Urlaubstage zurückgebucht werden. Aber was ist, wenn das Kind krank wird?`,
        correct: "d",
      },
    ],
  },

  // ============================================================
  // TEST 2
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Solange du so nicht weniger arbeitest als im Vertrag vereinbart, müsstest du rechtlich auf der sicheren Seite sein. Wenn du es genau wissen willst, solltest du in diesem Fall einen Anwalt für Arbeitsrecht kontaktieren. Mit einer Rechtsschutzversicherung wird das auch nicht so teuer.`,

      b: `Rein rechtlich kannst du das nicht ohne Zustimmung deiner Eltern machen. Sie müssen die Kündigung sogar unterschreiben. An deiner Stelle würde ich mir das aber noch mal überlegen. Ich kann deinen Vater jedenfalls gut verstehen. Er macht sich halt Sorgen um deine Zukunft.`,

      c: `Hi, ich würde die Ausbildung auf keinen Fall abbrechen. Mit Berufen im Finanzbereich hast du gute Aussichten auf dem Arbeitsmarkt und verdienst später auch gutes Geld. Mach dir das nicht kaputt. Meine Tochter ist Steuerberaterin und sucht händeringend nach fähigen Mitarbeitern.`,

      d: `Also ich würde noch warten, bis dein Kind etwas größer ist, und mich jetzt noch nicht um einen Ausbildungsplatz bewerben. Wenn es etwas selbstständiger ist, wird vieles leichter. Eine Ausbildung kannst du auch in drei oder vier Jahren noch machen. Dein Kind braucht dich jetzt.`,

      e: `Schutz von Leben und Gesundheit ist das oberste Gebot. Um dich und dein Kind zu schützen, darfst du während der Schwangerschaft keine körperlich anstrengenden Arbeiten verrichten und auch Tätigkeiten, bei denen du Lärm, Schmutz, Kälte usw. ausgesetzt bist, sind tabu.`,

      f: `Warum das denn? Es gibt doch heutzutage Möglichkeiten, das Kind unterzubringen, während man arbeitet. Können dich deine Eltern vielleicht unterstützen? Sprich mal mit deinem Chef! Wenn der sieht, dass dir die Ausbildung wichtig ist, wird sich eine Lösung finden. Aber versuch auf jeden Fall, die Ausbildung durchzuziehen.`,
    },

    questions: [
      {
        number: 10,
        name: "Inka",
        text: `Ich bin eine Auszubildende in einem Büro und muss immer pünktlich Feierabend machen, weil ich meinen einjährigen Sohn aus der Kita abholen muss. Mein Chef findet das überhaupt nicht gut und droht mir jetzt sogar mit Kündigung. Was soll ich tun?`,
        correct: "a",
      },

      {
        number: 11,
        name: "Jacqueline",
        text: `Hallo zusammen! Vor ein paar Monaten habe ich eine Ausbildung angefangen. Und jetzt bin ich schwanger. Was soll ich tun? Es wird bestimmt schwierig, Kind und Arbeit miteinander zu vereinbaren. Soll ich die Ausbildung abbrechen?`,
        correct: "f",
      },

      {
        number: 12,
        name: "Hans-Peter",
        text: `Guten Abend, ich bin Ende 40 und mein Sohn ist schon erwachsen. Jetzt möchte ich beruflich noch einmal etwas ganz Neues machen und eine Ausbildung zum Steuerfachangestellten beginnen. Denkt ihr, dass ich in meinem Alter noch eine Chance habe, in diesem Beruf zu arbeiten?`,
        correct: "X",
      },

      {
        number: 13,
        name: "Max",
        text: `Hallo, ich mache gerade eine Ausbildung zum Verkäufer. Bis zum Abschluss habe ich noch ein Jahr und ehrlich gesagt habe ich überhaupt keine Lust mehr. Mein Vater möchte, dass ich die Ausbildung beende. Ich bin noch nicht 18. Kann ich trotzdem einfach kündigen?`,
        correct: "b",
      },
    ],
  },

  // ============================================================
  // TEST 3
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `In meinen Augen ist Familie das Wichtigste auf der Welt. Es ist doch auch ein Gewinn, wenn man mehr Zeit mit seinen Kindern verbringen kann und weniger gestresst ist. Ich würde mich auf jeden Fall für Teilzeit entscheiden.`,

      b: `Also ich finde es nicht gut, wenn Geschäfte und Supermärkte an Samstagen so lange geöffnet sind. Ihr müsst doch bedenken, dass dort auch Menschen arbeiten müssen. Sie wollen doch ebenfalls Wochenende haben und zu ihren Familien. Ich bin ganz klar gegen längere Ladenöffnungszeiten.`,

      c: `Jeder Arbeitnehmer hat einen Rechtsanspruch auf Teilzeitarbeit. Allerdings musst du länger als sechs Monate bei dem Unternehmen beschäftigt sein. Man muss sich das aber genau überlegen, da man nicht nur kurz- oder mittelfristig weniger verdient, sondern auch weniger Rentenansprüche hat.`,

      d: `Seit Kurzem haben Arbeitnehmer das Recht, eine befristete Zeit weniger zu arbeiten, aber das gilt bestimmt nicht rückwirkend. Soviel ich weiß, hast du also keinen Anspruch, in die Vollzeit zurückzukehren. Sprich doch einfach mal mit deinem Chef.`,

      e: `Der Samstag ist ein normaler Werktag und deshalb kann der Arbeitgeber anordnen, dass an diesem Tag auch gearbeitet wird. Dabei spielt es keine Rolle, ob du Kinder hast oder nicht. Oft ist es aber auch so, dass du dann an einem anderen Tag in der Woche frei bekommst.`,

      f: `Also ich würde mir das gut überlegen. Wenn du bisher gut über die Runden gekommen bist, könntest du dir doch etwas mehr Freizeit gönnen. Meines Erachtens geht es hier auch um mehr Lebensqualität. Das Leben ist zu kurz, um nur zu arbeiten.`,
    },

    questions: [
      {
        number: 10,
        name: "Som",
        text: `Meine Kinder sind unter der Woche ganztags in der Kita, damit ich Vollzeit arbeiten kann. Jetzt soll ich in den nächsten Wochen samstags ins Büro kommen. Ich habe aber niemanden, der da auf meine Kinder aufpassen kann. Kann der Arbeitgeber das verlangen?`,
        correct: "e",
      },

      {
        number: 11,
        name: "Reinhold",
        text: `Ich arbeite seit zwölf Jahren 20 Stunden die Woche und würde jetzt gerne, weil die Kinder aus dem Haus sind, meine Arbeitszeit aufstocken und wieder Vollzeit arbeiten. Habe ich ein Recht darauf?`,
        correct: "d",
      },

      {
        number: 12,
        name: "Mandy",
        text: `Seit zwei Jahren arbeite ich Vollzeit in einem Unternehmen und dieser Job macht mir auch viel Spaß. Aus familiären Gründen würde ich gerne eine dreijährige Auszeit nehmen. Ich überlege, ob ich mir das finanziell leisten kann.`,
        correct: "X",
      },

      {
        number: 13,
        name: "Nici",
        text: `Ich bekomme jetzt das zweite Kind und werde danach wahrscheinlich erst mal Teilzeit arbeiten. Jetzt habe ich ziemlich große Angst, dass ich in meiner Karriere den Anschluss verpasse. Soll ich vielleicht doch so schnell wie möglich wieder Vollzeit arbeiten?`,
        correct: "a",
      },
    ],
  },

  // ============================================================
  // TEST 4
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Leider muss ich dich enttäuschen. Die Regelung ist gesetzeskonform. Das Minimum liegt sogar nur bei 20 Tagen. Sei froh, dass du mehr hast. Bei manchen Arbeitgebern erhöht sich der Urlaubsanspruch mit längerer Firmenzugehörigkeit.`,

      b: `Meines Wissens gibt es keine gesetzliche Regelung dafür, aber sprich doch einfach mal mit eurem Chef. Dem ist vielleicht gar nicht klar, dass du das nicht so toll findest, wenn du immer erst so kurz vorher weißt, an welchen Tagen du arbeiten musst und wann du frei hast.`,

      c: `Urlaub muss immer rechtzeitig beantragt werden, aber der Arbeitgeber ist nicht unbedingt verpflichtet, ihn zu gewähren. Wann Urlaub genommen werden darf, entscheidet der Chef. Aufgrund dringender betrieblicher Gründe kann ein Urlaubsantrag auch abgelehnt werden.`,

      d: `Schau doch mal in deinen Arbeitsvertrag, da ist das sicher geregelt. Soviel ich weiß, gibt es keine gesetzlichen Einschränkungen für angestellte Arbeitnehmer. Allerdings darfst du keine sieben Tage am Stück arbeiten. Der Samstag gilt in Deutschland als normaler Wochentag.`,

      e: `Ich arbeite auch im Einzelhandel und bei uns ist es so geregelt, dass man einen festen Wochentag frei bekommt, wenn man immer samstags arbeitet. Das kommt mir entgegen. So kann ich entspannt unter der Woche einkaufen oder ins Schwimmbad gehen.`,

      f: `Das kann dein Chef nicht einfach so machen. Personelle Engpässe reichen für den Widerruf eines Urlaubsantrags nicht aus. Wenn du deinen Urlaub tatsächlich nicht antrittst, muss der Arbeitgeber alle Kosten tragen, die dir durch die Urlaubsverschiebung entstehen.`,
    },

    questions: [
      {
        number: 10,
        name: "Thia",
        text: `Voll gemein, ich habe nur 25 Urlaubstage! Mein Freund hat hingegen 30 Tage im Jahr. Ich frage mich, ob mir nicht auch mehr Tage zustehen. Kennt sich von euch da jemand aus?`,
        correct: "a",
      },

      {
        number: 11,
        name: "Marilena",
        text: `Ich arbeite im Einzelhandel und bei uns gilt jede Woche ein anderer Dienstplan. Wir bekommen den Plan immer erst am Ende der Vorwoche und deshalb können wir unsere Freizeit natürlich auch nicht richtig planen. Ist das erlaubt?`,
        correct: "b",
      },

      {
        number: 12,
        name: "Hans",
        text: `Ich habe nach der Genehmigung meines Urlaubs diesen gebucht und jetzt hat mein Chef gemerkt, dass ein anderer Kollege schon vorher zur selben Zeit Urlaub eingereicht hat. Jetzt will er mir meinen wieder streichen. Darf er das?`,
        correct: "f",
      },

      {
        number: 13,
        name: "Lisa",
        text: `Ich mache zurzeit ein Pflichtpraktikum in einem Unternehmen und arbeite von Montag bis Freitag acht Stunden täglich. Jetzt soll ich nächsten Samstag auch noch kommen. Bin ich dazu verpflichtet? Ich fühle mich ein bisschen ausgenutzt!`,
        correct: "X",
      },
    ],
  },

  // ============================================================
  // TEST 5
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Der Arbeitgeber hat eine Fürsorgepflicht und dazu gehört auch, dass er für Fahrzeuge der Mitarbeiter eine Unterbringungsmöglichkeit zu schaffen hat. Aber nur, wenn das ohne zu großen Aufwand geht. Wenn ein Unternehmen in der Innenstadt ist, gibt es einfach nicht genug Platz für Parkmöglichkeiten.`,

      b: `Wenn ein Zug seine Reise nicht fortsetzen kann und in einem Bahnhof stehen bleiben muss, bezahlt die Deutsche Bahn den Fahrgästen in bestimmten Fällen eine Weiterfahrt im Taxi. Oder sie übernimmt die Kosten für eine Hotelübernachtung. Nähere Infos findest du auf der Webseite der Deutschen Bahn.`,

      c: `Wenn du auf dem Weg zur Arbeit einen Autounfall hast, bezahlt die Unfallversicherung nur Personenschäden. Sachschäden sind dabei nicht inbegriffen. Du kannst aber grundsätzlich selbst entscheiden, welches Fahrzeug du für den Arbeitsweg benutzt.`,

      d: `Du bist dafür verantwortlich, rechtzeitig an deinem Arbeitsplatz zu erscheinen. Wie du das machst, ist deine Sache. Aber du kannst keinesfalls die Verantwortung auf die öffentlichen Verkehrsmittel schieben und dich auf den Standpunkt stellen, dass du nichts für deine Verspätung kannst.`,

      e: `Natürlich hast du an deinem Arbeitsplatz Versicherungsschutz, aber dieser gilt nicht in allen Teilen des Gebäudes. Auf der Toilette bist du zum Beispiel nicht versichert. Warum das so ist, weiß ich aber auch nicht.`,

      f: `Als Arbeitnehmer musst du dafür sorgen, zum Job zu kommen. Wenn das nicht geht, darfst du aber keine Abmahnung bekommen. Ob du ein Taxi nehmen musst, kommt darauf an, ob die Kosten dafür über deinem Arbeitslohn für einen Tag liegen. Wenn ja, sind diese Kosten für dich nicht zumutbar.`,
    },

    questions: [
      {
        number: 10,
        name: "Mikke",
        text: `Heute hatte ich auf dem Weg zur Arbeit einen Unfall. Ich habe noch einen Umweg über die Kita gemacht, bin gestolpert und habe mir den Knöchel gebrochen. Bin ich denn jetzt versichert? Ich habe ja nicht den direkten Weg zur Arbeit genommen.`,
        correct: "X",
      },

      {
        number: 11,
        name: "Ludmilla",
        text: `Ich habe eine Abmahnung bekommen, weil ich regelmäßig zu spät zur Arbeit komme. Ich fahre immer rechtzeitig von zu Hause weg und finde dann bei der Firma keine Parkmöglichkeit. Muss der Arbeitgeber nicht eigentlich seinen Mitarbeitern einen Parkplatz stellen?`,
        correct: "a",
      },

      {
        number: 12,
        name: "Peter",
        text: `Ich wollte heute Morgen mit der S-Bahn zur Arbeit fahren, aber diese ist wegen des Unwetters ausgefallen. So hatte ich keine Möglichkeit, ins Büro zu kommen, da ich kein Auto habe. Hätte ich ein Taxi nehmen müssen?`,
        correct: "f",
      },

      {
        number: 13,
        name: "Ingo",
        text: `Immer das Gleiche. Der Bus kommt zu spät, steht im Stau oder fällt aus. Jetzt habe ich Ärger mit meinem Chef, weil ich öfter mit Verspätung im Büro erscheine. Bin ich verpflichtet, immer einen früheren Bus zu nehmen, damit ich pünktlich bin?`,
        correct: "d",
      },
    ],
  },

  // ============================================================
  // TEST 6
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Wenn du in Sportkleidung in die Firma kommst und dich dort noch umziehst, ist das Privatsache. Du musst dafür sorgen, dass du pünktlich mit deiner Arbeit beginnen kannst. In diesem Fall ist die Umkleidezeit keine Arbeitszeit.`,

      b: `Der Weg zur Arbeit ist private Zeit. Du trägst die Verantwortung dafür, pünktlich vor Ort zu sein, egal wie weit dein Weg ist. Wenn du z. B. im Stau stehst oder die S-Bahn streikt und du deshalb zu spät kommst, musst du die Zeit nacharbeiten.`,

      c: `Arbeitnehmer/innen haben in der Regel alle zwei Jahre Anspruch auf fünf Tage Bildungsurlaub. Die Gesetze sind aber nicht in jedem Bundesland gleich. So variiert zum Beispiel die Anzahl der Tage für Bildungsurlaub je nachdem, ob du Voll- oder Teilzeit tätig bist.`,

      d: `Ich finde das Tragen von Dienstkleidung absolut veraltet. Warum müssen alle im Unternehmen gleich gekleidet sein? Jeder Mensch hat doch seinen eigenen Stil, mit dem er sich wohlfühlt. Ich kann verstehen, dass du die Uniform nicht auch noch im Zug tragen möchtest.`,

      e: `Wenn du selbst entscheidest, eine Fortbildung zu besuchen, und das vorher nicht mit deinem Arbeitgeber absprichst, ist das reines Privatvergnügen. Schickt dein Chef dich allerdings seinerseits auf ein Seminar, handelt es sich um Arbeitszeit.`,

      f: `Das ist ein schwieriges Thema. Wenn du während der Reise zum Beispiel deinen Termin vorbereitest oder mit dem Laptop ein Protokoll schreibst, ist das Arbeitszeit. Wenn du dich aber mit privaten Dingen wie einem Roman oder einem privaten Telefonat beschäftigst, gilt das als Freizeit.`,
    },

    questions: [
      {
        number: 10,
        name: "Claudia",
        text: `Ich muss während der Arbeit eine Uniform tragen. Mir ist es unangenehm, die schon morgens in der Bahn anzuhaben, und ich möchte mich lieber im Hotel umziehen. Muss ich dafür früher kommen oder gilt die Umkleidezeit als Arbeitszeit?`,
        correct: "X",
      },

      {
        number: 11,
        name: "Maisel",
        text: `Gestern war ich für einen Tag bei einem Kunden in Norddeutschland. Ich bin mit dem Zug gefahren und habe während der Fahrt gelesen. Insgesamt war ich elf Stunden unterwegs und habe Überstunden geltend gemacht. Die will mein Arbeitgeber nicht anerkennen.`,
        correct: "f",
      },

      {
        number: 12,
        name: "Cristof",
        text: `Ich war am Wochenende auf einer Fortbildung, die für meine Arbeit relevant war. Ich wollte mir jetzt einen Urlaubstag gutschreiben lassen, aber meine Chefin sagt, das sei meine private Angelegenheit, da sie die Fortbildung nicht angeordnet hat. Stimmt das?`,
        correct: "e",
      },

      {
        number: 13,
        name: "Samira",
        text: `Ich fahre morgens mit dem Fahrrad in die Firma, bin immer pünktlich um 9.00 Uhr da und mache mich dann fertig. Ab sofort soll ich früher kommen und darf mich nicht mehr während der Arbeitszeit umziehen. Ist das korrekt?`,
        correct: "a",
      },
    ],
  },

  // ============================================================
  // TEST 7
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Kaum jemandem gelingt es, 45 Jahre durchgehend so ein hohes Gehalt zu verdienen, dass er später die Höchstrente bekommt. Das liegt schon allein daran, dass man während der Ausbildung und in den ersten Berufsjahren weniger verdient.`,

      b: `Auch Firmen helfen, für die Zukunft vorzusorgen, denn man kann gar nicht früh genug damit anfangen. Erkundige dich bei deinem Arbeitgeber, ob eine betriebliche Altersvorsorge angeboten wird. Wenn man dann später Rentner ist, bekommt man eine zusätzliche Rente.`,

      c: `Wenn man mindestens fünf Jahre versicherungspflichtig beschäftigt war, hat man Anspruch auf die gesetzliche Rente. Dabei spielt es keine Rolle, ob man Teilzeit oder Vollzeit gearbeitet hat. Es gibt aber noch Unterschiede zwischen Ost und West.`,

      d: `Man hat das Recht, früher als mit 67 Jahren in Rente zu gehen, aber man muss Abschläge in Kauf nehmen. Im Moment sind das für jeden Monat, den man weniger arbeitet, 0,3 Prozent weniger. Man muss sich das genau ausrechnen, ob man sich das leisten kann.`,

      e: `Für alle, die nach 1964 geboren sind, gilt, dass sie bis 67 Jahre arbeiten müssen. Außer, wenn man mit 65 schon 45 Beitragsjahre nachweisen kann, also Jahre, in denen man in die Rentenversicherung eingezahlt hat.`,

      f: `Wenn man jung ist, sollte man sein Leben doch erst einmal genießen. Über Alter und Krankheit kann man sich immer noch Gedanken machen. Wer weiß, ob es später, wenn wir so weit sind, überhaupt noch eine Rente geben wird.`,
    },

    questions: [
      {
        number: 10,
        name: "Torsten",
        text: `Wir hatten neulich im Büro eine Diskussion darüber, ab wann man in Rente gehen kann. Ich dachte immer, man muss bis 67 arbeiten. Aber meine Kollegin meinte, dass sie zwei Jahre früher in Rente gehen wird. Geht das überhaupt?`,
        correct: "e",
      },

      {
        number: 11,
        name: "Hella",
        text: `Meine Rente wird ja nicht so berauschend sein, vor allem, weil ich wegen meiner zwei Kinder einige Jahre nicht oder nur Teilzeit gearbeitet habe. Es ist ja wohl schon so, dass ich dafür jetzt irgendwie bestraft werde, oder?`,
        correct: "X",
      },

      {
        number: 12,
        name: "Petra",
        text: `Mein Mann geht in zwei Jahren in Rente. Ich müsste noch vier Jahre arbeiten. Wir haben uns überlegt, dass wir zusammen in Rente gehen und noch viele gemeinsame Jahre mit verschiedenen Aktivitäten erleben wollen. Welche Folgen hätte das?`,
        correct: "d",
      },

      {
        number: 13,
        name: "Leni",
        text: `Ich bin ja noch jung und denke überhaupt noch nicht an die Rente. Aber es wird ja immer wieder gesagt, dass die normale Rente irgendwann nicht mehr ausreichen wird. Was kann ich denn jetzt schon für später tun?`,
        correct: "b",
      },
    ],
  },

  // ============================================================
  // TEST 8
  // ============================================================

  {
    title: "Forum: Rund um den Beruf",

    responses: {
      a: `Warte erst einmal ab, wie sich alles mit dem Kind entwickelt. Ich würde die Zeit nach der Geburt nicht mit Arbeit verplanen. Es ist nämlich eine große Umstellung. Wenn du dann später „Langeweile“ haben solltest, kannst du immer noch überlegen, arbeiten zu gehen.`,

      b: `Beides ist nicht ganz falsch – nach der Geburt des Kindes hat man bis zu drei Jahre Anspruch auf Freistellung von der Arbeit. 14 Monate erhält das Paar Elterngeld. Sowohl die bezahlte als auch die nicht bezahlte Zeit der Betreuung können die Eltern frei untereinander aufteilen.`,

      c: `Elterngeld erhält man von der Elterngeldstelle. Die Höhe hängt davon ab, wie viel man vorher verdient hat. Vater und Mutter können die bezahlte Elternzeit von 14 Monaten untereinander aufteilen, wie es ihnen am besten passt. Allerdings ist die Frau die ersten acht Wochen im Mutterschutz.`,

      d: `Wenn du schon länger als sechs Monate bei einer Firma beschäftigt bist, kannst du beantragen, auch während der Elternzeit ein bisschen zu arbeiten. Du darfst dann allerdings nicht mehr als 30 Stunden pro Woche tätig sein. Der Betrieb kann den Antrag aber auch ablehnen.`,

      e: `Wenn eine Frau schwanger ist, kann sie, soweit es der Gesundheitszustand zulässt, bis sechs Wochen vor der Geburt arbeiten. Dann beginnt der Mutterschutz. Dieser gilt auch noch für acht Wochen nach der Geburt. Im Anschluss folgt die Elternzeit. Aber dafür gibt es wieder andere Regelungen.`,

      f: `Während der Schwangerschaft darf ein Arbeitgeber die Mitarbeiterin nicht nach 22 Uhr beschäftigen. Zwischen 20 und 22 Uhr kann man als Schwangere nur auf eigenen Wunsch arbeiten, der Arbeitgeber darf das nicht anordnen. Insgesamt darf eine Schwangere aber eine tägliche Arbeitszeit von 8,5 Stunden nicht überschreiten.`,
    },

    questions: [
      {
        number: 10,
        name: "Natalja",
        text: `Wir werden Eltern und wollen beide die bezahlte Elternzeit nehmen. Eine Freundin meinte, dass wir insgesamt ein Jahr zu Hause bleiben können. Ein anderer Bekannter sagte, man könne sein Kind bis zu drei Jahre zu Hause betreuen. Was stimmt?`,
        correct: "b",
      },

      {
        number: 11,
        name: "Katrin",
        text: `Ich bin im vierten Monat schwanger. Mein Chef will, dass ich notfalls auch mal eine Spätschicht übernehme. Die geht bis 21:00 Uhr. Soweit ich weiß, ist das gar nicht erlaubt, oder? Außerdem bin ich abends immer sehr müde.`,
        correct: "f",
      },

      {
        number: 12,
        name: "Giovanni",
        text: `Wir sind Auszubildende und bekommen bald ein Kind. Erst nach der Ausbildung wollen wir in Elternzeit gehen. Bis dahin könnte die Oma auf unser Kind aufpassen. Unser Betrieb wäre einverstanden. Weiß jemand, ob man die Elternzeit später beginnen darf?`,
        correct: "X",
      },

      {
        number: 13,
        name: "Sandra",
        text: `Nach der Geburt bekomme ich Elterngeld. Finanziell mache ich mir keine Sorgen. Aber ich will beruflich den Anschluss nicht verlieren. Nur mit dem Kind zu Hause zu bleiben, ist nicht mein Ding. Kann man Elterngeld bekommen und gleichzeitig arbeiten?`,
        correct: "d",
      },
    ],
  },
];
