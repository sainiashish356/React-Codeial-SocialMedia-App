import styles from '../styles/navbar.module.css';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks';

const Navbar = () => {
    const auth = useAuth();  

    return(
            <div className={styles.nav}>
                <div className={styles.leftNav}>

                    <Link to ="/">
                        <img src='https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png' alt='LOGO' height={65}/>
                    </Link>
                    
                </div>
            
                <div className={styles.rightNav}>
                  { auth.user && <div className={styles.user}>
                        <a href=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='userDp' className={styles.userDp}/> 
                        </a>
                        <span>{auth.user.name}</span>
                    </div> }

                    <div className={styles.navLinks}>
                    <ul>
                    {auth.user ? (
                        <>
                        <li onClick={auth.logout}> Logout </li>
                        </>
                    ) : (
                        <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        
                        <li>
                            <a href='/'>Register</a>
                        </li>
                        </>
                    )}    
                       
                    </ul>
                    </div>

                </div>
            </div>
    );
}

export default Navbar;