# Eliza Beauty Salon

Négyoldalas, reszponzív, magyar nyelvű bemutató weboldal: Főoldal, Kezelések, Rólunk és Kapcsolat. Külön adatkezelési bemutató oldal is tartozik hozzá.

## Használat

A kész weboldal a `dist/` mappában található, statikus tárhelyen kiszolgálható. A `dist/index.html` közvetlenül is megnyitható böngészőben.

A HTML-oldalak újragenerálásához Node.js szükséges:

```sh
node generate.cjs
```

A tartalmi forrás a `szovegek.md`; a megjelenést a `dist/style.css`, az interakciókat a `dist/app.js` tartalmazza. A generátor újrafuttatása felülírja a HTML-fájlokat.

## Funkciók és korlátok

- Mobilmenü, lenyitható gyakori kérdések és csomagválasztás.
- Az időpontkérő a felhasználó levelezőprogramjában készít elő e-mailt; nincs szerveroldali üzenetküldés vagy adattárolás.
- A hírlevélküldő és a letölthető Arcápolási Kisokos nincs bekötve.
- A telefon és az e-mail a kapott anyagban szereplő mintaadat. Éles használat előtt cserélendők, az adatkezelési tájékoztató véglegesítendő.
- A fotók külső Unsplash-forrásról, a betűtípusok Google Fonts szolgáltatásból töltődnek be.

A `.openai/hosting.json` a meglévő privát Sites-telepítés konfigurációja.
