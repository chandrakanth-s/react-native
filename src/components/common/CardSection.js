import React from 'react';
import { View } from 'react-native';

//make a component
const CardSection = (props) => (
  <View style={styles.containerStyle}>
  {props.children}
  </View>
);

const styles = {
  containerStyle: {
    padding: 5,
    bottomBorderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
export { CardSection };
