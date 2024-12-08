<script setup lang="ts">
import { session } from '@/models/session';
import { RouterLink } from 'vue-router';
</script>

<template>
        <Addpost />
        <RouterLink class="button is-info" v-if="session.profile" to="/addpost">
            <span class="icon">
                <i class="fa-solid fa-person-running"></i>
            </span><p>Add Workout</p>
        </RouterLink>
        <div class="notification is-info is-light" v-else>Log in to make posts!</div>
</template>

<style scoped>

</style>