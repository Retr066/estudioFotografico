import { useRef } from "react";
import emailjs from '@emailjs/browser';

import { useFormik } from "formik";

import * as Yup from "yup";

const initialState = {
  nombres: "",
  apellidos: "",
  email: "",
  telefono: "",
  mensaje: "",
};
export default function FormContacto() {
  const form = useRef();

  const {handleSubmit, errors, touched, getFieldProps,resetForm } = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      nombres: Yup.string().required("El nombre es obligatorio"),
      apellidos: Yup.string().required("El apellido es obligatorio"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
      telefono: Yup.string().required("El telefono es obligatorio"),
      mensaje: Yup.string().required("El mensaje es obligatorio"),
    }),
    onSubmit: () => {
      
      emailjs
        .sendForm(
          "service_r9dtv8h",
          "template_dftq1ws",
          form.current,
          "xpHJVPgZJ4Hq8Yx4n"
        )
        .then(
          (result) => {
            console.log(result.text);
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }

        );
    },
  });

  return (
    <>
      <h1 className="my-lg-0 my-sm-5">Envianos un mensaje</h1>
      <form ref={form} onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name"
                {...getFieldProps("nombres")}
                required
              />
              <label htmlFor="floatingInput">Nombres</label>

              {touched.nombres && errors.nombres && (
                <div className="alert alert-danger">{errors.nombres}</div>
              )}

            </div>
            <div className="form-floating ">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                {...getFieldProps("email")}
                required
              />
              <label htmlFor="floatingInput">Email </label>

              {touched.email && errors.email && (
                <div className="alert alert-danger">{errors.email}</div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="lastName"
                {...getFieldProps("apellidos")}
                required
              />
              <label htmlFor="floatingInput">Apellidos</label>

              {touched.apellidos && errors.apellidos && (
                <div className="alert alert-danger">{errors.apellidos}</div>
              )}

            </div>
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                pattern="^-?[0-9]\d*\.?\d*$"
               {...getFieldProps("telefono")}
                required
              />
              <label htmlFor="floatingPassword">Telefono o Celular</label>

              {touched.telefono && errors.telefono && (
                <div className="alert alert-danger">{errors.telefono}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col my-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                required
                {...getFieldProps("mensaje")}    
                id="floatingTextarea2"
                style={{ height: "185px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Mensaje</label>

              {touched.mensaje && errors.mensaje && (
                <div className="alert alert-danger">{errors.mensaje}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="w-100 btn btn-outline-primary ">
              ENVIAR
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

 