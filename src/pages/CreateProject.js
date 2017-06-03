import React, { Component } from 'react';

import { connect } from 'react-redux';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import NavBar from '../components/NavBar';
import MyDatePicker from '../components/MyDatePicker';

import config from '../config';
import create_project from '../actions/projects/create_project';

class CreateProject extends Component{
  state={
    name:'',
    startDate:new Date().Format("yyyy-MM-dd"),
    context: ''
  }
  back(){
    this.props.history.goBack();
  }
  save(){
    const { name,startDate,context }  = this.state;
    this.props.dispatch(create_project(name,startDate,context));
    this.props.history.goBack();
  }
  startDate(date){
    this.setState({startDate:date})
  }
  render(){
    return (
      <View style={styles.main}>
        <NavBar
        title={'创建项目'}
        column={3}
        rightIcon = {'check'}
        rightEvent={this.save.bind(this)}
        leftIcon={'arrow-left'}
        leftEvent={this.back.bind(this)} />
        <View style={styles.context}>
          <Text style={styles.font}>项目名称：</Text>
          <TextInput
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            underlineColorAndroid={config.draw[1]}
          />
          <View style={styles.row}>
            <Text style={[styles.font,{flex:1}]}>开始时间：</Text>
            <MyDatePicker style={[{flex:1}]} date={this.startDate.bind(this)}/>
          </View>
          <Text style={styles.font}>项目说明：</Text>
          <TextInput
            onChangeText={(context) => this.setState({context})}
            value={this.state.context}
            style={[styles.bigInput,{borderColor: config.draw[1]}]}
            multiline={false}
            numberOfLines={5}
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column'
  },
  context:{
    padding: 20
  },
  font:{
    fontSize:20,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  bigInput:{
    borderWidth: 1,
    fontSize:20,
    alignItems: 'flex-start'
  }
})

const getState=(state)=>{
  return {

  }
}

export default connect(getState)(CreateProject);