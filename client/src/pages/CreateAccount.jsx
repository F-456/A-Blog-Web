import React from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import axios from "axios"


function CreateACC() {
    const initialValues = {
        username: "",
        email: "",
        password: "",

    };


    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(10).required().test("check-user", "username has been taken", async (value) => {
            if (!value)
                return true;
            // Skip validation if value is empty and allow the user to use the name    
            try {
                const response = await axios.post("http://localhost:3001/auth/check_username", { username: value });
                return !response.data.exists; // Assuming your API returns { exists: true/false }

            } catch (error) {
                console.error('Error checking username:', error);
                return false;
            }
        }),
        email: Yup.string().email("Invalid email type").required().test('check-email', 'email has been taken', async (value) => {
            if (!value) return true; // Skip validation if value is empty and allow the user to use the email

            try {
                const response = await axios.post("http://localhost:3001/auth/check_email", { email: value });
                return !response.data.exists; // Assuming your API returns { exists: true/false }
            } catch (error) {
                console.error('Error checking email:', error);
                return false;
            }
        }),
        password: Yup.string().min(3).max(15).required(),

    });

    //posting data that user submit and post it into the sql
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
            console.log("user successfully created")
        });
    };

    return (
        //form for user to key in information and create a account and store in sql
        <div className="createACCUI">
            <h1>Create your account for a blog web </h1>

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