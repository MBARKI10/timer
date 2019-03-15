import React, {Component} from 'react'

class Clock extends Component {
  constructor(props){
    super(props)
    this.state = {
      sec: 0,
      min:0,
      hrs : 0,
      start: 0,
      isOn: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  startTimer() {
    this.setState({
      sec: this.state.sec,
      min: this.state.min,
      hrs: this.state.hrs,
      start: this.state.sec,
      isOn: true
    })
    this.timer = setInterval(() =>{
        
        if (this.state.sec >= 59){
            this.setState({sec:0, min : this.state.min + 1 })
        }
        
        if(this.state.min >= 59){
                this.setState({min:0 , hrs : this.state.hrs + 1})
            }
           
        
        this.setState({sec : this.state.sec + 1})
        
    },1000
        )
      
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({sec: 0, min:0, hrs:0})
  }
  render() {
    let start = (this.state.sec === 0 || this.state.min === 0 || this.state.hrs === 0) ?
      <button className='start' onClick={this.startTimer}>start</button> :
      null
    let stop = (this.state.isOn === true ) ?
      <button  className='stop' onClick={this.stopTimer}>stop</button> :
      null
    let reset = ((this.state.sec !== 0 ) && !this.state.isOn ) ?
      <button className='reset' onClick={this.resetTimer}>reset</button> :
      null
    
    return(
      <div className='timer'>
       <div className='time'>
       <h1> {this.state.hrs + ':' + this.state.min + ':' + this.state.sec} </h1>
       </div>
       
        <div className='desc'>
        <p>Hours Minutes Seconds</p>
        </div>
       <div className='btn'>
        {start}
        {stop}
        {reset}
       </div>
        
      </div>
    )
  }
}
export default Clock;