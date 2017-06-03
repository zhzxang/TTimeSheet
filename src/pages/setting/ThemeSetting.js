import React, { Component } from 'react';

import { View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import NavBar from '../../components/NavBar';
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';
import edit_current_data from '../../actions/current_data/edit_current_data';
import { connect } from 'react-redux';

class ThemeSetting extends Component{
  back(){
    this.props.history.goBack();
  }
  setTheme(theme){
    this.props.dispatch(edit_current_data({config_theme:theme}));
    if(theme==='black'){
      config.setBlack();
    }
    if(theme==='blue')
      config.setBlue();
    if(theme==='red')
      config.setRed();
    this.props.history.goBack();
  }
  render(){
    return (
      <View style={styles.main}>
        <NavBar
          title={'主题设置'}
          column={3}
          hide={'right'}
          leftIcon={'arrow-left'}
          leftEvent={this.back.bind(this)}/>
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity onPress={()=>this.setTheme('black')}>
              <View style={styles.list}>
                  <Text style={{fontSize: 20,marginLeft:10}}>黑色</Text>
                  <Icon style={{marginRight:15}} name="chevron-right" size={25} color={'#ccc'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setTheme('blue')}>
              <View style={styles.list}>
                  <Text style={{fontSize: 20,marginLeft:10}}>蓝色</Text>
                  <Icon style={{marginRight:15}} name="chevron-right" size={25} color={'#ccc'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setTheme('red')}>
              <View style={styles.list}>
                  <Text style={{fontSize: 20,marginLeft:10}}>红色</Text>
                  <Icon style={{marginRight:15}} name="chevron-right" size={25} color={'#ccc'} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
  },
  content:{
    padding: 5
  },
  list:{
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const getState = state=>{
  return {

  }
}

export default connect(getState)(ThemeSetting);