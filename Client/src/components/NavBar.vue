<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { getAll, remove, type User } from '@/models/users';
import { login, logout, session } from "@/models/session"
const users = ref<User[]>([]);
getAll().then((data) => users.value = data.data);
const isOpen = ref(false);
const deleteUser = (u: number) => {
        users.value = users.value.filter((user) => user.id !== u);
        logout; //not working idk why
        remove(u);
    }
</script>

<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
          <RouterLink to="/" class="navbar-item"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" /></RouterLink>
          <RouterLink to="/activity" class="navbar-item">
            <span class="icon">
              <i class="fa-solid fa-person-hiking"></i>
            </span><span>My Activity</span></RouterLink>
          <RouterLink to="/" class="navbar-item">
            <span class="icon">
              <i class="fa-solid fa-chart-simple"></i>
            </span><span>Statistics</span></RouterLink>  
          <RouterLink to="/feed" class="navbar-item">
            <span class="icon">
              <i class="fa-solid fa-user-group"></i>
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
              <i class="fa-solid fa-magnifying-glass"></i>
            </span><span>Search</span></RouterLink>


          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Admin
            </a>

            <div class="navbar-dropdown">
              <RouterLink to="/users" class="navbar-item">
                Users
              </RouterLink>
              <RouterLink to="/regions" class="navbar-item">
                Regions
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-text">
                <strong>Sign up</strong>
              </button>
              <div class="dropdown is-hoverable is-right">  
                <div class="dropdown-trigger">
                  <button class="button is-warning is-light" aria-haspopup="true" aria-controls="login-menu">
                    <span>Log in</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="login-menu" role="menu">
                  <ul class="dropdown-content">
                    <li v-for="user in users" @click="login(user)">
                      <a class="dropdown-item" :key="user.id"><p>{{ user.first }} {{ user.last }} @{{ user.handle }}</p></a>
                    </li>
                    <div v-if="session.profile!=0">
                      <hr class="dropdown-divider" />
                      <li @click="logout"><a class="dropdown-item">Log Out</a></li>
                      <hr class="dropdown-divider" />
                      <li @click="deleteUser(session.profile)"><a class="dropdown-item has-text-danger">Delete Account</a></li>
                    </div v-if>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>