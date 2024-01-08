- [ ] my-next-app
-------------------------
PAGES & LAYOUT
  - [ ] components
    - [ ] Header.js (composant)
      - [ ] Logo.js (sous-composant)
      - [ ] NavBar.js
      - [ ] SearchInput.js
      - [ ] SocialIcons.js
    - [ ] Footer.js
    - [ ] Layout.js (commun à toutes les pages)
----------------------------  
ROUTING
  - [ ] fichiers de routage (chaque page = une route de l'app): 
    - [ ] index.js (page d'accueil)
    - [ ] about.js (page about)
    - [ ] contact.js (page contact)
--------------------------------

CONNEXION SERVEUR & BD
- [ ] lib ou utils
  - [ ] exemple: lib/db.js pour initialiser la connexion à la bd
  - [ ] lib/models/ pour les modèles ou les schémas de données utilisées dans l'application pour interagir avec la bd
- [ ] pages/api (serveur)
  - [ ] A propos des dossiers api Next
  - [ ] services/api/api.js ou API externe: située à la racine du projet, sert à configurer Axios, destiné à interagir avec les services externes tels que des API tierces, des bases de données distantes, etc.
  - [ ] pages/api/API_Routes ou API interne : ce sont des endPoints correspondant aux fichiers.js stockés dans pages/api. Ces API servent à gérer des requêtes côté serveur, des opérations CRUD avec la base de données, etc.



---------------------------------
CONTENU DES PAGES
- [] Pages et méthodes http
/pages
│
├── SignUp.js
│   └── POST /api/signup
│       └── { user, email, pwd }
│
├── SignIn.js
│   └── POST /api/signin
│       └── { user, pwd }
│
├── CreateBook.js
│   └── POST /api/books
│       └── { title, user_id, description, publication_date }
│
├── UploadPhoto.js
│   └── POST /api/photos
│       └── { title, description, image_url, user_id, price (id de l'utilisateur), themes, tags }
│
├── CreateComment.js
│   └── POST /api/comments
│       └── { photo_id, user_id, content }
│
├── Like.js
│   └── POST /api/likes
│       └── { photo_id, user_id }
│
├── GetPhotos.js
│   └── GET /api/photos
│
└── GetUsers.js
    └── GET /api/users

-------------------------------
- [ ] Logique des formulaires
  - [ ] récupération des données : event.target.value;
  - [ ] stockage des données dans un state: useState;
  - [ ] envoi des données au server/API : axios 

pages/
  ├── SignUp.js
  ├── SignIn.js
  ├── CreateBook.js
  ├── UploadPhoto.js
  ├── CreateComment.js
  ├── Like.js
  ├── GetPhotos.js
  ├── GetUsers.js
  └── api/
      ├── signup.js
      ├── signin.js
      ├── books.js
      ├── photos.js
      ├── comments.js
      ├── likes.js
      ├── photos.js
      └── users.js

--------------------
TEST 
- [ ] Requêtes sur thunder Client:
  - [ ] GET method
    - [ ] sélectionner la méthode HTTP
    - [ ] entrer l'URL du endpoint. ex.: localhost:3000/api/comments
    - [ ] btn "send" pour envoyer la requête
  - [ ] POST method
    - [ ] idem 
    - [ ] Body: option JSON pour entrer les données 
   - [ ] DELETE method
     - [ ] ex.: localhost:3030/api/comments/1
     - [ ] idem 

diverses notes sur Next
- [ ] NextResponse()
  - [ ] NextResponse.json({})
- [ ] NextRequest()
- [ ] quest.nextUrl.searchParams.get()
- [ ] revalidatePath()
- [ ] getStaticProps : une fonction utilisée dans les pages Next. elle récupère les données à intégrer à la page avant le rendu. Elle génère des pages avec des données statiques pré-remplies;
  - [ ] par exemple, pour afficher les pages de blog à partir de pages/blog/[slug].js, on peut utiliser getstaticProps dans une page pour récupérer les données de chaque article à partir d'une source (API, BD, etc)
- [ ] SSG, SSR & ISR : méthodes de rendu qui déterminent comment les pages sont générées et servies aux utilisateurs
  - [ ] SSG (static Site Generation): générer les pages du site à l'avance, au moment de la construction (build) de l'app. sans nécessité de calculs suplémentaires à chaque requête côté serveur. cf. npm run build (tag lambda = server-side renders; tag O = static HTML);
      - [ ] generateStaticParams: génère dynamiquement les params des routes pour les pages dynamiques;
      - [ ] dynamicParams: pour générer segments d'urls correspondant aux modifications des parties des pages ciblées plutôt que modifier/mettre à jour toute la page en entier;
      - [ ] not-found file: une page (notFound.js) fournie par Next.js (from "next/navigation);
  - [ ] SSR (Server-Side Rendering): générer les contenu de la page côté serveur à chaque requête. SSR génère le HTML à la volée en fonction des requêtes.
  - [ ] Les cache settings for fetch requests: gestion du cache à l'aide de Fetch (ou axios) pour récupérer les données d'une URL distante, controler comment ces données sont mise en cache, pendant combien de temps sont elles stockées dans le cache du navigateur.
  - [ ] syntaxe: const res = await fetch("URL", {options})
  - [ ] les options: cache("default", "no-store", "force-cache", etc.), method (GET), headers("Cache-Control":"max-age-3600", Expires)
  - [ ] ISR (incremental static regeneration / régénération statique incrémentielle) : générer des pages statiques de manière dynamique côté serveur, à mesure que les nouvelles données d'une page changent. usage: utiliser dans chaque page la fonction "getStaticProps" avec la clé "revalidate" indiquant à Next à quelle fréquence la page doit être régénérée. Exple: const res = await fetch("URL, {next:{revalidate:60}}), cf. Data Fetching, caching, and revalidating
- [ ] NextResponse & NextRequest : objets des fonctions des middlewares de Next (pages/api/middleware.js)
  - [ ] 