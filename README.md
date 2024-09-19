📂 Portfolio Project
Ce projet est un portfolio personnel, développé avec Vue.js (ou React) et un backend Node.js avec Nodemailer pour gérer un formulaire de contact.

🛠️ Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

Node.js (version 14 ou supérieure recommandée)
npm ou yarn
🚀 Installation

1. Cloner le dépôt
Commencez par cloner ce dépôt sur votre machine locale :

bash

Copier le code

git clone https://github.com/votre-utilisateur/votre-repo.git

cd votre-repo

2. Installation des dépendances du frontend
Dans le dossier frontend, installez les dépendances nécessaires :

bash
Copier le code

cd frontend

npm install

ou si vous utilisez yarn
yarn install

3. Installation des dépendances du backend
Accédez au dossier backend et installez les dépendances nécessaires au backend Node.js :

bash
Copier le code

cd ../backend

npm install

ou si vous utilisez yarn

yarn install

4. Configuration des variables d'environnement
Créez un fichier .env dans le dossier backend et ajoutez les variables d'environnement suivantes :

bash

Copier le code

 .env

# Informations d'authentification pour Nodemailer (Gmail)
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-application
EMAIL_RECEIVER=destinataire@example.com

# Port du serveur backend
PORT=3000
5. Lancement du serveur backend
Démarrez le serveur backend Node.js :

bash
Copier le code
npm start
# ou avec yarn
yarn start
Le serveur backend sera accessible sur http://localhost:3000.

6. Lancement du serveur frontend
Lancez maintenant le serveur frontend :

bash
Copier le code
cd ../frontend
npm run serve
# ou avec yarn
yarn serve
Le serveur frontend sera accessible sur http://localhost:8080.

📩 Utilisation
Accédez à http://localhost:8080 pour voir le portfolio en local.
Le formulaire de contact permettra d'envoyer un e-mail via le backend à l'adresse définie dans la variable EMAIL_RECEIVER.
🛑 Problèmes fréquents
1. Problèmes d'envoi d'e-mails avec Gmail
Si l'envoi d'e-mails échoue, vérifiez que vous avez activé les mots de passe d'application pour votre compte Google. Consultez la documentation de Google pour plus d'informations.

2. Problèmes liés au CORS
Si vous rencontrez des erreurs CORS, assurez-vous que le middleware CORS est configuré correctement dans le backend :

javascript
Copier le code
const cors = require('cors');
app.use(cors());
🤝 Contribuer
Les contributions sont les bienvenues ! Pour contribuer :

Forkez ce projet
Créez une nouvelle branche (git checkout -b ma-nouvelle-fonctionnalité)
Committez vos changements (git commit -m 'Ajouter une fonctionnalité')
Poussez vers la branche (git push origin ma-nouvelle-fonctionnalité)
Ouvrez une pull request

📝 gabin salucci

📜 Licence
Ce projet est sous licence MIT.

