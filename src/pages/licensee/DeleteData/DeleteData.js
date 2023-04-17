import React, { useState} from "react";
import { Modal, Button } from "react-bootstrap";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from "axios";
import {toast } from "react-toastify";


const DeleteData = ({row}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = async (row) => {
        try {
          const response = await axios.delete(`http://localhost:8000/licensee/${row._id}`);
          if(response.status===200){
            toast.success('User Successfully Deleted !', {
                toastId: 'success',
                position: toast.POSITION.TOP_RIGHT
            });
          } 
        } catch (error) {
        alert(error)
        };
      };
  return (
    <>
     <Button className="icon-btn" onClick={() => {
        handleShow();
      }}>
      <RiDeleteBin6Fill className="text-danger" />
      </Button>

      <Modal show={show}  backdrop="static" centered onHide={handleClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: "#40536e", color: "white" }}>
          <Modal.Title>Delete ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fw-bold">
           Are you sure you wish to delete this user ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
          <Button variant="success" onClick={()=>{
            handleDelete(row);
            handleClose();
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteData
