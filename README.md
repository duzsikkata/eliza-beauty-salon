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
- Az időpontkérő a Netlify Forms szolgáltatásába küldi az adatokat. A fogadott üzenetek a Netlify Forms felületén érhetők el; az e-mailes értesítés a Netlify projektbeállításaiban kezelhető. Az űrlap sikeres küldést és hibát is jelez, küldés közben tiltja az ismételt beküldést, és hiba esetén megőrzi a beírt adatokat. JavaScript nélkül külön köszönőoldalra irányít.
- Az Arcápolási Kisokos feliratkozója külön Netlify Forms űrlapban (`arcapolasi-kisokos`) rögzíti a nevet, e-mail címet és a hírlevél-hozzájárulást. A meglévő Netlify-értesítés az új feliratkozásokat is jelzi. A letölthető Kisokos fájlja és az automatikus hírlevélküldő szolgáltatás még nincs bekötve; ezt az űrlap és a visszajelzés is egyértelműen jelzi.
- A telefon és az e-mail a kapott anyagban szereplő mintaadat. Éles használat előtt cserélendők, az adatkezelési tájékoztató véglegesítendő.
- A fotók helyi WebP-fájlokként töltődnek be, 480, 800 és 1200 pixel szélességű változatokból. Az eredeti stockfotók forrása az Unsplash; a betűtípusok Google Fonts szolgáltatásból töltődnek be.

## SEO és nyilvános tárhely

A nyilvános weboldal: https://grand-rugelach-823f48.netlify.app/

Az oldalankénti címeket, leírásokat és canonical URL-eket a `seo-config.cjs` tartalmazza. A `generate.cjs` hozza létre a HTML-fájlokat, a `robots.txt` és `sitemap.xml` fájlokat is. A nyitóképek kiemelt prioritással, a további képek késleltetett betöltéssel jelennek meg. A képek `srcset`, `sizes`, `width` és `height` attribútumokat kapnak.

A Netlify-projekt jelenleg közvetlen ZIP-feltöltéssel frissül; a GitHub-módosítások önmagukban nem indítanak automatikus Netlify-telepítést. A `netlify.toml` előkészíti a későbbi Git-alapú telepítést.

A `.openai/hosting.json` a meglévő privát Sites-telepítés konfigurációja.
