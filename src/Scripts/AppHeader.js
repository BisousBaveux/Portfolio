export default {
        name: 'AppHeader',
    methods: {
        goToHome() {
        this.$emit('go-to-home'); // Émet un événement vers le parent pour revenir à la première slide
    },
    goToPresentation() {
        this.$emit('go-to-presentation');
    },
    goToCréations() {
        this.$emit('go-to-créations');
    },
    goToContact() {
        this.$emit('go-to-contact');
    },
  },
};
