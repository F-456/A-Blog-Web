import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"

function CreateACC() {
    const initialValues = {
        username: "",
        email: "",
        password: "",

    };



    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(10).required(),
        email: Yup.string().required(),
        password: Yup.string().min(3).max(15).required(),

    });

    //posting data that user submit and post it into 
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
            console.log("Something is working")
        });
    };

    return (
        //form for user to key in information and create a account and store in sql
        <div className="createACCUI">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="signup_form_style">
                    <label>Username : </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        id="input_signup"
                        name="username"
                        placeholder="(Etc F456... )"
                    />
                    <label>Email :</label>
                    <ErrorMessage name="email" component="span" />
                    <Field
                        id="input_signup"
                        name="email"
                        placeholder="(something@gmail.com... )"

                    />
                    <label>Password : </label>
                    <ErrorMessage name="password" component="span" />
                    <Field
                        id="input_signup"
                        name="password"
                        placeholder="enter a password..."
                    />
                    <button type="submit" id="signup_button">
                        submit
                    </button>

                </Form>
            </Formik>
        </div>
    );
}

export default CreateACC;