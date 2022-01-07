import React from 'react';
import './index.scss';
import { useMediaQuery, makeStyles } from "@material-ui/core";
import Search from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Header() {
  const isNone = useMediaQuery("(max-width: 992px)");
  const useStyles = makeStyles((theme) => ({
    avatar: {
      display:'block'
    },
    avatarNone: {
      display:'none'
    },
    menuNone: {
      display:'none',
    },
    menu: {
      display:'block',
      cursor:'pointer'
    }
  }))
  const classes = useStyles();
  return (
    <div className='header'>
      <div className='header-main'>
      <div className='header-left'>
        <img className='header-menu' src='https://static.wanted.co.kr/images/icon-menu.png' width='17px' height='14px' alt='menu'/>
      <a href='https://www.wanted.co.kr/' className='header-wanted'>wanted</a>
      </div>
      <div className='header-link'>
        <a className='link home' href='https://www.wanted.co.kr'>홈</a>  
        <a className='link' href='https://www.wanted.co.kr/jobsfeed'>채용</a>  
        <a className='link' href='https://www.wanted.co.kr/events'>이벤트</a>  
        <a className='link etc' href='https://www.wanted.co.kr/salary'>직군별 연봉</a>  
        <a className='link etc' href='https://www.wanted.co.kr/cv/list'>이력서</a>
        <a className='link etc' href='https://www.wanted.co.kr/community'>커뮤니티</a>
        <a className='link etc' href='https://www.wanted.co.kr/gigs/experts'>프리랜서</a>
        <a className='link etc' href='https://www.wanted.co.kr/aiscore/resume'>AI 합격예측</a>
      </div>
      <div className='header-right'>
        <Search className='header-right-item'/>
        <NotificationsNoneOutlinedIcon className='header-right-item'/>
        <MoreHorizIcon className={isNone ? classes.menu : classes.menuNone}/>
        <AccountCircleIcon className={isNone ? classes.avatarNone : classes.avatar}/>
        <div className='vertical-line'></div>
        <a href='https://www.wanted.co.kr/dashboard/companyregister' className='header-service-button'>기업서비스</a> 
      </div>
      </div>
    </div>
  )
}

export default Header
