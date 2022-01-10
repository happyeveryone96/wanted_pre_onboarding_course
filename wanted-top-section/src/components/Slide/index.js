import React, { useState } from 'react';
import './index.scss';
import Card from '../Card.js'
import { makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Slide() {
  const [cardSpot, setCardSpot] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const [transitionTime, setTransitionTime] = useState(1);
  const leftBtn = () => {
    setCardSpot(cardSpot - 988.59);
    setCardNum(cardNum + 1);
    if (transitionTime === 0) {
      setTransitionTime(transitionTime + 1);
    }
    if (cardNum === 10) {
      setTimeout(function() {
        setCardNum(cardNum - 10);
        setCardSpot(cardSpot + 9885.9);
        setTransitionTime(transitionTime - 1);
      },500);
    } 
  }

  const rightBtn = () => {
    setCardSpot(cardSpot + 988.59);
    setCardNum(cardNum - 1);
    if (transitionTime === 0) {
      setTransitionTime(transitionTime + 1);
    }
    if (cardNum === 0) {
      setTimeout(function() {
        setCardNum(cardNum + 10);
        setCardSpot(cardSpot - 9885.9);
        setTransitionTime(transitionTime - 1);
      },500);
    } 
  }
  const useStyles = makeStyles((theme) => ({
    leftBtn: {
      width:'15px',
      position:'relative',
      left:'3px'
    },
    rightBtn: {
      width:'15px',
    }
  }))
  const classes = useStyles();

  let initialX = null;

  function initTouch(e) {
    initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
  };

  function swipeDirection(e) {
    if (initialX !== null) {
      const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`;

      let diffX = initialX - currentX;
      if (transitionTime === 0) {
        setTransitionTime(transitionTime + 1);
      }
      if (0 < diffX && diffX !== 0) {
        console.log(diffX);

        setCardSpot(cardSpot - 988.59);
        setCardNum(cardNum + 1);
        if (cardNum === 10) {
          setCardNum(cardNum - 10);
          setCardSpot(cardSpot + 9885.9);
          setTransitionTime(transitionTime - 1);
        } 
      } else if (0 > diffX && diffX !== 0){
        setCardSpot(cardSpot + 988.59);
        setCardNum(cardNum - 1);
        if (cardNum === 0) {
          setCardNum(cardNum + 10);
          setCardSpot(cardSpot - 9885.9);
          setTransitionTime(transitionTime - 1);
        } 
      }
      initialX = null;
    }
  }
  const container = document.getElementById('container');
  console.log(window.innerWidth);
  container?.addEventListener("touchstart", initTouch);
  container?.addEventListener("touchmove", swipeDirection);

  container?.addEventListener("mousedown", (e) => {
    initTouch(e);
    container?.addEventListener("mousemove", swipeDirection)
  });
  container?.addEventListener("mouseup", () => {
    document?.removeEventListener("mousemove", swipeDirection);
    container.onmouseup = null;
  });



  return (
    <div>
    <div id='container' className='slide' style={{transform: `translateX(${cardSpot}px)`, transition: `${transitionTime}s`}}>
      <Card 
        title='유저 경험을 설계하라!' 
        text='문제를 해결하는 프로덕트 디자인' 
        src='https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg'
        link='https://www.wanted.co.kr/events/wantedcon22'
        cardNum={cardNum}
        index={0}/>
      <Card 
        title='해, 커리어 EP 02 공개' 
        text='최종 발표를 위한 마지막 관문 2라운드의 승자는?' 
        src='https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg'
        link='https://www.youtube.com/watch?v=VLiACiB2lXw&feature=youtu.be'
        cardNum={cardNum}
        index={1}/>
      <Card 
        title='마케터를 위한 데이터' 
        text='잘 나가는 마케터는 무엇이 다를까!?' 
        src='https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg'
        link='https://www.wanted.co.kr/events/livetalk36'
        cardNum={cardNum}
        index={2}/>
      <Card 
        title='믿을 것은 데이터 뿐!' 
        text='요즘 데이터팀은 어떻게 일할까?' 
        src='https://static.wanted.co.kr/images/banners/1451/725c6862.jpg'
        link='https://www.wanted.co.kr/events/wantedcon18'
        cardNum={cardNum}
        index={3}/>
      <Card 
        title='아는 만큼 보인다!' 
        text="노동법 '채용' 시리즈" 
        src='https://static.wanted.co.kr/images/banners/1454/e504b006.jpg'
        link='https://www.wanted.co.kr/events/21_07_s05_t01'
        cardNum={cardNum}
        index={4}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={5}/>
      <Card 
        title='스타벅스 굿즈 좋아하세요?' 
        text='사랑받는 디자인의 비밀' 
        src='https://static.wanted.co.kr/images/banners/1438/015566ac.jpg'
        link='https://www.wanted.co.kr/events/21_07_s06_b04'
        cardNum={cardNum}
        index={6}/>
      <Card 
        title='Git? GitHub?' 
        text='협업 필수 도구 마스터하기' 
        src='https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg'
        link='https://www.wanted.co.kr/events/git_github'
        cardNum={cardNum}
        index={7}/>
      <Card 
        title='나도 개발자 되고 싶다' 
        text='프론트엔드 무료 교육과정 참여하기' 
        src='https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg'
        link='https://www.wanted.co.kr/events/pre_onboarding_course_6'
        cardNum={cardNum}
        index={8}/>
      <Card 
        title='리크루터 커리어 가이드' 
        text='싼마이 리크루터가 되지 않기 위해' 
        src='https://static.wanted.co.kr/images/banners/1453/7a978579.jpg'
        link='https://www.wanted.co.kr/events/careertalk07'
        cardNum={cardNum}
        index={9}/>
      <Card 
        title='요즘 MD가 일하는 방법' 
        text='실무자가 공개하는 MD 커리어의 모든 것!' 
        src='https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg'
        link='https://www.wanted.co.kr/events/careertalk16'
        cardNum={cardNum}
        index={10}/>
      <Card 
        title='유저 경험을 설계하라!' 
        text='문제를 해결하는 프로덕트 디자인' 
        src='https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg'
        link='https://www.wanted.co.kr/events/wantedcon22'
        cardNum={cardNum}
        index={11}/>
     <Card 
        title='해, 커리어 EP 02 공개' 
        text='최종 발표를 위한 마지막 관문 2라운드의 승자는?' 
        src='https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg'
        link='https://www.youtube.com/watch?v=VLiACiB2lXw&feature=youtu.be'
        cardNum={cardNum}
        index={12}/>
        
    </div>
    <div>
      <button className='slide-left-button' onClick={()=>leftBtn()}>
        <ArrowBackIosIcon className={classes.leftBtn}/>
      </button>
      <button className='slide-right-button' onClick={()=>rightBtn()}>
        <ArrowForwardIosIcon className={classes.rightBtn}/>
      </button>
    </div>
    </div>
  )
}

export default Slide
