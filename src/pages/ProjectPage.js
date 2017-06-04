import React, { Component } from 'react';

import { connect } from 'react-redux';
import { View,Text,ListView,StyleSheet,TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import ProjectListView from '../components/ProjectsList/ProjectListView';
import PopupDialog,{ SlideAnimation ,DialogButton } from 'react-native-popup-dialog';
import config from '../config';
import delete_project from '../actions/projects/delete_project';

class ProjectPage extends Component{
  constructor(props) {
    super(props);
    this.state={
      projects:[]
    }
  }
  createProject(){
    this.history.push({
      pathname: '/project_create'
    })
  }
  confirm(){
    console.log(this.pro_id);
    this.props.dispatch(delete_project(this.pro_id));
    this.popupDialog.dismiss();
  }
  delete(pro_id){
    this.pro_id = pro_id;
    this.popupDialog.show();
  }
  render(){
    const { projects,history } = this.props;
    return (
      <View>
        <NavBar title={'Project'} column={3} hide={'left'} rightEvent={this.createProject.bind(this.props)}/>
        <ProjectListView history={history} delete={this.delete.bind(this)} />
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
          width={250} height={180}
          dialogTitle={<DialogTitle title={'删除项目'} />}
        >
          <View style={{flexDirection:'column'}}>
            <View style={{height:100}}></View>
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
              <TouchableOpacity onPress={()=>this.confirm()}>
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

const getState= (state)=>{
  console.log(state);
  return{
    projects:state.projects
  }
}
const styles = StyleSheet.create({
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

export default connect(getState)(ProjectPage);