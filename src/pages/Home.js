import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';

const Home = ({posts , Comments}) => {
  return (
    <div className={styles.postsList}>

    {posts.map((post) => (
      <div className={styles.postWrapper} key={`post-${post._id}`}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
            <img
              src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1655467517~hmac=bd0f149d2e160f8cedacb8f20242b7c7"
              alt="user-pic"
            />
            <div>
              {/* <span className={styles.postAuthor}>Ashish Saini</span> */}
              <span className={styles.postAuthor}>{post.user.name}</span>
              <span className={styles.postTime}>a minute ago</span>
            </div>
          </div>
          <div className={styles.postContent}>{post.content}</div>

          <div className={styles.postActions}>
            <div className={styles.postLike}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/889/889140.png"
                alt="likes-icon"
              />
              <span>5</span>
            </div>

            <div className={styles.postCommentsIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1329/1329927.png"
                alt="comments-icon"
              />
              <span>2</span>
            </div>
          </div>
          <div className={styles.postCommentBox}>
            <input placeholder="Start typing a comment" />
          </div>

          <div className={styles.postCommentsList}>
            <Comments />
          </div>
        </div>
      </div>
    
    ))}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Home;
