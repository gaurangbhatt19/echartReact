import React from 'react'
import ReactECharts from 'echarts-for-react';
import { atomChart, chartValues, colorList, values } from '../recoil/atom';
import { useRecoilValue } from 'recoil';
const Chart:React.FC<{filter: string[]}> = (props:{filter: string[]}) => {
let atomvalue=useRecoilValue(atomChart)

const style = {
  height: "100%",
  width: "100%"
};

const option = {
  tooltip: {
    trigger: 'item'
  },
  color:atomvalue.filter(value=>value.render).map(item=>item.color)
  ,
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
      emphasis: {
        label: {
          show: true,
          fontSize: '33',
          fontWeight: 'bold',
          formatter:(d:any)=>{
            return d.value.toString()+"\n\n"+d.name.toString();
          }
        }
      },
      labelLine: {
        show: false
      },
      // values.filter(value => !props.filter.includes(value.name))
      data: atomvalue.filter(value => value.render).map(value => value)
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