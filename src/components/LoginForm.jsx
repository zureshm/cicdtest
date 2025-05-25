import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6,"Too Short").required('Password is required')
})

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Login Form</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Submitted Values:", values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email : </label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label>Password : </label>
              <Field type={showPassword ? "text" : "password"} name="password" />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>
             <div>
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="showPassword" style={{ marginLeft: "5px" }}>
                  Show Password
                </label>
              </div>
            <button type="submit" disabled={isSubmitting}>
              Login{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm
