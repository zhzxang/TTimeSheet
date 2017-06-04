import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBar extends Component{
  render(){
    const { title,column=1,rightEvent,hide,leftEvent,leftIcon,rightIcon } = this.props;
    return (
      <View>
          {column > 1?(
            <View style={[styles.nav,{justifyContent: 'space-between',backgroundColor: config.draw[1]}]}>
              <TouchableOpacity onPress={leftEvent}>
                <Icon name={leftIcon?leftIcon:'plus'} style={(hide&&hide=='left')?styles.opacity:[styles.icon,{color: config.draw[3]}]}/>
              </TouchableOpacity>
              <Text style={[styles.title,{color: config.draw[3]}]}>{title}</Text>
              <TouchableOpacity onPress={rightEvent}>
                <Icon name={rightIcon?rightIcon:'plus'} style={(hide&&hide=='right')?styles.opacity:[styles.icon,{color: config.draw[3]}]}/>
              </TouchableOpacity>
            </View>
          ):(
            <View style={[styles.nav,{justifyContent: 'space-around',backgroundColor: config.draw[1]}]}>
              <Text style={[styles.title,{color: config.draw[3]}]}>{title}</Text>
            </View>
          )}
        <View style={{marginTop:50}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nav:{
    position: "absolute",
    height: 60,
    width: '100%',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
    fontSize:28,
  },
  icon:{
    fontSize:35,
  },
  opacity:{
    opacity: 0
  }
});

export default NavBar;