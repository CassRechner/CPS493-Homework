<script setup lang="ts">
import { ref } from 'vue';
import { getExercises, type Exercise } from '@/models/exercises';
import { getAll, type User } from '@/models/users';
import { session } from '@/models/session';
const users = ref<User[]>([]);
users.value = getAll().data;
const exercises = ref<Exercise[]>([]);
exercises.value = getExercises().data;
</script>

<template>
    <div id="post-modal" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>

</style>