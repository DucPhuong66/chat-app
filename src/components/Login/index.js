import { Row, Col, Typography, Button } from "antd";
import firebase, {auth, db} from '../../firebase/config'
import {useNavigate } from 'react-router-dom'
import { addDocument } from "../../firebase/services";

const {Title} = Typography

const ggProvider = new firebase.auth.GoogleAuthProvider()

function Login() {
  const handleGgLogin = async () => {
      const {additionalUserInfo, user} = await auth.signInWithPopup(ggProvider)
      if (additionalUserInfo?.isNewUser) { 
          addDocument('users', {
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
              uid: user.displayName,
              providerId: additionalUserInfo.providerId
          })
      }
      // console.log({ data })
  };
  
 


  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style ={{ textAlign: "center" }} level={3}>Chat with me</Title>
          <Button style={{width: '100%'}} onClick={handleGgLogin}>Login with google</Button>
          <Button style={{width: '100%'}}>Login with facebook</Button>
        </Col>
      </Row> 
    </div>
  );
}

export default Login;
