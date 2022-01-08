import React, { useState } from 'react';
import './index.scss';
import Card from '../Card.js'

function Slide() {
  const [cardSpot, setCardSpot] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const leftBtn = () => {
    setCardSpot(cardSpot - 988.59);
    setCardNum(cardNum + 1);
  }
  const rightBtn = () => {
    setCardSpot(cardSpot + 988.59);
    setCardNum(cardNum - 1);
  }
  console.log(cardSpot)
  console.log(cardNum)
  return (
    <>
    <div className='slide' style={{transform: `translateX(${cardSpot}px)`, transition: '1s'}}>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={0}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={1}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={2}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={3}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
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
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={6}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={7}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={8}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={9}/>
      <Card 
        title='개발자의 성장 비결 공개!' 
        text='글쓰는 개발자들의 이야기' 
        src='https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg'
        link='https://www.wanted.co.kr/events/velog01'
        cardNum={cardNum}
        index={10}/>
        
    </div>
    <div>
        <button className='slide-left-button' onClick={()=>leftBtn()}>좌</button>
        <button className='slide-right-button' onClick={()=>rightBtn()}>우</button>
    </div>
    </>
  )
}

export default Slide
