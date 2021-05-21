describe('components: ButtonTest component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttontest--primary&knob-title=Click me'));

    it('should render the component', () => {
      cy.get('div[role] > div').should('have.text', 'Click me');
    });
});
