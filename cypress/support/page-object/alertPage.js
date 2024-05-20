class AlertPage {
	get btnAlert1() {
		return cy.get('#alert').click()
	}
	get btnAlert2() {
		return cy.get('#alert-confirm').click()
	}

	clickOnbtnAlert1() {
		this.btnAlert1.click()
	}
	clickOnbtnAlert2() {
		this.btnAlert2.click()
	}

	verifyAlertText(tekst) {
		cy.on('window:alert', (tresc) => {
			expect(tresc).to.equal(tekst)
		})
	}
	verifyAlertConfirmText() {
		cy.on('window:confirm', (tresc) => {
			expect(tresc).to.equal('Zaakceptuj aby kontynuować!')
		})
	}
	rejectAlert() {
		cy.on('window:confirm', () => false)
	}
	accpetAlert() {
		cy.on('window:confirm', () => true)
	}
}
export default new AlertPage()
