import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonTestProps {
  title: string;
}

export function ButtonTest(props: ButtonTestProps) {
  return (
    <View style={styles.container}>
      <Button title={props.title} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '20px',
    backgroundColor: 'pink',
  },
});

export default ButtonTest;
