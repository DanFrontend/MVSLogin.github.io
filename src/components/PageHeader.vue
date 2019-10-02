<template>
    <div class="page-header">
        <div class="page-header__item" :class="animation ? 'transition' : ''">
            <img class="page-header-logo" src="../../img/logo_header.svg" alt="logo">
            <div class="page-header-title">
                Інформаційно-аналітична система оперативного інформування МВС
            </div>
            <div>
                <button @click="goNext" class="page-header-button">Увійти в систему</button>
            </div>
        </div>
        <div class="login-form" :class="animation ? 'transitionLogin' : ''">
            <img src="../../img/login.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageHeader',
        data() {
            return {
                animation: false
            }
        },
        methods: {
            goNext() {
                this.animation = true;
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
    }
    @keyframes example {
        0%   {top:0;opacity: 1}
        50%   {opacity: .5}
        100% {top:-60%;opacity: 0}
    }
    @keyframes exampleLogin {
        0%   {opacity:0;bottom: -20%;}
        50%   {opacity:0;bottom: 10%;}
        100% {opacity:1;bottom: 40%;}
    }
    .page-header {
        background-image: url("../../img/Mvs_startpage_pic.png");
        height: calc(100vh - 35px);
        display: flex;
        align-items: center;
        flex-direction: column;

        &__item {
            max-width: 560px;
            text-align: center;
            position: relative;

            &.transition {
                animation-name: example;
                animation-duration: 1.5s;
                animation-delay: .2s;
                /*animation-timing-function: ease-in-out;*/
                animation-fill-mode: both;
            }
        }

        &-logo {
            margin-top: 80px;
            margin-bottom: 58px;
        }

        &-title {
            color: #fff;
            font-size: 32px;
            font-weight: 600;
            font-family: sans-serif;
            margin-bottom: 85px;
        }

        &-button {
            color: #fff;
            background: #2D5FFF;
            height: 56px;
            font-weight: 600;
            border: none;
            font-size: 18px;
            padding: 15px 24px;
            border-radius: 4px;
            cursor: pointer;
            outline: none;
            transition: 0.3s;
            &:hover {
                background: #2c5fb7;
            }
        }
    }

    .login-form {
        bottom: -40%;
        position: fixed;

        &.transitionLogin {
            animation-name: exampleLogin;
            animation-duration: 1.5s;
            /*animation-delay: .2s;*/
            /*animation-timing-function: ease-in-out;*/
            animation-fill-mode: both;
        }
    }


</style>