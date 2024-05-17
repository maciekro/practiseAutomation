/// <reference types="cypress"/>

describe('wpisywanie i czyszczenie', () => {
	it('wpisywanie wartosci', () => {
		cy.visit('/')
		cy.get('#search_query_top').type('dress', { delay: 200 })
	})
	it('czyszczenie wartosci', () => {
		cy.get('#search_query_top').clear()
	})
})
