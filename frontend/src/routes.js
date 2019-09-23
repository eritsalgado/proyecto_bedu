/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.jsx";
import Tables from "views/examples/Tables.jsx";
import NuevoEvento from "views/examples/NuevoEvento.jsx";
import Evento from "views/examples/Evento.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/eventos",
    name: "Eventos",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/nuevo_evento",
    component: NuevoEvento,
    layout: "/admin"
  },
  {
    path: "/detalles_evento",
    component: Evento,
    layout: "/admin"
  },
];
export default routes;
