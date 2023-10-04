import {Link} from 'react-router-dom'
import './Navbar.css';


//header y links son props
const Navbar = ({header, links}) => {

    return (
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>{header}</h1>
            </div>
            <div className='navbar--links'>
                {
                    links.map((link, index) => (
                        <div key={index} className='navbar--link'>
                            <Link to={link.href}>{link.name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;