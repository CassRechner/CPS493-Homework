<script setup lang="ts">
import { type Exercise } from '@/models/exercises';
import { getRegions, type Region } from '@/models/regions';
import { getAll, type User } from '@/models/users';
import { session } from "@/models/session";
import { ref } from 'vue';
const users = ref<User[]>([]);
getAll().then((data) => users.value = data.data);
const regions = ref<Region[]>([]);
getRegions().then((data) => regions.value = data.data);
const props = defineProps<{
    exercise: Exercise
}>()
const { exercise } = props
const emit = defineEmits(["exerciseDeleted"])

const deleteExercise = (id: number) => {
    emit("exerciseDeleted", id)
}

</script>
<!--This should be identical to PostCard, except for the v-if at the start (and removing any redudant v-ifs)
The point of this is to have it only show the users posts-->

<template>

    <div class="post" v-if="exercise.user==session.profile"> 
        <a class="delete" @click="deleteExercise(exercise.id)"></a>
        <div v-for="u in users">
            <div v-if="exercise.user==u.id">
                <p><strong>{{ u.first }} {{ u.last }}</strong> @{{ u.handle }}</p>
            </div>
        </div>
        <h2>{{ exercise.title }}</h2>
            <h4>{{ exercise.date }}
                <div v-for="r in regions">
                    <div v-if="exercise.region==r.id">
                        {{ r.name }}
                    </div>
                </div>
            </h4>
        <p>{{ exercise.distance }} miles, {{ exercise.duration }} minutes</p>
    </div>
</template>

<style scoped>
.post {
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 400px;
    margin: auto;
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
.delete {
    float:right;
}
</style>