import { http } from './config'

export default {

    listar:() => {
        return http.get('/buscar/pacientes/todos')
    },

    salvar:(paciente)=>{
		return http.post('/salvar/paciente', paciente);
  }
}