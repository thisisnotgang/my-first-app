import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'; // 스타일시트를 불러옵니다 (나중에 생성)

function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>이경욱</h1>
        <div className="profile-subtitle">Front-end Developer</div>
      </header>
      
      <section className="profile-content">
        <div className="info-card">
          <h2>개인 정보</h2>
          <ul>
            <li>
              <span className="info-label">생년월일:</span> 
              <span className="info-value">1998.11.25</span>
            </li>
            <li>
              <span className="info-label">출신:</span> 
              <span className="info-value">Republic of Korea, Busan</span>
            </li>
            <li>
              <span className="info-label">이메일:</span> 
              <span className="info-value">thisisnotgang</span>
            </li>
          </ul>
        </div>
        
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            안녕하세요! 저는 새로운 기술을 배우는 것을 좋아하는 개발자입니다.
            웹 개발에 관심이 많으며 React를 이용한 프론트엔드 개발을 학습하고 있습니다.
            사용자 친화적인 인터페이스를 구현하는 것에 관심이 있습니다.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">프로젝트 보기</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;