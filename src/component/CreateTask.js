// import {
//   Button,
//   FormControl,
//   FormHelperText,
//   InputLabel,
//   MenuItem,
//   OutlinedInput,
//   Paper,
//   Select,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import { useDispatch, useSelector } from "react-redux";
// import { addTask, removeTask, updateTask } from "../component/feature/TaskSlice";
// import { useLocation, useNavigate } from "react-router-dom";

// function CreateTask() {
//   const [task, setTask] = React.useState({
//     id: null,
//     title: "",
//     description: "",
//     priority: "",
//     status: "",
//     gender: "",
//   });
//   const [error, setError] = React.useState({});
//   const [isEdit, setIsEdit] = React.useState(false);
//   const location = useLocation();
 
// const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const index = [
//     { id: 1, role: 'user' },
//     { id: 2, role: 'admin' },
//     { id: 3, role: 'super' },
//     { id: 5, role: 'user' },
//     { id: 6, role: 'admin' },

//     { id: 4, role: 'guest' },
//   ];

//   // const obj = index.map(item => ({ [item.role]: item.id }))

// // {
// //   'use':[1,5]
// // }
  
// const roleWiseIds = {};
// for(const {id,role} of index){
//   // console.log( roleWiseIds[role].push(id),'dfdsf');
//   if(!roleWiseIds[role]) roleWiseIds[role] = []
//   roleWiseIds[role].push(id)

// }
//   console.log( roleWiseIds);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setTask({ ...task, [name]: value });
//     setError({ ...error, [name]: "" });
//   };

//   useEffect(() => {
//     if (location.state?.task) {
//       setTask(location.state.task);
//       setIsEdit(true);
//     setError({});

//     }
//   }, [location.state]);
//   const handleEdit = (task) => {
//     setIsEdit(true);
//     setTask(task);
//   };
//   const handleCreateTask = () => {
//     const newError = {};
//     if (!task.title) newError.title = "Title is required";
//     if (!task.description) newError.description = "Description is required";
//     if (!task.priority) newError.priority = "Priority is required";
//     if (!task.status) newError.status = "Status is required";

//     if (Object.keys(newError).length > 0) {
//       setError(newError);
//       return;
//     }
//     if (isEdit) {
//       dispatch(updateTask({ ...task }));
//     } else {
//       dispatch(addTask({ ...task, id: Date.now() }));

//     }
//     navigate('/tasklist');
    
//     setTask({ id: null, title: "", description: "", priority: "", status: "" });
//     setError({});
//     setIsEdit(false);
//   };

//   // What is output of bellow code 
//   var y = 42;
//   (function funY1(){
//       console.log('log of function funY1');
//       console.log('Y',y);
//       y++;
//       console.log('Y',y);
//       var y = 22;
//       console.log('Y',y);
//       (function funY2(){
//           y = 25;
//       })()
//   })();



//   // What is output of bellow code 
// var w = 42;
// (function funW1(){
//     console.log('log of function funW1');
//     console.log('W',w);
//     w++;
//     console.log('W',w);
//     w = 22;
//     console.log('W',w);
//     var y;
//     console.log('W',w);
//     (function funW2(){
//         w = 25;
//     })()
// })();

// // What is output of bellow code 
// var z = 42;
// (function funZ1(){
//     console.log('log of function funZ1');
//     z = 22;
//     console.log('Z',z);
//     z++;
//     console.log('Z',z);
//     var z;
//     console.log('Z',z);
//     (function funZ2(){
//         z = 25;
//     })()
// })();
// // What is output of bellow code 
// let q = 42;
// (function funQ1(){
//     console.log('log of function funQ1');
//     q = 22;
//     console.log('Q 1',q);
//     q++;
//     console.log('Q 2',q);
//     var q = 22;
//     console.log('Q 3',q);
//     ((function funQ2(){
//         q++
//         q++
//         console.log("Q fun2 1",--q);
//         console.log("Q fun2 2",q);
//         q = 25;
//         console.log("Q fun2 3",q++);
//         console.log("Q fun2 4",q);
//     })())
// })();

// var  y = 20 ;var x = 10

// z = y++ + --x 
// console.log(x,y,z)
// const array = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 5,
//     occupation: "Engineer"
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 30,
//     occupation: "Designer"
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     age: 4,
//     occupation: "Teacher"
//   },
//   {
//     id: 4,
//     name: "Charlie",
//     age: 3,
//     occupation: "Teacher"
//   }
// ]; 

// const findIndex = array.findIndex(item => item.id === 2)
// const findvalue = array.find(item => item.id === 2)

// let isOccupation ={}

// for(let {id, occupation,age} of array){
//   if(!isOccupation[occupation]) isOccupation[occupation] = [ ]
//   isOccupation[occupation].push(id)


