import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'


export default function ShowList({item}) {
  return (
    <Container className='List'>
      <Row className='Listteduri'>
        <Col lg={2}>
        <img width={80} src="https://cdn.nbntv.co.kr/news/photo/202202/953983_64367_5131.jpg" alt="아이오" />
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phon}</div>
        </Col>
      </Row>
    </Container>
  )
}
