<template>
    <div id="painel">
        <div class="title">
            <h1>
              Registro de nova
              <span>PIU</span>
            </h1>
        </div>
        <form id="form-projeto">

            <section class="form-section">
                <label for="nome">Nome do projeto:</label>
                <input type="text" id="nome" class="form-input" required />
            </section>
            <section class="form-section">
                <label for="descricao">Descrição:</label>
                <textarea id="descricao" class="form-input" required></textarea>
            </section>
            <section class="form-section">
                <label for="elemento">Elemento da rede de estruturação urbana:</label>
                <input type="text" id="elemento" class="form-input" required />
            </section>
            <section class="form-section">
                <label for="areaTotal">Área total:</label>
                <input type="number" id="areaTotal" class="form-input" />
            </section>

            <div class="form-section">
              <label>Natureza da proposta</label>
              <select class="form-input">
                <option>Pública</option>
                <option>Privada</option>
              </select>
            </div>

            <div class="form-section">
              <label>Proponente</label>
              <select class="form-input">
                <option>PMSP - SMUL</option>
              </select>
            </div>

            <section class="form-section">
                <button class="btn btn-submit">Registrar</button>
            </section>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Painel',
  mounted () {
    document.title = this.$route.meta.titulo
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

#painel {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h1 > span {
    color: $vermelho !important;
  }

   #form-projeto {
    width: 60%;
    align-items: center;

    .form-section {
      .btn-submit {
        background-color: $verde;
      }

      textarea {
        resize: none;
      }

      #descricao {
        height: 100px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  #painel #form-projeto {
    width: 100%;
  }
}
</style>
