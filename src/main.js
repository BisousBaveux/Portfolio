import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Importez le routeur
import '@/styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Importer Font Awesome

const app = createApp(App);
app.use(router); // Utilisez le routeur dans votre application
app.mount('#app'); // Montez l'application sur l'élément avec l'ID "app"
