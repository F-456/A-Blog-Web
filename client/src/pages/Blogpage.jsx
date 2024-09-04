import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function Blog() {
    const [Blog, setBlog] = useState({});
    let { id } = useParams();

    useEffect(() => {

        //getting blog list and information by their specific id
        axios.get(`http://localhost:3001/blog/ID/${id}`).then((response) => {
            setBlog(response.data);
            console.log(response);
        });
    }, {});
    return (
        <div >
            <div className='Blog_id' >
                <div className="Blog_id_title">Title: {Blog.title}</div>
                <div className="Blog_id_content">Written By:{Blog.content}</div>
                <div className="Blog_id_user">Posted by:{Blog.username}</div>
            </div>
        </div>

    );
}

export default Blog;