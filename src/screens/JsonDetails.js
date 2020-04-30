import React from 'react';
import {Text, View} from 'react-native';
import {Container} from 'native-base';

const JsonDetails = ({route}) => {
  const {json} = route.params;
  console.warn('route.params', route.params);
  return (
    <Container style={{padding: '5%'}}>
      <Text>{JSON.stringify(json)}</Text>
    </Container>
  );
};

export default JsonDetails;
