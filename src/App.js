import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import React, {useState, useEffect, fetchData } from "react";  
import { SearchForm } from './Components/SearchForm';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState();


function GetRecipes(formData){
  const url = `https://api.spoonacular.com/recipes/complexSearch?number=5&addRecipeInformation=true&addRecipeInstructions=true&query=${formData.query}&cuisine=${formData.cuisine}`;
  const apiKey = '6ff507c1222e497888ce49f33f474601';
  axios.get(url, {
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    // Handle successful response
    console.log('Response:', response);
    setRecipes(response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });
};
const handleFormChange = (newFormData) => {
  GetRecipes(newFormData)
};  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <SearchForm onSubmit={handleFormChange}/>
        
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
