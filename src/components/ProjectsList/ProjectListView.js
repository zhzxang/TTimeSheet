import React, { Component } from 'react';

import { connect } from 'react-redux';
import { View,Text,ScrollView,StyleSheet } from 'react-native';
import ProjectList from './ProjectList';

class ProjectListView extends Component{
  render(){
    return (
      <ScrollView style={{zIndex:0}}>
      {
        this.props.projects.map((project,key)=>(<ProjectList delete={this.props.delete} project={project} key={key} history={this.props.history}/>))
      }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})

const getState= (state)=>{
  console.log(state);
  return{
    projects:state.projects
  }
}

export default connect(getState)(ProjectListView);