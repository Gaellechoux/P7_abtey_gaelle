import { Link } from 'react-router-dom';
import Logo from  '../../assets/LOGO (1).png';

const Header = () => {
    return (
        <header className='header'>
         <div className='header__logo'>
         <img src={Logo} alt='Logo de agence kasa'/>
         </div>
          <nav className='header__navbar'> 
            <Link to='/' className='active'>ACCUEIL</Link>
            <Link to='/about' className='active2'>A PROPOS</Link>
          </nav>
        </header>
    );
};

export default Header;