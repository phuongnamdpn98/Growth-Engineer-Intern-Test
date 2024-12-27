import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaCircle, FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import data from "../data/assessment.json";
import '../scss/question.scss'

const Question = () => {

  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [activeIndices, setActiveIndices] = useState(
    Array(data.questions.length).fill(null)
  );

  const handleOptionClick = (questionIndex, optionIndex, score) => {
    setSelected(score);
    const updatedActiveIndices = [...activeIndices];
    updatedActiveIndices[questionIndex] = optionIndex;
    setActiveIndices(updatedActiveIndices);
  };

  const handleNext = () => {
    setScore(score + selected)
    setStep(step === 9 ? 9 : step + 1);
  };

  const handleBack = () => {
    setScore(score - selected)
    setStep(step === 0 ? 0 : step - 1);

  };

  const handleSwitchToResult = () => {
    navigate("/result", {state: {score}});
  };

  return (
    <div className="container_question">
      <div>
        <p className="title">ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH VỀ QUẢN TRỊ TRẢI NGIỆM KHÁCH HÀNG</p>
        <div className="card">
          <h3><FaCircle size={10} color="#1890ff" />{` Câu hỏi ${data.questions[step].id}/${data.questions.length}`}</h3>
          <p >{data.questions[step].title}</p>

          <div className="buttons_selected">
            {data.questions[step].options.map((option, index) => (
              <button
                key={index}
                className={`btn_selected ${activeIndices[step] === index ? "active" : ""
                  }`}
                onClick={() => {
                  handleOptionClick(step, index, option.score);
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="container_buttons">

            {
              step !== 9 ?
                <div className="buttons">
                  <button className="btn_NextPrev" 
                    onClick={handleBack}
                    disabled={step === 0}
                    >
                    <FaLongArrowAltLeft
                      size={18}
                      style={{
                        fontSize: 'inherit',
                        marginRight: 5,
                        verticalAlign: 'middle'
                      }}
                    />
                    Quay lại
                  </button>
                  <button className="btn_NextPrev" onClick={handleNext}>Tiếp theo
                    <FaLongArrowAltRight
                      size={18}
                      style={{
                        fontSize: 'inherit',
                        marginLeft: 5,
                        verticalAlign: 'middle'
                      }} />

                  </button>
                </div>
                :
                <div className="buttons">
                  <button className="btn_NextPrev" onClick={handleBack}>
                    <FaLongArrowAltLeft
                      size={18}
                      style={{
                        fontSize: 'inherit',
                        marginRight: 5,
                        verticalAlign: 'middle'
                      }}
                    />
                    Quay lại
                  </button>
                  <button className="btn_NextPrev" onClick={handleSwitchToResult}>Tiếp theo
                    <FaLongArrowAltRight
                      size={18}
                      style={{
                        fontSize: 'inherit',
                        marginLeft: 5,
                        verticalAlign: 'middle'
                      }} />
                  </button>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
