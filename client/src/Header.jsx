import { Link } from "react-router-dom";
import CreateACC from "./pages/CreateAccount";

function Header() {

    return (
        <header>
            <h1 class="headtitle"> Welcome to A Blog Web</h1>
            <nav class="horizontal_nav">
                <ul>
                    {/* adding link to other pages */}
                    <li class="horizontal_list" ><a class="horizontal_a" href=""> Login  </a></li>
                    <Link to="/CreateAccount" ><li class="horizontal_list" ><a class="horizontal_a" href="">Signup</a></li></Link>
                    <li class="horizontal_list" ><a class="horizontal_a" href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header