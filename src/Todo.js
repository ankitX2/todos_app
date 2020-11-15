import React, { useState } from 'react';
import {Button, List,ListItem,ListItemText,Modal} from '@material-ui/core'
import './Todo.css'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {

    
   
      const classes=useStyles();

    const [open,setOpen]=useState(false);
const [input,setInput]=useState('');
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const updateTodo = ()=> {

        db.collection('todos').doc(props.todo.id).set({
            todo:input
        },{merge:true});
          setOpen(false);
      }


    return (
<>
        <Modal
  open={open}
  onClose={handleClose}
 
>
<div  className={classes.paper}>
    <h1>i am a modal</h1>
    <input value={input} placeholder={props.todo.todo} onChange={event=>setInput(event.target.value)}/>
    <button onClick={e=> updateTodo()}> Update Todo</button>
</div>


</Modal>
        <div className="todo_list">
        <List >
        <ListItem>
         
           
            
           
       
          <ListItemText primary={props.todo.todo}secondary="" />
        </ListItem>
        <button onClick={e=> setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
      
     </div>
</>
    )
}

export default Todo
