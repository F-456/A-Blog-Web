import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreateACC() {
    return (
        <div class="createACCUI">
            <Formik initialValues={null} onSubmit={null} validationSchema={null}>
                <Form class="signup_form_style">
                    <label>Username : </label>

                    <Field
                        id="input_signup"
                        name="Username"
                        placeholder="(Etc F456... )"
                    />
                    <label>Email :</label>
                    <Field
                        id="input_signup"
                        name="email"
                        placeholder="(something@gmail.com... )"

                    />
                    <label>Password : </label>
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