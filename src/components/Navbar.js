import styles from '../styles/navbar.module.css';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks';
import { useEffect, useState } from 'react';
import { SearchUsers } from '../api';

const Navbar = () => {

    const [results , setResults] = useState([]);
    const [searchText , setSearchText] = useState('');
    const auth = useAuth();  

    useEffect(() => {
        const fetchUsers = async() => {
                const response = await SearchUsers(searchText);
                if(response.success){
                    setResults(response.data.users);
                }
        }

        if(searchText.length > 2){
            fetchUsers();
        }else{
            setResults([]);
        }
    } ,[searchText])

    return(
            <div className={styles.nav}>
                <div className={styles.leftNav}>

                    <Link to ="/">
                        <img src='https://ninjasfiles.s3.amazonaws.com/0000000000003454.png' alt='LOGO' />
                    </Link>
                    
                </div>
            
            {/* SEARCH RESULT UI */}
                <div className={styles.searchContainer}>
                <img className={styles.searchIcon} src="https://cdn-icons.flaticon.com/png/512/954/premium/954591.png?token=exp=1657459092~hmac=8e726e65f5d196725f5da4ca719798f2" alt=""/>

                <input placeholder='Search Users' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

                {results.length > 0 && <div className={styles.searchResults}>
                    <ul>
                        {results.map((user) => (
                            <li className={styles.searchResultsRow} 
                            key={`user-${user._id}`}
                            >
                            <Link to={`/user/{user._id}`}>
                                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt=''/>
                            </Link>
                                   <span>{user.name}</span> 
                        </li>))}
                    </ul>
                </div>}

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