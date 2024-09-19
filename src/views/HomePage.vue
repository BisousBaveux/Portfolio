<template>
  <div id="app-container">
    <!-- Composant de l'en-tête (header) -->
    <AppHeader 
      @go-to-home="resetToStart" 
      @go-to-presentation="resetToStart"
      @go-to-créations="scrollToCreations"
      @go-to-contact="scrollToContact" 
    />

    <!-- Slider principal pour afficher les sections -->
    <div id="slider-container">
      <!-- Flèche de navigation gauche, visible uniquement après avoir cliqué à droite au moins une fois -->
      <button v-if="hasClickedRightArrow" @click="prevSlide" class="arrow-button left-arrow">❮</button>
      <!-- Flèche de navigation droite -->
      <button @click="nextSlide" class="arrow-button right-arrow">❯</button>

      <!-- Sections des slides (carousel) -->
      <div id="slider" :style="{ transform: `translateX(-${currentIndex * 100}vw)` }">
        <!-- Boucle sur les slides pour les afficher dynamiquement -->
        <section v-for="(slide, index) in slides" :key="index" class="slide">
          <div class="content">
            <h2>{{ slide.title }}</h2>
            <img 
              v-if="slide.image" 
              :src="slide.image" 
              :alt="slide.title" 
              :class="{
                'project-image': slide.title !== 'gabin salucci', 
                'profile-image': slide.title === 'gabin salucci'
              }"
            />
            <p>{{ slide.description }}</p>

            <!-- Bouton "Voir plus" uniquement pour les projets (index 1 et 2) -->
            <button v-if="index > 0 && index < 3" @click="openProjectModal(slide)">Voir plus</button>

            <!-- Bouton "Contactez-moi" uniquement pour la dernière slide (index 3) -->
            <button v-if="index === 3" @click="openContactModal()">Contactez-moi</button>
          </div>
        </section>
      </div>
    </div>

    <!-- Modal pour afficher les détails des projets -->
    <div v-if="isModalOpen && !isContactForm" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">X</button>
        <h2>{{ modalData.title }}</h2>
        <p>{{ modalData.description }}</p>
        <p><strong>Date de création :</strong> {{ modalData.date }}</p>
        <p><strong>Technologies :</strong> {{ modalData.technologies }}</p>
        <a :href="modalData.projectLink" target="_blank">Visiter le site</a>
        <div v-if="modalData.githubLink">
          <a :href="modalData.githubLink" target="_blank">Voir le repository GitHub</a>
        </div>
      </div>
    </div>

    <!-- Modal pour afficher le formulaire de contact -->
    <div v-if="isModalOpen && isContactForm" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">X</button>

        <!-- Formulaire de contact, via le composant ContactForm -->
        <ContactForm />
      </div>
    </div>

    <!-- Composant du pied de page (footer) -->
    <AppFooter />
  </div>
</template>

<script src="@/Scripts\HomePage.js"></script>
<style src="@/styles/HomePage.css"></style>

