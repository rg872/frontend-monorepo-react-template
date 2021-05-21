import React from 'react';
//import './button-test.module.css';
import { Button, View } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonTestProps {
  title: string;
}

export function ButtonTest(props: ButtonTestProps) {
  return (
    <View>
      <Button title={props.title} onPress={() => {}} />
    </View>
  );
}

export default ButtonTest;
