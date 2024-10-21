<script setup lang="ts">
import { exercises } from "../components/database"
</script>

<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <ul class="shelf">
                            <li v-for="exercise in exercises">
                                <h3>{{ exercise.user }}</h3>
                                <h2>{{ exercise.title }}</h2>
                                <h4>{{ exercise.date }}</h4>
                                <p>{{ exercise.distance }} miles, {{ exercise.duration }} minutes</p>
                            </li>
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
          flex-wrap: wrap;
          gap: 1rem;
        }
        .shelf li {
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          width: 400px;
          cursor: pointer;
          margin: 2rem auto;
        } 
        .shelf h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: bold;
        }
        .shelf .priority {
          text-align: right;
          font-size: 1rem;
          color: #666;
        }
</style>