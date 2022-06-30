describe('Visiting Website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('displays the title and tags', () => {
    cy.contains('Volkswagenzentrum Berlin GmbH')
    cy.get('.tag').should('have.length', 3)
    cy.contains('cars')
    cy.contains('ISO 9001')
  })
  it('displays delete icon except on first tag', () => {
    cy.get('.tag').first().should('have.text', 'volkswagen').children().should('have.length', 1)
    cy.get('.tag').eq(1).should('have.text', 'cars').children().should('have.length', 2)
  })
  it('removes tag', () => {
    cy.get('svg').click()
    cy.contains('cars').should('not.exist')
  })
  it('adds tag with input', () => {
    cy.get('button span').first().should('have.text', '+ New Tag').click()
    cy.get('input').should('exist').type('test{enter}')
    cy.contains('test')
  })
})