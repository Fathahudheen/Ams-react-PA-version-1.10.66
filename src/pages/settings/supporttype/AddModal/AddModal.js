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
    name: "",
    descp:"",

  }
  const handleReset = (formik) => {
    formik.resetForm()
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values.name);
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
    name,
    descp,

    }) => {
    if (name == '' && descp == '') {
      console.log('enter all detailes')
    } else {
      try {
        const user_support_type = {
          name: name,
          descp:descp,
        }
        const response = await axios.post(`http://localhost:8000/supportType`, user_support_type)
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
          <Modal.Title>Add Support Type</Modal.Title>
        </Modal.Header>
        <Container>
          <Row>
            <Col lg={12}>
              <Form onSubmit={formik.handleSubmit} action="">
                <Modal.Body style={{ height: '220px' }} className="overflow-auto">
                <Form.Label className="ms-1  ">Name
                  </Form.Label>

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
                        fontSize: "13px",
                        color: "red",
                        marginTop: "1px",
                        marginLeft: "2%",
                      }}
                      className="form-error"
                    >
                      {formik.errors.name }
                    </p>
                  ) : null}
                  
                  <Form.Label className="ms-1 mt-2">Description</Form.Label>
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
                      formik.isValid ? true : alert(formik.errors)
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
