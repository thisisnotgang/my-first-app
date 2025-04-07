import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>연락처</h1>
        <p>아래 정보로 연락해 주세요.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <h3>이메일</h3>
            <p>thisisnotgang</p>
          </div>
          
          <div className="contact-item">
            <h3>위치</h3>
            <p>Republic of Korea, Busan</p>
          </div>
          
          <div className="contact-item">
            <h3>소셜 미디어</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>메시지 보내기</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">보내기</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;