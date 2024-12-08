<script setup lang="ts">
    import { ref } from "vue";
    import { RouterLink } from 'vue-router'
    import { getAll, remove, type User } from '@/models/users';
    import { getRegions, type Region } from "@/models/regions";
    import AdminOnly from "@/components/AdminOnly.vue";
    const users = ref<User[]>([]);
    getAll().then((data) => users.value = data.data);
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);
    import { logout, session } from "@/models/session";
    const deleteUser = (u: number) => {
        users.value = users.value.filter((user) => user.id !== u);
        remove(u)
        if (u==session.profile){
            logout
        }
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
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Emails</th>
                                    <th>Username</th>
                                    <th>Region</th>
                                    <th>Is Admin?</th>
                                    <th>Admin Panel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users">
                                    <td>{{ user.id }}</td>
                                    <td>{{ user.first }}</td>
                                    <td>{{ user.last }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.handle }}</td>
                                    <td>
                                        <div v-for="r in regions">
                                            <div v-if="user.region==r.id">
                                                {{ r.name }}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ user.admin }}</td>
                                    <td>
                                        <a class="button" ><i class="fa-solid fa-pen-to-square"></i></a>
                                        <div v-if="user.id">
                                            <a class="button" @click="deleteUser(user.id)"><i class="fa-solid fa-trash-can"></i></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                        <AdminOnly v-else />
                    </column>
                </columns>
            </container>
        </div>
    </div>
</template>

<style scoped>
    table {
        margin: auto;
    }
</style>