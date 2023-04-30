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
    name: "",
    description: "",
    status:"",
    
   
  };
  const handleReset = (formik) => {
    formik.resetForm();
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.name);
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
    name,
    description,
   
  }) => {
    try {
      const user_lic = {
        name: name,
        description: description,
      
      };
      const response = await axios.post(
        `http://localhost:8000/source`,
        user_lic
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
                  <Form.Label className="ms-1 ">Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="name"
                    autoComplete="off"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.name && formik.touched.name ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.name}
                    </p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                  
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
