const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware pour analyser les requêtes en JSON
app.use(express.json());
app.use(cors());

//verifie que j'écoute le port 8080
const corsOptions = {
    origin: 'http://localhost:8080', // L'origine de votre frontend
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Configurer Nodemailer avec Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Récupérer l'e-mail depuis le fichier .env
        pass: process.env.EMAIL_PASS, // Récupérer le mot de passe d'application depuis le fichier .env
    },
});

// Endpoint POST pour envoyer un e-mail
app.post('/send-email', (req, res) => {
    const { name, subject, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // Votre adresse Gmail
        to: process.env.EMAIL_RECEIVER, // L'adresse e-mail qui recevra l'e-mail
        subject: `Message de ${name}: ${subject}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'e-mail.' });
        } else {
            console.log('E-mail envoyé :', info.response);
            return res.status(200).json({ success: true, message: 'E-mail envoyé avec succès.' });
        }
    });
});

// Démarrer le serveur backend
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`);
});
