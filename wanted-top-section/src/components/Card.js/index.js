import React from 'react';
import './index.scss';

function Card(props) {
  const title = props.title;
  const text = props.text;
  const src = props.src;
  const link = props.link;
  const cardNum = props.cardNum;
  const index = props.index;
  let isBlock;
  if (cardNum === index-1) {
    isBlock = 'block';
  } else {
    isBlock = 'none';
  }

  return (
    <div className='card' style={{opacity:`${cardNum === index-1 ? 1 : 0.8}`}}>
      <div className='card-content' style={{display:`${isBlock}`}}>
        <h2 className='card-title'>{title}</h2>
        <div className='card-text'>{text}</div>
        <hr className='card-divider'/>
        <a className='card-link' href={link}>바로가기
        <svg className='card-icon' viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>
        </a>
      </div>
      <img onClick={()=>window.location.href=`${link}`} className='slide-img' src={src} alt='img'></img>
    </div>
  )
}

export default Card;
