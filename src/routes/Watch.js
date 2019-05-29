import React from 'react';
import '../styles/Watch.css';

export default function Watch ({time}) {
  return (
    <div className='watch'>
      <p className='watch__text'>{time}</p>
    </div>
  )
}