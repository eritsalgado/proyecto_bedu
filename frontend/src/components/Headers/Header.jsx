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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/Eventos/';

class Header extends React.Component {
  state = {
    eventos: [],
    evento_data: "",
  };
  componentDidMount() {
    axios.get(API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ 
        eventos: data.results,
        evento_data: window.location.href.split("/")[5] 
      })
      // console.log(this.state.evento_data)
     })
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Trafico
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            5,300
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 5.48%
                        </span>{" "}
                        <span className="text-nowrap">Desde el ultimo mes</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Registros
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            2,356
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-chart-pie" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 1.10%
                        </span>{" "}
                        <span className="text-nowrap">Desde la ultima semana</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Eventos
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          {this.state.eventos.length}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          
                        </span>{" "}
                        <span className="text-nowrap">Creados en el año</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
