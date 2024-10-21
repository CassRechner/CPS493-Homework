<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
          <RouterLink to="/" class="navbar-item"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" /></RouterLink>
          <RouterLink to="/activity" class="navbar-item">
            <span class="icon">
              <i class="fas fa-running"/>
            </span><span>My Activity</span></RouterLink>
          <RouterLink to="/statistics" class="navbar-item">
            <span class="icon">
              <i class="fas fa-chart-line"/>
            </span><span>Statistics</span></RouterLink>  
          <RouterLink to="/feed" class="navbar-item">
            <span class="icon">
              <i class="fas fa-people-group"/>
            </span><span>Feed</span></RouterLink>
        

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
           :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <RouterLink to="/search" class="navbar-item">
            <span class="icon">
              <i class="fas fa-search"/>
            </span><span>Search</span></RouterLink>


          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Admin
            </a>

            <div class="navbar-dropdown">
              <RouterLink to="/users" class="navbar-item">
                Users
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>