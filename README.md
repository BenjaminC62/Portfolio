# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Project structure :

```php
src/
├── assets/               # Contient les ressources statiques comme les images, icônes, polices
│   ├── images/
│   └── icons/
├── components/           # Composants réutilisables du projet
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css  # Style module associé
│   │   └── index.ts           # Exporte le composant pour faciliter les imports
│   ├── Button/
│   └── ...autres composants
├── pages/                # Pages de l'application (chaque page contient généralement plusieurs composants)
│   ├── Home.tsx
│   ├── About.tsx
│   └── ...autres pages
├── hooks/                # Hooks personnalisés (ex. useFetch.ts, useAuth.ts)
├── types/                # Types et interfaces TypeScript
│   ├── navData.ts
│   └── index.ts
├── services/             # Appels API ou services de communication externe
│   ├── api.ts
│   ├── authService.ts
│   └── ...autres services
├── utils/                # Fonctions utilitaires et helpers
│   ├── formatDate.ts
│   └── ...autres utilitaires
├── context/              # Fournisseurs et contextes pour gérer l'état global (ex. AuthContext.tsx)
├── App.tsx               # Composant racine de l'application
├── index.tsx             # Point d'entrée pour ReactDOM.render()
├── routes/               # Gestion des routes (si nécessaire, ex. AppRoutes.tsx)
└── styles/               # Fichiers de style globaux (ex. variables, reset CSS)
    ├── colors.module.css
    └── main.css

```
