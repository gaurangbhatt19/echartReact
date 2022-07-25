import React from 'react'
import ReactECharts from 'echarts-for-react';
import { colorList, values } from '../recoil/atom';
const Chart:React.FC = () => {

const style = {
  height: "100%",
  width: "100%"
};

const option = {
  tooltip: {
    trigger: 'item'
  },
  color:colorList
  ,
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '90%'],
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
      emphasis: {
        label: {
          show: true,
          fontSize: '33',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: values
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