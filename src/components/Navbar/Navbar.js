import { Link } from "react-router-dom";
 import "../Navbar/Navbar.css"



function Header(props) {
    return (
        <>

            <header>
                <h1>MOVIES</h1>
                <nav>
                <ul>
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/favorite">FAVORITE LIST</Link></li>
                    <li><a href="new release">NEW RELEASE</a></li>
                    <li><a href="ATTRACTIONS">TOP RATED</a></li>
                </ul>
            </nav>
        </header>

    </>
    
    
    )


}

export default Header;
