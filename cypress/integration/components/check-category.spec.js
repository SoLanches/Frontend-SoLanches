describe("Testa comportamento do componente Check Category", () => { 
    it("Retorna true se o componente está visível", () => {
        
        cy.visit('/')
        cy.get('.styles_container__MnfE_').should("be.visible")
        cy.get('.styles_container__MnfE_ label').should("be.visible")
        cy.get('.styles_container__MnfE_ label input').should('have.class', 'styles_isChecked__m-a4l')
    })
})
