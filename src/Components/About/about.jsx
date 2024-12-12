import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import About1 from "../../Assets/Images/about.jpg";
import './about.css';

const About = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const handleNavigation = () => {
    navigate('/blog'); // Đường dẫn tới trang "Blog"
  };

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#ebfff7' }}>
      <Row className="m-2 px-4">
        {/* Hình ảnh giới thiệu */}
        <Col md={6} className="d-flex align-items-center">
          <div>
            <Card.Img 
              variant="top" 
              src={About1} 
              alt="About1" 
              style={{ borderRadius: '10px' }}
            /> 
          </div>
        </Col>

        {/* Nội dung giới thiệu */}
        <Col md={6}>
          <h3 
            className="mb-3" 
            style={{ color: '#333', fontFamily: "'Pacifico', cursive" }}
          >
            Đôi Nét Về Heathy Life
          </h3>
          <p style={{ textAlign: 'left' }}>
            Heathy Life là nền tảng trực tuyến hỗ trợ người dùng xây dựng lối sống lành mạnh thông qua các nội dung và công cụ tiện ích.
          </p>
          <p style={{ textAlign: 'left' }}>
            Trang web tập trung vào các lĩnh vực chính như dinh dưỡng, tập luyện thể dục, sức khỏe tinh thần, và theo dõi sức khỏe cá nhân.
          </p>
          <p style={{ textAlign: 'left' }}>
            Heathy Life mang đến một giải pháp linh hoạt, giúp yoga trở nên dễ tiếp cận hơn bao giờ hết, đồng thời xây dựng một cộng đồng tích cực, nơi mọi người có thể cùng nhau cải thiện sức khỏe và tìm kiếm cân bằng trong cuộc sống.
          </p>

          {/* Các lợi ích */}
          <Row className="mt-4">
            <Col xs={6} className="px-3">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-journal-check me-2" style={{ fontSize: '1.2rem', color: '#198754' }}></i>
                <p className="mb-0">Kiến thức Yoga chuẩn</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-clock-history me-2" style={{ fontSize: '1.2rem', color: '#198754' }}></i>
                <p className="mb-0">Thời gian linh hoạt</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-check2-square me-2" style={{ fontSize: '1.2rem', color: '#198754' }}></i>
                <p className="mb-0">Xây dựng thói quen tốt</p>
              </div>
            </Col>
            <Col xs={6} className="px-3">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-wallet2 me-2" style={{ fontSize: '1.2rem', color: '#198754' }}></i>
                <p className="mb-0">Tiết kiệm chi phí</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-house-door me-2" style={{ fontSize: '1.2rem', color: '#198754' }}></i>
                <p className="mb-0">Không gian thoải mái</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-heart-pulse me-2" style={{ fontSize: '1.2rem', color: '#198754' }}></i>
                <p className="mb-0">Tăng cường sức khỏe</p>
              </div>
            </Col>
          </Row>

          {/* Nút điều hướng */}
          <div className="text-start">
            <Button 
              className="mt-3" 
              style={{ backgroundColor: "#90EE90", borderColor: "#90EE90" }}
              onClick={handleNavigation}
            >
              Xem Thêm Về Chúng Tôi
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
