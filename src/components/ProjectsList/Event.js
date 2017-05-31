import React, { Component } from 'react';
import config from '../../config';
import ev from '../../services/event';

import { connect }  from 'react-redux';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import MyDate from '../MyDate';
import edit_current_data from '../../actions/current_data/edit_current_data';

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
  render(){
    const {event} = this.props;
    return(
      <View style={styles.main}>
        <TouchableOpacity style={styles.row} onPress={this.selectEvent.bind(this)}>
          <Text style={styles.title}>{event.name}</Text>
          {
            event.run_state?
            <Text>正在进行</Text>:
            <MyDate h={1} m={3} s={2} />
          }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    padding: 5,
    height:30,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title:{
    marginLeft:10,
    fontSize:18,
  }
});

const getState =(state)=>{
  return {

  }
}

export default connect(getState)(Event);