import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const cards = [
  {
    title: 'Business Strategy',
    description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    icon: <BusinessIcon sx={{ color: '#ff75a0', fontSize: '40px' }} />,
  },
  {
    title: 'App Development',
    description: "We'll handle everything from app development to making your project live.",
    icon: <CodeIcon sx={{ color: '#ff75a0', fontSize: '40px' }} />,
  },
  {
    title: 'UI/UX Design',
    description: 'We offer beautiful and user-friendly designs to enhance user experience.',
    icon: <DesignServicesIcon sx={{ color: '#ff75a0', fontSize: '40px' }} />,
  },
  {
    title: 'Web Development',
    description: 'Creating fast and responsive websites for modern businesses.',
    icon: <LaptopMacIcon sx={{ color: '#ff75a0', fontSize: '40px' }} />,
  },
  {
    title: 'SEO Optimization',
    description: 'Optimizing your website to get noticed by search engines and users.',
    icon: <DeveloperModeIcon sx={{ color: '#ff75a0', fontSize: '40px' }} />,
  },
  {
    title: 'Digital Marketing',
    description: 'We provide digital marketing strategies to help grow your business.',
    icon: <MenuIcon sx={{ color: '#ff75a0', fontSize: '40px' }} />,
  },
];

function About() {
  return (
    <>
      <div className="text-center text-[#ff75a0] text-lg mb-6">Feature</div>
      <Typography className="text-center text-black text-4xl font-bold mb-6">
        What I do
      </Typography>

      {/* Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="flex justify-center">
            <Box
              sx={{
                width: 350,
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                padding: '20px',
              }}
              className="text-center"
            >
              {/* Icon */}
              <Box sx={{ marginBottom: '20px' }}>
                {card.icon}
              </Box>

              {/* Title */}
              <Typography sx={{ color: '#6e7176', fontSize: '20px', fontWeight: 'bold' }}>
                {card.title}
              </Typography>

              {/* Description */}
              <Typography sx={{ color: '#888b8e', fontSize: '16px', marginTop: '8px' }}>
                {card.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default About;
