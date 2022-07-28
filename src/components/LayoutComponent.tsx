import React, { useState } from 'react'
import { chartValues } from '../db'
import { chartValuesType } from '../types/valueTypes'
import Chart from './Chart'
import Legend from './Legend'

const LayoutComponent:React.FC = () => {
  const [filterValues,setFilterValues]=useState<chartValuesType[]>(chartValues)
  return (
    <>
    <div className="container">

    <div id="container_left">
        <Chart filterValues={filterValues}/>
    </div>

    <div id="container_right">
        <Legend setFilterValues={setFilterValues} filterValues={filterValues} />
    </div>
    
    </div>
    </>
  )
}

export default LayoutComponent