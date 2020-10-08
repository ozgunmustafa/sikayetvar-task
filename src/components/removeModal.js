import axios from 'axios';
import React from 'react'
import { Modal } from "react-bootstrap";


const RemoveModal=({post,show,onHide})=> {



  const handleDelete=(id)=>{
    
    axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
      console.log(response)
      onHide();
    }).catch(()=>{
    })
  }
    return (
        <Modal
          show={show}
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
    <h4>{post.title}</h4>
            <p>
             {post.body}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-light" onClick={onHide}>İptal</button>
            <button className="btn btn-success"  onClick={()=>handleDelete(post.id)}>Sil</button>
          </Modal.Footer>
        </Modal>
      );
}
export default RemoveModal