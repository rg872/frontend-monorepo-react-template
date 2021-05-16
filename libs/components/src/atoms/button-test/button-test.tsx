import React from 'react';

//import './button-test.module.css';

import { View, Button } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonTestProps {}

export function ButtonTest(props: ButtonTestProps) {
  return (
    <View>
      <Button title="Press me please" onPress={() => {}} />
    </View>
  );
}

export default ButtonTest;
