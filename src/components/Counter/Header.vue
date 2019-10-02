<template>
    <div class="container">
        <ul v-for="(film) in films" :key="film.id">
            <li @click="$router.push(`/header/${film.episode_id}`)"><h2>{{ film.episode_id }} {{ film.title }}</h2></li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import SingleHeader from "./SingleHeader";
    export default {
        name: 'Header',
        components: {SingleHeader},
        data() {
            return {
                films: [],
                persons: []
            };
        },
        async mounted() {
            const { data: { results: films } } = await axios.get('https://swapi.co/api/films/');
            this.films = films;

            for await (const film of films) {
                const res = await Promise.all(film.characters.map(url => axios.get(url)));
                this.persons.push(res.map(r => r.data))
            }
        }
    }
</script>
<style scoped>
    .container {
        max-width: 1400px;
        text-align: center;
        margin: 0 auto;
    }
    li {
        list-style: none;
        cursor: pointer;
    }
    button {
        margin: 20px;
    }
</style>