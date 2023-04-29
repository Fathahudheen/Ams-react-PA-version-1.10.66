import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import axios from 'axios'

const UpdateModal = ({ updateclose, update, id, tableRenderTrue, load }) => {

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

  //  .................Fetching Employee One.................//

  const [details, setDetails] = useState(id)
  useEffect(() => {
    setDetails(id)
  }, [id])

  const [user, setUser] = useState({})
  const showDetail = async (details) => {
    console.log('hai' + details)
    try {
      const response = await axios.get(`http://localhost:8000/course/${details}`)
      console.log('response' + response.data.f_name)
      const data = response.data
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    showDetail(details)
  }, [details])

  //  .................Fetching Employee One Ends.................//


  function handleChange(event) {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const updateUser = async (user) => {
    const {  _id, crs_name, crs_ctgry, duration, crs_dscrp,status  } = user
    try {
      const user_1 = {
        crs_name: crs_name,
        crs_ctgry: crs_ctgry,
        duration: duration,
        crs_dscrp: crs_dscrp,
        status: status,
      }
      const response = await axios.patch(`http://localhost:8000/course/${_id}`, user_1)
      if (response.status === 200) {
        toast.success('User Successfully Updated !', {
          toastId: 'success',
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      renderControll()
    } catch (error) {
      alert(error)
    }
  }
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
                  <Form.Label className="ms-1">Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="crs_name"
                    value={user.crs_name}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Course Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="crs_ctgry"
                    value={user.crs_ctgry}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile_no"
                    value={user.mobile_no}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Duration</Form.Label>
                  <Form.Control
                    type="text"
                    name="duration"
                    value={user.duration}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="status"
                    onChange={handleChange}
                  >
                    <option style={{ backgroundColor: '#40536e' }} value="" className=" text-white">
                      {user.status}
                    </option>
                    <option
                      className={user.status === 'Active' ? 'd-none' : 'd-block'}
                      value="Active"
                    >
                      Active
                    </option>
                    <option
                      className={user.status === 'Inactive' ? 'd-none' : 'd-block'}
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
              updateUser(user)

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
