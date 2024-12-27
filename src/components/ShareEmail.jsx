import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../scss/shareEmail.scss';

function ShareEmail() {
  const location = useLocation();
  const { img } = location.state || {};
  const navigate = useNavigate();
  const imageUrl = `${window.location.origin}/images/${img}.jpg`;

  
  return (
    <div className='container_share_email'>
      <div className="share_email">
        <h2>Chia sẻ qua email</h2>
        <p className='title'>Vui lòng cung cấp địa chỉ email mà bạn muốn chia sẻ kết quả</p>
        <div className="input_email">
            <input type="text" placeholder='Đỉa chỉ email nhận kết quả'/>
        </div>
        <p className='des'>Ấn enter sau mỗi email để xác nhận</p>
        <div className="buttons">
          <button
            onClick={() => {
                navigate("/share", { state: { imageUrl } });
              }}
          >Quay lại</button>
          <button>Gửi email</button>
        </div>
      </div>
    </div>
  )
}

export default ShareEmail;