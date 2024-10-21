<script setup lang="ts">
import { users } from "../components/database"
</script>

<template>
    <div>
        <div class="section">
            <container>
                <columns>
                    <column>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Emails</th>
                                    <th>Username</th>
                                    <th>Is Admin?</th>
                                    <th>Admin Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users">
                                    <td>{{ user.first }}</td>
                                    <td>{{ user.last }}</td>
                                    <td>{{ user.emails }}</td>
                                    <td>{{ user.handle }}</td>
                                    <td>{{ user.admin }}</td>
                                    <td>Buttons to be added</td>
                                </tr>
                            </tbody>
                            <tfoot>

                            </tfoot>
                        </table>
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