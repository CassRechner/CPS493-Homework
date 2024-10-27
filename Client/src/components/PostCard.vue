<script setup lang="ts">
import type { Exercise } from '@/models/exercises';

const props = defineProps<{
    exercise: Exercise
}>()
const { exercise } = props
</script>

<template>
    <div class="post">
        <h3>{{ exercise.user }}</h3>
            <h2>{{ exercise.title }}</h2>
            <h4>{{ exercise.date }}</h4>
            <p>{{ exercise.distance }} miles, {{ exercise.duration }} minutes</p>
    </div>
</template>

<style scoped>
.post {
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 400px;
    cursor: pointer;
    margin: 2rem auto;
} 
.post h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
}
.post .priority {
    text-align: right;
    font-size: 1rem;
    color: #666;
}
</style>