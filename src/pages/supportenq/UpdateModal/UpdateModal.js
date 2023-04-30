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

  const [user, setUser] = useState({})
  const showDetail = async (details) => {
    try {
      const response = await axios.get(`http://localhost:8000/supportEnq/${details}`)
      console.log('response' + response.data.email)
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

  const updateUser = async (user) => {
    const { _id,support_type,ticket_no,enq_from,enq_to,descp,email,mobile,remarks, status } = user
    try {
      const user_support_Enq = {
        support_type: support_type,
        ticket_no: ticket_no,
        enq_from: enq_from,
        enq_to: enq_to,
        descp:descp,
        email:email,
        mobile:mobile,
        remarks:remarks,
        status: status,
      }
      const response = await axios.patch(`http://localhost:8000/supportEnq/${_id}`, user_support_Enq)
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
                  <Form.Label className="ms-1">SUPPORT TYPE</Form.Label>
                  <Form.Control
                    type="text"
                    name="support_type"
                    value={user.support_type}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">TICKET NUMBER</Form.Label>
                  <Form.Control
                    type="text"
                    name="ticket_no"
                    value={user.ticket_no}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">ENQUIRY FROM</Form.Label>
                  <Form.Control
                    type="text"
                    name="enq_from"
                    value={user.enq_from}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">ENQUIRY TO</Form.Label>
                  <Form.Control
                    type="text"
                    name="enq_to"
                    value={user.enq_to}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">DESCRIPTION</Form.Label>
                  <Form.Control
                    type="text"
                    name="descp"
                    value={user.descp}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">EMAIL</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">PHONE</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">REMARKS</Form.Label>
                  <Form.Control
                    type="text"
                    name="remarks"
                    value={user.remarks}
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
