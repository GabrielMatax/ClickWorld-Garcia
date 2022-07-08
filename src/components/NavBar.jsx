import CartWidget from "./CartWidget";

const NavBar = () => {
    return (  
        <nav className="navbar navbar-expand bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand text-warning" href="#">Click-World</a>
                
                <ul className="navbar-nav">
                    <li><a className="nav-link text-light px-5" href="#">PRODUCTOS</a></li>
                    <li><a className="nav-link text-light px-5" href="#">INFORMACION</a></li>
                    <li><a className="nav-link text-light px-5" href="#">COMUNIDAD</a></li>
                    <li><a className="nav-link text-light px-5" href="#">CONTACTO</a></li>
                    <CartWidget/>
                </ul>
                
            </div>
        </nav>
    );
}
 
export default NavBar;