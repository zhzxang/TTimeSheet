import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

class MyModal extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:this.props.modalVisible?this.props.modalVisible:false
    }
  }
  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight onPress={() => this.setState({modalVisible:false})
            
          }>
            <Text>Hide Modal</Text>
          </TouchableHighlight>

        </View>
       </View>
      </Modal>
    );
  }
}


export default MyModal