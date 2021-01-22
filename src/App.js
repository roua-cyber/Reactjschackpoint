
import './App.css';
import{ Form , Button , Container , Row , Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FacebookLoginButton} from 'react-social-login-buttons'
function App() {
  return (
      <div className="ccontainer">
        <Container>
        <Form className="App login-form ">
          <Form.Group controlID='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Eemple@email.com'/>
          
          </Form.Group>
            <Form.Group controlID='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'/>
          </Form.Group>
          <Button variant='secondary' type='submit' className='btn-lg btn-dark btn-block '>Login</Button>
        <div className='text-center pt-3'>
          Or continue with your social account
        </div >
        <FacebookLoginButton  className='mt-3 mb-3 '/>
        <div className='text-center '>
         <a href='/sign-up'> Sign up</a>
         <span className='p-2'>|</span>
         <a href='/sign-up'> Forgot Password</a>

        </div >
        </Form>
        </Container>
       </div >  
  );
}

export default App;