// }
// console.log(isOccupation,'data')
// let age = []

// for(let {id, occupation,age} of array){
//   // age.push(id)


// }
// console.log(findIndex,'findIndex');
// console.log(findvalue,'findvalue');


// const useFetch = (url) =>{
//   const [data, setData] = useState([])
//   useEffect(()=>{
//     fetch(url).then((res) => res.json()).then((data) => setData(data))
//   },[url])
//   return data
// }

// const string = 'sare jaha se  achaa'
// const str = string.split('').reverse().join('')
// console.log(str,'reverce');

// let number = 20
// // if(number % 1 === 0){
// //   return console.log('number is a integer')
  
// // }
// // else{
// //   return console.log('number is not a integer')
// // }
// let strs=''
// for (let i = 1; i <= 5; i++) {
//   let row = ""; // Initialize an empty row string

//   // Add spaces
//   for (let k = 1; k < 5-i; k++) {
//     row += " ";
//   }

//   // Add stars
//   for (let j = 5; j >= i; j++) {
//     row += "*";
//   }

//   console.log(row); // Log the row to the console
// }

//   return (
//     <div>yurftu</div>
//     // <div>
//     //   <Typography variant="h4">
//     //     {isEdit ? "Edit Task" : "Create Task"}
//     //   </Typography>
//     //   <Grid container spacing={2}>
//     //     <Grid item xs={8}>
//     //       <TextField
//     //         label="Title"
//     //         name="title"
//     //         variant="outlined"
//     //         value={task.title}
//     //         onChange={handleChange}
//     //         fullWidth
//     //         margin="normal"
//     //         multiline
//     //         rows={1}
//     //         col={2}
//     //         error={!!error.title}
//     //         helperText={error.title}
//     //       />
//     //     </Grid>
//     //     <Grid item xs={4}>
//     //       <TextField
//     //         label="description"
//     //         name="description"
//     //         variant="outlined"
//     //         value={task.description}
//     //         onChange={handleChange}
//     //         fullWidth
//     //         margin="normal"
//     //         multiline
//     //         rows={1}
//     //         col={2}
//     //         error={!!error.description}
//     //         helperText={error.description}
//     //       />
//     //     </Grid>
//     //     <Grid item xs={4}>
//     //       <FormControl sx={{ m: 1, width: 300 }} error={!!error.status}>
//     //         <InputLabel id="demo-multiple-name-label">status</InputLabel>
//     //         <Select
//     //           labelId="demo-multiple-name-label"
//     //           id="demo-multiple-name"
//     //           name="status"
//     //           value={task.status}
//     //           onChange={handleChange}
//     //           input={<OutlinedInput label="Name" />}
//     //           helperText={error.status}
//     //         >
//     //           <MenuItem value="pending">pending</MenuItem>
//     //           <MenuItem value="pending">hold</MenuItem>
//     //           <MenuItem value="complete">complete</MenuItem>
//     //         </Select>
//     //         <FormHelperText>{error.status}</FormHelperText>
//     //       </FormControl>
//     //     </Grid>
//     //     <Grid item xs={8}>
//     //       <FormControl sx={{ m: 1, width: 300 }} error={!!error.priority}>
//     //         <InputLabel id="demo-multiple-name-label">Priority</InputLabel>
//     //         <Select
//     //           labelId="demo-multiple-name-label"
//     //           id="demo-multiple-name"
//     //           name="priority"
//     //           value={task.priority}
//     //           onChange={handleChange}
//     //           input={<OutlinedInput label="Priority" />}
//     //           helperText={error.priority}
//     //         >
//     //           <MenuItem value="high">high</MenuItem>
//     //           <MenuItem value="low">low</MenuItem>
//     //           <MenuItem value="medium">medium</MenuItem>
//     //         </Select>
//     //         <FormHelperText>{error.priority}</FormHelperText>
//     //       </FormControl>
//     //       <Button variant="contained" onClick={handleCreateTask}>
//     //       {isEdit ? "Edit Task" : "Create Task"}

//     //       </Button>
//     //     </Grid>
//     //   </Grid>

//     //   {/* {tasklist.map((task) => (
//     //     <div key={task.id}> */}
         
//     //       {/* <Typography>title:{task.title}</Typography>
//     //       <Typography>description:{task.description}</Typography>
//     //       <Typography>priority:{task.priority}</Typography>
//     //       <Typography>status:{task.status}</Typography>
//     //       <button onClick={() => handleEdit(task)}>edit</button> */}
//     //     </div>
//     //   ))}
//     // </div>
//   );
// }

// export default CreateTask;

import React from 'react'

function CreateTask() {
  return (
    <div>CreateTask</div>
  )
}

export default CreateTask
