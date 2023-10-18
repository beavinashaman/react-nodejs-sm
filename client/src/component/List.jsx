import React, { useState, useEffect } from "react";
import axios from "axios";
const List = () => {
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
          <div className="post">
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
