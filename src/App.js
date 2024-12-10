import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';


function App() {
  return (
    <Container style={{background: "#FF9CB1"}}>
        <Row className="mx-auto">
        <Col>
            <Card style={{marginTop:"3em"}}>
      <Card.Body>
              <Image src="verif.png" rounded />
              <CardTitle>BangkitBeyond</CardTitle>
              <CardText>2 Tahun 10 Bulan</CardText>
              <Button style={{background: "#FF5276",}}>Tanya Bloomie</Button>
    </Card.Body>
    </Card>
            </Col>  
        </Row>    
        <Row className="mx-auto">
            <Col>
      <Card style={{marginTop:"3em"}}>
      <Card.Body>
            <Col style={{marginLeft:"8.5em"}}>
              <Image src="verif.png" rounded />
            </Col> 
        <CardText>Luar biasa! Status Gizi si Kecil Sangat Baik. Pertahankan ya!</CardText>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nama" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Umur (Bulan)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Tinggi Badan (Cm)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Berat Badan (Kg)" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Jenis Kelamin Bayi" />
      </Form.Group>
    </Form>
    <Button className='mt-2' style={{background: "#FF5276", width: '100%'}}>Update Status</Button>
    </Card.Body>
    </Card>
            </Col>  
        </Row>    
    </Container>
  );
}

export default App;
