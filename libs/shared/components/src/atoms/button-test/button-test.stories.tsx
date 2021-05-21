import { text } from '@storybook/addon-knobs';
import React from 'react';
import { ButtonTest, ButtonTestProps } from './button-test';

export default {
  component: ButtonTest,
  title: 'ButtonTest',
};

export const primary = () => {
  const props: ButtonTestProps = {
    title: text('title', 'Click me'),
  };

  return <ButtonTest title={props.title} />;
};
