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
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
const EventoForm = () => (
  <Formik
    initialValues={{
      nombre: "", 
      ubicacion: "",
      descripcion: "",
      hashtag: "",
      plantilla: "",
    }}
    onSubmit={(values, {setSubmitting}) => {
      axios.post('http://127.0.0.1:8000/api/token/refresh/', 
        {
          "refresh": localStorage.getItem("jwt-r")
        }
      )
      .then(function (response) {
        var nuevo_token = response.data.access
        // console.log(values)
        axios.post('http://127.0.0.1:8000/Eventos/', {
              "nombre": `${values.nombre}`,
              "ubicacion": `${values.ubicacion}`,
              "descripcion": `${values.descripcion}`,
              "hashtag": `${values.hashtag}`,
              "plantilla": `${values.plantilla}`,
              "editor": `${values.editor}`
        }
        )
        .then((response) => {
            console.log(response.data.id)
            setSubmitting("Agregado")
          })
        .catch((error) => {
            console.log(error)
            setSubmitting(null)
          });;
        
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }}
    validationSchema = { Yup.object().shape({
      nombre: Yup.string()
      .required("Requerido"),
      ubicacion: Yup.string()
      .required("Requerido"),
      descripcion: Yup.string()
      .required("Requerido"),
      hashtag: Yup.string()
      .required("Requerido"),
      plantilla: Yup.string()
      .required("Requerido")      
    })}
    >
    {props => {
        const { 
          values, 
          touched, 
          errors, 
          isSubmitting, 
          handleChange,
          handleBlur, 
          handleSubmit
        } = props;
        if(!isSubmitting){
        return (
          <>
        
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    { errors.nombre && touched.nombre && (
                        <span className="text-danger">
                            {errors.nombre}
                        </span>
                    )}
                    <InputGroup 
                    className="input-group-alternative" 
                    className={errors.nombre && touched.nombre && "has-danger"}>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-ticket-alt" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        name="nombre" 
                        type="text" 
                        placeholder=" Ingresa el nombre del evento"
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                    { errors.ubicacion && touched.ubicacion && (
                        <span className="text-danger">
                            {errors.ubicacion}
                        </span>
                    )}
                  <InputGroup 
                  className="input-group-alternative" 
                  className={errors.ubicacion && touched.ubicacion && "has-danger"}>
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                          <i className="fa fa-globe-americas" />
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      name="ubicacion" 
                      type="text" 
                      placeholder=" Ingresa la ubicación ej: CDMX, México" 
                      value={values.ubicacion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                  </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    { errors.descripcion && touched.descripcion && (
                        <span className="text-danger">
                            {errors.descripcion}
                        </span>
                    )}
                  <InputGroup 
                  className="input-group-alternative" 
                  className={errors.descripcion && touched.descripcion && "has-danger"}>
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                          <i className="fa fa-clipboard" />
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      name="descripcion" 
                      type="textarea" 
                      rows="5" 
                      placeholder=" Describe el proposito de tu evento" 
                      value={values.descripcion}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                  </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    { errors.hashtag && touched.hashtag && (
                        <span className="text-danger">
                            {errors.hashtag}
                        </span>
                    )}
                  <InputGroup 
                  className="input-group-alternative" 
                  className={errors.hashtag && touched.hashtag && "has-danger"}>
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                          <i className="fa fa-hashtag" />
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      name="hashtag" 
                      type="text" 
                      placeholder=" Escribe un hastag para tu evento" 
                      value={values.hashtag}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                  </InputGroup>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    { errors.plantilla && touched.plantilla && (
                        <span className="text-danger">
                            {errors.plantilla}
                        </span>
                    )}
                  <InputGroup 
                  className="input-group-alternative" 
                  className={errors.plantilla && touched.plantilla && "has-danger"}>
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                          <i className="fa fa-globe-americas" />
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      name="plantilla" 
                      type="select" 
                      value={values.plantilla}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      >
                          <option>Selecciona una plantilla</option>
                          <option>Very Berry Cupcake </option>
                          <option>Strawberry Gateau</option>
                          <option>White Chocolate Macarroon</option>
                      </Input>
                  </InputGroup>
                  </FormGroup>

                      <Input 
                      name="editor" 
                      type="hidden" 
                      value="Jessica Jones" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />

                  <div className="text-center">
                  <Button 
                  className="my-4" 
                  color="primary" 
                  type="submit">
                      Registrar nuevo
                  </Button>
                </div>
              </Form>
            
      </>
        )}else if(isSubmitting === "Agregado"){
          return (<Redirect to='/admin/index' />)          
        }
      }
    }
      
  </Formik>
);

{/* <Form role="form" id="form">
    
    
</Form> */}
                    

export default EventoForm;
