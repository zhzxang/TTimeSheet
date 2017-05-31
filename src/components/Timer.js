import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({

  border:{
    margin:10,
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  title:{
    fontSize:12,
    fontWeight: 'bold',
  },
  timer:{

    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  time:{
    color: '#000',
    fontSize: 40,
    padding: 10,
    fontWeight: '800',
    fontFamily: '黑体',
  },
  timeOptionLeft:{
    position: 'absolute',
    left: 10,
    top: 10,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  timeOptionRight:{
    position: 'absolute',
    right: 10,
    top: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  timeIconLeft:{
    color: '#6dafc3',
    fontSize: 30,
    padding: 10,
  },
  timeIconRight:{
    color: '#d2d2d2',
    fontSize: 30,
    padding: 10,
  },
  complete_color:{
    color: '#26b516',
  }
})

export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state={
      playIcon: "play-circle-o",
      date: {h:0,m:0},
      complete:'false',
    }
  };
  componentDidMount(){
    updateService.updateFn(this.update,'Timer');
  };
  timeCount=()=>{
    const { project } = this.props;
    project.running = !project.running;

    this.setState({
      playIcon: project.running?'pause-circle-o':'play-circle-o',
    })
    if(project.running == false ){
      project.stop_time = new Date().Format("yyyy-MM-dd hh:mm:ss");
      project.timeHistory.push([project.start_time,project.stop_time]);
      const date = timeService.caculateAll(this.props.project.timeHistory)
      this.setState({date: date})
    }

    if(project.running == true )
      project.start_time = new Date().Format("yyyy-MM-dd hh:mm:ss");
    this.update();
  };
  complete =()=>{
  };
  render() {
    const { project } = this.props;
    const { playIcon,date } = this.state;
    return (
      <View style={styles.root}>
        <View style={styles.border}>
          <Text style={styles.title}>计时器</Text>
          <Text>{project.create_time}</Text>
            <View style={styles.timer}>
              <TouchableOpacity style={styles.timeOptionLeft} onPress={this.timeCount}>
                <Icon name={playIcon} style={styles.timeIconLeft}></Icon>
              </TouchableOpacity>
              <Text style={styles.time}>{date.h}</Text>
              <Text style={styles.time}>:</Text>
              <Text style={styles.time}>{date.m}</Text>
              <TouchableOpacity style={[styles.timeOptionRight]} onPress={this.complete}>
                <Icon name='check-circle-o' style={[styles.timeIconRight,this.state.complete&&styles.complete_color]}></Icon>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}