<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <center>
              <h4 class="title">CADASTRO DE PACIENTES</h4>
            </center>
            <center>
              <p class="category">Todos os campos * são obrigatorios.</p>
            </center>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
            <div>
              <vue-good-wizard :steps="steps" :onNext="nextClicked" :onBack="backClicked">
                <div slot="page1">
                  <div class="md-layout md-gutter md-alignment-center">
                    <form class="needs-validation" @on-complete="salvar()">
                      <div class="container flex flex-wrap">
                        <div class="col-md-6 mb-2">
                          <label for="validationDefault01">Nome completo</label>
                          <input
                            v-model="paciente.nome"
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder
                            value
                            required
                          >
                        </div>

                        <div class="form-group col-md-3">
                          <label for="inputState">Sexo</label>
                          <select
                            v-model="paciente.sexo"
                            id="inputState"
                            class="form-control"
                            required
                          >
                            <option value="MASCULINO">Masculino</option>
                            <option value="FEMININO">Feminino</option>
                          </select>
                        </div>

                        <div class="col-md-3 mb-2">
                          <label for="validationDefault03">Data de nascimento</label>
                          <input
                            v-model="paciente.dataDeNascimento"
                            type="text"
                            class="form-control"
                            id="validationDefault03"
                            required
                          >
                        </div>

                        <div class="col-md-3 mb-2">
                          <label for="validationDefault03">CPF</label>
                          <input
                            v-model="paciente.cpf"
                            type="text"
                            class="form-control"
                            id="validationDefault03"
                            required
                          >
                        </div>

                        <div class="col-md-3 mb-2">
                          <label for="validationDefault05">RG</label>
                          <input
                            v-model="paciente.rg"
                            type="text"
                            class="form-control"
                            id="validationDefault05"
                            placeholder
                            required
                          >
                        </div>

                        <div class="form-group col-md-3">
                          <label for="inputState">Estado civil</label>
                          <select id="inputState" class="form-control">
                            <option></option>
                            <option>Solteiro(a)</option>
                            <option>Casado(a)</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div slot="page2">
                  <div class="container flex flex-wrap">
                    <div class="col-md-6 mb-2">
                      <label for="validationDefault01">Endereco</label>
                      <input
                        v-model="paciente.endereco"
                        type="text"
                        class="form-control"
                        id="validationDefault01"
                        placeholder
                        value
                        required
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Numero</label>
                      <input
                        v-model="paciente.numeroEndereco"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                        required
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">CEP</label>
                      <input
                        v-model="paciente.cep"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Bairro</label>
                      <input
                        v-model="paciente.bairro"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                        required
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Complemento</label>
                      <input
                        v-model="paciente.complemento"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Cidade</label>
                      <input
                        v-model="paciente.cidade"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                        required
                      >
                    </div>
                  </div>
                </div>
                <div slot="page3">
                  <div class="container flex flex-wrap">
                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Telefone Celular</label>
                      <input
                        v-model="paciente.telefoneCelular"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                        required
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Telefone Residencial</label>
                      <input
                        v-model="paciente.telefoneResidencial"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Telefone Trabalho</label>
                      <input
                        v-model="paciente.telefoneTrabalho"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Nome da mãe</label>
                      <input
                        v-model="paciente.nomeDaMae"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                      >
                    </div>

                    <div class="col-md-3 mb-2">
                      <label for="validationDefault05">Nome do pai</label>
                      <input
                        v-model="paciente.nomeDoPai"
                        type="text"
                        class="form-control"
                        id="validationDefault05"
                        placeholder
                        required
                      >
                    </div>

                    <div class="col-md-2">Enviar SMS ?
                      <toggle-button
                        v-model="paciente.enviarSms"
                        :value="false"
                        color="#82C7EB"
                        :sync="true"
                        :labels="true"
                      />
                    </div>

                    <div class="col-md-2">Enviar Email?
                      <toggle-button
                        v-model="paciente.enviarEmail"
                        :value="false"
                        color="#82C7EB"
                        :sync="true"
                        :labels="true"
                      />
                    </div>
                  </div>
                </div>
                <div slot="page4">
                  <h4>Step 4</h4>
                </div>
                <div slot="page5">
                  <div class="container flex flex-wrap">
                    <div class="col-md-12 mb-2">
                      <b-form-textarea
                        id="textarea"
                        v-model="paciente.alergias"
                        placeholder="Alergias"
                        rows="5"
                        max-rows="6"
                      />
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <div class="col-md-12 mb-2">
                      <b-form-textarea
                        id="textarea"
                        v-model="paciente.observacoes"
                        placeholder="Observações"
                        rows="5"
                        max-rows="6"
                      />
                    </div>
                  </div>
                </div>
              </vue-good-wizard>
            </div>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"></div>
    </div>
  </div>
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
        nome: "",
        email: "",
        endereco: "",
        sexo: "",
        raca: "",
        dataDeNascimento: "",
        cpf: "",
        rg: "",
        bairro: "",
        cidade: "",
        telefone: "",
        enviarSms: "",
        enviarEmail: "",
        cartaoNacionalDeSaude: "",
        cep: ""
      },
      steps: [
        {
          label: "Dados pessoais",
          slot: "page1"
        },
        {
          label: "Endereco",
          slot: "page2"
        },
        {
          label: "Contato",
          slot: "page3"
        },
        {
          label: "Convênios",
          slot: "page4"
        },
        {
          label: "Outros",
          slot: "page5"
        }
      ]
    };
  },

  methods: {
    salvar() {
      Paciente.salvar(this.paciente)
        .then(resposta => {
          this.paciente = {};
          swal("Salvo!", "Registro foi salvo com sucesso.", "success");
        })
        .catch(error => {
          if (error.response.data.status == 400) {
            console.log(error.response.data);
            swal("Error!", error.response.data.message, "error");
          }

          if (error.response.data.status == 409) {
            swal("Error!", error.response.data.message, "error");
          }
        });
    },
    nextClicked(currentPage) {
      if (currentPage == 4) {
        this.salvar();
      }
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      return true; //return false if you want to prevent moving to previous page
    }
  }
};

(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
</script>
