import axios from 'axios';

// Hàm xử lý đăng nhập
export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data)
    return res.data
};

// Hàm lấy dữ liệu từ route được bảo vệ
export const fetchProtectedData = async () => {
    const token = localStorage.getItem('authToken');

    try {
        const response = await axios.get('http://localhost:3001/api/protected', {
            headers: { Authorization: token },
        });

        console.log('Protected Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching protected data:', error.response?.data || error.message);
        throw error;
    }
};
