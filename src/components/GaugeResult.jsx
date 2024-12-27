import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import GaugeChart from "react-gauge-chart";
import { TbMessages } from "react-icons/tb";
import { FaShareSquare, FaDownload, FaRedo } from "react-icons/fa";
import data from "../data/assessment.json";
import '../scss/gaugeResult.scss';

const GaugeResult = () => {

  const dataRef = useRef(data);
  const location = useLocation();
  const { score } = location.state || {};
  const [level, setLevel] = useState({});
  const [img, setImg] = useState(``);
  const navigate = useNavigate();

  const checkRange = useCallback(() => {
    if (dataRef.current && dataRef.current.results) {
      dataRef.current.results.forEach((current) => {
        if (score >= current.range[0] && score <= current.range[1]) {
          setLevel(current);
          setImg(`MA_Thumbnail_Level_${current.level}`);
        }
      });
    } else {
      console.error("Data or data.results is undefined");
    }
  }, [level, score]);


  useEffect(() => {
    checkRange()
  });

  return (
    <div className="container_gauge">
      <div>
        <p className="title">ĐÁNH GIÁ MỨC ĐỘ TRƯỞNG THÀNH VỀ QUẢN TRỊ TRẢI NGIỆM KHÁCH HÀNG</p>

        <div className="card">
          <div className="card_title">
            <div className="icon">
              <TbMessages
                size={30}
                color="#1890ff"
                style={{
                  padding: "20px"

                }}
              />
            </div>
            <div className="des">
              <div className="level">
                {`VOICE OF THE CUSTOMER - CẤP ĐỘ ${level.level}`}
              </div>
              <div className="name">
                {level.name}
              </div>
            </div>
          </div>
          <div className="description">
            <div>
              {level?.description?.text || `No description avaiable`}
            </div>
          </div>
          <div className="gauge_chart">
            <GaugeChart
              id="custom-gauge-chart"
              nrOfLevels={1}
              colors={["#ffc107"]}
              percent={score / 10}
              arcPadding={0}
              needleColor="#ffc107"
              textColor="#fff"
              needleBaseColor="rgba(155, 155, 155, 0.6)"
              hideText={true}
              cornerRadius={6}
              style={{ width: "550px", margin: "0 auto" }}
            />
            <div className="score_text">
              <h2 className="score">{score.toFixed(1)}</h2>
              <p className="text_score">Score</p>
            </div>
          </div>
        </div>
        <div className="floating_buttons">
          <button className="share_button" onClick={() => {
            navigate("/share", { state: { img } });
          }}>
            <p>Chia sẻ</p>
            <FaShareSquare size={18} />
          </button>
          <button className="faDownload_button">
            <FaDownload size={18} />
          </button>
          <button className="faRedo_button">
            <FaRedo size={18} />
          </button>
        </div>
      </div>


    </div>
  );
};

export default GaugeResult;
