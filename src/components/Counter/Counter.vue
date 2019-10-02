<template>
    <div class="container">
        <button class="button" @click.prevent="$router.go(-1)">Go-back</button>
        <h2>Welcome to Counter</h2>
        {{ counter }}
        <button @click="incrementCounter">increment counter</button>
        <button @click="deincrementCounter">deincrement counter</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Counter',
        methods: {
            incrementCounter() {
                this.$store.commit('increment', 5)
            },
            deincrementCounter() {
                this.$store.commit('deincrement', 5)
            }
        },
        computed: {
            ...mapGetters(['counter']),
            // counter() {
            //     return this.$store.getters.counter
            // }
        }
    }
</script>

<style scoped>
    .button {
        margin: 20px;
    }
    .container {
        text-align: center;
    }
</style>