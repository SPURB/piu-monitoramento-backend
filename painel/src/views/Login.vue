<template>
    <div id="login">

        <div class="title">
            <h1>
                Gestão Urbana
                <span>SP</span>
            </h1>
            <h2>Paínel administrativo</h2>
        </div>

        <form id="form-login">
            <section class="form-section">
                <label for="user">Usuário:</label>
                <input type="text" id="user" class="form-input" required>
            </section>
            <section class="form-section">
                <label for="password">Senha:</label>
                <input type="password" id="password" class="form-input" required>
            </section>
            <section class="form-section">
                <button class="btn btn-submit">Entrar</button>
            </section>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  mounted () {
    document.title = this.$route.meta.titulo
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

// feito em mobile first smartphone
#login {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    width: 100%;

    h1, h2 {
        text-align: center;
    }

    h1 {
        margin-bottom: 0px;

        span {
            color: $vermelho !important;
        }
    }

    #form-login {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .btn-submit {
        background-color: $vermelho;
        width: 30%;
    }
}

@media screen and (min-width: 768px) {
    #login #form-login {
        align-self: center;
        width: 50%;
    }
}

@media screen and (min-width: 1300px){
    #login #form-login {
        align-self: center;
        width: 35%;
    }
}
</style>
