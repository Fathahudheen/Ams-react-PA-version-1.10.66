import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { ValidSchema } from '../Validation/Validation'
import axios from 'axios'
import { toast } from 'react-toastify'
import './AddModal.css'

const AddModal = ({ tableRenderTrue, addclose, add }) => {
  // .............Modal Controls..................//

  const [show, setShow] = useState(add)
  useEffect(() => {
    setShow(add)
  }, [add])
  const handleModalClose = () => {
    addclose()
    setShow(false)
  }
  // .............Modal Controls End..................//

  // ...........Validation...............//

  const initialValues = {
    reg_no: '',
    firstname:  '',
    lastname:  '',
    mobile_no:  '',
    altphone:'',
    email:  '',
    gender: '',
    dob :'',
    qualification: '',
    course_opted: '',
    guardian: '',
    relationship: '',
    addline1: '',
    addline2: '',
    pincode: '',
    district: '',
    state: '',
  }
  const handleReset = (formik) => {
    formik.resetForm()
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.firstname)
      try {
        create(values)
        resetForm()
        handleModalClose()
        tableRenderTrue()
      } catch (error) {
        console.error(error)
      }
    },
  })
  // ...........Validation Ends..........//

  // ...............Adding User Here.......................//

  const create = async ({
    reg_no,
    firstname,
    lastname,
    mobile_no,
    altphone,
    email,
    dob,
    gender,
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
    if (firstname == '' && email == '') {
      console.log('enter all detailes')
    } else {
    try {
      const std_add = {
        reg_no:reg_no,
        fname: firstname,
        lname: lastname,
        email: email,
        mobile: mobile_no,
        altphone:altphone,
        dob:dob,
        gender:gender,
        qualification:qualification,
        course_opted:course_opted,
        guardian:guardian,
        relationship:relationship,
        addLine1:addline1,
        addLine2:addline2,
        pincode:pincode,
        district:district,
        state:state,
      }
        const response = await axios.post(`http://localhost:8000/std_profile`, std_add)
              if (response.status === 200) {
          toast.success('User Successfully Created !', {
            toastId: 'success',
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          })
        }
        hg()
      } catch (error) {
        console.log(error)
      }
    }
  }

  // ...............Adding User Ends Here.......................//
  return (
    <>
      <Modal show={show} backdrop="static" centered onHide={handleModalClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form onSubmit={formik.handleSubmit} action="">
                <Modal.Body style={{ height: '310px' }} className="overflow-auto">
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.reg_no}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-2">First Name</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.firstname}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-2">Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Phone</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.mobile_no}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-2">Alternative Phone</Form.Label>
                  <Form.Control
                    
                    type="number"
                    placeholder=""
                    defaultValue=""
                    name="altphone"
                    autoComplete="off"
                    value={formik.values.altphone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {/* {formik.errors.altphone && formik.touched.altphone ? (
                    <p
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.altphone}
                    </p>
                  ) : null} */}
                  <Form.Label className="ms-1 mt-2">Email</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.email}
                    </p>
                  ) : null}
                                  
                  <Form.Label className="ms-1 mt-2">Date of birth</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.dob}
                    </p>
                  ) : null}
                  
                   <Form.Label className="ms-1 mt-2">Gender</Form.Label>
                   
                  <div className="gender d-flex">
               <div className="custom-control m-1 ">
               
                 <input
                    id="male"
                    type="radio"
                    value="male"
                    name='gender'
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender=== "male"}
                  />
                  
                  <label
                     className="custom-control-label m-1"
                     htmlFor="male"
                   >
                     Male
                   </label>
              </div>
              <div className="custom-control m-1">
                 <input
                    id="female"
                    type="radio"
                    value="female"
                    name='gender'
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.gender=== "female"}
                  />
                 <label
                   className="custom-control-label m-1"
                   htmlFor="female"
                  >
                    Female
                 </label>
                 
                 </div>
                 </div>
                 
 

                       <Form.Label className="ms-1 mt-2">Qualification</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.qualification}
                    </p>
                  ) : null}
                      <Form.Label className="ms-1 mt-2">Course Selected</Form.Label>                     
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.course_opted}
                    </p>
                  ) : null} 
                      <Form.Label className="ms-1 mt-2">Guardian Name</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.guardian}
                    </p>
                  ) : null}
                          <Form.Label className="ms-1 mt-2">Relationship</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.relationship}
                    </p>
                  ) : null}
                          <Form.Label className="ms-1 mt-2">Address Line1</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.addline1}
                    </p>
                  ) : null}
                            <Form.Label className="ms-1 mt-2">Address Line2</Form.Label>
                  <Form.Control
                   
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.addline2}
                    </p>
                  ) : null}
                   <Form.Label className="ms-1 mt-2">Pin Code</Form.Label>
                  <Form.Control
                    required
                    type="number"
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "1px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.pincode}
                    </p>
                  ) : null}
                   <Form.Label className="ms-1 mt-2">District</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: "px",
                      //   marginLeft: "2%",
                      // }}
                      className="form-error"
                    >
                      {formik.errors.district}
                    </p>
                  ) : null}
                     <Form.Label className="ms-1 mt-2">State</Form.Label>
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
                      // style={{
                      //   fontSize: "10px",
                      //   color: "red",
                      //   marginTop: ".5px",
                      //   marginLeft: "2%",
                      // }}
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
                      handleModalClose()
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    className="text-white"
                    onClick={() => {
                      formik.isValid ? create(formik.values) : alert(formik.errors)
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
  )
}

export default AddModal
