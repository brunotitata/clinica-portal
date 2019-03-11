import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import TableList from "@/pages/TableList.vue";
import CadastrarPaciente from "@/pages/cadastrar-paciente.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "pacientes",
        name: "Pacientes",
        component: TableList
      },
      {
        path: "cadastrar-paciente",
        name: "",
        component: CadastrarPaciente
      }
    ]
  }
];

export default routes;
