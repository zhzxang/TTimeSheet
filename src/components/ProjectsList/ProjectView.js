import React, { Component } from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProjectView extends Component{
  callBack(){
    this.props.onPress.call(this);
  }
  render(){
    const { project,show_detail } = this.props;
    return(
      <View>
        <TouchableOpacity style={styles.pro_row} onPress={this.callBack.bind(this)}>
          {
            show_detail?<Icon name="chevron-down" size={18} color={"#ccc"}/>
            :<Icon name="chevron-right" size={18} color={"#ccc"}/>
          }
          <Text style={[styles.title,{flex:6}]}>{project.name}</Text>
          <Text style={[styles.date,{flex:3}]}>{project.date}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pro_row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  title:{
    marginLeft:20,
    fontSize: 22,
  },
  date:{
    fontSize: 18,
  },
});

export default ProjectView;