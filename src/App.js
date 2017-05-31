import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import SettingPage from './pages/SettingPage';
import CreateProject from './pages/CreateProject';
import NavFrame from './pages/NavFrame';
import config from './config';
import storage from './services/storage';
import { connect } from 'react-redux';
import load_events from './actions/events/load_events';
import load_projects from './actions/projects/load_projects';
import load_current_event from './actions/current_event/load_current_event';
import update from './services/update';

class App extends Component {
  componentWillMount(){
    const { projects,events,current_event,dispatch } = this.props;
    storage.load({
      key: 'ALLDATA',
      id: 'last'
    }).then(ret => {
      // 如果找到数据，则在then方法中返回
      if(!!projects&&ret.projects.length>0){
        dispatch(load_projects(ret.projects));
      }
      if(!!events && ret.events.length>0){
        dispatch(load_events(ret.events));
      }
      if(!!current_event && ret.current_event){
        dispatch(load_current_event(ret.current_event));
      }
      update.start();
    });
  }
  componentWillUnmount(){
    console.log(this.props)
    const { current_event,projects,events } = this.props;
    storage.save({
      key: 'ALLDATA',  // 注意:请不要在key中使用_下划线符号!
      id: 'last',
      data: {
        current_event,projects,events
      }
    });
  }
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <NavFrame />
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route path="/setting" component={SettingPage}/>
            <Route path="/project" component={ProjectPage}/>
            <Route path="/project_create" component={CreateProject}/>
            <Route component={NoMatch}/>
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const NoMatch = ()=>{
  return (
    <Redirect to="/home"/>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const getState = (state)=>{
  return state
};

export default connect(getState)(App);