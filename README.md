Portfolio Project
Ce projet est un portfolio personnel développé avec Vue.js et un backend Node.js avec Nodemailer pour envoyer des e-mails via un formulaire de contact.


Prérequis
Avant de pouvoir installer et exécuter ce projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 14 ou plus recommandée)
npm ou yarn
Installation
1. Clonez le dépôt
Commencez par cloner le dépôt GitHub sur votre machine locale.

bash
Copier le code
git clone https://github.com/username/nom-du-repo.git
cd nom-du-repo
2. Installez les dépendances du frontend
Le projet utilise Vue.js (ou React, si vous l'utilisez), alors vous devrez installer les dépendances du frontend.

bash
Copier le code
cd frontend
npm install
# ou si vous utilisez yarn
yarn install
3. Installez les dépendances du backend
Accédez au dossier backend et installez les dépendances nécessaires pour le serveur backend Node.js.

bash
Copier le code
cd ../backend
npm install
# ou si vous utilisez yarn
yarn install
4. Configuration des variables d'environnement
Dans le dossier backend, créez un fichier .env à la racine et ajoutez les variables suivantes :

bash
Copier le code
# Fichier .env

# Informations de votre compte Gmail (ou autre service SMTP) pour l'envoi d'e-mails
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-d-application
EMAIL_RECEIVER=destinataire@gmail.com

# Port sur lequel le backend tournera
PORT=3000
EMAIL_USER : Votre adresse Gmail (ou autre service SMTP) à partir de laquelle les e-mails seront envoyés.
EMAIL_PASS : Le mot de passe d'application que vous devez générer à partir de Gmail (ou le mot de passe SMTP si vous utilisez un autre service).
EMAIL_RECEIVER : L'adresse e-mail qui recevra les messages envoyés via le formulaire de contact.
PORT : Le port sur lequel le backend sera exécuté (par défaut 3000).
5. Lancer le serveur backend
Une fois toutes les dépendances installées et le fichier .env configuré, lancez le serveur backend :

bash
Copier le code
npm start
# ou si vous utilisez yarn
yarn start
Le serveur backend devrait être en cours d'exécution sur http://localhost:3000.

6. Lancer le serveur frontend
Dans le dossier frontend, lancez le serveur de développement :

bash
Copier le code
npm run serve
# ou si vous utilisez yarn
yarn serve
Le serveur frontend sera accessible à l'adresse http://localhost:8080.

Utilisation
Après avoir démarré le frontend et le backend, vous pouvez accéder à l'application à l'adresse http://localhost:8080. Le formulaire de contact permet d'envoyer des e-mails via le serveur backend.

Problèmes courants
Problèmes d'envoi d'e-mails avec Gmail : Assurez-vous d'avoir activé les mots de passe d'application pour votre compte Gmail si vous avez activé l'authentification à deux facteurs. Consultez la documentation de Google sur les mots de passe d'application pour plus d'informations.

CORS : Si vous rencontrez des erreurs de type CORS, assurez-vous que le middleware CORS est correctement configuré dans le backend (app.use(cors());).

Contribution
Si vous souhaitez contribuer à ce projet, veuillez ouvrir une pull request ou soumettre un problème.

Gabin SALUCCI