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
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";
import {
    Button,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
  } from "reactstrap";
import EventoForm from "./EventoForm.jsx";

  
class FormEvento extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row className="justify-content-center">
            <Col lg="7" md="10">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-2">
                    <div className="text-muted text-center mt-2">
                        <small>Crear un nuevo evento</small>
                    </div>
                    
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <EventoForm/>
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col xs="6">
                    <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <small>Forgot password?</small>
                    </a>
                    </Col>
                    <Col className="text-right" xs="6">
                    <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <small>Create new account</small>
                    </a>
                    </Col>
                </Row>
            </Col>
            
          </Row>
          </Container>
      </>
    );
  }
}

export default FormEvento;
