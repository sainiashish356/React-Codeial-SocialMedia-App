import { useAuth } from "../hooks";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { addFriend, fetchUserProfile } from "../api";
import { useToasts } from "react-toast-notifications";
import { Loader } from "../components";
import styles from '../styles/settings.module.css';


const UserProfile = () => {
 
const [user , setUser] = useState({});  
const [loading , setLoading] = useState(true);
const [requestInProgress , setrequestInProgress] = useState(false);
const {userId} = useParams();
const {addToast} = useToasts();
console.log('userId' , userId);
const navigate = useNavigate();
const auth = useAuth();

useEffect(() => {
    const getUser = async () => {
        const response = await fetchUserProfile(userId);
    
        if(response.success){
            setUser(response.data.user);
            setLoading(false);
        }else{
            addToast('user Profile not AVailable',{
                appearance: 'error'
            })
            return  navigate('/')
        }
        setLoading(false);
    }
    getUser();
} ,[userId, navigate])
  
if(loading){
    return <Loader />
}

const checkIfUserIsFriend = () => {
    const friends = auth.user.friendships;

    const friendIds = friends.map((friend) => friend.to_user._id);
    const index = friendIds.indexOf(userId);

    if(index !== -1){
        return true;
    }
    return false;
};

const handleRemoveFriendClick = () => {};

const handleAddFriendClick = async () => {

  requestInProgress(true);

  const response = await addFriend(userId);

  if(response.success){
    const {friendship} = response.data;

    auth.updateUserFriends(true , friendship);
    addToast('Friend added successfully',{
      appearance: 'success'
    })
  }else{
    addToast(response.message , {
      appearance: 'error'
    })
  }

  requestInProgress(false);
}


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
        <div className={styles.fieldValue}>{user.email}</div>

      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user.name}</div>
   
      </div>
      <div className='btnGrp'>
      {
        checkIfUserIsFriend() ? (
        <button
            className={`button ${styles.saveBtn}`} onClick={handleRemoveFriendClick} disabled={requestInProgress}>
            {requestInProgress ? 'Removing Friend...' : 'Remove Friend'}
          </button> 
        ) : (
            <button
            className={`button ${styles.saveBtn}`} onClick={handleAddFriendClick} disabled={requestInProgress}>
            {requestInProgress ? 'Adding Friend...' : 'Add Friend'}
          </button>
        )
      }  

      </div>
    </div>
  );
};

export default UserProfile;