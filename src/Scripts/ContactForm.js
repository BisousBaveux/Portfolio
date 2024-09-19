export default {
    name: 'ContactForm',
    data() {
        return {
            formData: {
                name: '',
                subject: '',
                message: '',
            },
            responseMessage: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                console.log(`${process.env.VUE_APP_BACKEND_URL}/send-email`); // Vérifier l'URL du backend

                const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/send-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.formData),
                });

                const data = await response.json();
                if (data.success) {
                    this.responseMessage = 'Votre message a bien été envoyé.';
                    this.formData = { name: '', subject: '', message: '' }; // Réinitialiser le formulaire
                } else {
                    this.responseMessage = 'Une erreur est survenue. Veuillez réessayer.';
                }
                // j'essaie de comprendre pourquoi l'api ne fonctionne pas
            } catch (error) {
                console.error('Erreur lors de l\'appel à l\'API:', error);
                this.responseMessage = 'Une erreur est survenue. Veuillez réessayer.';
            }
        }
    },
};