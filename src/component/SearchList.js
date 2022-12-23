import React,{useState} from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { useSelector , useDispatch} from 'react-redux'

export default function SearchList() {
  const [keyword,setKeyword]=useState('')
  const dispatch = useDispatch();
  let {contact} = useSelector((state)=>state);
  const searchByNAme =(e)=>{
    e.preventDefault();
    dispatch({type:"SEARCH_BY_USENAME",payload:{keyword}})
  }
  return (
    
    <Container className='search'>
      <Form onSubmit={searchByNAme}>
      <Row>
        <Col lg={10}> <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e)=>setKeyword(e.target.value)}/></Col>
        <Col lg={2}><Button variant="primary" type="submit"> 검색
      </Button>
      </Col>

      </Row>
      </Form>
    </Container>

  )
}
