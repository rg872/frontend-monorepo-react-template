describe('shared-ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttontest--primary&knob-title=Click me&knob-style=default'
    )
  );

  it('should render the component', () => {
    cy.get('div[role] > div').should('have.text', 'Click me');
  });
});
