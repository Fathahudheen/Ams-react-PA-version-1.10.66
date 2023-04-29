import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { ValidSchema } from '../Validation/Validation'
import axios from 'axios'
import { toast } from 'react-toastify'
import './AddModal.css'

const AddModal = ({ tableRenderTrue, load, addclose, add }) => {

  //................Table Render Controll.............//

  const [ren, setRen] = useState(load)
  useEffect(() => {
    setRen(load)
  }, [load])
  const renderControll = () => {
    tableRenderTrue()
    setRen(false)
  }

   //................Table Render Controll Ends.............//

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
    crs_name: '',
    crs_ctgry: '',
   duration: '',
 crs_dscrp: '',
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
        renderControll()
      } catch (error) {
        console.error(error)
      }
    },
  })
  // ...........Validation Ends..........//

  // ...............Adding User Here.......................//

  const create = async ({ crs_name, crs_ctgry, duration, crs_dscrp}) => {
    if(crs_name==''&&crs_ctgry==''){
      console.log('enter all detailes')
    }else{
      try {
        const user_crse = {
            crs_name: crs_name,
            crs_ctgry: crs_ctgry,
            duration: duration,
            crs_dscrp: crs_dscrp,
        }
        const response = await axios.post(`http://localhost:8000/course`, user_crse)
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
                  <Form.Label className="ms-1 ">Course name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="crs_name"
                    autoComplete="off"
                    value={formik.values.crs_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.crs_name && formik.touched.crs_name ? (
                    <p
                      style={{ 
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.crs_name}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Course category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="crs_ctgry"
                    value={formik.values.crs_ctgry}
                    onChange={formik.handleChange}
                  />
                  <Form.Label className="ms-1 mt-1">Duration</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="duration"
                    autoComplete="off"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.duration && formik.touched.duration ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.duration}
                    </p>
                  ) : null}
                  <Form.Label className="ms-1 mt-1">Course description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder=""
                    defaultValue=""
                    name="crs_dscrp"
                    autoComplete="off"
                    value={formik.values.crs_dscrp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.crs_dscrp && formik.touched.crs_dscrp ? (
                    <p
                      style={{
                        fontSize: '10px',
                        color: 'red',
                        marginTop: '1px',
                        marginLeft: '2%',
                      }}
                      className="form-error"
                    >
                      {formik.errors.crs_dscrp}
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
