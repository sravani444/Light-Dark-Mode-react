import {Component} from 'react'
import './index.css'

import LightMode from '../LightMode'
import DarkMode from '../DarkMode'

class LightDarkMode extends Component{
  state = {isDark : false}

  onClickButton = () => {
    this.setState (prevState => ({
      isDark : !prevState.isDark,
    }))
  }
  render() {
    const {isDark} = this.state

    return (
      <div className='container'>
        <div className='list-items'>
          {isDark ? (
            <div className='light-bg-container'>
              <h1 className='headlight'>Click to change Mode</h1>
              <LightMode lightmode  = {this.onClickButton} />
            </div>
          ):
          (
            <div className='dark-bg-container'>
                <h1 className='headdark'>Click To Change Mode</h1>
                <DarkMode darkmode  = {this.onClickButton} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode;