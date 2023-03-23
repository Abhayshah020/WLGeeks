import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserLoginDetails } from "../../../redux/action/userAction"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),

        password: Yup.string()
            .min(5, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={async (values, { resetForm }) => {
                    console.log(values)
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),
                    };
                    const res = await fetch("http://localhost:4005/login", requestOptions);
                    const data = await res.json()
                    if(data.isLogedin){
                        alert(data.msg);
                        dispatch(addUserLoginDetails(data.userData))
                        navigate('/')
                    }else{
                        alert(data.msg)
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                            <div>
                                <Field name="email" type="email" placeholder="email" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                            <div>
                                <Field name="password" type="password" placeholder="password" style={{ width: '50vw', margin: '10px 0', padding: '10px' }} />
                                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                            </div>
                            <div>
                                <button type="submit" style={{ width: '170px', padding: '5px', margin: '5px 0 0 0' }}>Submit</button>
                            </div>
                            <div>
                                NEW HERE?<br />
                                <Link to="/singUp"><button style={{ width: '170px', padding: '5px', margin: '5px 0 0 0' }}>Register</button></Link>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default Login;
