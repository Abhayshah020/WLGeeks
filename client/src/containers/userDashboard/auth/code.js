import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
const Code = () => {
    const registerSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        registerCode: Yup.string()
            .min(5, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required'),
    });
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    registerCode: "",
                    email:"",
                    verified:"verified",
                }}
                validationSchema={registerSchema}
                onSubmit={async (values, { resetForm }) => {
                    console.log(values)
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(values),
                    };
                    const res = await fetch("http://localhost:4005/verification", requestOptions);
                    const data = await res.json()
                    alert(data.msg)
                    if(data.isVerified){
                        alert("Your Account has Verified")
                        navigate('/login')
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                            <div>
                                <Field name="email" type="email" placeholder="Email" style={{ width: '50vw', margin: '10px 0', padding: '10px' }}/>
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                            <div>
                                <Field name="registerCode" type="text" placeholder="Verification Code" style={{ width: '50vw', margin: '10px 0', padding: '10px' }}/>
                                {errors.registerCode && touched.registerCode ? <div>{errors.registerCode}</div> : null}
                            </div>
                            <div>
                                <button type="submit" style={{ width: '170px', padding: '5px', margin: '5px 0 0 0' }}>Submit</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default Code;