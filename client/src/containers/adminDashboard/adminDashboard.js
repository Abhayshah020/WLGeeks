// import { useState } from "react"
// import { Formik, Form, Field } from "formik";
// import * as Yup from 'yup';

const AdminDashboard = () => {
    return(
        <> 
        hello
        </>
    )
    // // const [inputMessageText, setInputMessageText] = useState('')
    // const registerSchema = Yup.object().shape({
    //     message: Yup.string()
    //         .min(1, 'Too Short!')
    //         .max(200, 'Too Long!')
    //         .required('Required'),
    //     });
    //     return(
    //     <>
    //     <Formik
    //         initialValues={{
    //             message: "",
    //         }}
    //         validationSchema={registerSchema}
    //         onSubmit={async (values, { resetForm }) => {
    //             console.log(values)
    //             // const requestOptions = {
    //             //     method: "POST",
    //             //     headers: { "Content-Type": "application/json" },
    //             //     body: JSON.stringify(values),
    //             // };
    //             // const res = await fetch("http://localhost:4005/verification", requestOptions);
    //             // const data = await res.json()
    //             resetForm({ values: '' })
    //         }}
    //     >
    //         {({ errors, touched }) => (
    //             <Form>
    //                 <div>
    //                     <div>
    //                         <Field name="message" type="text" placeholder="Message" />
    //                         {errors.message && touched.message ? <div>{errors.message}</div> : null}
    //                     </div>
    //                     <div>
    //                         <button type="submit">Submit</button>
    //                     </div>
    //                 </div>
    //             </Form>
    //         )}
    //     </Formik>
        // </>
    // )
}
export default AdminDashboard;
