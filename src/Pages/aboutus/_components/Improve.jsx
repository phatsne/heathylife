import React from 'react';
import Improve from "../../../Assets/Images/banner2.jpg";
import { Box, Typography, LinearProgress, CardMedia } from '@mui/material';
import Grid from "@mui/material/Grid2";

const data = [
  { name: 'Cân bằng cơ thể', value: 62 },
  { name: 'Tập thể dục hằng ngày', value: 88 },
  { name: 'Các hoạt động ngoài trời', value: 75 },
];

const GridBarChartWithImage = () => {
  return (
    <Box
      sx={{
        display: 'flex',          
        flexDirection: 'column',  
        alignItems: 'center',      
        justifyContent: 'center',  
        p: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Phần trái: Tiêu đề, mô tả, và biểu đồ */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4,
          }}
        >
            <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', textAlign: 'left' }}
            >
                Cải Thiện Cuộc Sống Của Bạn
            </Typography>
            <Typography
                variant="body1"
                sx={{ color: 'gray', textAlign: 'left' }}
            >
                Hãy thay đổi cuộc sống của bạn thông qua những thói quen tốt, sự nỗ lực kiên trì và chú trọng đến 
                <br />
                sức khỏe.
                <br />
                Đặt ưu tiên cho việc tập thể dục hàng ngày, dinh dưỡng cân bằng và lối sống chú ý để đạt được
                <br /> 
                một cuộc sống khỏe mạnh, hạnh phúc và đầy đủ hơn.
            </Typography>

          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}
              >
                {item.name}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': { backgroundColor: '#82ca9d' },
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'right',
                    minWidth: '40px',
                  }}
                >
                  {item.value}%
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              image={Improve}
              alt="Banner"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridBarChartWithImage;
