import { Link } from "react-router-dom";
import Logout from "./logout";

function Header() {
    const isloggedIn = sessionStorage.getItem("loginState");
    return (
        <header>
            <h1 className="headtitle"> Welcome to A Blog Web</h1>
            {/* display only necessary navigation if the user is logged in  */}
            {isloggedIn ? (
                <>
                    <nav className="horizontal_nav">
                        <ul>

                            <li className="horizontal_list" ><a className="horizontal_a" href="" onClick={Logout} >Logout</a></li>
                            <li className="horizontal_list" ><a className="horizontal_a" href="">Contact</a></li>
                        </ul>
                    </nav>
                </>
            ) : (
                <>
                    <nav className="horizontal_nav">
                        <ul>
                            {/* adding link to other pages */}
                            <Link to="/login" ><li className="horizontal_list" ><a className="horizontal_a" href=""> Login  </a></li></Link>
                            <Link to="/CreateAccount" ><li className="horizontal_list" ><a className="horizontal_a" href="">Signup</a></li></Link>
                            <li className="horizontal_list" ><a className="horizontal_a" href="">Contact</a></li>
                        </ul>
                    </nav>
                </>
            )}


        </header>
    );
}

export default Header