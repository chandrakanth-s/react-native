import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//make a component
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (<TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>
    {children}
    </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
