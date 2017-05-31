import React, { Component } from 'react';

import { connect } from 'react-redux';
import { View,Text,ListView } from 'react-native';
import NavBar from '../components/NavBar';
import ProjectListView from '../components/ProjectsList/ProjectListView';

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
  
  render(){
    const { projects,history } = this.props;
    return (
      <View>
        <NavBar title={'Project'} column={3} hide={'left'} rightEvent={this.createProject.bind(this.props)}/>
        <ProjectListView history={history}/>
      </View>
    )
  }
}

const getState= (state)=>{
  console.log(state);
  return{
    projects:state.projects
  }
}

export default connect(getState)(ProjectPage);