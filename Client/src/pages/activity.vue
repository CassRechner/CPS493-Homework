<script setup lang="ts">
import { getAll, type Exercise } from "@/models/exercises"
import { computed, ref } from "vue";
const exercises = ref<Exercise[]>([]);
exercises.value = getAll().data;
import MyPost from "@/components/MyPost.vue";
import { session } from "@/models/session";
import { type User } from '@/models/users';
</script>

<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <ul class="shelf">
                            <MyPost v-for="exercise in exercises" :key="exercise.id" :exercise="exercise" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    shelf {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

</style>