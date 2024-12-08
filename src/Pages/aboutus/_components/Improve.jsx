import React from 'react';
import Improve from "../../../Assets/Images/banner2.jpg";
import { Box, Typography, LinearProgress, CardMedia } from '@mui/material';
import Grid from "@mui/material/Grid2";

const data = [
  { name: 'Body Balance', value: 62 },
  { name: 'Daily Exercise', value: 88 },
  { name: 'Physical Activity', value: 75 },
];

const GridBarChartWithImage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
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
            gap: 4, // Khoảng cách giữa các phần tử
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
          {/* Biểu đồ dạng thanh */}
          {data.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 1, // Khoảng cách giữa nhãn và thanh tiến trình
              }}
            >
              {/* Nhãn */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}
              >
                {item.name}
              </Typography>

              {/* Thanh tiến trình với phần trăm */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2, // Khoảng cách giữa thanh tiến trình và phần trăm
                }}
              >
                {/* Thanh tiến trình */}
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
                {/* Phần trăm */}
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

        {/* Phần phải: Hình ảnh */}
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
