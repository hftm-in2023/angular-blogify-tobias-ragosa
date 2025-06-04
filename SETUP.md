# 🛠️ Projekt-Setup-Dokumentation

Diese Datei dokumentiert detailliert den vollständigen Setup-Prozess des Projekts **angular-blogify-tobias-ragosa**. Sie ist so gestaltet, dass ein anderer Entwickler das Projekt vollständig nachvollziehen, einrichten und weiterentwickeln kann.

---

## 1️⃣ Projektinitialisierung

Ein neues Angular-Projekt wurde mit dem Angular CLI wie folgt erstellt:

```bash
ng new angular-blogify-tobias-ragosa --style=scss --routing
```

### Auswahlparameter:

- **SCSS** wurde als CSS-Präprozessor gewählt.
- **Routing** wurde aktiviert.
- Das Projektverzeichnis ist: `angular-blogify-tobias-ragosa`

---

## 2️⃣ Lokales Git-Repository & GitHub-Push

### Schritte:

1. Git initialisieren:

   ```bash
   cd angular-blogify-tobias-ragosa
   git init
   ```

2. Erstes Commit:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. Remote-Repository verknüpfen:
   ```bash
   git remote add origin https://github.com/hftm-in2023/angular-blogify-tobias-ragosa.git
   git branch -M main
   git push -u origin main
   ```

---

## 3️⃣ Code-Qualitätstools integrieren

### Installation:

```bash
npm install --save-dev eslint prettier husky lint-staged @commitlint/cli @commitlint/config-conventional
```

### ESLint konfigurieren:

```bash
npx eslint --init
```

### Prettier konfigurieren:

`.prettierrc` hinzufügen:

```json
{
  "singleQuote": true,
  "semi": true
}
```

### CommitLint konfigurieren:

`commitlint.config.js` hinzufügen:

```js
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### Husky & Lint-Staged aktivieren:

```bash
npx husky install
npm set-script prepare "husky install"
```

#### Hooks:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

### Lint-Staged in `package.json`:

```json
"lint-staged": {
  "*.{ts,html,scss}": ["eslint --fix", "prettier --write"]
}
```

---

## 4️⃣ GitHub Actions Workflow einrichten

Datei: `.github/workflows/azure-static-web-apps-zealous-field-0a02f7903.yml`

### Trigger:

- Bei jedem Push auf `main`
- Manuell via `workflow_dispatch`

### Wichtige Schritte im Workflow:

- Node & Abhängigkeiten installieren
- Automatisiertes `ng update`
- Build & Tests
- Sicherheitsanalyse (`npm audit`)
- Deployment zu Azure

### Azure Deployment Voraussetzungen:

- GitHub Secrets:
  - `AZURE_WEBAPP_NAME`
  - `AZURE_WEBAPP_PUBLISH_PROFILE`
- Zielverzeichnis (nach Build): `dist/angular-blogify-tobias-ragosa/browser`

---

## 5️⃣ Sicherheits- und Abhängigkeitsmanagement

### Tools & Befehle:

- Sicherheitsprüfung:
  ```bash
  npm audit --audit-level=moderate
  ```
- Abhängigkeitsupdate:
  ```bash
  npx ng update --force --all --allow-dirty
  ```
- Optional:
  ```bash
  npx npm-check-updates -u
  ```

---

## 6️⃣ Tests

### Unit Tests:

```bash
ng test --watch=false --browsers=ChromeHeadless
```

### Integrationstests:

```bash
npm run test:integration
```

(Skript ggf. in `package.json` definieren)

---

## 7️⃣ Deployment testen

Nach dem Merge in `main` oder manuellem Trigger in GitHub Actions:

1. GitHub Actions Workflow kontrollieren.
2. Output unter Azure App Service prüfen (z. B. via URL).

---

## 👤 Autor

**Name:** DonRagosh  
**Projekt:** angular-blogify-tobias-ragosa  
**Organisation:** HFTM IN 2023
