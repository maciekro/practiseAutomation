describe('e2e send email', () => {
	it('send email', () => {
		const randomText = Cypress._.random(0, 1e6)
		cy.visit('/')
		cy.get('[title="Contact us"]').click()
		cy.get('#id_contact').select('2')
		cy.get('#email').type('example@example.com')
		cy.get('#id_order').type('2137')
		cy.get('#message').type(randomText.toString())
		cy.get('#submitMessage').click()
		cy.get('li').parent('[class="footer_links clearfix"]').find('li').eq(0).click()
	})
})
