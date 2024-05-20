import AlertPage from '../support/page-object/alertPage'
describe('E2E - Alerty', () => {
	it.only('Alert', () => {
		cy.visit('https://testowanie-oprogramowania.pl/lekcje/alerty/')
		AlertPage.clickOnbtnAlert1()
		AlertPage.verifyAlertText('Przykładowa treść alertu')
	})

	it('Alert confirm', () => {
		AlertPage.clickOnbtnAlert2()
		AlertPage.verifyAlertConfirmText()
		AlertPage.accpetAlert()
	})
})
