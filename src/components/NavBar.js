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
            <View style={[styles.nav,{justifyContent: 'space-between'}]}>
              <TouchableOpacity onPress={leftEvent}>
                <Icon name={leftIcon?leftIcon:'plus'} style={(hide&&hide=='left')?styles.opacity:styles.icon}/>
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={rightEvent}>
                <Icon name={rightIcon?rightIcon:'plus'} style={(hide&&hide=='right')?styles.opacity:styles.icon}/>
              </TouchableOpacity>
            </View>
          ):(
            <View style={[styles.nav,{justifyContent: 'space-around'}]}>
              <Text style={styles.title}>{title}</Text>
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
    height: 50,
    width: '100%',
    top: 0,
    backgroundColor: config.draw[1],
    flexDirection: 'row',
    alignItems: 'center',
    
    paddingLeft: 10,
    paddingRight: 10,
  },
  title:{
    fontSize:22,
    color: config.draw[3]
  },
  icon:{
    fontSize:25,
    color: config.draw[3]
  },
  opacity:{
    opacity: 0 
  }
});

export default NavBar;