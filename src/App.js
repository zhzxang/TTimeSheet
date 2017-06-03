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
import ThemeSetting from './pages/setting/ThemeSetting';
import About from './pages/setting/About';

import config from './config';
import storage from './services/storage';
import { connect } from 'react-redux';
import load_events from './actions/events/load_events';
import load_projects from './actions/projects/load_projects';
import load_current_event from './actions/current_event/load_current_event';
import edit_current_data from './actions/current_data/edit_current_data';
import edit_event from './actions/events/edit_event';
import update from './services/update';
import ev from './services/event';

class App extends Component {
  componentWillMount(){
    const { projects,events,current_data,dispatch } = this.props;
    storage.load({
      key: 'ALLDATA',
      id: 'last'
    }).then(ret => {
      // 如果找到数据，则在then方法中返回
      console.log('storage:',ret)
      if(!!projects&&ret.projects.length>0){
        dispatch(load_projects(ret.projects));
      }
      if(!!events && ret.events.length>0){
        dispatch(load_events(ret.events));
      }
      if(!!current_data && ret.current_data){
        dispatch(edit_current_data(ret.current_data));
        const current_ev = ret.events.find(ev=>ev.id===ret.current_data.event_id)
        if(current_ev&&current_ev.run_state){
          ev.updateTime(current_ev,dispatch);
        }
        if(current_data.config_theme === 'black'){
          config.setBlack();
        }
        else if(current_data.config_theme === 'red'){
          config.setRed();
        }
        else if(current_data.config_theme === 'blue'){
          config.setBlue();
        }
      }
    }).catch(err=>{
      console.log(err);
    });
  }
  componentWillUnmount(){
    console.log('save in storage:',this.props)
    const { current_data,projects,events } = this.props;
    ev.clear();
    storage.save({
      key: 'ALLDATA',  // 注意:请不要在key中使用_下划线符号!
      id: 'last',
      data: {
        current_data,projects,events
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
            <Route path="/themeSetting" component={ThemeSetting}/>
            <Route path="/about" component={About}/>
            <Route component={NoMatch} />
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