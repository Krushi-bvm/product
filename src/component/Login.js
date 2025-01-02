// import React, { useState } from 'react';
// import { Box, Button, Typography, InputBase, styled, Paper, Container } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './feature/TaskSlice';
// import { useNavigate } from 'react-router-dom';

// const StyledInput = styled(InputBase)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   padding: '10px 14px',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   width: '100%',
//   fontSize: '16px',
//   '&:focus-within': {
//     borderColor: theme.palette.primary.main,
//     boxShadow: `0 0 4px ${theme.palette.primary.light}`,
//   },
// }));

// const ErrorText = styled(Typography)(({ theme }) => ({
//   color: theme.palette.error.main,
//   fontSize: '14px',
//   marginTop: '-10px',
//   marginBottom: '10px',
// }));

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const {user} = useSelector((state) => state.user);
//   const navigate = useNavigate()
// //   console.log('Redux State:', state);

//   const validate = () => {
//     let valid = true;
//     const newErrors = { email: '', password: '' };

//     if (!email) {
//       newErrors.email = 'Email is required.';
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email address is invalid.';
//       valid = false;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required.';
//       valid = false;
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters.';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const dispatch = useDispatch();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {

//       dispatch(login({ email, password }));
//       navigate('/');
//     }
    
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh', // Ensures full viewport height
//         overflowY:'hidden',
//         backgroundColor: '#f5f5f5', // Optional: Light background
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={3}
//           sx={{
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           <Typography variant="h4" align="center" gutterBottom>
//             Login
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Box>
//               <StyledInput
//                 placeholder="Email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && <ErrorText>{errors.email}</ErrorText>}
//             </Box>
//             <Box>
//               <StyledInput
//                 placeholder="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {errors.password && <ErrorText>{errors.password}</ErrorText>}
//             </Box>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               size="large"
//               sx={{
//                 mt: 2,
//                 py: 1.5,
//                 fontSize: '16px',
//                 borderRadius: '8px',
//               }}
//             >
//               Login
//             </Button>
//           </form>
//         </Paper>
//       </Container>
//     </Box>
//   );
// }

// export default Login;
