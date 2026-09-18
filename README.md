# Eventa MG — landing page

Landing page refaite de zéro en **React 18 + Vite**, sans framework CSS ni
librairie 3D. Sections : Accueil, À propos, Services, Équipes, Contact.

Direction visuelle : claire et aérée, tout le site vit dans un **cadre
arrondi** posé sur un fond violet très pâle, avec une barre de navigation en
pilule blanche flottante, des cartes blanches à ombres colorées douces et des
illustrations 3D en pâte dessinées en SVG.

## Installation

Il vous faut **Node.js 18 ou plus** (`node -v` pour vérifier).

```bash
# 1. Se placer dans le dossier
cd eventa-landing

# 2. Installer les dépendances (react, react-dom, vite)
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`. Chaque modification est
rechargée automatiquement.

```bash
# Construire la version de production dans dist/
npm run build

# Prévisualiser cette version
npm run preview
```

### Mise en ligne sur Vercel

```bash
npm i -g vercel
vercel
```

Vercel détecte Vite tout seul. Sinon : commande de build `npm run build`,
dossier de sortie `dist`.

## Structure

```
eventa-landing/
├── index.html                  polices Google + point d'entrée
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx                 assemble les sections
    ├── data/
    │   └── content.js          ← TOUS LES TEXTES SONT ICI
    ├── styles/
    │   └── global.css          tokens de couleur, typo, toutes les sections
    ├── lib/
    │   ├── constellation.js    moteur 3D maison (canvas, projection perspective)
    │   └── hooks.js            apparition, section active, défilement, inclinaison 3D
    └── components/
        ├── Navigation.jsx
        ├── Accueil.jsx         héros + constellation 3D + barre de brief
        ├── Illustrations.jsx   illustrations SVG « pâte 3D »
        ├── APropos.jsx         histoire + piliers + trois pôles en 3D
        ├── Services.jsx
        ├── Equipes.jsx         cartes inclinables en 3D
        ├── Contact.jsx         formulaire contrôlé
        ├── Pied.jsx
        └── Icones.jsx          icônes SVG en ligne
```

## Adapter le contenu

Tout le texte est dans **`src/data/content.js`** : titres, paragraphes,
services, membres, coordonnées, liens du pied de page. Vous n'avez besoin de
toucher à aucun composant pour changer les mots.

Ajouter un service : ajoutez un objet dans `services.liste`. La propriété
`visuel` choisit l'illustration de la carte parmi : `web`, `ia`, `image`,
`son`, `formation`, `commerce` (définies dans `Illustrations.jsx`).

Ajouter un membre : un objet dans `equipes.membres` (`nom`, `role`, `mot`).
L'avatar affiche les initiales ; pour de vraies photos, remplacez
`<span className="membre__portrait">` par une balise `<img>` dans
`Equipes.jsx`.

## Couleurs

Définies en haut de `src/styles/global.css` :

| Variable | Valeur | Rôle |
|---|---|---|
| `--violet` | `#3E0F8D` | couleur principale |
| `--blanc` | `#FFFFFF` | fonds clairs |
| `--brume` | `#EEEEEE` | fonds neutres |
| `--page` | `#F2EEFC` | fond de page derrière le cadre |
| `--lavande` | `#ECE6FB` | dégradé du héros, aplats doux |
| `--iris` | `#7B4BE0` | dégradés, rôles de l'équipe |

Changer une valeur ici met à jour tout le site.

## Brancher le formulaire

Dans `src/components/Contact.jsx`, la fonction `envoyer` se contente
d'afficher les valeurs dans la console. Remplacez le `console.log` par un
appel à votre API, à Formspree ou à EmailJS.

## Détails techniques

- **Constellation 3D** : projection perspective écrite à la main dans
  `src/lib/constellation.js`. Les nœuds sont répartis sur une sphère par
  spirale de Fibonacci, tournent en continu et suivent le curseur. Aucune
  dépendance ; si vous préférez Three.js plus tard, ce fichier est le seul à
  remplacer.
- **Accessibilité** : navigation au clavier avec focus visible, libellés
  `aria`, contrastes vérifiés.
- **`prefers-reduced-motion`** : toutes les animations, y compris la rotation
  3D et l'inclinaison des cartes, s'arrêtent si le système le demande.
- **Responsive** : trois paliers (1040px, 900px, 680px). Sur mobile la
  constellation passe au-dessus du titre et la navigation devient un tiroir.

## Note sur le cadre arrondi

`.cadre` utilise `overflow: clip` et non `overflow: hidden`. Les deux
découpent les coins arrondis de la même façon, mais `hidden` transforme
l'élément en conteneur de défilement, ce qui casse tous les liens d'ancrage
(`#services`, `#contact`…). Ne le changez pas.
