import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import Hero1 from '../../Assets/Images/hero1.jpg';
import Hero2 from '../../Assets/Images/hero2.jpg';
import Hero3 from '../../Assets/Images/hero3.jpg';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <Container className="my-5">
            <div className="mx-5">
                <div className="text-center">
                    <div className="p-5 text-center">
                        <h6 
                            style={{
                                color: "#90EE90", 
                                fontWeight: "bold", 
                                textTransform: "uppercase", 
                                letterSpacing: "2px",
                                fontSize: "0.9rem",
                            }}
                        >
                            Khóa Học Đề Xuất
                        </h6>
                        <h4 
                            className="my-3" 
                            style={{
                                fontFamily: "'Pacifico', cursive",
                                fontSize: "2rem", 
                                lineHeight: "1.5", 
                                color: "#333", 
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            Học Ngay Một Khóa Yoga Online Với Chi Phí Thấp Nhất!
                        </h4>
                        <p 
                            style={{
                                maxWidth: "600px", 
                                margin: "0 auto", 
                                color: "#666", 
                                fontSize: "1rem", 
                                lineHeight: "1.8",
                            }}
                        >
                            Dưới đây là một số khóa học Yoga phổ biến được nhiều khách hàng yêu thích và đánh giá cao tại 
                            <a 
                                href="/blog" 
                                style={{ 
                                    color: "#90EE90", 
                                    fontWeight: "bold", 
                                    textDecoration: "none",
                                    transition: "color 0.3s ease"
                                }}
                                onMouseOver={(e) => e.target.style.color = "#76c776"}
                                onMouseOut={(e) => e.target.style.color = "#90EE90"}
                            >
                                {""} HeathyLife
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
            <Row className="gy-4">
                <Col md={4}>
                    <Card className="card">
                        <Card.Img variant="top" src={Hero1} alt="Hero1" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>Tập Yoga Cơ Bản Ngay Tại Nhà Với Nguyễn Hiếu</Card.Title>
                            <Card.Text>
                                Khóa học được thiết kế dành cho người mới bắt đầu. Bắt đầu hành trình thay đổi bản thân với những tư thế đơn giản, không gây nguy hiểm nhưng mang lại hiệu quả tuyệt vời.
                            </Card.Text>
                            <Button 
                                style={{ backgroundColor: "#90EE90", borderColor: "#90EE90" }} 
                                onClick={() => navigate('/khoa-hoc-co-ban')}
                            >
                                Tìm Hiểu Thêm
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card">
                        <Card.Img variant="top" src={Hero2} alt="Hero2" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>Yoga Giảm Eo, Giảm Mỡ Giữ Dáng Thon Gọn</Card.Title>
                            <Card.Text>
                                Các tư thế trong khóa học được thiết kế dành riêng cho những bạn muốn đánh tan mỡ bụng, lấy lại vóc dáng. Ngoài ra còn cung cấp các bài tập giúp tạo đường cong hoàn mỹ.
                            </Card.Text>
                            <Button 
                                style={{ backgroundColor: "#90EE90", borderColor: "#90EE90" }} 
                                onClick={() => navigate('/khoa-hoc-giam-eo')}
                            >
                                Tìm Hiểu Thêm
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card">
                        <Card.Img variant="top" src={Hero3} alt="Hero3" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>Yoga Trẻ Hóa Và Làm Đẹp Cho Khuôn Mặt</Card.Title>
                            <Card.Text>
                                Bạn không có nhiều thời gian chăm sóc sắc đẹp? Đừng lo lắng, vì khóa học này được thiết kế dành cho bạn. Với kĩ thuật đơn giản, an toàn, làn da của bạn sẽ trở nên săn mịn và tràn đầy sức sống.
                            </Card.Text>
                            <Button 
                                style={{ backgroundColor: "#90EE90", borderColor: "#90EE90" }} 
                                onClick={() => navigate('/khoa-hoc-tre-hoa')}
                            >
                                Tìm Hiểu Thêm
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
