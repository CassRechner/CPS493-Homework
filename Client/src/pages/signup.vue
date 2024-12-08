<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { add } from '@/models/users';
  import { getRegions, type Region } from '@/models/regions';
  const regions = ref<Region[]>([]);
  getRegions().then((data) => regions.value = data.data);

  const first = ref('')
  const last = ref('')
  const email = ref('')
  const handle = ref('')
  const password = ref('')
  const region = ref()

  const router = useRouter()

  //Creates the account
  function createAccount() {
    const userData = {
      first: first.value,
      last: last.value,
      email: email.value,
      handle: handle.value,
      //password: password.value,
      region: region.value,
      admin: false
    }
    add(userData)
    router.push("/index")

  }
</script>
<template>
  <div class="container">
    <form @submit.prevent="createAccount">
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="first"
            placeholder="Johnathaniel"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="last"
            placeholder="Carlson"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            v-model="email"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="handle"
            placeholder="@thewoker"
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
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            v-model="password"
            placeholder="Your password"
            required
          />
        </div>
      </div>
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
          <button class="button is-primary" type="submit">Sign Up</button>
        </div>
      </div>
    </form>
    <p>You may need to manually refresh using ctr+f5 to log in with this account!</p>
  </div>
</template>