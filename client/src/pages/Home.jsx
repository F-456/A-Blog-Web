import React, { useEffect, userEffect, userState, useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header.jsx";
import Footer from "../footer.jsx";
import axios from "axios"
import create_blog from "../assets/create_blog.jpg";

function Home() {
    //create a empty array for backend to display it 
    const [array, setArray] = useState([]);
    const [listOfBlog, setlistOfBlog] = useState([]);

    //testing fetching array to show the backend is working
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:3001/api")
        setArray(response.data.users);
        console.log(response.data.users);

    };
    // getting the blog information from backend and posted on the main page
    useEffect(() => {
        axios.get("http://localhost:3001/blog").then((response) => {
            setlistOfBlog(response.data);
        });
    }, []);

    useEffect(() => {
        fetchAPI();

        //empty array ensure it only runs in initial render 
    }, [])
    return (
        <>
            <Header></Header>
            <hr></hr>
            {listOfBlog.map((value, key) => {
                return (<div className='Blog'>
                    <div className="blog_title ">{value.title}</div>
                    <div className="blog_content ">{value.content}</div>
                    <div className="blog_username ">{value.username}</div>
                </div>)
            })};

            <div className='create_blog_position'>
                <Link to="/CreateBlog"><img className='create_blog_img' src={create_blog} alt="creating your post" /> </Link>
            </div>

            {/* reading array from backend and displaying on react*/}
            <div>
                {array.map((users, index) => (
                    <div key={index}>
                        <p>
                            {users}
                        </p>
                    </div>
                ))}
            </div>
            <Footer></Footer>
        </>

    );
}

export default Home