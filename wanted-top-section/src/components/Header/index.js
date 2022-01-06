import React from 'react';
import './index.scss';
import Search from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "antd/dist/antd.css";
import { Badge } from "antd";

function Header() {
  return (
    <div className='header'>
      <div className='header-main'>
      <div className='header-left'>
        <img src='https://static.wanted.co.kr/images/icon-menu.png' width='17px' height='14px' alt='menu'/>
      <a href='https://www.wanted.co.kr/' className='header-wanted link'>wanted</a>
      </div>
      <div className='header-link'>
        <a className='link' href='https://www.wanted.co.kr/jobsfeed'>채용</a>  
        <a className='link' href='https://www.wanted.co.kr/events'>이벤트</a>  
        <a className='link salary' href='https://www.wanted.co.kr/salary'>직군별 연봉</a>  
        <a className='link' href='https://www.wanted.co.kr/cv/list'>이력서</a>
        <a className='link' href='https://www.wanted.co.kr/community'>커뮤니티</a>
        <a className='link' href='https://www.wanted.co.kr/gigs/experts'>프리랜서</a>
        <a className='link' href='https://www.wanted.co.kr/aiscore/resume'>AI 합격예측</a>
      </div>
      <div className='header-right'>
        <Search className='header-right-item'/>
        <NotificationsNoneOutlinedIcon className='header-right-item'/>
        <AccountCircleIcon className='header-right-item'/>
        <div className='vertical-line'></div>
        <a href='https://www.wanted.co.kr/dashboard/companyregister' className='header-service-button'>기업서비스</a> 
      </div>
      </div>
    </div>
  )
}

export default Header
