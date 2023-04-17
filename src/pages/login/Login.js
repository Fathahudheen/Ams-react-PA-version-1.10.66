
// import './App.css';
import {BsPersonFill,BsLockFill } from "react-icons/bs";
// import MainRouter from './Components/reactRouter/MainRouter';
import {Card,Container,Col,Row, CardGroup, InputGroup,Form, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Loginn() {
  return (
    < >
    
      
      <div className="  min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className='justify-content-center text-center'>
          <Col md="8">
           <CardGroup>
           <Card className="p-4 mb-0 justify-content-center text-center text-white" style={{backgroundColor:"#5e6570"}}>
             
             <h1>Sign up  </h1>
             <p >Lorem ipsum dolor sit amet,
               consectetur adipisicing elit, sed do eiusmod 
               tempor incididunt ut labore et dolore magna aliqua.</p>
              <Row>
                <Col >
              <img src='../assets/img-top.png'className='w-100'></img>
                </Col>
              </Row>
          
       
             
            
         </Card>
         <Card className="p-4 mb-0">
             <Form>
             <h1>Login</h1>
             <p >Sign In to your account</p>
           <Row>
            <Col>
            <InputGroup>
           <span className='input-group-text'>
            <BsPersonFill/>
           </span>
           <Form.Control type="text" placeholder="Username" />
          
           </InputGroup></Col>
           </Row>
           <Row className='mt-2'>
            <Col>
            <InputGroup>
           <span className='input-group-text'>
            <BsLockFill/>
           </span>
           <Form.Control type="password" placeholder="Password" />
          
           </InputGroup>
           
            </Col>
           </Row>
           <Row className='mt-2 me-auto'style={{display:"flex",justifyContent:"space-around"}}>
            <Col >
            <Link to="/dashboard">
            <Button style={{width:"100%",backgroundColor:"#193d87"}}>
              Login
            </Button>
            </Link>
            </Col>
            <Col>
            <Button className="btn btn-link px-0" type="button">Forgot password?</Button>
            </Col>
           </Row>
             </Form>
             
            
         </Card>
           </CardGroup>
             
           
          </Col>
        </Row>
      </Container>
    </div>
    
    </>
  );
}

export default Loginn;
