import React, { Component } from 'react';

import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Route, Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../config';

class NavFrame extends Component{
  render(){
    return (
      <View style = {styles.navBar_bottom}>
        <ChoseLink
          to="/project"
          component={TouchableOpacity}
          selected = {ProjectIcon_selected}
          unselect = {ProjectIcon_unselect}
        />
        <ChoseLink
          to="/home"
          component={TouchableOpacity}
          selected = {HomeIcon_selected}
          unselect = {HomeIcon_unselect}
        />
        <ChoseLink
          to="/setting"
          component={TouchableOpacity}
          selected = {SettingIcon_selected}
          unselect = {SettingIcon_unselect}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  navBar_bottom:{
    position: "absolute",
    height: 60,
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});


const ChoseLink = ({ unselect,selected, to , exact })=>{
  return (
    <Route path={to} exact = {exact?true:false} children={({match})=>{
      return (
        <Link 
          component={TouchableOpacity}
          activeOpacity={0.5}
          to ={to}>

          {match?selected:unselect}
        </Link>
      )}
    } />
)};

const HomeIcon_selected = (<Icon name='home' size={40}  color={config.draw[1]} />);
const HomeIcon_unselect = (<Icon name='home' size={40}  color={"#ccc"}/>);
const ProjectIcon_selected = (<Icon name='list-alt' size={30} color={config.draw[1]} />);
const ProjectIcon_unselect = (<Icon name='list-alt' size={30} color={"#ccc"}/>);
const SettingIcon_selected = (<Icon name='cog' size={30} color={config.draw[1]} />);
const SettingIcon_unselect = (<Icon name='cog' size={30} color={"#ccc"} />);

export default NavFrame;