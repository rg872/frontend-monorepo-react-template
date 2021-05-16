import { render } from '@testing-library/react';

import ButtonTest from './button-test';

describe('ButtonTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonTest />);
    expect(baseElement).toBeTruthy();
  });
});
