<script setup lang="ts">
    import { ref } from "vue";
    import { RouterLink } from 'vue-router'
    import { getAll, type User } from '@/models/users';
    import { getRegions, type Region } from "@/models/regions";
    const users = ref<User[]>([]);
    users.value = getAll().data;
    const regions = ref<Region[]>([]);
    regions.value = getRegions().data;
    import { session } from "@/models/session";
    const deleteUser = (u: number) => {
        users.value = users.value.filter((user) => user.id !== u)
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
                                        <a class="button" @click="deleteUser(user.id)"><i class="fa-solid fa-trash-can"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
                        <div class="notification is-info is-light" v-else>Admin access only</div>
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