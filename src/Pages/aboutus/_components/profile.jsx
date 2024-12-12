import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import CEO from "../../../Assets/Images/CEO_MinhTam.jpg"

const ProfilePage = () => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA', padding: '20px' }}>
        <Box
            sx={{
            height: '100px',
            backgroundImage: 'url("/")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
        <Container sx={{ textAlign: 'center', mt: -7 }}>
            <Avatar
                alt="MinhTam"
                src={CEO}
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
                Tôi tên là Nguyễn Ngọc Minh Tâm, là CEO của HealthyLife 
                một nền tảng trực tuyến chuyên cung cấp các khóa học yoga và các công cụ hỗ trợ chăm sóc sức khỏe. 
                Với niềm đam mê sâu sắc dành cho việc nâng cao chất lượng cuộc sống thông qua lối sống lành mạnh, 
                tôi đã sáng lập HealthyLife với mục tiêu mang lại những giá trị thiết thực và ý nghĩa nhất đến cộng đồng.
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
