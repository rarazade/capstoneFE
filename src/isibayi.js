import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Image, Card, Form, Button, CardText, CardTitle } 
    from 'react-bootstrap';


function App() {
  return (
    <Container style={{marginTop: '20em'}}>
        <Row className="mx-auto" style={{textAlign:'center'}}>
            <Col>
                <Image src="baby.png" rounded />
            </Col>
        </Row>
        <CardTitle className='m-3' style={{color:"#FF5276", textAlign: 'Center'}}>Sekarang giliran si kecil! 
        Isi data anak Anda dengan penuh cinta</CardTitle>    
        <Button className='mt-2' style={{background: "#FF5276", width: '100%'}}>Selanjutnya</Button>
        <Button className='mt-2' variant='dark' style={{background: "#FFFFFF", color:"#000000", width: '100%'}}>Kembali</Button>
      
        
    </Container>
  );
}

export default App;
