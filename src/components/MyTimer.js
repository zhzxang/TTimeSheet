import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import ev from '../services/event';
import Icon from 'react-native-vector-icons/FontAwesome';

class MyTimer extends Component{

  continue(){
    console.log('continue');
  }
  pause(){
    console.log('pause');
  }
  off(){

  }
  render(){
    const { event } = this.props;
    let test={
      h: '01',
      m: '02',
      s: '03'
    }
    return (
      <View style={styles.main}>
        <View style={styles.row}>
          <Time text={test.h} label={'H'} border={1}/>
          <Time text={test.m} label={'M'} border={1}/>
          <Time text={test.s} label={'S'} />
        </View>
        <View style={[styles.row,{borderTopWidth: 1,borderTopColor: config.draw[0]}]}>
        {
          event.run_state?<Continue onContinue={this.continue.bind(this)} />:<Pause onPause={this.pause.bind(this)} />
        }
        <Over onOver={this.off.bind(this)} />
        </View>

      </View>
    )
  }
}

const Time=({text,label,border})=>(
  <View style={[styles.timer,border?styles.border:{}]}>
    <Text style={styles.time}>{text}</Text>
    <Text style={styles.time_label}>{label}</Text>
  </View>
);

const Continue = ({onContinue})=>(
  <View style={styles.icon_position}>
    <TouchableOpacity onPress={onPause}>
      <Icon name="play" size={30} color={'#ec3051'}/>
    </TouchableOpacity>
  </View>
);

const Pause = ({onPause})=>(
  <View style={styles.icon_position}>
    <TouchableOpacity onPress={onPause}>
      <Icon name="pause" size={30} color={'#33c641'}/>
    </TouchableOpacity>
  </View>
);
const Over = ({onOver})=>(
  <View style={styles.icon_position}>
    <TouchableOpacity onPress={onOver}>
      <Icon name="power-off" size={30}/>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  time:{
    fontSize: 45,
    fontFamily: 'STHupo',
    fontWeight: 'bold',
  },
  time_label:{
    marginTop: 18,
    fontSize: 14
  },
  icon_position:{
    flex:1,
    alignItems: 'center',
  },
  timer:{
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15

  },
  border:{
    borderRightWidth: 1,
    borderRightColor: config.draw[0]
  },
  main:{
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: config.draw[0],
    borderRadius: 10
  },
  row:{
    flexDirection: 'row',
    padding:10
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    marginTop:10
  },
  divider:{
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: config.draw[1],
    width: '70%'
  }
});

export default MyTimer;