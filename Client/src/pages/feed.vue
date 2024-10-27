<script setup lang="ts">
import { getAll, type Exercise } from "@/models/exercises"
import { ref } from "vue";
const exercises = ref<Exercise[]>([]);
exercises.value = getAll().data;
import PostCard from "@/components/PostCard.vue";
</script>

<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="shelf">
                            <PostCard v-for="exercise in exercises" :key="exercise.id" :exercise="exercise" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shelf {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>