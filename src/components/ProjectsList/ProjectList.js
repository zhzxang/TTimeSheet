import React, { Component } from 'react';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,View,Text,TouchableOpacity,TextInput } from 'react-native';
import config from '../../config';
import MyInput from '../MyInput';
import create_event from '../../actions/events/create_event';
import Event from './Event';
import ProjectView from './ProjectView';
import ProjectOption from './ProjectOption';
import CreateEvent from './CreateEvent';
import MyModal from '../MyModal';

class ProjectList extends Component{
  state={
    show_detail:false,
    create_ev: false,
    ev_name:'', 
    modalVisible: false
  }
  createEvent(ev_name){
    this.props.dispatch(create_event(ev_name,this.props.project.id));
    this.setState({create_ev:false});
  }
  setText(text){
    this.setState({ev_name:text});
  }
  deleteProject(){
    this.setState({modalVisible:true});
  }
  render(){
    const { project,events } = this.props;
    return (
      <View style={styles.main}>
        <ProjectView 
          project={project} 
          onPress={()=>this.setState({show_detail:!this.state.show_detail})} 
          show_detail={this.state.show_detail}/>
        {
          (this.state.show_detail&&this.state.create_ev)?
          <CreateEvent 
            createEvent={this.createEvent.bind(this)} 
            cancel={()=>this.setState({create_ev:false})}/>:null
        }
        {
          (this.state.show_detail&&!this.state.create_ev)?
          <ProjectOption 
            goCreateEvent={()=>this.setState({create_ev:true})} 
            deleteProject={this.deleteProject.bind(this)} />:null
        }
        {
          this.state.show_detail&&events.map((event,key)=>{
            return (event.project_id === project.id)?<Event event={event} key ={key} history={this.props.history}/>:null;
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
    padding: 5,
  }
})

const getState=(state)=>{
  console.log(state.events);
  return{
    events: state.events,
    projects: state.projects
  }
}

export default connect(getState)(ProjectList);