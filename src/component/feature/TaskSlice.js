// import { createSlice } from '@reduxjs/toolkit';
// import {  persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// const initialState = {
//   tasks: [],
//   user:null,
//   users:[]
// };

// const persistConfig = {
//   key: 'root',
//   storage
// }
// export const TaskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
           
//     state.tasks.push(action.payload);
    
//     },
//     updateTask:(state,action) => {
//       const index = state.tasks.findIndex((task) => task.id === action.payload.id);
//       console.log(index,'index');
      
//       if(index !== -1){
//         state.tasks[index] = action.payload
//       }
//     },
//     removeTask:(state,action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload)
//     },
//     login: (state, action) => {
//       const user  = state.users.find((user) => user.email === action.payload.email && user.password === action.payload.password);
//       if(user){
//         state.user = user;
//       }
//       else{
//         throw new Error('Invalid credentials!');
//       }
//     },
//     signup:(state,action) => {
//       const existingUser = state.users.find((user) => user.email === action.payload.email);
//       if (!existingUser) {

//       state.users.push(action.payload)
// state.user = action.payload

//     }
//     else{
//       throw new Error('user already exists')
//     }
      
//     }
//   },
// });


// export const { addTask,updateTask,removeTask,login,signup } = TaskSlice.actions;
// export const persistedReducer = persistReducer(persistConfig, TaskSlice.reducer);



import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'; // Import toast from react-toastify

// Load cart data from localStorage
const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  products: loadCartFromLocalStorage(), // Load from localStorage initially
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
};

export const TaskSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload; // Get the product being added
      const existingProduct = state.products.find((product) => product.id === newProduct.id);

      if (existingProduct) {
       
        existingProduct.quantity += 1;

       
        toast.info(`${newProduct.title} is already in the cart. Quantity increased!`);
      } else {
     
        state.products.push({ ...newProduct, quantity: 1 });

       
        toast.success(`${newProduct.title} added to the cart!`);
      }

    
      saveCartToLocalStorage(state.products);
    },
    removeFromCart: (state, action) => {
      const removedProduct = state.products.find((product) => product.id === action.payload);
      if (removedProduct) {
      
        toast.error(`${removedProduct.title} removed from the cart!`);
      }

   
      state.products = state.products.filter((product) => product.id !== action.payload);

     
      saveCartToLocalStorage(state.products);
    },
    updateQuantity: (state, action) => {
      const { productId, increment } = action.payload;
      const product = state.products.find((product) => product.id === productId); // Correcting to state.products

      if (product) {
        if (increment) {
          product.quantity += 1;
          toast.info(`Quantity of ${product.title} increased!`);
        } else if (product.quantity > 1) {
          product.quantity -= 1;
          toast.info(`Quantity of ${product.title} decreased!`);
        }
      }

   
      saveCartToLocalStorage(state.products);
    },
  },
});

// Action creators
export const { addToCart, removeFromCart ,updateQuantity } = TaskSlice.actions;

export default TaskSlice.reducer;


