import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import {toast } from "react-toastify";
import axios from "axios";


const UpdateModal = ({row}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [values, setValues] = useState({
    id:row._id,
    f_name:row.f_name,
    l_name:row.l_name,
    mobile_no:row.mobile_no,
    password:row.password,
    status:row.status
  });
  
  function handleChange(event) {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  }
 
 const update = async (values) => {
  const { id, f_name, l_name,mobile_no ,password,status} = values;
  try {
    const user_1 = {
      f_name:f_name,
      l_name:l_name,
      mobile_no:mobile_no,
      password:password,
      status:status
    };
    const response = await axios.patch(
      `http://localhost:8000/licensee/${id}`,
      user_1
    );
    if(response.status===200){
      toast.success('User Successfully Updated !', {
          toastId: 'success',
          position: toast.POSITION.TOP_RIGHT
      });
    }  
  } catch (error) {
    alert(error);
  }
};
  return (
    <>
      <Button
        className="icon-btn"
        onClick={() => {
          handleShow();
        }}
      >
        <BsPencilSquare className="text-info" />
      </Button>

      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#40536e", color: "white" }}
        >
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={12}>
                <Form  action="">
                  <Form.Label className="ms-1">First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="f_name"
                    value={values.f_name}
                    onChange = {handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="l_name"
                    value={values.l_name}
                    onChange = {handleChange}
                  />
                   <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile_no"
                    value={values.mobile_no}
                    onChange = {handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Password</Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    value={values.password}
                    onChange = {handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    onChange = {handleChange}
                  >
                    <option style={{backgroundColor:'#40536e'}} value='' className=" text-white">
                    {values.status}
                    </option>
                    <option className={values.status === 'Active' ? 'd-none' : 'd-block'} value='Active'>Active</option>
                    <option className={values.status === 'Inactive' ? 'd-none' : 'd-block'} value='Inactive'>Inactive</option>
                  </Form.Select>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={()=>{
            handleClose();
            update(values)
          }}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateModal;
