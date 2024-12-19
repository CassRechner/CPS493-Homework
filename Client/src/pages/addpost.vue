<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { getAll, getById, type User } from '@/models/users';
    import { getRegions, type Region } from '@/models/regions';
    import { create, getExercises } from '@/models/exercises';
    import { session } from '@/models/session';
    const regions = ref<Region[]>([]);
    getRegions().then((data) => regions.value = data.data);
    import type { OptionsPropItem } from "@oruga-ui/oruga-next";

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

const isFetching = ref(false);
const page = ref(1);
const totalPages = ref(1);

const options = ref<OptionsPropItem<any>[]>([]);
const selected = ref<any>();
const value = ref("");

async function getAsyncData(_value: string): Promise<void> {
    if (value.value !== _value) {
        value.value = _value;
        options.value = [];
        page.value = 1;
        totalPages.value = 1;
    }

    // String cleared
    if (!_value.length) {
        options.value = [];
        page.value = 1;
        totalPages.value = 1;
        return;
    }

    // Reached last page
    if (page.value > totalPages.value) {
        return;
    }

    isFetching.value = true;
    try {
        const _data = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${_value}&page=${page.value}`,
        ).then((response) => response.json());

        const movies: OptionsPropItem[] = _data.results.map((v: { title: any; }) => ({
            value: v,
            label: v.title,
        }));

        options.value = [...options.value, ...movies];
        page.value += 1;
        totalPages.value = _data.total_pages;
    } catch (err) {
        console.error(err);
    } finally {
        isFetching.value = false;
    }
}

function getMoreAsyncData(): void {
    getAsyncData(value.value);
}

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
    <!--o-field label="Find a movie">
        <o-autocomplete
            placeholder="e.g. Fight Club"
            expanded
            check-scroll
            open-on-focus
            :debounce="500"
            @input="getAsyncData"
            @scroll-end="getMoreAsyncData">
            <template #default="{ value }">
                <div class="media">
                    <div class="media-left">
                        <img
                            width="32"
                            :src="`https://image.tmdb.org/t/p/w500/${value.poster_path}`" />
                    </div>
                    <div class="media-content">
                        {{ value.title }}
                        <br />
                        <small>
                            Released at {{ value.release_date }}, rated
                            <b>{{ value.vote_average }}</b>
                        </small>
                    </div>
                </div>
            </template>

            <template v-if="page > totalPages || !options.length" #footer>
                <span class="ex-text-grey">
                    Thats it! No more movies found.
                </span>
            </template>
        </o-autocomplete>
    </o-field>

    <p><b>Selected:</b> {{ selected }}</p-->
  </div>
</template>