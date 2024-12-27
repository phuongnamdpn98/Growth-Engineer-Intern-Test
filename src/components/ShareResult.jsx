import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FacebookShareButton } from "react-share";
import '../scss/shareResult.scss';

function ShareResult() {
  const location = useLocation();
  const { img } = location.state || {};
  const navigate = useNavigate();
  const imageUrl = `${window.location.origin}/images/${img}.jpg`;
  
  return (
    <div className='container_share_result'>
      <div className="share_result">
        <h2>Chia sẻ kết quả</h2>
        <p>Đây là cách để bạn có thể chia sẻ với bạn bè</p>
        <div className="buttons">

          <button>
            <FacebookShareButton 
            url={imageUrl}
            hashtag={imageUrl}>
              Chia sẻ qua Facebook
            </FacebookShareButton>
          </button>
          <button
            onClick={() => {
              navigate("/email", { state: { imageUrl } });
            }}
          >Chia sẻ qua Email</button>
          <button>Sao chép đường dẫn đến trang kết quả</button>
          <button className='close'>Hủy</button>
        </div>
      </div>
    </div>
  )
}

export default ShareResult;