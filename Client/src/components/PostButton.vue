<script setup lang="ts">
import { session } from '@/models/session';
import { RouterLink } from 'vue-router';
import LoginOnly from './LoginOnly.vue';
</script>

<template>
        <RouterLink class="button is-info" v-if="session.profile" to="/addpost">
            <span class="icon">
                <i class="fa-solid fa-person-running"></i>
            </span><p>Add Workout</p>
        </RouterLink>
        <LoginOnly v-else />
</template>

<style scoped>

</style>