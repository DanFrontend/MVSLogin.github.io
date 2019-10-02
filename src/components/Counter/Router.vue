<template>
    <div>
        <div>
            <nav>
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/header">Header</router-link>
                <router-link class="link" to="/counter">Counter</router-link>
                <router-link class="link" to="/mvs">MVS</router-link>
            </nav>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Router'
    }
</script>

<style>
    .link {
        color: black;
        text-decoration: none;
        padding: 5px 15px;
        border: 1px solid gray;
        margin: 0 10px;
    }
</style>