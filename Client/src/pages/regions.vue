<script setup lang="ts">
    import { ref } from "vue";
    import { RouterLink } from 'vue-router'
    import AdminOnly from "@/components/AdminOnly.vue";
    import { getRegions, remove, type Region } from "@/models/regions";
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);
    import { logout, session } from "@/models/session";
    const deleteRegion = (r: number) => {
        regions.value = regions.value.filter((region) => region.id !== r);
        remove(r)
    }
</script>

<template>
    <div>
        <div class="section">
            <container>
                <columns>
                    <column>
                        <table class="table" v-if="session.access">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Admin Panel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="region in regions">
                                    <td>{{ region.id }}</td>
                                    <td>{{ region.name }}</td>
                                    <td>
                                        <a class="button" ><i class="fa-solid fa-pen-to-square"></i></a>
                                        <a class="button" v-if="region.id" @click="deleteRegion(region.id)"><i class="fa-solid fa-trash-can"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                        <AdminOnly v-else />
                    </column>
                </columns>
                <RouterLink to="/addregion" class="button is-success" v-if="session.access">
                    <p>Add Region</p>
                </RouterLink>
                <RouterLink to="/editregion" class="button is-info" v-if="session.access">
                    <p>Edit Region</p>
                </RouterLink>
            </container>
        </div>
    </div>
</template>

<style scoped>
    table {
        margin: auto;
    }
</style>