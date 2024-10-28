<script setup lang="ts">
import { getExercises, type Exercise } from "@/models/exercises"
import { ref } from "vue";
const exercises = ref<Exercise[]>([]);
exercises.value = getExercises().data;
import PostCard from "@/components/PostCard.vue";
import { session } from "@/models/session";

const deletePost = (e: number) => {
  exercises.value = exercises.value.filter((exercise) => exercise.id !== e)
}
</script>

<template>
    <div>
        <div class="section">
            <div class="container">
                
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <a class="button is-info" v-if="session.profile">
                            <span class="icon">
                                <i class="fa-solid fa-person-running"></i>
                            </span><p>Add Workout</p>
                        </a>
                        <div class="notification is-info is-light" v-else>Log in to make posts!</div>
                        <div class="shelf">
                            <PostCard @exerciseDeleted="deletePost" v-for="exercise in exercises" :key="exercise.id" :exercise="exercise" />
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
.button {
        width: 400px;
        margin: 1rem auto;
    }
</style>