import React, { Component } from 'react';

import { View,Text,StyleSheet,TouchableOpacity,Animated } from 'react-native';
import NavBar from '../../components/NavBar';
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class CompleteEvent extends Component{
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  save(){

  }
  componentDidMount() {
    this.state.bounceValue.setValue(400);
    Animated.timing(
      this.state.bounceValue,
      {
        duration: 3,

      }
    ).start();
  }
  render(){
    return (
      <Animated.View style={[styles.main,{
        top: this.state.bounceValue

      }]}>
        <NavBar
          title={'完成事件'}
          column={3}
          rightIcon = {'check'}
          rightEvent={this.save.bind(this)}
          leftIcon={'arrow-left'}
          leftEvent={()=>this.props.history.goBack()} />
        <View style={styles.content}>
        </View>
      </Animated.View>
    )
  }

}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
  },
  content:{
    padding: 5,
    marginTop: 5,
  }
})

const getState =(state,ownProps)=>{
  const event_id = ownProps.location.search.substring(1);
  return {
    event: state.events.find(ev=>ev.id===event_id),
  }
}

export default connect(getState)(CompleteEvent);