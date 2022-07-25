import React from 'react'
import Chart from './Chart'
import Legend from './Legend'

const LayoutComponent:React.FC = () => {
  return (
    <>
    <div className="container">
    <div id="container_left">
        <Chart/>
    </div>
    <div id="container_right">
        <Legend/>
    </div>
    </div>
    </>
  )
}

export default LayoutComponent