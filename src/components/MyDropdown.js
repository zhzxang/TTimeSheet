import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet } from 'react-native';
import { 
  Select,
  Option,
  OptionList,
  updatePosition 
} from 'react-native-dropdown';

class MyDropdown extends Component{
  state={
    canada: ''
  }
  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }
  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }
  _canada(province) {
    this.setState({
      ...this.state,
      canada: province
    });
  }

  render(){
    const { title } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Select
          width={300}
          ref="SELECT1"
          optionListRef={this._getOptionList.bind(this)}
          defaultValue="Select a Province in Canada ..."
          onSelect={this._canada.bind(this)}>
          <Option>Alberta</Option>
          <Option>British Columbia</Option>
          <Option>Manitoba</Option>
          <Option>New Brunswick</Option>
          <Option>Newfoundland and Labrador</Option>
          <Option>Northwest Territories</Option>
          <Option>Nova Scotia</Option>
          <Option>Nunavut</Option>
          <Option>Ontario</Option>
          <Option>Prince Edward Island</Option>
          <Option>Quebec</Option>
          <Option>Saskatchewan</Option>
          <Option>Yukon</Option>
        </Select>

        <Text>Selected provicne of Canada: {this.state.canada}</Text>
        
        <OptionList ref="OPTIONLIST"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight: 'bold',
    marginTop:10
  },
  divider:{
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: config.draw[1],
    width: '70%'
  }
});

export default MyDropdown;