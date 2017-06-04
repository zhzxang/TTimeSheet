import React, { Component } from 'react';

import { View,Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import NavBar from '../components/NavBar';
import MyTitle from '../components/MyTitle';
import { connect } from 'react-redux';
import update from '../services/update';
import MyMenu from '../components/MyMenu';
import MyTimer from '../components/MyTimer';

import config from '../config';
import edit_event from '../actions/events/edit_event';
import edit_current_data from '../actions/current_data/edit_current_data';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      event:{}
    }
  }
  off(){
    this.dispatch(edit_event(this.props.current_data.event_id,{content:this.state.event_context}))
    this.popupDialog.dismiss();
  }
  componentWillUpdate(){
  }
  render(){
    const { event,dispatch,current_data } = this.props;
    return (
      <View style={styles.main}>
        <NavBar title={'TimeSheet'} />
        <View style={styles.content}>
          <MyTitle title={current_data.project_name} label={'项目名'}/>
          <MyMenu label={'事件'} text={current_data.event_name} />
          <MyTimer eventId={current_data.event_id} dispatch={dispatch} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main:{
    flexDirection: 'column'
  },
  content:{
    padding: 10
  }
})

const getState=(state)=>{
  return {
    events: state.events,
    current_data: state.current_data,
  }
}

export default connect(getState)(HomePage);