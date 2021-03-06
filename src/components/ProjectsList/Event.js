import React, { Component } from 'react';
import config from '../../config';
import ev from '../../services/event';

import { connect }  from 'react-redux';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import MyDate from '../MyDate';
import edit_current_data from '../../actions/current_data/edit_current_data';
import Icon from 'react-native-vector-icons/FontAwesome';
import edit_event from '../../actions/events/edit_event';

class Event extends Component{
  selectEvent(){
    const { event,dispatch,history,key,selectProject } = this.props;
    dispatch(edit_current_data({
      event_id: event.id,
      event_name: event.name
    }))
    history.push({pathname:'/home'});
    selectProject?selectProject.call(this):null;
  }
  complete(){
    const { event,dispatch } = this.props;
    if(event.run_state&&!event.complete){
      ev.stop(event,dispatch);
    }
    dispatch(edit_event(event.id,{complete: !event.complete}))
  }
  render(){
    const {event} = this.props;
    const count_time = event?ev.caculateTime(event):{};
    return(
      <View style={styles.main}>
        <TouchableOpacity onPress={this.complete.bind(this)}>
          <Icon name="check-circle-o" size={25} color={event.complete?'#21b90f':'#ccc'}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={this.selectEvent.bind(this)}>
          <Text style={[styles.title,event.complete?{color:'#ccc'}:null]}>{event.name}</Text>
          {
            event.run_state?
            <Text style={{fontSize:18}}>正在进行</Text>:
            <MyDate complete={event.complete} h={count_time.h} m={count_time.m} s={count_time.s} />
          }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    padding: 5,
    height:40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  row:{
    flexDirection: 'row',
  },
  title:{
    flex:1,
    marginLeft:10,
    fontSize:20
  }
});

const getState =(state)=>{
  return {

  }
}

export default connect(getState)(Event);