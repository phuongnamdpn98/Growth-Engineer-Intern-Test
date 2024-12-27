import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import '../scss/landingPage.scss';

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/instruction");
  };
  return (
    <div className="container_landingPage">
      <div>
        <p>ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH VỀ QUẢN TRỊ TRẢI NGIỆM KHÁCH HÀNG</p>
        <div className="landingPage">
          <h1>Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?</h1>
          <p>Đánh giá khả năng cải thiện trong việc lắng nghe, hiểu và đáp ứng các tín hiệu từ khách hàng.</p>
          <input type="email" placeholder="Địa chỉ email của bạn" />
          <button onClick={handleStart}>Bắt đầu <FaRocket /></button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;