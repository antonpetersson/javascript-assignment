# Javascript Inlämningsuppgift

Här finns allt du behöver veta om inlämningsuppgiften!

## Uppgiftsbeskrivning

Du har fått ett uppdrag där du skall bygga en hemsida för ett nystartat företag som säljer teknikprylar. Företaget heter TechStore och har bett om din hjälp för att bygga deras e-handelssida. För att leva upp till deras förväntan, och få godkänt på den här inlämningsuppgiften, måste du följa kravspecen som du hittar nedan.

## Kravspec

* Hemsidan skall vara responsiv, dvs den skall gå att öppna på en mobil, en surfplatta och en datorskärm. (Godkänt)
* Hemsidan skall efterlikna bilderna som finns i mockup-mappen. (Godkänt)

### Navigationsbar (Godkänt)
* Hemsidan skall innehålla en fixerad navigationsbar längst upp på sidan som går hela vägen från vänster till höger.
* Till vänster i navigationsbaren skall det finnas en titel (TechStore) som skall vara klickbar, ett klick på titeln tar användaren till startsidan.
* Till höger i navigationsbaren skall det finnas en kundvagnsknapp som skall vara klickbar, ett klick på knappen tar användaren till kundvagnssidan.
* När en produkt lägs till i kundvagnen skall detta reflekteras med att det visas en siffa intill kundvagnsknappen som reflekterar antalet produkter i kundvagnen.

### Startsida (Godkänt)
* Startsidan skall lista produkterna som finns i products.json filen.
* Varje presentationsyta för produkterna skall ta upp ungefär hela höjden av skärmen och presentera all produktinformation.
* Det skall även, för varje produkt, finnas en knapp för att lägga till produkterna i kundvagnen.

### Kundvagnssida (Väl Godkänt)
* Kundvagnssidan skall lista produkterna som användaren har lagt till i kundvagnen.
* Listan skall vara horizontell och centrerad.
* Det ska gå att se flera produkter utan att behöva skrolla på sidan.
* Varje produkt i listan skall visa bilden, titeln, priset och en knapp för att ta bort produkten ur kundvagnen.
* Nedanför listan skall det finnas ett totalbelopp samt en knapp för att slutföra köpet.
* Knappen för att slutföra köpet skall, vid klickning, visa en bekräftelse på köpet i en popup.

### Färger
TechStore's färger skall användas:
* Blå: #5596F5
* Röd: #E64E4E
* Grå: #F5F5F5
* Vit: #FFF
* Svart: #212121

## Filer

Filerna ni skall använda er av hittar ni i det här Repository't.
* index.html      : Projektets startfil.
* products.json   : JSON fil som innehåller produkterna.
* script.js       : Javascript startkod som läser in JSON filen.
* assets          : Mapp som innehåller bilder på produkterna.
* mockups         : Mapp som innehåller mockups på hur sidan skall se ut.

## Inlämning

Inlämning sker via GitHub, dvs ni ska skapa ett öppet Repository(även kallat Repo) på GitHub som ni sedan Clonar till er dator. Ladda hem filerna ifrån det här Repot och flytta filerna till mappen på er dator som länkar till ert Repo. Commita filerna och Pusha upp dom till ert Repo på GitHub. Nu kan ni börja skriva er kod och sedan Committa och Pusha era ändringar.

* Ert GitHub Repository skall heta: "javascript-assignment" (Så jag hittar det).
* Uppgiften skall vara Pushad till GitHub senast 27 October.
* Det skall finnas en README.md fil på erat Repo som innehåller en Beskrivning och en Demolänk.
* Om ni av något anledning har valt att inte följa kravspecen skall detta förklaras i README.md filen.
* Förbättringar är tillåtet men då ska dessa motiveras i README.md filen.

* För att jag skall kunna hitta era GitHub konton skall ni fylla i information här: https://docs.google.com/document/d/1mauDPcGGdOSZVQTvNrLtGasKDy0cJl_44XmIR_m0wNw/edit?usp=sharing

## TIPS!

* Dela upp uggfiten i 2 delar där ni först gör startsidan och sedan kundvagnssidan.
* Använd Flexbox för eran layout!
* Läs eventuella felmeddelanden ni får i consolen.
* Skriv ut innehållet i variabler med console.log() för att kolla så allt stämmer, (OBS. dessa skall tas bort före inlämning).
* Använd föreläsnings-"slidesen" och dess länkarna för mer information.
* Använd Google för att hitta lösningar på era problem!

### Lycka till! 👻
