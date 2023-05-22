import { Row, Col, Typography, Button } from "antd";
import firebase, {auth} from '../../firebase/config'
import {useNavigate } from 'react-router-dom'

const {Title} = Typography

const fbProvider = new firebase.auth.FacebookAuthProvider()

function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider)
  };
  
 


  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style ={{ textAlign: "center" }} level={3}>Chat with me</Title>
          <Button style={{width: '100%'}} >Login with google</Button>
          <Button style={{width: '100%'}} onClick={handleFbLogin}>Login with facebook</Button>
        </Col>
      </Row> 
    </div>
  );
}

export default Login;
