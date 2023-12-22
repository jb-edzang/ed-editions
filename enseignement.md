- [ ] my-next-app
-------------------------
  - [ ] components
    - [ ] Header.js (composant)
      - [ ] Logo.js (sous-composant)
      - [ ] NavBar.js
      - [ ] SearchInput.js
      - [ ] SocialIcons.js
    - [ ] Footer.js
    - [ ] Layout.js (commun à toutes les pages)
----------------------------  
  - [ ] pages (chaque page = une route de l'app):
    - [ ] index.js (page d'accueil)
    - [ ] about.js (page about)
    - [ ] contact.js (page contact)
--------------------------------
  - [ ] ...autres fichiers et dossiers générés par Next.js

  - [ ] pages/api (serveur)
    - [ ] A propos des dossiers api Next
    - [ ] services/api/api.js ou API externe: située à la racine du projet, sert à configurer Axios, destiné à interagir avec les services externes tels que des API tierces, des bases de données distantes, etc.
    - [ ] pages/api/API_Routes ou API interne : ce sont des endPoints correspondant aux fichiers.js stockés dans pages/api. Ces API servent à gérer des requêtes côté serveur, des opérations CRUD avec la base de données, etc.



---------------------------------

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
  