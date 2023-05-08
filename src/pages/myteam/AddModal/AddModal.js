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
    role: '',
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

  const create = async ({ firstname, lastname, email, role, password, mobile_no }) => {
    if (firstname == '' && email == '') {
      console.log('enter all detailes')
    } else {
      try {
        const user = {
          f_name: firstname,
          l_name: lastname,
          email: email,
          role_opt: role,
          password: password,
          mobile_no: mobile_no,
        }
        const response = await axios.post(`http://localhost:8000/myteam`, user)
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
                  <Form.Label className="ms-1 ">First Name</Form.Label>
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
                    <p className="form-error">{formik.errors.firstname}</p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                  />

                  <Form.Label className="ms-1 mt-2">Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="role"

                    onChange={formik.handleChange}
                  >
                    <option style={{ backgroundColor: '#40536e' }} value="" className=" text-white">
                      {/* {user.status} */}
                    </option>
                    <option

                      className={formik.values.role === 'Operator' ? 'd-none' : 'd-block'}
                      value="Operator"
                    >
                      Operator
                    </option>
                    <option
                      className={formik.values.role === 'Faculty' ? 'd-none' : 'd-block'}
                      value="Faculty"
                    >
                      Faculty
                    </option>
                    <option
                      className={formik.values.role === 'Accountant' ? 'd-none' : 'd-block'}
                      value="Accountant"
                    >
                      Accountant
                    </option>
                  </Form.Select>
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
                    <p className="form-error">{formik.errors.mobile_no}</p>
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
