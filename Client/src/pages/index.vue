<script setup lang="ts">
import { computed, ref } from 'vue';
import { getExercises, type Exercise } from '@/models/exercises';
import { getAll, type User } from '@/models/users';
import { session } from '@/models/session';
const users = ref<User[]>([]);
getAll().then((data) => users.value = data.data);
const exercises = ref<Exercise[]>([]);
getExercises().then((data) => exercises.value = data.data);
const totalDistance = computed(() => {
  return exercises.value.filter(({user}) => user===session.profile)
  .reduce((dist, exercise) => dist + exercise.distance, 0
  )
})
const totalTime = computed(() => {
  return exercises.value.filter(({user}) => user===session.profile)
  .reduce((time, exercise) => time + exercise.duration, 0
  )
})

</script>


<template>
  <main>
    <div class="container">
      <br>
      <div class="columns is-multiline">
          <div class="column is-4 is-offset-4">
          <div class="box has-text-success summary">
            <h2 class="title">All Time Stats</h2>
            <div class="columns is-multiline">
              <div class="column is-half">
                <h3 class="value">{{ totalDistance }} miles</h3>
                <div class="caption">Distance</div>
              </div>
              <div class="column is-half">
                <h3 class="value">{{ totalTime }} minutes</h3>
                <div class="caption">Duration</div>
              </div><!--
              <div class="column is-half">
                <h3 class="value">dummy</h3>
                <div class="caption">Avg Pace</div>
              </div>-->
            </div>
          </div>
        </div>
        </div>
      </div>
  </main>
</template>
<style scoped>
body {
  margin: auto;
}
.box {
  text-align: center;
}
h2 {
  font-size: 1em;
  font-weight:550;
}

h3 {
  font-weight: bold;
  font-size:1.5em;
}
</style>
