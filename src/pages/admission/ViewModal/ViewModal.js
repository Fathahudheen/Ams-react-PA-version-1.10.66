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
      const response = await axios.get(`http://localhost:8000/std_profile/${details}`)
      const data = response.data
      console.log('response' + response.data.f_name)
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
              <Form.Label className="ms-1 mt-2">Enq Id</Form.Label>
                <Form.Control disabled type="text" value={user && user.enq_id !=='' ? user.enq_id :''} /> 
                <Form.Label className="ms-1 mt-2">Followup Id</Form.Label>
                <Form.Control disabled type="text"  value={user && user.followup_id !=='' ? user.followup_id :''}/>
                <Form.Label className="ms-1 mt-2">Reg No</Form.Label>
                <Form.Control disabled type="text"  value={user && user.reg_no !=='' ? user.reg_no :''}/>
                <Form.Label className="ms-1 mt-2">First Name</Form.Label>
                <Form.Control disabled type="text" value={user && user.fname !=='' ? user.fname :''} />
                <Form.Label className="ms-1 mt-2">Last Name</Form.Label>
                <Form.Control disabled type="text" value={user && user.lname !=='' ? user.lname :''}/>
                <Form.Label className="ms-1 mt-2">Date of birth</Form.Label>
                <Form.Control disabled type="text"  value={user && user.dob !=='' ? user.dob :''} />
                <Form.Label className="ms-1 mt-2">Gender</Form.Label>
                <Form.Control disabled type="text"  value={user && user.gender !=='' ? user.gender :''}/>
                <Form.Label className="ms-1 mt-2">Email</Form.Label>
                <Form.Control disabled type="text" value={user && user.email !=='' ? user.email :''}/>
                <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                <Form.Control disabled type="text" value={user && user.mobile !=='' ? user.mobile :''}/>    
                <Form.Label className="ms-1 mt-2">Alternative Phone</Form.Label>
                <Form.Control disabled type="text" value={user && user.altphone !=='' ? user.altphone :''}/>            
                <Form.Label className="ms-1 mt-2">Qualification</Form.Label>
                <Form.Control disabled type="text" value={user && user.qualification !=='' ? user.qualification :''}/>
                <Form.Label className="ms-1 mt-2">Course Selected</Form.Label>
                <Form.Control disabled type="text"  value={user && user.course_opted !=='' ? user.course_opted :''}/>              
                <Form.Label className="ms-1 mt-2">Guardian Name</Form.Label>
                <Form.Control disabled type="text"  value={user && user.guardian !=='' ? user.guardian :''}/>
                <Form.Label className="ms-1 mt-2">Relationship</Form.Label>
                <Form.Control disabled type="text" value={user && user.relationship !=='' ? user.relationship :''}/>
                <Form.Label className="ms-1 mt-2">Address Line1</Form.Label>
                <Form.Control disabled type="text" value={user && user.addLine1 !=='' ? user.addLine1 :''}/>
                <Form.Label className="ms-1 mt-2">Address Line2</Form.Label>
                <Form.Control disabled type="text" value={user && user.addLine2 !=='' ? user.addLine2 :''}/>
                <Form.Label className="ms-1 mt-2">Pincode</Form.Label>
                <Form.Control disabled type="text"  value={user && user.pincode !=='' ? user.pincode :''}/>
                <Form.Label className="ms-1 mt-2">District</Form.Label>
                <Form.Control disabled type="text"  value={user && user.district !=='' ? user.district :''}/>
                <Form.Label className="ms-1 mt-2">State</Form.Label>
                <Form.Control disabled type="text"  value={user && user.state !=='' ? user.state :''}/>
                {/* <Form.Label className="ms-1 mt-2">Receipt No</Form.Label> */}
                {/* <Form.Control disabled type="text" value={user && user.recpNo !=='' ? user.recpNo :''}/>
                <Form.Label className="ms-1 mt-2">Amount</Form.Label>
                <Form.Control disabled type="text"  value={user && user.amount !=='' ? user.amount :''}/> */}
                <Form.Label className="ms-1 mt-2">Org Id</Form.Label>
                <Form.Control disabled type="text"  value={user && user.org_id !=='' ? user.org_id :''}/> 
                <Form.Label className="ms-1 mt-2">Created At</Form.Label>
                <Form.Control disabled type="text"  value={user && user.createdAt !=='' ? user.createdAt :''}/> 
                <Form.Label className="ms-1 mt-2">Created By</Form.Label>
                <Form.Control disabled type="text" value={user && user.createdBy !=='' ? user.createdBy :''}/> 
                <Form.Label className="ms-1 mt-2">Updated At</Form.Label>
                <Form.Control disabled type="text" value={user && user.updatedAt !=='' ? user.updatedAt :''}/>
                <Form.Label className="ms-1 mt-2">Updated By</Form.Label>
                <Form.Control disabled type="text"  value={user && user.updatedBy !=='' ? user.updatedBy :''}/>
                <Form.Label className="ms-1 mt-2">Status</Form.Label>
                <Form.Control disabled type="text" value={user && user.status !=='' ? user.status :''}/>
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
