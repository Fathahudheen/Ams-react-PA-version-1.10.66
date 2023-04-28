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
    reg_no:"",
    firstname: "",
    lastname: "",
    mobile_no: "",
    email: "",
    dob:"",
    qualification:"",
    course_opted:"",
    guardian:"",
    relationship:"",
    addline1:"",
    addline2:"",
    pincode:"",
    district:"",
    state:"",

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
    reg_no,
    firstname,
    lastname,
    mobile_no,
    email,
    dob,
    qualification,
    course_opted,
    guardian,
    relationship,
    addline1,
    addline2,
    pincode,
    district,
    state,
  }) => {
    try {
      const std_add = {
        reg_no:reg_no,
        fname: firstname,
        lname: lastname,
        email: email,
        mobile: mobile_no,
        dob:dob,
        qualification:qualification,
        course_opted:course_opted,
        guardian:guardian,
        relationship:relationship,
        addLine1:addline1,
        addLine2:addline2,
        pincode:pincode,
        district:district,
        state:state,
      };
      const response = await axios.post(
        `http://localhost:8000/std_profile`,
        std_add
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
                   <Form.Label className="ms-1 ">Reg No</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="reg_no"
                    autoComplete="off"
                    value={formik.values.reg_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.reg_no && formik.touched.reg_no ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.reg_no}
                    </p>
                  ) : null}
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
                    name="mobile_no"
                    autoComplete="off"
                    value={formik.values.mobile_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.mobile_no && formik.touched.mobile_no ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.mobile_no}
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
                                  
                  <Form.Label className="ms-1 mt-1">Date of birth</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder=""
                    defaultValue=""
                    name="dob"
                    autoComplete="off"
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.dob && formik.touched.dob ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.dob}
                    </p>
                  ) : null}
                       <Form.Label className="ms-1 mt-1">Qualification</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="qualification"
                    autoComplete="off"
                    value={formik.values.qualification}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.qualification && formik.touched.qualification ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.qualification}
                    </p>
                  ) : null}
                      <Form.Label className="ms-1 mt-1">Course opted</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="course_opted"
                    autoComplete="off"
                    value={formik.values.course_opted}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.course_opted && formik.touched.course_opted ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.course_opted}
                    </p>
                  ) : null}
                      <Form.Label className="ms-1 mt-1">Guardian Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="guardian"
                    autoComplete="off"
                    value={formik.values.guardian}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.guardian && formik.touched.guardian ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.guardian}
                    </p>
                  ) : null}
                          <Form.Label className="ms-1 mt-1">Relationship</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="relationship"
                    autoComplete="off"
                    value={formik.values.relationship}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.relationship && formik.touched.relationship ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.relationship}
                    </p>
                  ) : null}
                          <Form.Label className="ms-1 mt-1">Address line1</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="addline1"
                    autoComplete="off"
                    value={formik.values.addline1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.addline1 && formik.touched.addline1 ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.addline1}
                    </p>
                  ) : null}
                            <Form.Label className="ms-1 mt-1">Address line2</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="addline2"
                    autoComplete="off"
                    value={formik.values.addline2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.addline2 && formik.touched.addline2 ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.addline2}
                    </p>
                  ) : null}
                   <Form.Label className="ms-1 mt-1">Pin Code</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="pincode"
                    autoComplete="off"
                    value={formik.values.pincode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.pincode && formik.touched.pincode ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.pincode}
                    </p>
                  ) : null}
                   <Form.Label className="ms-1 mt-1">District</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="district"
                    autoComplete="off"
                    value={formik.values.district}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.district && formik.touched.district ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.district}
                    </p>
                  ) : null}
                     <Form.Label className="ms-1 mt-1">State</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="state"
                    autoComplete="off"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.state && formik.touched.state ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.state}
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
