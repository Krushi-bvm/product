import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, TextField, MenuItem, Slider, Button, TablePagination, IconButton, Badge, AppBar, Toolbar, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './feature/TaskSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ToastContainer } from 'react-toastify';

// Styled Components for better UI
const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%', // Ensure all cards have the same height
  width: '100%', // Ensure all cards have the same width
  maxWidth: 350, // Set a max-width for the card
  '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,  // Fixed height for the image
  objectFit: 'cover',
  borderRadius: '10px',
});

const NavBar = () => {
    const navigate = useNavigate();
    const cartProduct = useSelector((state) => state.products);
    const cartCount = cartProduct.length; // Get the count of items in the cart
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/')}>
                    E-Commerce App
                </Typography>
                <IconButton color="inherit" onClick={() => navigate('/cart')}>
                    <Badge badgeContent={cartCount} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

function ProductList() {
    const [productList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [rating, setRating] = useState(0);
    const [sortOption, setSortOption] = useState('priceLowToHigh'); // New state for sorting
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Access cart items from the Redux store
  

    const getProductList = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProductList(data);
            setFilteredProducts(data);

            const uniqueCategories = [...new Set(data.map((product) => product.category))];
            setCategories(uniqueCategories);
        } catch (error) {
            console.error('Error fetching product list:', error);
        }
    };

    // Sorting function
    const handleSort = (products) => {
        switch (sortOption) {
            case 'priceLowToHigh':
                return products.sort((a, b) => a.price - b.price);
            case 'priceHighToLow':
                return products.sort((a, b) => b.price - a.price);
            case 'newestFirst':
                return products.sort((a, b) => new Date(b.date) - new Date(a.date)); // Assuming date is available
            default:
                return products;
        }
    };

    const handleFilter = () => {
        let filtered = productList.filter((product) => {
            const inCategory = selectedCategory ? product.category === selectedCategory : true;
            const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
            const meetsRating = product.rating.rate >= rating;

            return inCategory && inPriceRange && meetsRating;
        });

        // Apply sorting after filtering
        filtered = handleSort(filtered);

        setFilteredProducts(filtered);
        setPage(0); // Reset to the first page after filtering
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to the first page when rows per page change
    };

    useEffect(() => {
        getProductList();
    }, []);

    const paginatedProducts = filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleProductView = (id) => {
        navigate('/view', { state: { id } });
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <NavBar />
            <Box sx={{ padding: 3, marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom align="center">
                    Product List
                </Typography>

                {/* Filters and Sorting Section */}
                <Box sx={{ marginBottom: 4 }}>
                    <Grid container spacing={2}>
                        {/* Sorting Dropdown */}
                        <Grid item xs={12} sm={4}>
                            <TextField
                                select
                                label="Sort By"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                fullWidth
                            >
                                <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                                <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
                                <MenuItem value="newestFirst">Newest First</MenuItem>
                            </TextField>
                        </Grid>

                        {/* Category Filter */}
                        <Grid item xs={12} sm={4}>
                            <TextField
                                select
                                label="Category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                fullWidth
                            >
                                <MenuItem value="">All Categories</MenuItem>
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Price Range Filter */}
                        <Grid item xs={12} sm={4}>
                            <Typography gutterBottom>Price Range</Typography>
                            <Slider
                                value={priceRange}
                                onChange={(e, newValue) => setPriceRange(newValue)}
                                valueLabelDisplay="auto"
                                min={0}
                                max={1000}
                            />
                        </Grid>

                        {/* Rating Filter */}
                        <Grid item xs={12} sm={4}>
                            <Typography gutterBottom>Minimum Rating</Typography>
                            <Slider
                                value={rating}
                                onChange={(e, newValue) => setRating(newValue)}
                                valueLabelDisplay="auto"
                                min={0}
                                max={5}
                                step={0.5}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" onClick={handleFilter} sx={{ marginTop: 2 }}>
                        Apply Filters
                    </Button>
                </Box>

                {filteredProducts.length === 0 ? (
                    <Typography variant="h6" color="text.secondary" align="center">
                        No products found.
                    </Typography>
                ) : (
                    <>
                        <Grid container spacing={3}>
                            {paginatedProducts.map((product) => (
                                <Grid item xs={12} sm={6} md={4} key={product.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <StyledCard>
                                        <StyledCardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.title}

                                            onClick={() => handleProductView(product.id)}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.primary" sx={{ marginTop: 1 }}>
                                                <strong>Price:</strong> ${product.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                fullWidth
                                                sx={{ marginTop: 2 }}
                                                onClick={() => handleAddToCart(product)}
                                            >
                                                Add to Cart
                                            </Button>
                                        </CardContent>
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>

                        <TablePagination
                            component="div"
                            count={filteredProducts.length}
                            page={page}
                            onPageChange={handlePageChange}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleRowsPerPageChange}
                            rowsPerPageOptions={[10, 20]}
                        />
                    </>
                )}
                <ToastContainer position="top-right" autoClose={3000} />
            </Box>
        </>
    );
}

export default ProductList;
