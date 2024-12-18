import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Certificate1 from "../../../Assets/Images/chungnhan1.jpg";
import Certificate2 from "../../../Assets/Images/chungnhan2.jpg";
import Certificate3 from "../../../Assets/Images/chungnhan3.jpg";
// import Certificate4 from "../../../Assets/Images/chungnhan4.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "CHỨNG NHẬN HOÀN THÀNH",
      name: "FIX-ME",
      logo: Certificate1,
      course: "Bài tập cho người cao tuổi",
      date: "12.4.2015",
      signature: "John Doe",
    },
    {
      title: "CHỨNG NHẬN HOÀN THÀNH",
      name: "FITNESS",
      logo: Certificate2,
      course: "Bài tập cho người cao tuổi",
      date: "12.4.2015",
      signature: "Jane Smith",
    },
    {
      title: "CHỨNG NHẬN HOÀN THÀNH",
      name: "ACR",
      logo: Certificate3,
      course: "Bài tập cho người cao tuổi",
      date: "12.4.2015",
      signature: "Mike Johnson",
    },
    // {
    //   title: "CHỨNG NHẬN HOÀN THÀNH",
    //   name: "FIX-ME",
    //   logo: Certificate4,
    //   course: "Bài tập cho người cao tuổi",
    //   date: "12.4.2015",
    //   signature: "John Doe",
    // },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Bộ Chứng Nhận
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {certificates.map((certificate, index) => (
          <Box
            key={index}
            sx={{
              width: '400px',
              height: '300px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: 2,
              backgroundColor: 'white',
              textAlign: 'center',
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
              {certificate.title}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
              <img src={certificate.logo} alt="Logo" style={{ height: '30px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
                {certificate.name}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Chứng nhận này xác nhận
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              {certificate.name}
            </Typography>
            <Typography variant="body2">
              đã hoàn thành khóa học:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>
              {certificate.course}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                px: 1,
              }}
            >
              <Box>
                <Typography variant="caption">Ngày cấp</Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold', px: 1 }}>
                  {certificate.date}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" align="right">
                  {certificate.signature}
                </Typography>
                <Typography variant="caption" align="right">
                  {/* Chủ tịch và Giám đốc điều hành */}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Certificates;
