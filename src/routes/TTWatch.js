import React from 'react';
import '../styles/TTWatch.css';

export default function TTWatch ({time, ttTime}) {
  return (
    <div className='tt-watch'>
      <p className='tt-watch__text'>{time}</p>
    </div>
  )
}