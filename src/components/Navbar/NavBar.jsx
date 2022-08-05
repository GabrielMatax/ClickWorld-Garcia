import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand bg-dark">
            <div className="container-fluid">
                
            <Link to={"/"} className="navbar-brand text-warning" href="#">Click-World</Link>
                
                <ul className="navbar-nav">
                    <Link to={"/"} className="nav-link text-light px-5" href="#"><li>PRODUCTOS</li></Link>
                    <Link to={"/category/Mouse"} className="nav-link text-light px-5" href="#"><li>MOUSES</li></Link>
                    <Link to={"/category/MousePad"} className="nav-link text-light px-5" href="#"><li>MOUSEPADS</li></Link>
                    <Link to={"/category/contacto"} className="nav-link text-light px-5" href="#"><li>CONTACTO</li></Link>
                    <CartWidget/>
                </ul>
                
            </div>
        </nav>
    );
}
 
export default NavBar;