import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import AddItem from './component/AddItem';
import ItemList from './component/ItemList';

function App() {
  return (

     <Container>
     <h1 className='title'>나만의 연락처 📙</h1>
    <Row>
      <Col>
      <AddItem/>
      </Col>
      <Col>
      <ItemList/>
      </Col>
    </Row>
     </Container>

  );
}

export default App;
