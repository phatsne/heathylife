import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import YogaCourses1 from "../../../Assets/Images/YogaCourses1.jpg";
import YogaCourses2 from "../../../Assets/Images/YogaCourses2.jpg";
import YogaCourses3 from "../../../Assets/Images/YogaCourses3.jpg";
import YogaCourses4 from "../../../Assets/Images/YogaCourses4.jpg";

const YogaCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [cart, setCart] = useState([]);

  const courses = [
    {
      title: "Khóa học Solar (Premium)",
      description:
        "42 Bài Vinyasa Yoga thời lượng 60 phút, đầy đủ từ hít thở - khởi động - chuỗi Vinyasa - hạ nhiệt và Savasana. Khóa học này sẽ đưa các bạn tới những chuỗi Chào Mặt Trời cơ bản tới những chuỗi thử thách, tràn đầy sức mạnh và dẻo dai chính phục những tư thế khó.",
      image: YogaCourses1,
    },
    {
      title: "Khóa học Yoga Mềm Dẻo Cơ Khớp (Premium)",
      description:
        "25 lớp Vinyasa Yoga thời lượng 30 - 45 phút giúp bạn làm mềm dẻo cơ thể. Khóa học bắt đầu với những bài Yoga chuỗi ngồi rất đơn giản mà ai cũng có thể tập được, và tăng tiến dần khi cơ thể bạn đã quen với độ dẻo dai mới.",
      image: YogaCourses2,
    },
    {
      title: "Khóa học Yoga Thư Giãn",
      description:
        "10 lớp Yoga nhẹ nhàng, chậm rãi mở ra những căng thẳng trên cơ thể bạn và chạm sâu vào những gì diễn ra trong tâm trí và tâm hồn. Liệu pháp tuyệt vời cho cơ thể và tâm trí Lấy cảm hứng từ: Yin Yoga: giữ lâu, tác động chậm từ từ vào cơ và khớp Yoga Phục Hồi thư giãn cùng dụng cụ hỗ trợ Hatha Yoga: giữ lâu và kiểm soát hơi thở trong tư thế",
      image: YogaCourses3,
    },
    {
      title: "Khóa học Yoga Nâng Cao",
      description:
        "Khóa học này dành cho những người đã có nền tảng yoga cơ bản và muốn thử thách bản thân với các tư thế nâng cao.",
      image: YogaCourses4,
    },
  ];

  // Xử lý mở chi tiết khóa học
  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  // Xử lý nhập thông tin form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    if (userInfo.name && userInfo.email) {
      setCart((prev) => [...prev, { ...selectedCourse, userInfo }]);
      alert("Khóa học đã được thêm vào giỏ hàng!");
      setSelectedCourse(null);
      setUserInfo({ name: "", email: "" });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <Container>
      {/* Phần giới thiệu */}
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h5" gutterBottom>
          Các khóa học Yoga
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Hãy chọn khóa học phù hợp để cải thiện sức khỏe và tinh thần của bạn.
        </Typography>
      </Box>

      {/* Danh sách khóa học */}
      {courses.map((course, index) => (
        <Grid
          container
          spacing={4}
          alignItems="center"
          marginBottom={4}
          key={course.id}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
        >
          {/* Hình ảnh */}
          <Grid item xs={12} md={6}>
            <img
              src={course.image}
              alt={course.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>

          {/* Nội dung */}
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography variant="h6" gutterBottom>
              {course.title}
            </Typography>
            <Typography variant="body1">
              {course.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#90EE90",
                color: "#000",
                borderRadius: "50px",
                "&:hover": { backgroundColor: "#7AC47A" },
              }}
              onClick={() => handleViewDetails(course)}
            >
              Xem ngay
            </Button>
          </Grid>
        </Grid>
      ))}

      {/* Dialog Chi Tiết Khóa Học */}
      {selectedCourse && (
        <Dialog open={true} onClose={() => setSelectedCourse(null)} fullWidth>
          <DialogTitle>{selectedCourse.title}</DialogTitle>
          <DialogContent>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
            />
            <Typography paragraph>{selectedCourse.description}</Typography>
            <TextField
              label="Họ và Tên"
              name="name"
              fullWidth
              margin="normal"
              value={userInfo.name}
              onChange={handleInputChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={userInfo.email}
              onChange={handleInputChange}
            />
            <Box mt={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setSelectedCourse(null)}
                sx={{ marginRight: 2 }}
              >
                Đóng
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
};

export default YogaCourses;
