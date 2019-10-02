<template>
    <div class="container">
        <button @click.prevent="$router.go(-1)"><= Go-back</button>
        <ul>
            <li>
                <p>{{ film.title }}</p>
            </li>
            <li>
                <ul v-if="persons[$route.params.id]">
                    <li v-for="person in persons[$route.params.id]">
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
        name: 'SingleHeader',
        data() {
            return {
                film: [],
                persons: []
            }
        },
        async mounted() {
            const { data: { results: films } } = await axios.get('https://swapi.co/api/films/');
            let id = this.$route.params.id;

            this.film = films.find(function(film) {
                return film.episode_id == id;
            });


            for await (const film of films) {
                const res = await Promise.all(film.characters.map(url => axios.get(url)));
                this.persons.push(res.map(r => r.data))
            }
        }
    }
</script>

<style scoped>
    .container {
        font-family: monospace;
        padding: 20px;
    }
</style>