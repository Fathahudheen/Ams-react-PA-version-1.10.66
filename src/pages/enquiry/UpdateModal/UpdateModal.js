import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import axios from 'axios'

const UpdateModal = ({ updateclose, update, id }) => {
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
      const response = await axios.get(`http://localhost:8000/enquiry/${details}`)
      console.log('response' + response.data.fname)
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

  // const [values, setValues] = useState({
  //   id:row._id,
  //   f_name:row.f_name,
  //   l_name:row.l_name,
  //   mobile_no:row.mobile_no,
  //   password:row.password,
  //   status:row.status
  // });

  function handleChange(event) {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const updateUser = async (user) => {
    const { _id, fname, lname, email, mobile,status,remarks ,enq_mode,enq_for,loc,org_id, createdAt, createdBy,updatedAt,updatedBy} = user
    try {
      const user_1 = {
        fname: fname,
        lname: lname,
        email:email,
        mobile:mobile,
        enq_mode:enq_mode,
        enq_for:enq_for,
        loc:loc,
        org_id:org_id,
        createdAt:createdAt,
        createdBy:createdBy,
        updatedAt:updatedAt,
        updatedBy:updatedBy,
        remarks:remarks,
        status:status,
      }
      const response = await axios.patch(`http://localhost:8000/enquiry/${_id}`, user_1)
      if (response.status === 200) {
        toast.success('User Successfully Updated !', {
          toastId: 'success',
          position: toast.POSITION.TOP_RIGHT,
        })
      }
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
                  <Form.Label className="ms-1">First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={user.fname}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    value={user.lname}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                  />
                   <Form.Label className="ms-1 mt-2">Enq Mode</Form.Label>
                  <Form.Control
                    type="text"
                    name="enq_mode"
                    value={user.enq_mode}
                    onChange={handleChange}
                  />
                   <Form.Label className="ms-1 mt-2"> Enq For</Form.Label>
                  <Form.Control
                    type="text"
                    name="enq_for"
                    value={user.enq_for}
                    onChange={handleChange}
                  />
                    <Form.Label className="ms-1 mt-2">Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="loc"
                    value={user.loc}
                    onChange={handleChange}
                  />
                      <Form.Label className="ms-1 mt-2">Remarks</Form.Label>
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
                      className={user.status === 'New' ? 'd-none' : 'd-block'}
                      value="New"
                    >
                      New
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
