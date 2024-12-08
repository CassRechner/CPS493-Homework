<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { update, getRegions, getById, type Region } from '@/models/regions';
    import { session } from '@/models/session';
    import AdminOnly from '@/components/AdminOnly.vue';
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);
    
    const id = ref()  
    const name = ref('')

    const router = useRouter()

    //Edits the region
    function editRegion() {
        const regionData = {
            name: name.value
    }
    update(id.value, regionData)
    router.push("/regions")

    }
</script>
<template>
  <div class="container">
    <form @submit.prevent="editRegion" v-if="session.access">
      <div class="field">
        <label class="label">ID</label>
        <div class="control">
          <input
            class="input"
            type="number"
            v-model="id"
            placeholder="e.g. 40"
            required
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="name"
            placeholder="e.g. Mushroom Kingdom 2"
          />
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Edit Region</button>
        </div>
      </div>
    </form>
    <AdminOnly v-else/>
  </div>
</template>