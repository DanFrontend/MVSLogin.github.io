<template>
    <div class="container">
        <nav>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/header">Star Wars</router-link>
            <router-link class="link" to="/counter">Counter</router-link>
            <router-link class="link" to="/mvs">MVS</router-link>
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'Router'
    }
</script>

<style scoped lang="scss">
    .link {
        color: black;
        text-decoration: none;
        padding: 5px 15px;
        border: 1px solid gray;
        margin: 0 10px;
    }
    .container {
        height: 35px;
        display: flex;
        align-items: center;
        background: #36426E;
        font-family: sans-serif;
        & a {
            color: #fff;
        }
    }
</style>