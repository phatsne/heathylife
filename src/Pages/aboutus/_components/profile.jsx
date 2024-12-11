import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';

const ProfilePage = () => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', padding: '20px' }}>
        <Box
            sx={{
            height: '100px',
            backgroundImage: 'url("/path-to-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
        <Container sx={{ textAlign: 'center', mt: -7 }}>
            <Avatar
                alt="MinhTam"
                src="/path-to-avatar.jpg"
                sx={{
                    width: 120,
                    height: 120,
                    border: '5px solid white',
                    mx: 'auto',
                }}
            />
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    mt: 2,
                }}
            >
                Minh Tâm
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                    mt: 1,
                    fontStyle: 'italic',
                }}
            >
                Tôi Tên là Nguyễn Ngọc Minh Tâm là CEO của Heathylife
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                    mt: 2,
                    maxWidth: '600px',
                    mx: 'auto',
                }}
            >
            {/* Ashley Graff is one of the most famous fitness models worldwide. Thanks to her balanced
            physique and incredible definition she has been featured in many popular magazines, TV
            shows, commercials and music videos. As a certified personal coach and natural yoga
            trainer she helped thousands to transform their body. With EAST MODE she developed a 90
            days transformation program which is based on more than 10 years’ experience as a fitness
            model and life coach. */}
            </Typography>
        </Container>
    </Box>
  );
};

export default ProfilePage;
