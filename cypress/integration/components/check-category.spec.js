describe("Testa comportamento do componente Check Category", () => { 
    it("Retorna se o componente está visível", () => {
        cy.visit('/')
        cy.get('.styles_container__MnfE_').should("be.visible")
        cy.get('.styles_container__MnfE_ label').should("be.visible")
        cy.get('.styles_categoryName__14xRg').should('be.visible')

    })

    it("Retorna se o componente tem uma classe chamada isChecked", () => {
        cy.get('.styles_container__MnfE_ label input').should('have.class', 'styles_isChecked__m-a4l')
    })

    it("Retorna se, após clicar no botão, a classe isChecked some", () => {
        cy.get('.styles_container__MnfE_ label').click()
cy.get('.styles_container__MnfE_ label').should('not.have.class', 'styles_isChecked__m-a4l')
    })
})
