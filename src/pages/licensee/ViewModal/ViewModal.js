import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import { GoEye } from "react-icons/go";
const ViewModal = ({ row }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="icon-btn"
        onClick={() => {
          handleShow();
        }}
      >
        <GoEye className="text-primary" />
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
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "310px" }} className="overflow-auto">
          <Container>
            <Row>
              <Col lg={12}>
                <Form.Label className="ms-1 mt-2">First name</Form.Label>
                <Form.Control disabled type="text" defaultValue={row.f_name} />
                <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                <Form.Control disabled type="text" defaultValue={row.l_name} />
                <Form.Label className="ms-1 mt-2">Email</Form.Label>
                <Form.Control disabled type="text" defaultValue={row.email} />
                <Form.Label className="ms-1 mt-2">Password</Form.Label>
                <Form.Control disabled type="text" defaultValue={row.password} />
                <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                <Form.Control disabled type="text" defaultValue={row.mobile_no} />
                <Form.Label className="ms-1 mt-2">Role</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  defaultValue={row.role_opt}
                />
                <Form.Label className="ms-1 mt-2">Join Date</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  defaultValue={row.join_Date}
                />
                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" defaultValue={row.status} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewModal;
