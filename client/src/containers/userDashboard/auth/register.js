import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Register = () => {
    const [verifyCode,setVerifyCode]=useState("")
    const registerSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        phone: Yup.string()
            .min(7, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(5, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        confirmPassword: Yup.string()
            .min(5, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
            .oneOf([Yup.ref("password"), null], "Both Passwords Must Match"),
        countryName: Yup.string()
            .min(5, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        selection: Yup.string().required("Required"),
    });
    const random=()=>{
        setVerifyCode(Math.random().toString(16).substr(5, 7));
    }
    useEffect(() => {
        random()
      }, []);
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    countryName: "",
                    selection: "",
                    registerCode:""
                }}
                validationSchema={registerSchema}
                onSubmit={async (values, { resetForm }) => {
                    console.log(values)

                    if (values.email.split('@')[1] === "gmail.com") {
                        values.registerCode= verifyCode
                        const { confirmPassword, ...updatedValues } = values
                        const requestOptions = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(updatedValues),
                        };
                        const res = await fetch("http://localhost:4005/register", requestOptions)
                        const data = await res.json()
                        alert(data.msg)
                        if (data.isRegistered) {  
                            alert("Verification code has been sent in email!")
                            fetch(`${process.env.REACT_APP_API_URL}/sendemails`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    to: values.email,
                                    subject: 'Email Subject',
                                    text: 'your code is: ' + verifyCode
                                })
                            })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                })
                            navigate('/verification')
                        }

                    } else {
                        alert("please write gmail account!")
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                            <div>
                                <Field name="name" type="text" placeholder="Name" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                            </div>
                            <div>
                                <Field name="phone" type="text" placeholder="Phone" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                            </div>
                            <div>
                                <Field name="email" type="email" placeholder="email" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                            <div>
                                <Field name="password" type="password" placeholder="password" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                            </div>
                            <div>
                                <Field name="confirmPassword" type="password" placeholder="confirmPassword" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
                            </div>
                            <div>
                                <Field name="countryName" type="text" placeholder="countryName" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.countryName && touched.countryName ? <div>{errors.countryName}</div> : null}
                            </div>
                            <div>
                                <Field as="select" name="selection" style={{ width: '20vw', margin: '5px 0', padding: '10px' }}>
                                    <option value="">What is the Account made for?</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Company">Company</option>
                                </Field>
                                {errors.Selection && touched.Selection ? <div>{errors.Selection}</div> : null}
                            </div>
                            <div>
                                <button type="submit" style={{ width: '170px', padding: '5px', margin: '5px 0 0 0' }}>Submit</button>
                            </div>
                            <div>
                                Already Have A Account?<br />
                                <Link to="/login"><button style={{ width: '170px', padding: '5px', margin: '5px 0 0 0' }}>Login</button></Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default Register;