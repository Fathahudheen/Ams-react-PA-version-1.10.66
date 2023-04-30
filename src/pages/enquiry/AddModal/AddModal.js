import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { useFormik } from "formik";
import { ValidSchema } from "../Validation/Validation";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddModal.css";

const AddModal = () => {
  // .............Modal Controls..................//

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // .............Modal Controls End..................//

  // ...........Validation...............//

  const initialValues = {

    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    enq_source: "",
    enq_mode: "",
    enq_for: "",
  

  };
  const handleReset = (formik) => {
    formik.resetForm();
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.firstname);
      try {
        create(values);
        resetForm();
        handleClose();
      } catch (error) {
        console.error(error);
      }
    },
    
  });
  // ...........Validation Ends..........//

  // ...............Adding User Here.......................//

  const create = async ({
  
    firstname,
    lastname,
    email,
    mobile: mobile,
    enq_for,

  }) => {
    try {
      const enq = {
     
        fname: firstname,
        lname: lastname,
        email: email,
        mobile: mobile,
        enq_for:enq_for,
     
      };
      const response = await axios.post(
        `http://localhost:8000/enquiry`,enq
      );
      if (response.status === 200) {
        toast.success("User Successfully Created !", {
          toastId: "success",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


  // ...............Adding User Ends Here.......................//
  return (
    <>
      <Button
        className="mb-2 fw-600 d-flex align-items-center text-white"
        variant="success"
        onClick={handleShow}
      >
        <GoPlus /> ADD
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
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form  onSubmit={formik.handleSubmit} action="">
                <Modal.Body
                  style={{ height: "310px" }}
                  className="overflow-auto"
                >
                  <Form.Label className="ms-1 ">First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="firstname"
                    autoComplete="off"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.firstname && formik.touched.firstname ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.firstname}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-1">Phone</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder=""
                    defaultValue=""
                    name="mobile"
                    autoComplete="off"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.mobile && formik.touched.mobile ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.mobile}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="email"
                    autoComplete="off"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.email}
                    </p>
                  ) : null}
                                  
                       <Form.Label className="ms-1 mt-1">ENQ For</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="enq_for"
                    autoComplete="off"
                    value={formik.values.enq_for}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.enq_for && formik.touched.enq_for ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.enq_for}
                    </p>
                  ) : null}
                 
                 
 
                </Modal.Body>
                <Modal.Footer className="positoin-fixed">
                  <Button
                  className="text-white"
                    type="reset"
                    variant="danger"
                    onClick={() => {
                      handleReset(formik)
                      handleClose();
                    }}
                  >
                    Close
                  </Button>
                  <Button
                  className="text-white"
                    onClick={() => {
                      formik.isValid ? create(formik.values) : alert(formik.errors);
                    }}
                    type="submit"
                    variant="success ms-2"
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default AddModal;
