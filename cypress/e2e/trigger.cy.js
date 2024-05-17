describe('scroll/najechanie', () => {
	it('najechanie na element', () => {
		cy.visit('/')
		cy.get('[title="Dresses"]').eq(1).trigger('focus')
		cy.get('li.sfHover [title="Summer Dresses"]').click()
		cy.get('[title="Specials"').eq(0).scrollIntoView()
	})
	it('scroll do box special', () => {
		cy.get('[title="Specials"').eq(0).scrollIntoView()
	})
})
