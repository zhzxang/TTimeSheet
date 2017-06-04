import React, { Component } from 'react';

import { View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import MyModal from '../components/MyModal';
import config from '../config';
import Icon from 'react-native-vector-icons/FontAwesome';

import PopupDialog,{ SlideAnimation ,DialogButton } from 'react-native-popup-dialog';
import Storage from '../services/storage';
import clear_all from '../actions/clear_all';

class SettingPage extends Component{
  state={
    theme: false,
  }
  confirm(){
    Storage.clearMap();
    this.props.dispatch(clear_all());
    this.props.history.push('/home')
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
            <TouchableOpacity onPress={()=>this.popupDialog.show()}>
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
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
          width={250} height={180}
          dialogTitle={<DialogTitle title={'确定清空数据'} />}
        >
          <View style={{flexDirection:'column'}}>
            <View style={{height:100}}>
              <Text style={{fontSize:20,textAlign: 'center'}}>
                共计{this.props.length}条数据
              </Text>
            </View>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-around',
              borderTopWidth:1,
              borderTopColor:config.draw[0]}}
              >
              <TouchableOpacity onPress={()=>this.popupDialog.dismiss()}>
                <Text style={{fontSize:20,marginTop:5}}>
                  取消
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.confirm.bind(this)}>
                <Text style={{fontSize:20,marginTop:5}}>
                  确定
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </PopupDialog>
      </View>
    )
  }
}

const DialogTitle = ({title})=>{
  return(
    <View style={[styles.dialogTitle]}>
      <Text style={{fontSize: 22}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
  },
  content:{
    padding: 5,
    marginTop: 5
  },
  list:{
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dialogTitle:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    height:40,
    backgroundColor:'#f4f4f4',
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    borderBottomWidth:1
  },
})

const getState=state=>{
  return {
    length: state.events.length+state.projects.length
  }
}
export default connect(getState)(SettingPage);