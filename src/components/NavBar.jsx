import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand bg-dark">
            <div className="container-fluid">
                
            <Link to={"/"} className="navbar-brand text-warning" href="#">Click-World</Link>
                
                <ul className="navbar-nav">
                    <Link to={"/"} className="nav-link text-light px-5" href="#"><li>PRODUCTOS</li></Link>
                    <Link to={"/category/informacion"} className="nav-link text-light px-5" href="#"><li>INFORMACION</li></Link>
                    <Link to={"/category/comunidad"} className="nav-link text-light px-5" href="#"><li>COMUNIDAD</li></Link>
                    <Link to={"/category/contacto"} className="nav-link text-light px-5" href="#"><li>CONTACTO</li></Link>
                    <CartWidget/>
                </ul>
                
            </div>
        </nav>
    );
}
 
export default NavBar;