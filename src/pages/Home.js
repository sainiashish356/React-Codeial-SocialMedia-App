import React,{useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import { getPosts } from '../api';
import {Link} from 'react-router-dom';

import { Comment , Loader } from '../components';
import styles from '../styles/home.module.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      const fetchPosts = async () => {
        const response = await getPosts();
        // console.log('response' , response);
  
        if (response.success) {
          setPosts(response.data.posts);
        }
  
        setLoading(false);
      };
      fetchPosts();
    }, []);

    if(loading){
      return <Loader />
    }

  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <div className={styles.postWrapper} key={`post-${post._id}`}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                alt="user-pic"
              />

              <div>
                <Link to={
                  {pathname : `/user/${post.user._id}`,
                    state: {
                      user: post.user
                    }
                  }}
                 className={styles.postAuthor}>
                 {post.user.name}
                 </Link>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.conent}</div>

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
                <span>{post.comments.length}</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {post.comments.map((comment) => (
                <Comment comment={comment} />
              ))}
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
