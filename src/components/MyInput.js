import React, { Component } from 'react';
import config from '../config';

import { TextInput } from 'react-native';

class MyInput extends Component{
  state={
    text: ''
  }
  setText(text){
    this.setState({text});
    this.props.text.call(this,text);
  }
  render(){
    const { autoFocus=false } =this.props;
    return(
      <TextInput
        autoFocus ={autoFocus}
        style={{width: this.props.width?this.props.width:200}}
        onChangeText={this.setText.bind(this)}
        value={this.state.text}
        underlineColorAndroid={config.draw[1]}
      />
    )
  }
}

export default MyInput;