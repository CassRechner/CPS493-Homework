<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { getAll, getById, type User } from '@/models/users';
    import { getRegions, type Region } from '@/models/regions';
    import { create, getExercises } from '@/models/exercises';
    import { session } from '@/models/session';
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);

    const title = ref('')
    const date = ref('')
    const distance = ref()
    const duration = ref()
    const region = ref()

    const router = useRouter()

    //Creates the post
    function createPost() {
        const postData = {
            user: session.profile,
            title: title.value,
            date: date.value,
            distance: distance.value,
            duration: duration.value,
            region: region.value,
    }
    create(postData)
    router.push("/activity")

    }
</script>
<template>
  <div class="container">
    <form @submit.prevent="createPost">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="title"
            placeholder="e.g. Ran a marathon"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="date"
            placeholder="MM/DD/YYYY"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Distance (miles)</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="distance"
            placeholder="e.g. 3"
            required
          />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Duration (minutes)</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="duration"
            placeholder="e.g. 40"
            required
          />
        </div>
      </div>
      <!--
      <div class="select">
            <select>
            <div v-for="region in regions">
                <option value="{{ region.id }}">{{ region.name }}</option>
            </div v-for>
            </select>
        </div>
      -->
      <div class="field">
        <label class="label">Region</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="region"
            placeholder="1"
            required
          />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Create Exercise</button>
        </div>
      </div>
    </form>
  </div>
</template>