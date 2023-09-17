import React, { Component } from 'react'
import loading from "./loading.gif"

export class spinner extends Component {
  render() {
    return (
      <div className='flex justify-center m-[14%]'> 
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner
