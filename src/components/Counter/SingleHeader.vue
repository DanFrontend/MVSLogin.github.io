<template>
    <div class="container">
        <button @click.prevent="$router.go(-1)">Go-back</button>
        <div>{{}}</div>
        <ul>
            <li><p>{{ films[idEposide] }}</p></li>
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
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'SingleHeader',
        data() {
            return {
                films: [],
                persons: []
            }
        },
        async mounted() {
            const { data: { results: films } } = await axios.get('https://swapi.co/api/films/');
            this.films = films;

            for await (const film of films) {
                const res = await Promise.all(film.characters.map(url => axios.get(url)));
                this.persons.push(res.map(r => r.data))
            }
        },
        created() {
          this.getFilmsData()
        },
        methods: {
            ...mapActions('starwars', ['getFilmsData'])
        },
        computed: {
            ...mapState('starwars', ['filmsData']),
            idEposide() {
                return  this.$route.params.id
            }
        }
    }
</script>

<style scoped>
    .container {
        font-family: monospace;
    }
</style>