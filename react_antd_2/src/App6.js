import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DatePicker,Input, Button} from 'antd'
import moment  from 'moment';

const MonthPicker = DatePicker.MonthPicker
const RangePicker = DatePicker.RangePicker
const WeekPicker = DatePicker.WeekPicker

class App6 extends Component {

  constructor(props){
    super(props)

  }
  // 当返回true的时候，是不能选择
  disabledDate(currentDate){
    return currentDate && currentDate < moment().endOf('day')
  }

  disabledTime(date){
    return {
      disabledHours:()=>[0,1,2],
      disabledMinutes:()=>[1,2,3,4,5],
      disabledSeconds:()=>[4,5,6]
    }
  }

  render() {
  
    return (
      <div>
        <DatePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"></DatePicker>
        <MonthPicker></MonthPicker>
        <RangePicker
          ranges={{"Today":[moment(),moment()],
          "this Month":[moment().startOf("month"),moment().endOf("month")],
          "this year":[moment().startOf("year"),moment().endOf("year")]
          }}
        ></RangePicker>
        <WeekPicker></WeekPicker>

        <br/>
        <DatePicker disabledDate={this.disabledDate}
          disabledTime = {this.disabledTime}
          showTime
          renderExtraFooter={()=><div><Input/><Button>xxx</Button></div>}
          dateRender={(current)=>{
            console.log(current.date())
            const style={}
            if(current.date()===1){
              style.border ="1px solid #F00"
              style.borderRadius = "50%"
            }
            return (<div style={style} className="ant-calendar-date">{current.date()}</div>)
          }

          }
        ></DatePicker>

      </div>
    );
  }
}

export default App6;
