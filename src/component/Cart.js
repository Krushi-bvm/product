import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import { removeFromCart, updateQuantity } from './feature/TaskSlice'; // Assuming updateQuantity action exists
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {
  const cartItems = useSelector((state) => state.products); // Get cart items from Redux store
  console.log(cartItems);
  
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatch action to remove item from cart
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(updateQuantity({ productId, increment: true })); // Dispatch action to increment quantity
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(updateQuantity({ productId, increment: false })); // Dispatch action to decrement quantity
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>

      {cartItems?.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="primary"
                        onClick={() => handleDecrementQuantity(item.id)}
                        disabled={item.quantity === 1} // Disable decrement if quantity is 1
                      >
                        <RemoveIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton
                        color="primary"
                        onClick={() => handleIncrementQuantity(item.id)}
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ marginTop: 2, textAlign: 'right' }}>
            <Typography variant="h6">
              <strong>Total:</strong> ${calculateTotal().toFixed(2)}
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Cart;
