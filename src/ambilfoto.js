import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';


function App() {
  return (
    <Container style={{marginTop: '10em'}}>
        <Row className="mx-auto" style={{textAlign:'center'}}>
            <Col>
                <Image src="Frame1.png"/>
            </Col>
        </Row>    
        <Button className='mt-2' style={{background: "#FF5276", width: '100%'}}>Ambil Foto</Button>
        <Button className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Pilih dari Galeri</Button>
      
        
    </Container>
  );
}

export default App;
