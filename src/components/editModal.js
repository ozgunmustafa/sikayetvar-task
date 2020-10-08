import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios"

const EditModal = (props) => {
  const [article, setArticle] = useState({
    title: props.article.title,
    body: props.article.body
  });

 const onInputChange = (event) =>{
     setArticle({ ...article, [event.target.name]: event.target.value });
 }
 const onFormSubmit=(event)=>{
     event.preventDefault();
     axios.put(`http://jsonplaceholder.typicode.com/posts/${props.article.id}`,article)
     .then((response)=>{
         console.log(response)
     })
 }
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
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Title" 
          onChange={onInputChange}
          value={article.title}
        />
        <Form.Label>Body</Form.Label>
        <Form.Control name="body" as="textarea" rows="5" 
        value={article.body}
        onChange={onInputChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onFormSubmit}>Güncelle</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditModal;
