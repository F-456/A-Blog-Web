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

    // Function to truncate content and add ellipsis
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    return (
        <div className="Blog_container">
            {listOfBlog.map((value, key) => {
                return (

                    <div className='Blog' onClick={() => {
                        navigate(`/blog/${value.id}`)
                    }}>
                        <div className="blog_title ">Title: {value.title}</div>
                        <div className="blog_content ">{truncateText(value.content, 100)}</div>
                        <div className="blog_username ">By- {value.username}</div>
                    </div>
                )
            })}
        </div>

    )
};

export default Blog;