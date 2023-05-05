import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import axios from 'axios'

const UpdateModal = ({ updateclose, update, id, tableRenderTrue }) => {
  // ..................Modal Controlls......................//

  const [show, setShow] = useState(update)
  useEffect(() => {
    setShow(update)
  }, [update])
  const handleModalClose = () => {
    updateclose()
    setShow(false)
  }

  // ..................Modal Controlls Ends......................//

  //  .................Fetching One data.................//

  const [details, setDetails] = useState(id)
  useEffect(() => {
    setDetails(id)
  }, [id])

  const [course_setup, setUser] = useState({})
  const showDetail = async (details) => {
    console.log('hai' + details)
    try {
      const response = await axios.get(`http://localhost:8000/course_setup/${details}`)
      console.log('response' + response.data.name)
      const data = response.data
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    showDetail(details)
  }, [details])

  //  .................Fetching One data Ends.................//

  // ....................Updating one data.....................//

  function handleChange(event) {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const updateUser = async (course_setup) => {
    const { _id, name, desc,status } = course_setup
    try {
      const course_setup = {
        name: name,
        desc:"desc",
        status: status,
      }
      const response = await axios.patch(`http://localhost:8000/course_setup/${_id}`, course_setup)
      if (response.status === 200) {
        toast.success('User Successfully Updated !', {
          toastId: 'success',
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      tableRenderTrue()
    } catch (error) {
      alert(error)
    }
  }

  // ....................Updating one data ends.....................//

  return (
    <>
      <Modal show={show} backdrop="static" centered onHide={handleModalClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={12}>
                <Form action="">
                  <Form.Label className="ms-1">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={course_setup.name}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="desc"
                    value={course_setup.desc}
                    onChange={handleChange}
                  />
                 
                  <Form.Label className="ms-1 mt-2">Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    onChange={handleChange}
                  >
                    <option style={{ backgroundColor: '#40536e' }} value="" className=" text-white">
                      {course_setup.status}
                    </option>
                    <option
                      className={course_setup.status === 'Active' ? 'd-none' : 'd-block'}
                      value="Active"
                    >
                      Active
                    </option>
                    <option
                      className={course_setup.status === 'Inactive' ? 'd-none' : 'd-block'}
                      value="Inactive"
                    >
                      Inactive
                    </option>
                  </Form.Select>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="text-white" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            className="text-white"
            variant="success"
            onClick={() => {
              handleModalClose()
              updateUser(course_setup)
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateModal
