<template>
    <div class="container">
        <button @click.prevent="$router.go(-1)">Go-back</button>
        <ul v-for="(film, i) in films" :key="film.id">
            <li><h2>{{ film.episode_id }} {{ film.title }}</h2></li>
            <li><p>{{ film.opening_crawl }}</p></li>
            <li>
                <ul v-if="persons[i]">
                    <li v-for="person in persons[i]">
                        {{ person.name }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'Header',
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
        },
    }
</script>
<style scoped>
    .container {
        max-width: 800px;
        margin: 0 auto;
    }
    li {
        list-style: none;
    }
    button {
        margin: 20px;
    }
</style>