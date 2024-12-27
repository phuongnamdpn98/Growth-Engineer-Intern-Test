import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaCircle, FaLongArrowAltRight } from "react-icons/fa";
import '../scss/instruction.scss';

function Instruction() {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/question");
  };

  return (
    <div className="container_instruction">
      <div>
        <p>ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH VỀ QUẢN TRỊ TRẢI NGIỆM KHÁCH HÀNG</p>

        <div className="card_instruction">
          <h3><FaCircle size={10} color="#1890ff" /> Hướng dẫn trả lời</h3>
          <p className="title">Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:</p>
          <ul>
            <li>Chọn "có": nếu câu đó phản ánh hiện trạng đang có VÀ được thực hiện một cách nhất quán (ít nhất 80% thời gian) </li>
            <li>Chọn "Không có": nếu hoàn toàn chưa từng thực hiện</li>
            <li>Chọn "Không rõ về vấn đề này": nếu không chắc chắn đã thực hiện hay chưa</li>
          </ul>
          <button onClick={handleNext}>Bắt đầu
            <FaLongArrowAltRight
              size={18}
              style={{
                fontSize: 'inherit',
                marginLeft: 10,
                verticalAlign: 'middle'
              }} /> </button>
        </div>
      </div>
    </div>
  )
}

export default Instruction;
