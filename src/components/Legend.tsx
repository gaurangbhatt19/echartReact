import React from 'react'
import { colorList, values } from '../recoil/atom'

const Legend:React.FC = () => {
  type itemType={
    value: number;
    name: string;
}
  const colorCode=colorList
  let totalValue=values.reduce((acc,current)=>{
    acc+=current.value
    return acc
  },0)
  return (
    <div style={{
      border:"2px solid cyan",
      borderRadius:"1em",
      marginTop:"3em",
      padding:"1em 1em",
      backgroundColor:"rgb(0, 255, 255,0.1)"
    }}>
      <ul style={{marginLeft:"-2em"}}>
      <li style={{display:"grid",justifyContent:"center",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
              <h3>Color</h3>
              <h3>Name</h3>
              <h3>Value</h3>
              <h3>Share %</h3>
            
              
            </li>
        {
          values.map((item:itemType,index:number)=>{
          
            return(
            <li key={index} style={{display:"grid",justifyContent:"center",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
              <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{backgroundColor: colorCode[index], width:"2em",height:"2em",borderRadius:"7px",marginTop:"18%"}}></div>
              </div>
              
              
              <h3>{item.name}</h3>
              <h3>{item.value}</h3>
              <h3>{Math.floor((item.value/totalValue)*100)} %</h3>
            
              
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Legend