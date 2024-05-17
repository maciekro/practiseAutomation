describe('asercje', () => {
	it('asercje expect oraz should', () => {
		cy.visit('/')

		//werfikacja tekstu:
		cy.get('a[title="Contact us"]').should('contain', 'Contact us')
		cy.get('a[title="Contact us"]').then((zakladka) => {
			expect(zakladka).to.contain('Contact us')
		})

		//Sprawdzenie czy nie zawiera tekstu
		cy.get('a[title="Contact us"]').should('not.contain', 'RazDwa')
		cy.get('a[title="Contact us"]').then((zakladka) => {
			expect(zakladka).not.to.contain('razDwa')
		})

		//werfikacja czy znacznik posiada klase
		cy.get('#search_query_top').should('have.class', 'form-control')

		//Czy element jest widoczny
		cy.get('#search_query_top').should('be.visible')
		cy.get('#search_query_top').then((wyszukiwarka) => {
			expect(wyszukiwarka).to.be.visible
		})

		//werfikacja ilosci pobranych elementow
		cy.get('ul.sf-menu').find('li').should('have.length', 16)
		cy.get('ul.sf-menu')
			.find('li')
			.then((zakladki) => {
				expect(zakladki).to.have.length(16)
			})

		//werfikacja wartosc css danego elementu
		cy.get('#search_query_top').should('have.css', 'line-height', '18.5714px')
		cy.get('#search_query_top').then((height) => {
			expect(height).to.have.css('line-height', '18.5714px')
		})
	})
})
