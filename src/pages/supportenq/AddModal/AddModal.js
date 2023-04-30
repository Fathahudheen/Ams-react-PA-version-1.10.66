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
    support_type: "",
    ticket_no:"",
    enq_from:"",
    enq_to:"",
    descp:"",
    email:"",
    mobile:"",
    remarks:"",
  }
  const handleReset = (formik) => {
    formik.resetForm()
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.support_type);
      try {
        create(values);
        resetForm();
        handleModalClose();
        tableRenderTrue();
      } catch (error) {
        console.error(error);
      }
    },
  });
  // ...........Validation Ends..........//

  // ...............Adding User Here.......................//

  const create = async ({ 
    support_type,
    ticket_no,
    enq_from,
    enq_to,
    descp,
    email,
    mobile,
    remarks,
    }) => {
    if (support_type == '' && email == '') {
      console.log('enter all detailes')
    } else {
      try {
        const user_support_Enq = {
          support_type: support_type,
          ticket_no:ticket_no,
          enq_from:enq_from,
          enq_to:enq_to,
          descp:descp,
          email:email,
          mobile:mobile,
          remarks:remarks,
        }
        const response = await axios.post(`http://localhost:8000/supportEnq`, user_support_Enq)
        if (response.status === 200) {
          // alert(response.status.toString())
          toast.success('User Successfully Created !', {
            toastId: 'success',
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          });
        }
        hg()
      } catch (error) {
        console.log(error);
      }
    }
  };

  // ...............Adding User Ends Here.......................//
  return (
    <>
      <Modal show={show} backdrop="static" centered onHide={handleModalClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form onSubmit={formik.handleSubmit} action="">
                <Modal.Body style={{ height: '310px' }} className="overflow-auto">
                <Form.Label className="ms-1  ">SUPPORT TYPE
                  </Form.Label>

                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="support_type"
                    autoComplete="off"
                    value={formik.values.support_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />


                  {formik.errors.support_type && formik.touched.support_type ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.support_type }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1">TICKET NUMBER</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="ticket_no"
                    autoComplete="off"
                    value={formik.values.ticket_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.ticket_no && formik.touched.ticket_no ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.ticket_no }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 ">ENQUIRY FROM</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="enq_from"
                    autoComplete="off"
                    value={formik.values.enq_from}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.enq_from && formik.touched.enq_from ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.enq_from }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 ">ENQUIRY TO</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="enq_to"
                    autoComplete="off"
                    value={formik.values.enq_to}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.enq_to && formik.touched.enq_to ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.enq_to }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 ">DESCRIPTION</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="descp"
                    autoComplete="off"
                    value={formik.values.descp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.descp && formik.touched.descp ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.descp }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 ">EMAIL</Form.Label>
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
                      {formik.errors.email }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 ">PHONE</Form.Label>
                  <Form.Control
                    required
                    type="text"
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
                      {formik.errors.mobile }
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 ">REMARKS</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="remarks"
                    autoComplete="off"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.remarks && formik.touched.remarks ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.remarks }
                    </p>
                  ) : null}
              
                  <Form.Label className="ms-1 mt-1">Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder=""
                    defaultValue=""
                    name="password"
                    autoComplete="off"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <p
                      style={{
                        fontSize: "10px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.password}
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
  );
};

export default AddModal
