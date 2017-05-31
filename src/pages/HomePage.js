import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import MyTitle from '../components/MyTitle';
import { connect } from 'react-redux';
import update from '../services/update';
import MyMenu from '../components/MyMenu';
import MyTimer from '../components/MyTimer';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      event:{}
    }
  }
  componentWillMount(){
    const { current_data,events } = this.props;
    const event = events?events.find((ev)=>{
      return ev.id === current_data.event_id;
    }):null;
    if(event){
      this.setState({event:event})
    }
  }
  componentDidMount(){

  }
  render(){
    const { event,dispatch,current_data } = this.props;
    console.log(current_data);
    return (
      <View style={styles.main}>
        <NavBar title={'TimeSheet'} />
        <View style={styles.content}>
          <MyTitle title={current_data.project_name} label={'项目名'}/>
          <MyMenu label={'事件'} text={current_data.event_name} />
          <MyTimer event={event} dispatch={dispatch}/>
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
    events: state.current_event,
    current_data: state.current_data
  }
}

export default connect(getState)(HomePage);