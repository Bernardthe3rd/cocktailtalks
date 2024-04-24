# CocktailTalks

## Inhoudsopgave.
1. Inleiding.
2. Eindresultaat.
3. Lijst van benodigdheden.
4. Applicatie starten.
5. NPM commando's en waar deze voor dienen.

## Inleiding.
Deze applicatie is gebouwd om antwoord te geven op een aantal vragen die menig cocktailliefhebber heeft.
En naar mijn mening nog geen mooie oplossing bestaat waarbij je alle antwoorden voor die vragen krijgt.
Vanuit die gedachte is CocktailTalks ontstaan. Hierbij een greep uit de vragen met daarbij een functionaliteit die deze vraag beantwoord:
1. Als je niet zo goed weet welke cocktail je nu eens zou moeten proberen. Dan bied de Randomizer pagina de oplossing. Deze genereert met een druk op de knop een lekker voorstel.
2. Benieuwd naar welke cocktails er eigenlijk zijn. Daarvoor is de cataloguspagina, deze pagina bied een overzicht maar een groot aanbod.
3. Wil je toch je favoriete cocktails bijhouden en hierover feedback bijhouden. Klik dan op het sterretje bij je gekozen cocktail en die wordt dan toegevoegd aan je account. Op je account pagina kan je vervolgens feedback erbij schrijven en opslaan.

## Eindresultaat.
Hierbij een screenshot van een gevulde account pagina met feedback.

## Benodigdheden.
Om deze applicatie te gebruiken zijn de volgende zaken nodig.
1. Link naar github repository: https://github.com/Bernardthe3rd/cocktailtalks
2. API key = cocktailtalks:JmnVqzgJyhYDbqyQauOT , deze zit in de AuthContext als variabele gedeclareerd en is op de juiste plekken toegepast.
3. Gebruikte API = Cocktail API (https://www.thecocktaildb.com/api.php)
4. Dependencies, check of je onderstaande geïnstalleerd hebt.
   1. _**Axios**_, zorgt ervoor dat je requests richting een API kan doen.
   2. _**react-router-dom**_, zorgt er in deze applicatie voor dat routing toegepast kan worden. M.a.w. navigatie op de juiste manier toegepast kan worden.
   3. _**jwt-decode**_, gebruik je om de originele token van een gebruiker te decoderen. Om deze vervolgens te gebruiken om gebruikersinfo op te halen.
   4. _**@phosphor-icons/react**_, is een icon package. Mijn ster icon komt hiervandaan en nog een ander icoontje, als je die kan vinden ;).
5. Gebruik het liefst Google Chrome als runtime enviroment.


## Applicatie starten.
Clone dit project door middel van de SSH link te plakken in je lokale IDE bij het opstarten van een nieuw project from version control. 
Nadat je dit project hebt gecloned naar je lokale IDE en succesvol geopend is, installeer je eerst alle dependencies door het volgende commande in de terminal te runnen:
```shell 
npm install
```
Wanneer dit klaar is, kan je in de zojuist toegevoegde node_modules map controleren of de dependencies uit het vorige hoofdstuk geïnstalleerd zijn.
Als dat allemaal klopt, kan je de applicatie starten met het volgende commando in de terminal te runnen:
```shell
npm run dev
```



