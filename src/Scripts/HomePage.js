// src/pages/HomePage.js

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import ContactForm from '@/components/ContactForm.vue'; // Composant ContactForm pour la modal de contact

export default {
    name: 'HomePage',
    components: {
        AppHeader,
        AppFooter,
        ContactForm, // Déclaration du composant ContactForm
    },
    data() {
        return {
            currentIndex: 0, // Index du slide actuel
            hasClickedRightArrow: false, // Contrôle l'affichage de la flèche gauche
            isModalOpen: false, // Indique si la modal est ouverte
            isContactForm: false, // Différencie la modal projet de la modal de contact
            modalData: {}, // Stocker les données du projet pour la modal
            slides: [
                {
                    title: 'Gabin SALUCCI',
                    image: require('@/assets/profil.png'),
                    description: 'Développeur web passionné, spécialisé dans la création de sites web modernes, réactifs et centrés sur l\'utilisateur.',
                },
                {
                    title: 'Projet 1: ProphetieGen',
                    image: require('@/assets/Project1.png'),
                    description: 'Description du projet 1. Utilisation de technologies comme VueJS, HTML, CSS...',
                    date: '12/01/2024',
                    technologies: 'VueJS, HTML, CSS',
                    projectLink: 'https://example.com/projet1',
                    githubLink: 'https://github.com/votreprofil/projet1',
                },
                {
                    title: 'Projet 2: Portfolio,
                    image: require('@/assets/Project2.png'),
                    description: 'Description du projet 2. Utilisation de technologies comme React, Node.js...',
                    date: '25/05/2024',
                    technologies: 'VueJs, Node.js, html, css',
                    projectLink: 'https://example.com/projet2',
                    githubLink: '',
                },
                {
                    title: 'Contactez-moi',
                    image: '',
                    description: 'Vous pouvez me suivre sur mes réseaux sociaux.',
                },
            ],
        };
    },
    methods: {
        // Passer au slide suivant
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.hasClickedRightArrow = true; // Afficher la flèche gauche après le premier clic droit
        },

        // Revenir au slide précédent
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },

        // Réinitialiser l'index du slide (retour à la première slide)
        resetToStart() {
            this.currentIndex = 0;
        },

        // Défilement vers la section "Contactez-moi"
        scrollToContact() {
            this.currentIndex = 3;
        },

        // Défilement vers la section "Créations"
        scrollToCreations() {
            this.currentIndex = 2;
        },

        // Ouvrir la modal pour afficher les détails du projet
        openProjectModal(project) {
            this.modalData = project;
            this.isModalOpen = true;
            this.isContactForm = false; // Modal pour projet
        },

        // Ouvrir la modal pour afficher le formulaire de contact
        openContactModal() {
            this.isModalOpen = true;
            this.isContactForm = true; // Modal pour contact
        },

        // Fermer la modal
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
