import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';
import styles from '../styles/home.module.css';

const FriendsList = () => {

    const auth = useAuth();
    const {friends= []} = auth.user;

    return (

        <div className={styles.friendsList}>
            <div className={styles.header}>
            {friends && friends.length === 0 && (
                <div className={styles.noFriends}>No Friends Found!</div>
            )}

            {friends && friends.map(friend => <div key={`friend-$(friend._id)`}>
                <Link className={styles.friendsItem} to={`/user/${friend._id}`}>
                    <div className={styles.friendsImg}>
                        <img src='https://cdn-icons.flaticon.com/png/512/2218/premium/2218468.png?token=exp=1657210462~hmac=35780db974b6ea3e76dc995afaa0fb95' alt="" />
                    </div>
                    <div className={styles.friendsName}>{friend.to_user.email}</div>
                </Link>
            </div>)}
            
            </div>
        </div>

    )

}

export default FriendsList;