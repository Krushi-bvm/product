import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button, CircularProgress } from '@mui/material';

function ViewProduct() {
  const location = useLocation();
  const { id } = location.state || {}; // Retrieve id from location.state
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details based on product id
  useEffect(() => {
    const fetchProductDetails = async () => {
      if (id) {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product details');
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography variant="h6" color="error" align="center">
        Product not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <img src={product.image} alt={product.title} width="200" />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Price:</strong> ${product.price}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Add to Cart
      </Button>
    </Box>
  );
}

export default ViewProduct;
