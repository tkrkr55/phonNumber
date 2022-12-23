import React,{useState} from 'react'
import { Form,Button} from 'react-bootstrap'
import {useDispatch} from "react-redux"

export default function AddItem() {
  const[name,setName]=useState('')
  const[phon,setphon]=useState()
  const dispatch = useDispatch();
  const addContact=(e)=>{
    e.preventDefault();
    dispatch({type:"ADD_CONTACT" , payload:{name,phon}})

  }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력하세요" onChange={(e)=>setName(e.target.value)}/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phonNumber</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력하세요" onChange={(e)=>setphon(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  )
}
