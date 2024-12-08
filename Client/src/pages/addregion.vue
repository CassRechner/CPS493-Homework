<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { create, getRegions, type Region } from '@/models/regions';
    import { session } from '@/models/session';
    import AdminOnly from '@/components/AdminOnly.vue';
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);

    const name = ref('')

    const router = useRouter()

    //Creates the account
    function createRegion() {
        const regionData = {
            name: name.value
    }
    create(regionData)
    router.push("/regions")

    }
</script>
<template>
  <div class="container">
    <form @submit.prevent="createRegion" v-if="session.access">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="name"
            placeholder="e.g. Mushroom Kingdom 2"
            required
          />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Create Region</button>
        </div>
      </div>
    </form>
    <AdminOnly v-else/>
  </div>
</template>