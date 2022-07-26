import React, { useState } from 'react'
import Chart from './Chart'
import Legend from './Legend'

const LayoutComponent:React.FC = () => {
  const [filter,setFilter]=useState<string[]>([])
  function handleFilter(text:string){
    setFilter([text,...filter])
  }
  
  return (
    <>
    <div className="container">
    <div id="container_left">
        <Chart filter={filter}/>
    </div>
    <div id="container_right">
        <Legend handleFilter={handleFilter}/>
    </div>
    </div>
    </>
  )
}

export default LayoutComponent