import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArticleDetails = (props) => {
  const { id } = props.match.params;
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`http://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        response.data.find((user) => {
          if (user.id === post.userId) {
            setAuthor(user);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>
        Author: <Link to={`/profile/${post.userId}`}>{author.name}</Link>
      </small>
    </React.Fragment>
  );
};
export default ArticleDetails;
