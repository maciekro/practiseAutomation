describe('click and return homepage', () => {
	it('should back to homepage', () => {
		cy.visit('/')
		cy.get('[title="Contact us"]').click()
		cy.get('[title="Return to Home"]').click()
	})
})
