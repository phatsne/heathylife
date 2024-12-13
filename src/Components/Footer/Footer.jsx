import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Box } from '@mui/material'
import './footer.css';

const Footer = () => {
  return (
      <Box sx={{ paddingTop: "50px"}}>
        <Box sx={{ bgcolor: "#ebfff7"}}>
          <Box sx={{ paddingTop: "20px"}}>
            <Row>
              <Col md={4}>
                <h5>Heathylife</h5>
                <p></p>
                <p></p>
                <p></p>
                <ul>
                  <li></li>
                  <li></li>
                </ul>
                <p>Email: mtam2003it@gmail.com</p>
              </Col>
              <Col md={4}>
                <h5>KHÓA HỌC</h5>
                <ul>
                  <li>Yoga cơ bản</li>
                  <li>Yoga trị liệu, phục hồi</li>
                  <li>Yoga giảm cân</li>
                </ul>
              </Col>
              <Col md={4}>
                <h5>HỖ TRỢ KHÁCH HÀNG</h5>
                <ul>
                  <li>Hướng dẫn đăng ký và tham gia khóa học</li>
                  <li>Chăm sóc khách hàng</li>
                  <li>Chính sách bảo mật</li>
                </ul>
              </Col>
            </Row>
            <Row className="text-center mt-4">
              <Col>
                <div className="social-links">
                  <a href="#" target="_blank" className="me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" target="_blank" className="me-3">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" target="_blank" className="me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
                <p className="mt-3">&copy; NGỌC MINH TÂM - All rights reserved.</p>
              </Col> 
            </Row>
          </Box>
        </Box>
      </Box> 
  );
};

export default Footer;
