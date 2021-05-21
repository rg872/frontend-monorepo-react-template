import React from 'react';

import { text } from '@storybook/addon-knobs';
import { ButtonTest } from './button-test';

export default { title: 'ButtonTest', component: ButtonTest };

export const primary = () => <ButtonTest title={text('Text', 'Click me')} />;
