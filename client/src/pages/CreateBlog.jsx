import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


function createBlog() {
    const initialValues = {
        title: "",
        content: "",
        username: "",

    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().min(3).max(20).required("you must use a title"),
        content: Yup.string().min(10).max(1000).required("you must have a content"),
        username: Yup.string().min(3).max(20),

    });

    const onSubmit = (data) => {
        console.log("submitting form... loading")
        axios.post("http://localhost:3001/blog", data).then(() => {
            console.log(data);
            console.log("Blog successfully posted");

        }).catch(error => {
            console.error("error connecting to the server", error)
        });
    };

    return (

        <div className="create_blog_UI">
            <h1>Create your blog!</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="create_blog_style">
                    <label> Title </label>
                    <ErrorMessage name="title" component="span" />
                    <Field id="input_blog"
                        name="title"
                        placeholder="your title"
                    />

                    <lable> Content</lable>
                    <ErrorMessage name="content" component="span" />
                    <Field
                        id="input_blog_content"
                        name="content"
                        placeholder="things you want to share"
                        as="textarea"
                        rows="6"
                    />
                    <label>Username</label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        id="input_blog"
                        name="username"
                        placeholder="your username"
                    />
                    <button type="submit" id="create_blog_button" >
                        submit
                    </button>

                </Form>
            </Formik>
        </div>
    )
};

export default createBlog;