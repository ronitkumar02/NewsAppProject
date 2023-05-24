import React, { Component } from 'react'
import Loading from './Pulse.svg'

export default class Sippner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading" width={'100px'}/>
      </div>
    );
  }
}

