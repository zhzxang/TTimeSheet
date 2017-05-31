import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import MyTitle from '../components/MyTitle';
import { connect } from 'react-redux';
import update from '../services/update';
import MyMenu from '../components/MyMenu';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={
      cp:{}
    }
  }
  componentWillMount(){
    update.register(this.update.bind(this));
  }
  componentDidMount(){
    this.update();
  }
  update(){
    const { event,projects } = this.props;
    console.log(this.props)
    const cp = projects.find((p)=>{
      return p.id === event.project_id;
    });
    if(cp){
      this.setState({cp:cp})
    }
  }
  render(){
    const { event } = this.props;
    return (
      <View style={styles.main}>
        <NavBar title={'TimeSheet'} />
        <View style={styles.content}>
          <MyTitle title={this.state.cp.name} label={'项目名'}/>
          <MyMenu label={'项目名'} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column'
  },
  content:{
    padding: 10
  }
})

const getState=(state)=>{
  return {
    event: state.current_event,
    projects: state.projects
  }
}

export default connect(getState)(HomePage);