<script setup lang="ts">
import { getExercises, remove, type Exercise } from "@/models/exercises"
import { ref } from "vue";
const exercises = ref<Exercise[]>([]);
getExercises().then((data) => exercises.value = data.data);
import PostCard from "@/components/PostCard.vue";
import PostButton from "@/components/PostButton.vue";
const deletePost = (e: number) => {
  exercises.value = exercises.value.filter((exercise) => exercise.id !== e)
  remove(e);
}
</script>

<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <PostButton />
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