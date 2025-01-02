import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  Slider,
  Button,
  TablePagination,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './feature/TaskSlice';
import { ToastContainer } from 'react-toastify';

// Styled Components
const StyledCard = ({ children }) => (
  <div className="flex flex-col justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
    {children}
  </div>
);

const StyledCardMedia = ({ image, alt, onClick }) => (
  <img
    src={image}
    alt={alt}
    className="h-48 w-full object-cover rounded-t-lg cursor-pointer"
    onClick={onClick}
  />
);

const NavBar = () => {
  const navigate = useNavigate();
  const cartProduct = useSelector((state) => state.products);
  const cartCount = cartProduct.length;

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
  const [sortOption, setSortOption] = useState('priceLowToHigh');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSort = (products) => {
    switch (sortOption) {
      case 'priceLowToHigh':
        return products.sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return products.sort((a, b) => b.price - a.price);
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

    filtered = handleSort(filtered);
    setFilteredProducts(filtered);
    setPage(0);
  };

  const handleRemoveFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 1000]);
    setRating(0);
    setFilteredProducts(productList);
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
      <div className="p-6">
        <h2 className="text-4xl font-bold text-center mb-8">Product List</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <TextField
            select
            label="Sort By"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-64"
          >
            <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
          </TextField>
          <TextField
            select
            label="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-64"
          >
            {/* <MenuItem value="">All Categories</MenuItem> */}
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <div className="w-64">
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
            />
          </div>
          <div className="w-64">
            <Typography gutterBottom>Minimum Rating</Typography>
            <Slider
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={5}
              step={0.5}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleFilter}
          >
            Apply Filters
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={handleRemoveFilters}
          >
            Remove Filters
          </button>
        </div>

        {filteredProducts.length === 0 ? (
          <h3 className="text-center text-gray-500 mt-8">No products found.</h3>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {paginatedProducts.map((product) => (
              <StyledCard key={product.id}>
                <StyledCardMedia
                  image={product.image}
                  alt={product.title}
                  onClick={() => handleProductView(product.id)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-blue-600 font-bold mt-2">Price: ${product.price}</p>
                  <p className="text-gray-500">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </StyledCard>
            ))}
          </div>
        )}

        <TablePagination
          component="div"
          count={filteredProducts.length}
          page={page}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPageOptions={[10, 20]}
        />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default ProductList;
