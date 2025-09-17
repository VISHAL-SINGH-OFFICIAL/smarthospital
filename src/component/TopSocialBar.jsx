import React from 'react';

// You can use react-icons for icons, or use <i> tags with FontAwesome CDN in index.html
// Here, we'll use FontAwesome classes for demonstration

const barStyle = {
  background: '#f7f7f9',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
};

const socialListStyle = {
  display: 'flex',
  gap: '10px',
  marginLeft: '32px',
};

const socialBtnStyle = {
  background: '#42a5f5',
  color: '#fff',
  borderRadius: '6px',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.3rem',
  boxShadow: '0 2px 6px rgba(66,165,245,0.08)',
  transition: 'background 0.2s',
  border: 'none',
  cursor: 'pointer',
};

const loginBtnStyle = {
  ...socialBtnStyle,
  width: '90px',
  gap: '6px',
  fontSize: '1.1rem',
  fontWeight: 500,
  justifyContent: 'center',
  marginRight: '32px',
  padding: '0 16px',
};

const TopSocialBar = () => (
  <div style={barStyle}>
    <div style={socialListStyle}>
      <a href="#" style={socialBtnStyle}><i className="fa fa-facebook"></i></a>
      <a href="#" style={socialBtnStyle}><i className="fa fa-twitter"></i></a>
      <a href="#" style={socialBtnStyle}><i className="fa fa-youtube"></i></a>
      <a href="#" style={socialBtnStyle}><i className="fa fa-google-plus"></i></a>
      <a href="#" style={socialBtnStyle}><i className="fa fa-linkedin"></i></a>
      <a href="#" style={socialBtnStyle}><i className="fa fa-instagram"></i></a>
      <a href="#" style={socialBtnStyle}><i className="fa fa-pinterest"></i></a>
    </div>
    <a href="/login" style={loginBtnStyle}>
      <i className="fa fa-user"></i>
      <span style={{marginLeft: 6}}>Login</span>
    </a>
  </div>
);

export default TopSocialBar;