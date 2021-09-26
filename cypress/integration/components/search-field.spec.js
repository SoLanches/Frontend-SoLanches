describe("Testa comportamento do componente SearchInput", () => { 
    it("Retorna se o componente está visível", () => {
        cy.visit('/')
        cy.get('.styles_container__IveJR').should("be.visible")
        cy.get('.styles_container__IveJR button').should("be.visible")
        cy.get('.styles_container__IveJR input').should("be.visible")

    })

    it("Testa o funcionamento entrada", () => {
cy.get('.styles_container__IveJR input').type('alá rodrigo do lindo olhar', {delay: 750});

        cy.get('.styles_container__IveJR input').should('have.value', 'alá rodrigo do lindo olhar')
    })
    
    it("Testa apagando a entrada se realmente fica vazia", () => {
        cy.get('.styles_container__IveJR input').clear()
cy.get('.styles_container__IveJR input').should('be.empty')
    })
})
