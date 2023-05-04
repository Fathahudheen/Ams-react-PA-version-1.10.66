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
    firstname: '',
    lastname: '',
    mobile_no: '',
    email: '',
    password: '',
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

  const create = async ({ _id, support_type, ticket_no, mobile,email,enq_from, enq_to,descp,remarks,createdAt,createdBy,updatedAt,updatedBy, password, status }) => {
    if (support_type == '' && email == '') {
      console.log('enter all detailes')
    } else {
      try {
        const supportenq = {
          support_type:support_type,
          ticket_no:ticket_no,
          mobile:mobile,
          email:email,
          enq_from:enq_from,
          enq_to:enq_to,
          descp:descp,
          remarks:remarks,
          createdAt:createdAt,
          createdBy:createdBy,
          updatedAt:updatedAt,
          updatedBy:updatedBy,
          remarks:remarks,
          password: password,
          status: status,
        }
        const response = await axios.post(`http://localhost:8000/supportEnq`, supportenq)
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
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form onSubmit={formik.handleSubmit} action="">
                <Modal.Body style={{ height: '310px' }} className="overflow-auto">

                  <Form.Label className="ms-1 ">Support Type</Form.Label>
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
                    <p className="form-error">{formik.errors.support_type}</p>
                  ) : null}

                  <Form.Label className="ms-1 mt-1">Ticket Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="ticket_no"
                    value={formik.values.ticket_no}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-1">Enquiry From</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="enq_from"
                    value={formik.values.enq_from}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-1">Enquiry To</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="Enq_to"
                    value={formik.values.enq_to}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-1">Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="descp"
                    value={formik.values.descp}
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
                    <p className="form-error">{formik.errors.mobile}</p>
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
                    <p className="form-error">{formik.errors.email}</p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Remarks</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                  />
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
                    <p className="form-error">{formik.errors.password}</p>
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
