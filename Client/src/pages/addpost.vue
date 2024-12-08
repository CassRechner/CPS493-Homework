<script setup lang="ts">
    import { ref } from 'vue';
    import { getExercises, type Exercise } from '@/models/exercises';
    import { getAll, type User } from '@/models/users';
    import { getRegions, type Region } from '@/models/regions';
    import { session } from '@/models/session';
    const users = ref<User[]>([]);
    getAll().then((data) => users.value = data.data);
    const exercises = ref<Exercise[]>([]);
    getExercises().then((data) => exercises.value = data.data);
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);
</script>
<template>
    <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="My Workout">
            </div>
        </div>
        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="My Workout">
            </div>
        </div>
        <div class="field">
            <label class="label">Date</label>
            <div class="control">
                <input class="input" type="text" placeholder="MM/DD/YYYY">
            </div>
        </div>
        <div class="select">
            <select>
            <div v-for="region in regions">
                <option value={{ region.id }}>{{ region.name }}</option>
            </div v-for>
            </select>
        </div>
        <div class="field">
            <label class="label">Distance</label>
            <div class="control">
                <input class="input" type="text" placeholder="3">
                <p>miles</p>
            </div>
        </div>
        <div class="field">
            <label class="label">Duration</label>
            <div class="control">
                <input class="input" type="text" placeholder="3">
                <p>minutes</p>
            </div>
        </div>
        <footer class="">
            <div class="buttons">
                <button class="button is-success">Submit</button>
                <button class="button">Cancel</button>
            </div>
        </footer>
</template>