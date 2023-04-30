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
        const response = await axios.get(`http://localhost:8000/supportEnq/${details}`)
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
               
                <Form.Label className="ms-1 mt-2">Support type</Form.Label>
                <Form.Control disabled type="text" value={user && user.support_type !=='' ? user.support_type :''} />
                <Form.Label className="ms-1 mt-2">Ticket number</Form.Label>
                <Form.Control disabled type="text" value={user && user.ticket_no !=='' ? user.ticket_no :''} />
                <Form.Label className="ms-1 mt-2">Enquiry From</Form.Label>
                <Form.Control disabled type="text" value={user && user.enq_from !=='' ? user.enq_from :''} />
                <Form.Label className="ms-1 mt-2">Enquiry to</Form.Label>
                <Form.Control disabled type="text" value={user && user.enq_to !=='' ? user.enq_to :''} />
                <Form.Label className="ms-1 mt-2">Description</Form.Label>
                <Form.Control disabled type="text" value={user && user.descp !=='' ? user.descp :''} />
                <Form.Label className="ms-1 mt-2">Email</Form.Label>
                <Form.Control disabled type="text" value={user && user.email !=='' ? user.email :''} />
                <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                <Form.Control disabled type="text" value={user && user.mobile !=='' ? user.mobile :''} />

                <Form.Label className="ms-1 mt-2">Remarks</Form.Label>
                <Form.Control disabled type="text" value={user && user.remarks !=='' ? user.remarks :''} />

                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" value={user && user.status !=='' ? user.status :''} />

                <Form.Label className="ms-1 mt-2">Created at</Form.Label>
                <Form.Control disabled type="text" value={user && user.createdAt !=='' ? user.createdAt :''} />                
                <Form.Label className="ms-1 mt-2">Created by</Form.Label>
                <Form.Control disabled type="text" value={user && user.createdBy !=='' ? user.createdBy :''} />                
                <Form.Label className="ms-1 mt-2">Updated at</Form.Label>
                <Form.Control disabled type="text" value={user && user.updatedAt !=='' ? user.updatedAt :''} />                
                <Form.Label className="ms-1 mt-2">Updated by</Form.Label>
                <Form.Control disabled type="text" value={user && user.updatedBy !=='' ? user.updatedBy :''} />
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
