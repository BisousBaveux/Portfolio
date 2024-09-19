<template>
  <div id="contact-form">
    <h2>Contactez-moi</h2>
    <!-- Formulaire de contact-->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nom/Prénom</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="form-group">
        <label for="subject">Objet</label>
        <input type="text" id="subject" v-model="formData.subject" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </form>

    <!-- Message de confirmation ou d'erreur -->
    <div v-if="responseMessage" class="response-message">
      {{ responseMessage }}
    </div>
  </div>
</template>

<style src="@/styles/ContactForm.css"></style>
<script src="@/Scripts\ContactForm.js"></script>

