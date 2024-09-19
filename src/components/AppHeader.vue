<template>
  <header id="header">
    <div class="header-content">
      <!-- Ajout d'un @click pour émettre un événement au clic sur le logo -->
      <a href="#top" aria-label="Go to Home" @click.prevent="goToHome">
        <img src="@/assets/logo.png" alt="Website Logo" class="logo" />
      </a>
      <nav>
        <a href="#presentation" @click.prevent="goToPresentation" aria-label="Go to Presentation section">Présentation</a>
        <a href="#creations" @click.prevent="goToCréations" aria-label="Go to Creations section">Créations</a>
        <a href="#contact" @click.prevent="goToContact" aria-label="Go to Contact section">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script src="@/Scripts\AppHeader.js"></script>
<style src="@/styles/AppHeader.css"></style>
