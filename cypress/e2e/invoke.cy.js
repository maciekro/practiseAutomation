describe('invoke', () => {
	it('invoke', () => {
		cy.visit('/')
		//pobieranie watosci z elementu
		cy.get('[title="Contact us"]')
			.invoke('text')
			.then((tekst) => {
				cy.log(tekst)
			})

		//uzyskanie dostepu do wartosci atrybutu
		cy.get('[title="Contact us"]')
			.invoke('attr', 'href')
			.then((link) => {
				cy.log(link)
			})
		cy.get('[title="Contact us"]')
			.invoke('attr', 'title')
			.then((tekst) => {
				cy.log(tekst)
			})

		//pobranie wartosci value
		cy.get('#search_query_top')
			.type('przykladowa wartosc')
			.invoke('prop', 'value')
			.then((wartosc) => {
				cy.log(wartosc)
			})
	})
})
