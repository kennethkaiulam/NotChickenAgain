import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const element = <FontAwesomeIcon icon= {faSearch} />

function CallSpoonacular(event){
  event.preventDefault();
  axios.get('https://api.spoonacular.com/recipes/random?number=1')
        .then(res => {
          console.log(res.data);
        })
        .catch(e => console.error(e));
}

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <form id="searchForm" onSubmit={CallSpoonacular}>
            <label style={{border:"2px"}}> {element} </label>
            <input type="text" name="ingredients" placeholder="Search"></input>
            <button type="submit"> Submit </button>
          </form>
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col> Search Results
          <Card> 1</Card>
          <Card> 2</Card>
          <Card> 3</Card>
          <Card> 4</Card>
           </Col>
          <Col> Drag and Drop sections 1  </Col>
          <Col> 2 </Col>
          <Col> 3 </Col>
          <Col> 4 </Col>
          <Col> 5 </Col>
          <Col> 6 </Col>
          <Col> 7 </Col>
         </Row>
         </Container>

         
    
      
    </div>
  );
}

export default App;
