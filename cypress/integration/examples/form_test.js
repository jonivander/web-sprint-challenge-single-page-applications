describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3002/form')
        cy.url().should('include', 'localhost')
    })

    it('can type in a name', () => {
        cy.get('input[name="name"]')
        .type('Lorem Ipsum')
        .should('have.value', 'Lorem Ipsum')
    })

    it('can select size', () => {
        cy.get('select')
        .select('Personal (6")')
        .should('have.value', 'personal')
    })

    it('can select sauce', () => {
        cy.get('[type="radio"]').first().check()
    })

    it('can select toppings', () => {
        cy.get('input[name="olives"]').check()
        cy.get('input[name="pepperoni"]').check()
        cy.get('input[name="sausage"]').check()
    })

    it('can submit the order', () => {
        cy.get('.subbtn').click()
    })
})