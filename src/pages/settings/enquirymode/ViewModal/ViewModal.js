import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
const ViewModal = ({tableRenderFalse, load, viewclose, view, id }) => {

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

      try {
        const response = await axios.get(`http://localhost:8000/enmode/${details}`)
        const data = response.data
        setUser(data)
      } catch (error) {
        console.error(error)
      }

  }
  useEffect(() => {
    showDetail(details)
  }, [details,load])

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
               
                <Form.Label className="ms-1 mt-2">Name</Form.Label>
                <Form.Control disabled type="text" value={user && user.name !=='' ? user.name :''} />
                <Form.Label className="ms-1 mt-2">Description</Form.Label>
                <Form.Control disabled type="text" value={user && user.description !=='' ? user.description :''} />
            
                <Form.Label className="ms-1 mt-2">Updated On</Form.Label>
                <Form.Control disabled type="text" value={user && user.updatedAt !=='' ? user.updatedAt :''} />
                <Form.Label className="ms-1 mt-2">Created On</Form.Label>
                <Form.Control disabled type="text" value={user && user.createdAt !=='' ? user.createdAt :''} />

                <Form.Label className="ms-1 mt-2">Updated By</Form.Label>
                <Form.Control disabled type="text" value={user && user.updatedBy !=='' ? user.updatedBy :''} />
                <Form.Label className="ms-1 mt-2">Created By</Form.Label>
                <Form.Control disabled type="text" value={user && user.createdBy !=='' ? user.createdBy :''} />
                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" value={user && user.status !=='' ? user.status :''} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className='text-white' variant="danger" onClick={()=>{
            handleModalClose()
            tableRenderFalse()
          }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewModal
