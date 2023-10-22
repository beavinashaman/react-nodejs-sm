import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const List = () => {
  let navigate  = useNavigate()
  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8080/posts/list").then((res) => {
      console.log(res);
      setList(res.data);
    });
  },[]);

  return (
    <>
      {list.map((val, k) => {
        return (
          <div className="post" onClick={()=>{navigate (`/post/${val.id}`)}}>
            <div className="title">{val.title}</div>
            <div className="body">{val.postText}</div>
            <div className="footer">{val.username}</div>
          </div>
        );
      })}
    </>
  );
};

export default List;
