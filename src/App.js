import React, {useState, useEffect} from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Add from './component/Add'

const App = ()=>{
  const [item,setItem] = useState([
    {id: Math.random()*1000+1, title:'Eggs'},
    {id: Math.random()*1000+1, title:'Bread'},
    {id: Math.random()*1000+1, title:'Milk'},
    {id: Math.random()*1000+1, title:'Coffee'},
  ]);

  const [show,setShow] = useState(true);

  const showForm = ()=>{
    setShow(!show)
  }

  // delete item 
  const deleteItem = (id)=>{
    // console.log('deleting...'+id)
    setItem(preItem=>{
      return item.filter(item => item.id !== id)
    })
  }

  // adding item 
  const addItem = (item)=>{
    console.log(item)
   const id = Math.random()*1000+1
   setItem(preItem=>{
     return [{id,title:item},...preItem]
   })
  }

  


  return(
    <div>
     <Header onShow={showForm}/>

    <div className="container">
    {show ? <Add addItem={addItem}/> : ''}
    <Home data={item} onDelete={deleteItem}/>
    </div>

    
     
    </div>
  )
}

export default App;