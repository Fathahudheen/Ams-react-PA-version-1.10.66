import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
const ViewModal = ({ viewclose, view, id }) => {
  // ..................Modal Controlls......................//

  const [show, setShow] = useState(view)
  useEffect(() => {
    setShow(view)
  }, [view])
  const handleModalClose = () => {
    viewclose()
    setShow(false)
  }

  // ..................Modal Controlls Ends......................//

  //.................fetch one data....................//

  const [details, setDetails] = useState(id)
  useEffect(() => {
    setDetails(id)
  }, [id])

  const [user, setUser] = useState({})
  const showDetail = async (details) => {
    console.log('hai' + details)
    try {
      const response = await axios.get(`http://localhost:8000/source/${details}`)
      const data = response.data
      console.log('response' + response.data.name)
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    showDetail(details)
  }, [details])

  //.................fetch one data ends....................//
  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        centered
        onHide={handleModalClose}
        animation={false}
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: '#40536e', color: 'white' }}>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '310px' }} className="overflow-auto">
          <Container>
            <Row>
              <Col lg={12}>
              <Form.Label className="ms-1 mt-2">Id</Form.Label>
                <Form.Control disabled type="text" value={user._id} />
                <Form.Label className="ms-1 mt-2">Name</Form.Label>
                <Form.Control disabled type="text" value={user.name} />
                <Form.Label className="ms-1 mt-2">Description</Form.Label>
                <Form.Control disabled type="text" value={user.description} />

                <Form.Label className="ms-1 mt-2">CreatedAt</Form.Label>
                <Form.Control disabled type="text" value={user.createdAt} />
                <Form.Label className="ms-1 mt-2">UpdatedAt</Form.Label>
                <Form.Control disabled type="text" value={user.updatedAt} />

                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" value={user.status} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-white' variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewModal
