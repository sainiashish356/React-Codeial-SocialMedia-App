import { useAuth } from "../hooks";
import styles from '../styles/settings.module.css';


const UserProfile = () => {
 
const auth = useAuth();
const user = {};
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src='https://cdn-icons-png.flaticon.com/512/456/456283.png'
          alt=''
        />
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user?.email}</div>

      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user?.name}</div>
   
      </div>
      <div className='btnGrp'>
        
          <button
            className={`button ${styles.saveBtn}`}>
            Add Friend
          </button>
       
          <button
            className={`button ${styles.saveBtn}`} >
           Remove Friend
          </button>

      </div>
    </div>
  );
};

export default UserProfile;