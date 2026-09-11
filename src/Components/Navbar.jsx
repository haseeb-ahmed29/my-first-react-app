


import { Link } from "react-router-dom";


function Navbar (){
    return(
        <nav>
            <h1>My React Website</h1>
            <Link to={'/'}>Home</Link>
            {'|'}
            <Link to={'/About'}>About</Link>
            {'|'}
            <Link to={'/Contact'}>Contact</Link>
        </nav>
    )
}

export default Navbar;