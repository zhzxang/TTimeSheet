import React, { Component } from 'react';

import { View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import MyModal from '../components/MyModal';
import config from '../config';
import Icon from 'react-native-vector-icons/FontAwesome';

class SettingPage extends Component{
  state={
    theme: false,
  }
  render(){
    return (
      <View style={styles.main}>
        <NavBar title={'Setting'} />
        <View style={styles.content}>
          <ScrollView>
            <TouchableOpacity onPress={()=>this.props.history.push('/themeSetting')}>
              <View style={styles.list}>
                  <Text style={{fontSize: 20,marginLeft:10}}>主题设置</Text>
                  <Icon style={{marginRight:15}} name="chevron-right" size={25} color={'#ccc'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.list}>
                  <Text style={{fontSize: 20,marginLeft:10}}>清空所有数据</Text>
                  <Icon style={{marginRight:15}} name="chevron-right" size={25} color={'#ccc'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.history.push('/about')}>
              <View style={styles.list}>
                  <Text style={{fontSize: 20,marginLeft:10}}>关于TimeSheet</Text>
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


export default SettingPage;