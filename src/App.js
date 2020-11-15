import React,{useEffect, useState} from 'react'
import {Button,FormControl,InputLabel,Input} from '@material-ui/core'
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from "firebase";


function App() {

  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');


  //when the app loads,we need to listen to the database and fetch new todos as they get added/ removed.
  useEffect(()=>{

    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
    })
  },[]);

  const addTodo=(event)=>{
    // this will fore off when we click the button
   // console.log('i amworking')
    event.preventDefault();// this will stop Refresh
   // setTodos([...todos,input]);

   db.collection('todos').add({
     todo:input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })

   setInput('');

  }


  return (
    <div className="App">
     <h1>Hi Ankit</h1>

     <FormControl>
  <InputLabel >Write your Todo List</InputLabel>
 
  <Input  value={input} onChange={event => setInput(event.target.value)} />
 
 
</FormControl>
     <form>{/* we used form to get the enter behavoiur that is when you click enter on input it wil submit or directly clkick on todo button implicitly */}
    
     {/*<button type="submit" onClick={addTodo}>TODO</button>*/}
     <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">TODO</Button>
     </form>
     
    

     <ul>
       {todos.map(todo => (
         <Todo todo={todo}/>
       ))}
     </ul>
    </div>
  );
}

export default App;
