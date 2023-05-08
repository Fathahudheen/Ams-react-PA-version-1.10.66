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

  const [setup, setsetup] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/course_setup')
      const json = await response.json()
      setsetup(json)
      console.log(setup)
    }
    fetchData()
  }, [])

  const [category, setcategory] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/course_ctgry')
      const json = await response.json()
      setcategory(json)
      console.log(category)
    }
    fetchData()
  }, [])


  // ...............Adding User Here.......................//


  const create = async ({  crs_name,crs_dscrp,crs_ctgry,duration}) => {
    console.log(crs_name);
    if(crs_name==''){
      console.log('enter all detailes')
    }else{
      try {
        console.log(crs_name);
        const user_crse = {
            crs_name: crs_name,
            crs_ctgry: crs_ctgry,
             duration: duration,
            crs_dscrp: crs_dscrp
        }

//  console.log(u);

        const response = await axios.post(`http://localhost:8000/course`, user_crse)
        if (response.status === 200) {
          toast.success('User Successfully Created !', {
            toastId: 'success',
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
          })
        }
        // hg()
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
                 

                  
                  
                  <Form.Label className="ms-1 mt-2">Course Name</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    //  value={formik.crs_name}
                    onChange={formik.handleChange}
                  >
                  {setup.map(crs_n =>(
                    <option
                      value={formik.values.crs_name=crs_n.name}
                    
                    >
                      {crs_n.name}
                    </option>
                  ))}
                    
                   
                  </Form.Select>
                  <Form.Label className="ms-1 mt-2">Course Category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    //  value={formik.crs_name}
                    onChange={formik.handleChange}
                  >
                  {category.map(crs_c =>(
                    <option
                      value={formik.values.crs_ctgry=crs_c.name}
                    
                    >
                      {crs_c.name}
                    </option>
                  ))}
                    
                    </Form.Select>
                  

                   <Form.Label className="ms-1 mt-1">Course Duration</Form.Label>
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

                  <Form.Label className="ms-1 mt-1">Course Description</Form.Label>
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
  )
}

export default AddModal
