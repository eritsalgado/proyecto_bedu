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
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/Eventos/';

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    eventos: []
  };
  componentDidMount() {
    axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ eventos: data.results })
      console.log(this.state.eventos)
     })
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Eventos creados</h3>
                    </div>
                    <div className="col text-right">
                      <Link
                        color="success"
                        to="/admin/nuevo_evento"
                        className="btn btn-success"
                        size="sm"
                      >
                        <i className="ni ni-fat-add mr-2"/>
                        Nuevo Evento
                      </Link>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nombre del evento</th>
                      <th scope="col">Asistentes</th>
                      <th scope="col">Ubicación</th>
                      <th scope="col">Fecha de creación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.eventos.map((item, index) =>(
                        <tr>
                          <th scope="row">
                            <Link to={`/admin/detalles_evento/` + item.id}>
                            {item.nombre}
                            </Link>
                          </th>
                          <td className="text-center">{item.asistentes.length}</td>
                          <td>{item.ubicacion}</td>
                          <td>{item.timestamp}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </Card>
            </Col></Row>
        </Container>
      </>
    );
  }
}

export default Index;
