# React + TypeScript + Vite

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
