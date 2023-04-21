import React from 'react'
// import '/home/fathau/AMS Git versions/hizana/Ams-react-version-0.1/src/Index.css';
import { BsPersonFill, BsLockFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { Container, Col, Row, InputGroup, Form, Button } from 'react-bootstrap'

function Loginn() {
  return (
    <>
      <Container fluid className="main-bg bg">
        <Container style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <Row className="box ">
            <Col md="4" className=" bg-left"></Col>

            <Col md="6" className="text-center text-login text-white">
              <div>
                <h1 className="fs-1 fw-bold mb-3 ">WELCOME</h1>
                <p>Sign In to your account</p>
              </div>

              <div className="text-center">
                <Form className="p-1">
                  <InputGroup className="mt-1 " style={{ width: '100%', height: '45px' }}>
                    <span className="input-group-text bg-light">
                      <BsPersonFill style={{ color: '#213b50' }} />
                    </span>
                    <Form.Control type="text" value="John" placeholder="Username" />
                  </InputGroup>

                  <InputGroup className="mt-3" style={{ width: '100%', height: '45px' }}>
                    <span className="input-group-text bg-light">
                      <BsLockFill style={{ color: '#213b50' }} />
                    </span>
                    <Form.Control type="password" value="**********" placeholder="Password" />
                  </InputGroup>

                  <div className="my-2">
                    <a href="" className="text-white">
                      Forgot password?
                    </a>
                  </div>

                  <Row className="justify-content-center">
                    <Link to="/dashboard">
                      <Button
                        className="fw-bold "
                        style={{
                          width: '50%',
                          backgroundColor: 'white',
                          color: '#213b50',
                          borderRadius: '20px',
                          border: '0px',
                        }}
                      >
                        LOGIN
                      </Button>
                    </Link>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Loginn
