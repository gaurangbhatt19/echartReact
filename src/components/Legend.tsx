import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { atomChart, colorList, values } from '../recoil/atom'

const Legend:React.FC<{handleFilter:any}> = (props:{handleFilter:any}) => {
  type itemType={
    value: number;
    name: string;
}
  const colorCode=colorList
  let totalValue=values.reduce((acc,current)=>{
    acc+=current.value
    return acc
  },0)

  const [alteredAtom,setAlteredAtom]=useRecoilState(atomChart)
  let atomValue=useRecoilValue(atomChart)
  return (
    <div style={{
      border:"2px solid cyan",
      borderRadius:"1em",
      marginTop:"3em",
      padding:"1em 1em",
      backgroundColor:"rgb(0, 255, 255,0.1)"
    }}>
      <ul style={{marginLeft:"-2em"}}>
        {
          alteredAtom.map((item:any,index:number)=>{
          
            return(
            <li key={index} className={!item.render?"disabled":undefined} style={{display:"grid",justifyContent:"center",gridTemplateColumns:"1fr 2fr 1fr"}} onClick={()=>{
              let values=atomValue
              var js:any=[]
              if(item.render){
                for(let i=0;i<values.length;i++){
                if(values[i].name===item.name){
                   js.push({
                    ...values[i],
                    render:false
                  })
                }else{
                  js.push(values[i])
                }
              }
              }else{
                for(let i=0;i<values.length;i++){
                  if(values[i].name===item.name){
                     js.push({
                      ...values[i],
                      render:true
                    })
                  }else{
                    js.push(values[i])
                  }
              }
            }
              setAlteredAtom(js)
            }}>
              <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{backgroundColor: !item.render?"rgb(84, 167, 167)":colorCode[index], width:"2em",height:"2em",borderRadius:"7px",marginTop:"18%"}}></div>
              </div>
              <div style={{display:"flex",justifyContent:"start"}}>
                <h3>{item.name}</h3>
              </div>
              <div style={{display:"flex",justifyContent:"start"}}>
                <h3>{item.value}</h3>
              </div>
              
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Legend