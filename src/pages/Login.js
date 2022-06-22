import React , {useState} from 'react';
import styles from '../styles/login.module.css';
import { useToasts } from 'react-toast-notifications';

const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [loggingIn , setLoggingIn] = useState(false);
    const { addToast } = useToasts();

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoggingIn(true);

        if(!email || !password){
            return addToast('Please enter both email and Password' , {
                // these are the optional statements
                appearance: 'error',
                autoDismiss: true,
            })
        }

    }

    return <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Login</span>

        <div className={styles.field}>
            <input 
            type="email"
             placeholder="Email"
              value={email}
               onChange = { (e) => setEmail(e.target.value) }/>
        </div>

        <div className={styles.field}>
            <input type="password"
             placeholder="Password"
                value={password}
                onChange = { (e) => setPassword(e.target.value) }
              />
        </div>

        <div className={styles.field} disabled={loggingIn}>
            <button> {loggingIn ? 'Logging in..' : 'Log in'} </button>
        </div>

    </form>
};

export default Login;