<template>
  <div>
    <md-table v-model="pacientes" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Nome">{{ item.nome }}</md-table-cell>
        <md-table-cell md-label="Data de nascimento">{{ item.dataDeNascimento }}</md-table-cell>
        <md-table-cell md-label="Telefone">{{ item.telefone }}</md-table-cell>
        <md-table-cell md-label="Endereco">{{ item.endereco }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

import Paciente from '/Users/brunocosta/Documents/Projetos/Estudos/portais/vue-material-dashboard-v1.1.0/src/services/paciente'

export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pacientes: []
    };
  },

  mounted(){
    this.listar()
  },


  methods:{
    
    listar(){
      Paciente.listar().then(resposta => {
        this.pacientes = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },
  }
  
};
</script>
