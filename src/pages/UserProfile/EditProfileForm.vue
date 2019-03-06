<template>
  <form @submit.prevent="salvar" class="form-inline" role="form">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <center>
          <h4 class="title">Cadastramento de Pacientes</h4>
        </center>
        <center>
          <p class="category">Campos com * são obrigatorios.</p>
        </center>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-gutter md-alignment-center md-content-cadastro">
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Nome completo</label>
              <md-input v-model="paciente.nome" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label></label>
              <md-input v-model="paciente.dataDeNascimento" type="date"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>Cartão Nacional de Saúde</label>
              <md-input v-model="paciente.cartaoNacionalDeSaude" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>E-mail</label>
              <md-input v-model="paciente.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Endereco</label>
              <md-input v-model="paciente.endereco" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Cidade</label>
              <md-input v-model="paciente.cidade" type="text"></md-input>
            </md-field>
          </div>
          <radio name="sexo" value="yes" v-model="radioValue" checked>MASCULINO</radio>
          <radio name="sexo" value="no" v-model="radioValue">FEMININO</radio>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Raca</label>
              <md-input v-model="paciente.raca" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>RG</label>
              <md-input v-model="paciente.rg" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>CPF</label>
              <md-input v-model="paciente.cpf" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Bairro</label>
              <md-input v-model="paciente.bairro" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Telefone</label>
              <md-input v-model="paciente.telefone" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Enviar SMS</label>
              <md-input v-model="paciente.enviarSms" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Enviar Email</label>
              <md-input v-model="paciente.enviarEmail" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Pais</label>
              <md-input v-model="paciente.pais" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>CEP</label>
              <md-input v-model="paciente.cep" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Descrição</label>
              <md-textarea v-model="paciente.observacao"></md-textarea>
            </md-field>
          </div>
        </div>
        <center>
          <md-button class="md-primary" @click="salvar()">Salvar</md-button>
        </center>
      </md-card-content>
    </md-card>
  </form>
</template>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script>
import Paciente from "/Users/brunocosta/Documents/Projetos/Estudos/portais/vue-material-dashboard-v1.1.0/src/services/paciente";
import swal from "sweetalert";

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      paciente: {
        nome: null,
        email: null,
        endereco: null,
        sexo: null,
        raca: null,
        dataDeNascimento: null,
        cpf: null,
        rg: null,
        bairro: null,
        cidade: null,
        telefone: null,
        enviarSms: null,
        enviarEmail: null,
        cartaoNacionalDeSaude: null,
        cep: null
      }
    };
  },

  methods: {
    salvar() {
      Paciente.salvar(this.paciente)
        .then(resposta => {
          this.paciente = {};
          this.errors = {};
          swal("Salvo!", "Registro foi salvo com sucesso.", "success");
        })
        .catch(e => {
          swal(
            "Error!",
            "Os campos obrigatorios devem ser preenchidos",
            "error"
          );
        });
    }
  }
};
</script>
<style>
.md-content-cadastro{
  display: block;
}


.checkbox-component > input + label > .input-box,
.radio-component > input + label > .input-box {
  position: relative;
  border: 1px solid #939393;
  border-radius: 1em;
  width: 1.6em;
  background: #fff;
  transition: background 0.2s ease-in;
  vertical-align: -15%;
}
.checkbox-component > input + label > .input-box > .input-box-tick,
.radio-component > input + label > .input-box > .input-box-circle {
  display: none;
}
.checkbox-component > input + label > .input-box:before,
.radio-component > input + label > .input-box:before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #939393;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  background: #fff;
  transition: transform 0.3s ease-out;
}
.checkbox-component > input:checked + label > .input-box,
.radio-component > input:checked + label > .input-box {
  background: #63b65d;
}
.checkbox-component > input:checked + label > .input-box:before,
.radio-component > input:checked + label > .input-box:before {
  border-color: #498d47;
  transform: translateX(0.6em);
}
</style>
