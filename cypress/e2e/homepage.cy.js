/// <reference types="cypress"/>

describe('E2E - home page', () => {
	it('should open homepage', () => {
		cy.visit('/')
	})
	it.only('check best sellers', () => {
		cy.visit('/')
		// cy.get('[data-toggle="tab"][class="blockbestsellers"]').click()
		cy.get('li').parent('#home-page-tabs').find('li').eq(1).click() //zlapanie po parent ul
	})
})
