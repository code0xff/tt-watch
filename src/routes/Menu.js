import React from 'react';
import '../styles/Menu.css';

export default function Menu ({setTTAMPM, setTTHour, setTTMinute, countTTTime, finishTTTime, isTTTimeOn}) {
  return (
    <div className='menu'>
      <select className='menu__select' onChange={setTTAMPM}>
        <option value='AM'>AM</option>
        <option value='PM'>PM</option>
      </select>
      <select className='menu__select' onChange={setTTHour}>
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
        <option value='09'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='12'>12</option>
      </select>
      <select className='menu__select' onChange={setTTMinute}>
        <option value='00'>00</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
        <option value='50'>50</option>
      </select>
      <button 
        className={isTTTimeOn ? 'menu__button__active' : 'menu__button'} 
        onClick={countTTTime}>
          ㅌㅌ 시작
      </button>
      <button className='menu__button' onClick={finishTTTime}>ㅌㅌ 종료</button>
    </div>
  )
}