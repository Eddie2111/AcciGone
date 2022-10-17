import "./App.css";
// import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const Login = ()=>{
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    if(localStorage.getItem("token")){
        window.location.href = "/home";
    }
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
        password: Yup.string()
          .min(3, "Password must be 3 characters at minimum")
          .required("Password is required"),
      });

/*
    const handleSubmit = event => {
      event.preventDefault(); // 👈️ prevent page refresh
      console.log(email);
      console.log(password);
      setEmail('');
      setPassword('');
    };
*/    


return (
  <>
<div className='App-header'>
        <div className="card">
        <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                localStorage.setItem('token', values.email);
                window.location.href = "/home";
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <div>
                    <h1 className="mt-5">Login Form</h1>
                    <Form>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          autoComplete="off"
                          className={`input
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
                        <p>Not valid</p>
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="password" className="mt-3">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`input
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <p>Not valid</p>
                      </div>
  
                      <button
                        type="submit"
                        className="button"
                      >
                        Submit
                      </button>
                      <a
                        href="/signup"
                        className="button"
                      >
                        No account?
                      </a>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>
  
                    <div className="alert alert-success mt-3">
                      Thank for your connecting with us. Here's what we got from
                      you !
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">Email: {values.email}</li>
                      <li className="list-group-item">
                        Password: {values.password}
                      </li>
                    </ul>
                  </div>
                )
              }
            </Formik>
        </div>
    </div>
</>    
);

}
export default Login;

