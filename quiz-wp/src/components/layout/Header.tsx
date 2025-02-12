
import logo from '../../../public/logo.webp';


const Header: React.FC = () => {

    return (
        <>
        
        <header>
            <div className='header'>
            <img src= {logo} alt="logo" className="header-logo"></img>
            </div>
        </header>
        
        </>
    );

};

export default Header