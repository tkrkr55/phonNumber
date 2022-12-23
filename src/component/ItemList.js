import React,{useState} from 'react'
import SearchList from './SearchList'
import ShowList from './ShowList'
import {useSelector} from "react-redux"
export default function ItemList() {
  const contactList =useSelector(state=>state.contactList)
  const  {contact,keyword}=useSelector((state)=>state);
  let [filterList,setFilteredList] = useState([])
  return (
 <div className='boxborder'>
 <SearchList/>

 {contactList.map((item)=>(<ShowList item={item}/>))}
 </div>
  )
}
