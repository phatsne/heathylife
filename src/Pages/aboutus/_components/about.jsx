import React from 'react';
import { Typography, Paper, Box, CardMedia } from '@mui/material';
import Grid from "@mui/material/Grid2";
import bannerImage from '../../../Assets/Images/banner.jpg';
import Chart from "./Improve"

const AboutUs = () => {
  return (
    <Box paddingTop={"60px"}>
      <Paper
        sx={{
          p: 0,
          boxShadow: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '300px',
          }}
        >
          <CardMedia
            component="img"
            image={bannerImage}
            alt="Banner"
            sx={{
              height: '100%',
              objectFit: 'cover',
            }}
          />
            <Typography
                variant="h4"
                component="div"
                sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '8px',
                padding: '8px 16px',
                color: '#ffffff',
                }}
            >
                About Us
                <Typography
                    variant="body1"
                    sx={{ mb: 1,fontSize: '16px',}}
                >
                    Who We Are: We are a passionate team committed to innovation and excellence.
                </Typography>
            </Typography>
        </Box>
        {/* Main content */}
        <Box sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac
                est efficitur, nec tempus risus malesuada.
              </Typography> */}
                <Chart />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ paddingTop: 1 }}>
              {/* <Typography variant="body1" paragraph>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
              </Typography> */}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutUs;
