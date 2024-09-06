import React, { useEffect, userEffect, userState, useState } from 'react';
import Header from "../Header.jsx";
import Footer from "../footer.jsx";
import axios from "axios"
import Blog from "../blog.jsx";
import Create_blog from '../create_blog_img.jsx';

function Home() {
    //create a empty array for backend to display it 
    const [array, setArray] = useState([]);


    //testing fetching array to show the backend is working
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:3001/api")
        setArray(response.data.users);
        console.log(response.data.users);

    };


    useEffect(() => {
        fetchAPI();

        //empty array ensure it only runs in initial render 
    }, [])
    return (
        <>
            <Header></Header>
            <hr></hr>
            <div >
                <Blog></Blog>
            </div>

            <div>
                <Create_blog></Create_blog>
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