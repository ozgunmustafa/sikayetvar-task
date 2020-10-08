import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const EditModal = (props) => {
  const [post, setPost] = useState({});

  useEffect(()=>{
    setPost(props.post)
  },[props.post])

  const onInputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });

  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://jsonplaceholder.typicode.com/posts/${props.post.id}`, post)
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <Modal
      centered
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Düzenle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label className="navy-text">Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Title"
          onChange={onInputChange}
          value={post.title}
        />
        <Form.Label>Body</Form.Label>
        <Form.Control
          name="body"
          as="textarea"
          rows="5"
          value={post.body}
          onChange={onInputChange}
        />
      </Modal.Body>
      <Modal.Footer className="float-left">
        <button className="btn btn-aqua" onClick={onFormSubmit}>Güncelle</button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditModal;
