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
import { Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import {Redirect} from 'react-router'
// import { AuthLogin } from '../../actions/authActions';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
const Login = () => (
  <Formik
    initialValues={{username: "", password: ""}}
    onSubmit={(values, { setSubmitting }) => {
      axios.post('http://127.0.0.1:8000/api/token/', {
          username: values.username,
          password: values.password
      }).then(res => {
          localStorage.setItem('jwt-r', res.data.refresh)
          localStorage.setItem('jwt-a', res.data.access)
          setSubmitting("Logged")
      })
      .catch(error => {
          error = error.response.request.statusText
          setSubmitting(null)
      })
    }}
    validationSchema = { Yup.object().shape({
      username: Yup.string()
        .required("Requerido"),
      password: Yup.string()
        .required("Requerido")
    })}
    
    >
    
    
    {
      props => {
        const { 
          values, 
          touched, 
          errors, 
          isSubmitting, 
          handleChange,
          handleBlur, 
          handleSubmit
        } = props;
        if (!isSubmitting){
        return (
          <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-2">
              <div className="text-muted text-center mt-2">
                <small>Inicia sesión con credenciales</small>
              </div>
              { isSubmitting == null && (
                <div className="text-muted text-center mt-4">
                  <small className="text-danger">Error Usuario o contraseña invalido</small>
                </div>
              )}
              
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  { errors.username && touched.username && (
                      <span className="text-danger">
                        {errors.username}
                      </span>
                  )}
                  <InputGroup 
                  className="input-group-alternative" 
                  className={errors.username && touched.username && "has-danger"}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user-tie" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                    name="username" 
                    type="text" 
                    placeholder=" Ingresa tu usuario" 
                    value={values.username} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  { errors.password && touched.password && (
                      <span className="text-danger">
                        {errors.password}
                      </span>
                  )}
                  <InputGroup
                  className="input-group-alternative" 
                  className={errors.password && touched.password && "has-danger"}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input 
                    name="password" 
                    type="password" 
                    placeholder=" Ingresa tu password" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  </InputGroup>
                </FormGroup>
                
                <div className="text-center">
                  <Button 
                  className="my-4" 
                  color="primary" 
                  type="submit" 
                  disabled={isSubmitting}>
                    Ingresar
                  </Button>
                </div>
              </Form>
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
      </>
        )}else if(isSubmitting === "Logged"){
          return (<Redirect to='/admin/index' />)          
        }
      }
    }
      
  </Formik>
);



export default Login;
