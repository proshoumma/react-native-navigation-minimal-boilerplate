import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class NavigationTypes extends React.Component {
  pushScreen = () => {
    this.props.navigator.push({
      screen: 'Home',
      title: 'New Screen',
    });
  };

  render() {
    return (
      <View>
        <Button title={'Push Screen'} onPress={this.pushScreen}/>
      </View>
      
    );
  }
}

export default NavigationTypes;
