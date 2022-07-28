import React from 'react'
import ReactECharts from 'echarts-for-react';
import { chartValuesType } from '../types/valueTypes';
const Chart:React.FC<{filterValues:chartValuesType[]}> = (props:{filterValues:chartValuesType[]}) => {

let totalValue=props.filterValues.filter(value=>value.render).reduce((sum,val) => {
  return sum+val.value
},0)

const style = {
  height: "100%",
  width: "100%"
};

const option = {
  tooltip: {
    trigger: 'item'
  },
  color:props.filterValues.filter(value=>value.render).map(item=>item.color)
  ,
  title:[
    {
      text: 'Total Sales\n\n'+totalValue,
      left: '50%',
      top:"43%",
      textAlign: 'center',
      textStyle:{
        fontSize:"2em"
      }
    }
  ],
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['55%', '90%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      data: props.filterValues.filter(value => value.render).map(value => value)
    }
  ]
};
 
  return (
    <>
    <ReactECharts option={option} style={style}/>
    </>
  )
}

export default Chart