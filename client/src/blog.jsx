import React, { useEffect, userEffect, userState, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Blog() {

    // getting the blog information from backend and posted on the main page
    useEffect(() => {
        axios.get("http://localhost:3001/blog").then((response) => {
            setlistOfBlog(response.data);
        });
    }, []);

    const [listOfBlog, setlistOfBlog] = useState([]);
    const navigate = useNavigate();
    return (
        <div>
            {listOfBlog.map((value, key) => {
                return (

                    <div className='Blog' onClick={() => {
                        navigate(`/blog/${value.id}`)
                    }}>
                        <div className="blog_title ">Title: {value.title}</div>
                        <div className="blog_content ">{value.content}</div>
                        <div className="blog_username ">By- {value.username}</div>
                    </div>)
            })}
        </div>

    )
};

export default Blog;