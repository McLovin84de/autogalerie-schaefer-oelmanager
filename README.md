Autogalerie Schäfer – Ölmanager (Testversion)

Dies ist eine lokale/Vercel-fähige Testversion der internen Weboberfläche
zum Suchen von Motorölen, Kategorisierung und Preisverwaltung.

Wichtige Hinweise
- Diese Version enthält Platzhalter und Serverless-API-Stubs für
  automatische Preisupdates. Um echte Preise zu beziehen, musst du API-Keys
  / Endpunkte in der Datei api/search.js konfigurieren (siehe Kommentare).
- Das Projekt ist für Deployment auf Vercel vorbereitet (einfach das GitHub-Repo verbinden).
- Login-Passwort (Test): 26061984  (du kannst es später in der Vercel ENV konfigurieren)

Schnellstart (lokal)
1. Node.js (>=18) installieren.
2. Im Projektverzeichnis:
   npm install
   npm run dev
3. Öffne http://localhost:5173

Deployment auf Vercel
1. Erstelle ein GitHub-Repository und pushe dieses Projekt hinein.
2. Verbinde das Repo mit Vercel (Import Project).
3. Setze in Vercel die Environment-Variablen (z. B. PASSWORD=26061984 und API_KEYS).
4. Deployen – Vercel baut automatisch die Seite und die API-Routen.
