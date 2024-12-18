import fakeRestDataProvider from "ra-data-fakerest";
import data from "./data.json";

// Kiểm tra cấu trúc dữ liệu trong file JSON để đảm bảo tất cả các trường cần thiết có mặt
export const dataProvider = fakeRestDataProvider(
  data,
  process.env.NODE_ENV !== "test",
  300, // Timeout sau 300ms, có thể điều chỉnh nếu cần
);
