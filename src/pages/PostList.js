import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import RemoveModal from "../components/removeModal";
import EditModal from "../components/editModal";

export default function PostList() {
  const [postList, setPostList] = useState([]);
  const [removeModal, setRemoveModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);
  const [currentPost,setCurrentPost]=useState({});

  const openEditModal=(post)=>{
    setEditModal(true);
    setCurrentPost(post)
  }

  const openRemoveModal=(post)=>{
    setRemoveModal(true);
    setCurrentPost(post)
  }

  return (
    <>
      {postList.slice(0, 15).map((post, index) => {
        return (
          <Row
            className="justify-content-center align-items-center post"
            key={post.id}
          >
            <Col md="8">
              <p className="mb-0 navy-text">
                <b className="mr-2 navy-text-muted">{index + 1}</b>
                {post.title}
              </p>
            </Col>
            <Col md="4">
              <div className="float-right">
                <Link to={`/post/${post.id}`} className="btn btn-primary">
                  DETAY
                </Link>
                <Button
                  className="btn btn-success mx-3"
                  onClick={() => openEditModal(post)}
                >
                  DÜZENLE
                </Button>

                <Button
                  className="btn btn-danger"
                  onClick={() => openRemoveModal(post)}
                >
                  SİL
                </Button>
              </div>
            </Col>
          </Row>
        );
      })}
      <EditModal show={editModal} post={currentPost}  onHide={() => setEditModal(false)} />
      <RemoveModal show={removeModal} post={currentPost} onHide={() => setRemoveModal(false)} />
    </>
  );
}
