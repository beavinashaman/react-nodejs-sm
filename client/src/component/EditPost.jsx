import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



const EditPost = () => {
  const { id } = useParams();
  const [postObject, setPostData] = useState({});

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const addComment = () => {
    axios
      .post("http://localhost:8080/comments", {
        commentbody: newComment,
        PostId: id,
      },
      {
        headers:{
          accessToken: sessionStorage.getItem("accessToken")
        }
      })
      .then((response) => {
        if(response.data.error){
          alert(response.data.error)
        }else{
          const commentToAdd = { commentbody: newComment, username: response.data.username };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/byId/${id}`).then((res) => {
      setPostData(res.data);
    });

    axios.get(`http://localhost:8080/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  return (
  
      <div className="postPage">
        <div className="leftSide">
          <div className="post" id="individual">
            <div className="title"> {postObject.title} </div>
            <div className="body">{postObject.postText}</div>
            <div className="footer">{postObject.username}</div>
          </div>
        </div>
        <div className="rightSide">
          <div className="addCommentContainer">
            <input
              type="text"
              placeholder="Comment..."
              autoComplete="off"
              value={newComment}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
            <button onClick={addComment}> Add Comment</button>
          </div>
          <div className="listOfComments">
            {comments.map((comment, key) => {
              return (
                <>
                <div key={key} className="comment">
                  {comment.commentbody}
                </div>
                <div>
                  <label>
                  User: {comment.username}
                  </label>
                </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default EditPost;
