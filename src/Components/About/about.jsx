import React from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import About1 from "../../Assets/Images/about.jpg"

import './about.css';

const About = () => {
  return(
    <Container fluid className="py-5" style={{ backgroundColor: '#ebfff7', }}>
      <Row className="m-2 px-4">
        <Col md={6} className="d-flex align-items-center">
          <div className="">
            <Card.Img variant="top" src={About1} alt="About1" style={{ borderRadius: '10px' }}/> 
          </div>
        </Col>
        <Col md={6}>
          <h3 className="fw-bold mb-3" style={{ color: '#333' }}>Đôi Nét Về Heathy Life</h3>
          <p style={{ textAlign: 'left' }}>
            Heathy Life là trang web tổng hợp kiến thức yoga từ cơ bản đến nâng cao dành cho những bạn
            muốn tập yoga tại nhà!
          </p>
          <p style={{ textAlign: 'left' }}>
            Với niềm tin rằng mọi người, dù bận rộn đến đâu, cũng xứng đáng được chăm sóc sức khỏe
            và tinh thần của mình.
          </p>
          <p style={{ textAlign: 'left' }}>
            Heathy Life mang đến một giải pháp linh hoạt, giúp yoga trở nên dễ tiếp cận hơn bao giờ hết,
            đồng thời xây dựng một cộng đồng tích cực, nơi mọi người có thể cùng nhau cải thiện sức
            khỏe và tìm kiếm cân bằng trong cuộc sống.
          </p>
          <Row className="mt-4" >
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
          <Button variant="success" className="mt-3">Xem Thêm Về Chúng Tôi</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default About;