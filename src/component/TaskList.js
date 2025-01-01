// import React from 'react'
// import {
//     Button,
//     FormControl,
//     FormHelperText,
//     InputLabel,
//     MenuItem,
//     OutlinedInput,
//     Paper,
//     Select,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     TextField,
//     Typography,
//   } from "@mui/material";
 
//   import Grid from "@mui/material/Grid";
//   import { useDispatch, useSelector } from "react-redux";
//   import { addTask, removeTask, updateTask } from "../component/feature/TaskSlice";
// import { useNavigate } from 'react-router-dom';
// function TaskList() {
//     const tasklist = useSelector((state) => state.user);
//     const handleEdit = (task) => {
//         // Navigate to the CreateTask component with the task details
//         navigate("/", { state: { task } });
//       };
// const navigate = useNavigate();
//   const dispatch = useDispatch();
//     const handleRemove =(id) => {
//         dispatch(removeTask(id));
//       }
    
//   return (
//     <div>
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Title</TableCell>
//             <TableCell align="right">description</TableCell>

//             <TableCell align="right">priority</TableCell>
//             <TableCell align="right">status</TableCell>
//             <TableCell align="right">acrion </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {tasklist.map((task) => (
//             <TableRow
//               // key={row.name}
//               // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {task.title}
//               </TableCell>
//               <TableCell align="right">{task.description}</TableCell>
//               <TableCell align="right">{task.priority}</TableCell>
//               <TableCell align="right">{task.status}</TableCell>
//               <TableCell align="right"><button onClick={() => handleEdit(task)}>edit</button></TableCell>
//               <TableCell align="right"><button onClick={() => handleRemove(task.id)}>remove</button></TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )
// }

// export default TaskList
import React from 'react'

function TaskList() {
  return (
    <div>TaskList</div>
  )
}

export default TaskList