import styles from '../styles/navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
            <div className={styles.nav}>
                <div className={styles.leftNav}>

                    <Link to ="/">
                        <img src='https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png' alt='LOGO' height={65}/>
                    </Link>
                    
                </div>
            
                <div className={styles.rightNav}>
                    <div className={styles.user}>
                        <a href=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='userDp' className={styles.userDp}/> 
                        </a>
                        <span>Ashish</span>
                    </div>

                    <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/'>Logout</Link>
                        </li>
                        <li>
                            <Link to='/'>Register</Link>
                        </li>
                    </ul>
                    </div>

                </div>
            </div>
    );
}

export default Navbar;