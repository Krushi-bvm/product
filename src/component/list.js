import React from 'react'

function list() {
  return (
    <div>
   <Box>
           <Box sx={{ marginBottom: 4 }}>
                    <Grid container spacing={2}>
                     
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
            </Box>
    </div>
  )
}

export default list