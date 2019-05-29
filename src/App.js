import React, {Component} from 'react'
import './styles/App.css'
import Watch from './routes/Watch'
import Menu from './routes/Menu'
import StringJoiner from './utils/StringJoiner'

export default class App extends Component {
  state={timeIntervalId: null, time: null, isTTTimeOn: false, ampm: 'AM', hour: '01', minute: '00'}

  componentDidMount () {
    const timeIntervalId = setInterval(this._setTime, 1000)

    this.setState({timeIntervalId: timeIntervalId})
  }

  _setTime = () => {
    this.setState({time: this._getTime()})
  }

  _getTime = () =>  {
    const date = new Date()

    const hour = this._createFullTimeText(date.getHours())
    const minute = this._createFullTimeText(date.getMinutes())
    const second = this._createFullTimeText(date.getSeconds())

    return new StringJoiner(' ')
      .append(hour + '시')
      .append(minute + '분')
      .append(second + '초')
      .toString()
  }

  _createFullTimeText = (timeValue) => {
    return timeValue < 10 ? '0' + timeValue : timeValue
  }

  _setTTAMPM = (e) => {
    this.setState({ampm: e.target.value})
  }

  _setTTHour = (e) => {
    this.setState({hour: e.target.value})
  }

  _setTTMinute = (e) => {
    this.setState({minute: e.target.value})
  }

  _countTTTime = () => {
    const {timeIntervalId, ampm, hour, minute, isTTTimeOn} = this.state
    if (isTTTimeOn) return
    clearInterval(timeIntervalId)

    const ttTime = new Date()
    ttTime.setHours(ampm === 'PM' ? parseInt(hour) + 12 : hour)
    ttTime.setMinutes(minute)
    ttTime.setSeconds(0)
    
    const newTimeIntervalId = setInterval(() => this._setTTTime(ttTime), 1)
    this.setState({timeIntervalId: newTimeIntervalId, isTTTimeOn: true})
  }

  _finishTTTime = () => {
    const {timeIntervalId} = this.state
    clearInterval(timeIntervalId)

    const newTimeIntervalId = setInterval(this._setTime, 1000)
    this.setState({timeIntervalId: newTimeIntervalId, isTTTimeOn: false})
  }

  _setTTTime = (ttTime) => {
    const remainingTime = ttTime.getTime() - new Date().getTime();
    this.setState({time: 'ㅌㅌ까지 ' + (remainingTime >= 0 ? remainingTime : 0) + '초 남았습니다!'})
  }

  render () {
    const {time, isTTTimeOn} = this.state

    return (
      <div className='app'>
        <Menu 
          setTTAMPM={this._setTTAMPM}
          setTTHour={this._setTTHour}
          setTTMinute={this._setTTMinute}
          countTTTime={this._countTTTime}
          finishTTTime={this._finishTTTime}
          isTTTimeOn={isTTTimeOn}
        />
        <Watch time={time}/>
      </div>
    )
  }
}