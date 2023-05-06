import React, { useState, useEffect } from 'react'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import axios from 'axios'

const UpdateModal = ({ updateclose, update, id , tableRenderTrue }) => {
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
      const response = await axios.get(`http://localhost:8000/std_profile/${details}`)
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
    const { _id,reg_no, fname, lname, dob,gender, qualification, course_opted, guardian,relationship,addLine1,addLine2,pincode,district,state,email,mobile,altphone,status} = user
    try {
      const user_1 = {
        reg_no: reg_no,
        fname: fname,
        lname: lname,
        dob: dob,
        gender:gender,
        qualification: qualification,
        course_opted: course_opted,
        guardian:guardian,
        relationship:relationship,
        addLine1:addLine1,
        addLine2:addLine2,
        pincode:pincode,
        district:district,
        state:state,
        email:email,
        mobile:mobile,
        altphone:altphone,
        status: status,
      }
      const response = await axios.patch(`http://localhost:8000/std_profile/${_id}`, user_1)
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
                <Form.Label className="ms-1">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={user.fname}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Last Name</Form.Label>
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
                  <Form.Label className="ms-1 mt-2">Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleChange}
                  />
                    <Form.Label className="ms-1 mt-2">Alternative Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={user.altphone}
                    onChange={handleChange}
                  />
                   <Form.Label className="ms-1 mt-2">Date of birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                  />
                    {/* <Form.Label className="ms-1 mt-2">Gender</Form.Label>
                   <div className="gender d-flex">
               <div className="custom-control m-1 ">
                 <input
                    id="male"
                    type="radio"
                    value="male"
                    name='gender'
                    onChange={handleChange}
                   
                  />
                  <label
                     className="custom-control-label"
                     htmlFor="male"
                   >
                     Male
                   </label>
              </div>
              <div className="custom-control m-1">
                 <input
                    id="female"
                    type="radio"
                    value="female"
                    name='gender'
                    onChange={handleChange}
                  
                  />
                 <label
                   className="custom-control-label"
                   htmlFor="female"
                  >
                    Female
                 </label>
                 </div>
                 </div> */}

            <Form.Label className="ms-1 mt-2">Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="gender"
                    onChange={handleChange}
                  >
                    <option style={{ backgroundColor: '#40536e' }} value="" className=" text-white">
                      {user.gender}
                    </option>
                    <option
                      className={user.gender === 'male' ? 'd-none' : 'd-block'}
                      value="Male"
                    >
                      Male
                    </option>
                    <option
                      className={user.gender === 'female' ? 'd-none' : 'd-block'}
                      value="Female"
                    >
                      Female
                    </option>
                    </Form.Select>
                   <Form.Label className="ms-1 mt-2">Qualification</Form.Label>
                  <Form.Control
                    type="text"
                    name="qualification"
                    value={user.qualification}
                    onChange={handleChange}
                  />
                    <Form.Label className="ms-1 mt-2">Course Selected</Form.Label>
                  <Form.Control
                    type="text"
                    name="course_opted"
                    value={user.course_opted}
                    onChange={handleChange}
                  />
                 
                     <Form.Label className="ms-1 mt-2">Guardian Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="guardian"
                    value={user.guardian}
                    onChange={handleChange}
                  />
                       <Form.Label className="ms-1 mt-2">Relationship</Form.Label>
                  <Form.Control
                    type="text"
                    name="relationship"
                    value={user.relationship}
                    onChange={handleChange}
                  />
                   <Form.Label className="ms-1 mt-2">Address Line1</Form.Label>
                  <Form.Control
                    type="text"
                    name="addLine1"
                    value={user.addLine1}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">Address Line2</Form.Label>
                  <Form.Control
                    type="text"
                    name="addLine2"
                    value={user.addLine2}
                    onChange={handleChange}
                  />
                   <Form.Label className="ms-1 mt-2">Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">District</Form.Label>
                  <Form.Control
                    type="text"
                    name="district"
                    value={user.district}
                    onChange={handleChange}
                  />
                  <Form.Label className="ms-1 mt-2">State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={user.state}
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
