import React from 'react';
import img1 from '../assets/port1.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { Box, IconButton } from '@mui/material';

// Array with sample data for the portfolio cards
const portfolioItems = [
  {
    id: 1,
    title: 'NFT Dashboard Application Development..',
    category: 'GALLERY',
    image: img1,
    likes: 24,
  },
  {
    id: 2,
    title: 'Crypto Portfolio Tracker..',
    category: 'GALLERY',
    image: img1,
    likes: 18,
  },
  {
    id: 3,
    title: 'AI Chatbot Implementation..',
    category: 'GALLERY',
    image: img1,
    likes: 32,
  },
  {
    id: 4,
    title: 'Web Design for E-commerce..',
    category: 'GALLERY',
    image: img1,
    likes: 40,
  },
  {
    id: 5,
    title: 'Mobile App Development..',
    category: 'GALLERY',
    image: img1,
    likes: 28,
  },
  {
    id: 6,
    title: 'Blockchain Project Development..',
    category: 'GALLERY',
    image: img1,
    likes: 15,
  },
];

function Portfolio() {
  return (
    <div className="container mx-auto p-4">
      {/* Portfolio Title */}
      <h1 className="text-center text-4xl font-bold mb-6">Portfolio</h1>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-4"
          >
            <Box sx={{ position: 'relative', width: '100%', height: '200px' }}>
              {/* Image */}
              <img
                className="w-full h-48 object-cover rounded-lg"
                src={item.image}
                alt="Portfolio Image"
              />

              {/* Icon on top-right */}
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  padding: 0,
                }}
              >
                <CropFreeIcon sx={{ fontSize: '16px', color: 'gray' }} />
              </IconButton>
            </Box>

            {/* Card Content */}
            <div className="p-4 relative">
              {/* Category and Like Button */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-pink-400">{item.category}</p>
                <button className="flex items-center text-gray-600 hover:text-red-500">
                  <FavoriteBorderIcon sx={{ fontSize: '16px' }} />
                  <span className="ml-1 text-sm">{item.likes}</span>
                </button>
              </div>

              {/* Title */}
              <p className="text-lg font-bold text-gray-600 mt-2">{item.title}</p>

              {/* Additional content or buttons can go here */}
              <div className="flex items-center justify-between mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
