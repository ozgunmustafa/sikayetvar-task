import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import RemoveModal from "../components/removeModal"
import EditModal from "../components/editModal"


export default function PostList() {
  const [articleList, setArticleList] = useState([]);
  const [removeModal, setRemoveModal] = useState(false);
  const [editModal, setEditModal] = useState(false);


  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      setArticleList(response.data);
    });
  }, []);

  return (
    <>
      {articleList.slice(0,10).map((article, index) => {
        return (
          <Row
            className="justify-content-center align-items-center post"
            key={article.id}
          >
            <Col md="8">
              <p className="mb-0 navy-text">
                <b className="mr-2 navy-text-muted">{index + 1}</b>
                {article.title}
              </p>
            </Col>
            <Col md="4">
              <div className="float-right">
                <Link to={`/post/${article.id}`} className="btn btn-primary">
                  DETAY
                </Link>
                <Button className="btn btn-success mx-3" onClick={() => setEditModal(true)}>DÜZENLE</Button>
                <EditModal show={editModal} article={article} onHide={() => setEditModal(false)}/>

                <Button className="btn btn-danger" onClick={() => setRemoveModal(true)}>SİL</Button>
                <RemoveModal show={removeModal} article={article} onHide={() => setRemoveModal(false)}/>
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
}
