import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import config from '../config';
import PopupDialog,{ SlideAnimation } from 'react-native-popup-dialog';


class MyDialog extends Component{
  componentDidMount(){
    const { show } = this.props;
  }
  render(){
    const { title,content } = this.props;
    return(
      <PopupDialog
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
        width={300} height={150}
        dialogTitle={<DialogTitle title={title} />}
      >
        <View>
          <Text>{content}</Text>
        </View>
      </PopupDialog>
    )
  }
}

const DialogTitle = ({title})=>{
  return(
    <View style={[styles.dialogTitle,{borderBottomColor:config.draw[3]}]}>
      <Text style={{fontSize: 22}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  dialogTitle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height:35,
    backgroundColor:'#f4f4f4',
    borderTopLeftRadius:8,
    borderTopRightRadius:8
  }
})
export default MyDialog;