import blog_img from "./assets/blog_img.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create_blog() {
    let data = null
    const navigate = useNavigate();
    const check_auth = () => {
        //sending an request to backend make sure the user is logged in 
        axios.post("http://localhost:3001/blog/createblog", data, {
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
            }
        }).then((response) => {
            if (response.data.error) {
                navigate("./login")
                alert("user are not logged in")
            } else {
                navigate("./CreateBlog")
            }
        })
    };
    return (
        <div className='create_blog_position'>
            <img className='create_blog_img' src={blog_img} alt="creating your post" onClick={check_auth} />
        </div>
    )

};

export default Create_blog;