 const Home = () => {
    return (
        <div className="posts-list">
        <div className="post-wrapper">
          <div className="post-header">
            <div className="post-avatar">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1655420809~hmac=7f21abb7bab5be3f0e063e7afba63797"
                alt="user-pic"
              />
              <div>
                <span className="post-author">Ashish</span>
                <span className="post-time">a minute ago</span>
              </div>
            </div>
            <div className="post-content">Post Content</div>
  
            <div className="post-actions">
              <div className="post-like">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/686/686308.png"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>
  
              <div className="post-comments-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1330/1330233.png"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className="post-comment-box">
              <input placeholder="Start typing a comment" />
            </div>
  
            <div className="post-comments-list">
              <div className="post-comments-item">
                <div className="post-comment-header">
                  <span className="post-comment-author">Bill</span>
                  <span className="post-comment-time">a minute ago</span>
                  <span className="post-comment-likes">22</span>
                </div>
  
                <div className="post-comment-content">Random comment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Home;