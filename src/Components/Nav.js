import {Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
               <nav>
                  <ul className='navbar'>
                        <div id="navbar-brand">
                            <Link to='/'id='logo'>Daflusher</Link>
                        </div>

                        <div className="links">
                            <Link to='/' className='link' style={{display:'none'}}></Link>
                            <Link to='/ux-design' className='link'>UX Design</Link>
                            <Link to='/front-end' className='link'>Frontend</Link>
                            <Link to='/about-me' className='link'>About me</Link>
                            <Link to='/contact-me' className='link'>Contact me</Link>
                        </div>
                        
                    </ul>
               </nav>

            

        </>
     
      );
}
 
export default Nav;