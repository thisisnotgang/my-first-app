import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1>프로젝트</h1>
        <p>이경욱의 포트폴리오 프로젝트 모음입니다.</p>
      </header>
      
      <div className="projects-grid">
        <div className="project-card">
          <h2>프로젝트 1</h2>
          <p>React를 활용한 웹 애플리케이션 개발 프로젝트입니다.</p>
          <div className="project-tech">React • JavaScript • CSS</div>
        </div>
        
        <div className="project-card">
          <h2>프로젝트 2</h2>
          <p>반응형 웹사이트 디자인 및 구현 프로젝트입니다.</p>
          <div className="project-tech">HTML • CSS • JavaScript</div>
        </div>
        
        <div className="project-card">
          <h2>프로젝트 3</h2>
          <p>API를 활용한 데이터 시각화 프로젝트입니다.</p>
          <div className="project-tech">React • API • Chart.js</div>
        </div>
      </div>
      

    </div>
  );
}

export default Projects;