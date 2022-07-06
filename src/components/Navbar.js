import styles from '../styles/navbar.module.css';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks';

const Navbar = () => {
    const auth = useAuth();  

    return(
            <div className={styles.nav}>
                <div className={styles.leftNav}>

                    <Link to ="/">
                        <img src='https://ninjasfiles.s3.amazonaws.com/0000000000003454.png' alt='LOGO' />
                    </Link>
                    
                </div>
            
                <div className={styles.rightNav}>
                  { auth.user && <div className={styles.user}>
                        <Link to='/settings'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='userDp' className={styles.userDp}/> 
                        </Link>
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
                            <Link to='/register'>Register</Link>
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