import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import config from '../config';

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:new Date().Format("yyyy-MM-dd")}
  }
  setDate(date){
    this.setState({date:date});
    this.props.date.call(this,date);
  }
  render(){
    return (
      <DatePicker
        style={{width: 150}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="确定"
        cancelBtnText="取消"
        showIcon={false}
        customStyles={{
          dateInput: {
            borderWidth: 2,
            padding: 5,
            borderColor: config.draw[1],
            borderRadius: 6
          },
          dateText:{
            fontSize: 20
          }
        }}
        onDateChange={this.setDate.bind(this)}
      />
    )
  }
}