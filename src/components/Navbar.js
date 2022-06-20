import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return(
            <div className={styles.nav}>
                <div className={styles.leftNav}>
                    <a href="/">
                        {/* <img src='https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png' alt='LOGO' height={65}/> */}
                        <img src='https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png' alt='LOGO' height={65}/>
                    </a>
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
                            <a href='/'>Login</a>
                        </li>
                        <li>
                            <a href='/'>Logout</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                    </ul>
                    </div>

                </div>
            </div>
    );
}

export default Navbar;